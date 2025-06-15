import { useMemo } from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip as RechartsTooltip,
  type TooltipProps,
  Area,
  AreaChart,
} from "recharts";
import { ArrowDown, ArrowUp, CircleHelp } from "lucide-react";
import { Tooltip } from "../Tooltip";
import Block from "../Primitives/Block/Block";
import Text from "../Text/Text";
import { ChangeType, StatCardVariant, type StatCardProps } from "./types";
// import { FOUNDATION_THEME } from "../../tokens"; // Removed as all direct usages should be replaced by tokens
import { useComponentToken } from "../../context/useComponentToken";
import { StatCardTokensType } from "./statcard.tokens";

const StatCard = ({
  title,
  value,
  change,
  subtitle = "Last 7 days",
  variant,
  chartData,
  progressValue,
  titleIcon,
  actionIcon,
  helpIconText,
}: StatCardProps) => {
  const tokens = useComponentToken("STAT_CARD") as StatCardTokensType;

  const normalizedVariant =
    variant === StatCardVariant.PROGRESS_BAR ? "progress" : variant;

  const effectiveVariant =
    (variant === StatCardVariant.LINE || variant === StatCardVariant.BAR) &&
    (!chartData || chartData.length === 0)
      ? StatCardVariant.NUMBER
      : variant;

  const formattedChange = change ? (
    <Block display="flex" alignItems="center">
      {change.type === ChangeType.INCREASE ? (
        <ArrowUp size={14} style={{ marginRight: tokens.changeIndicator.arrowIcon.spacing.marginRight }} />
      ) : (
        <ArrowDown
          size={14}
          style={{ marginRight: tokens.changeIndicator.arrowIcon.spacing.marginRight }}
        />
      )}
      <Text
        color={
          change.type === ChangeType.INCREASE
            ? tokens.changeIndicator.text.color[ChangeType.INCREASE]
            : tokens.changeIndicator.text.color[ChangeType.DECREASE]
        }
        variant="body.sm" // Applies font size
        fontWeight={tokens.changeIndicator.text.font.weight}
      >
        {Math.abs(change.value).toFixed(2)}%
      </Text>
    </Block>
  ) : null;

  const isTrendingDown = useMemo(() => {
    if (!chartData || chartData.length < 2) return false;
    return chartData[0].value > chartData[chartData.length - 1].value;
  }, [chartData]);

  const lineColor = isTrendingDown
    ? tokens.chartLine.stroke[ChangeType.DECREASE]
    : tokens.chartLine.stroke[ChangeType.INCREASE];
  const areaColor = isTrendingDown // For gradient start
    ? tokens.chartLine.stroke[ChangeType.DECREASE] 
    : tokens.chartLine.stroke[ChangeType.INCREASE];

  const CustomTooltip = ({ active, payload }: TooltipProps<number, string>) => {
    if (!active || !payload || payload.length === 0) return null;

    const currentValue = payload[0].value as number;
    const currentIndex = payload[0].payload?.index as number;
    const previousIndex = Math.max(0, currentIndex - 1);
    const previousValue = chartData?.[previousIndex]?.value || currentValue;

    const diff = currentValue - previousValue;
    const percentage = previousValue ? (diff / previousValue) * 100 : 0;
    const isUp = diff >= 0;

    return (
      <Block
        backgroundColor={tokens.chartTooltip.background}
        padding={tokens.chartTooltip.spacing.padding}
        borderRadius={tokens.chartTooltip.border.radius}
      >
        <Text color={tokens.chartTooltip.text.color} variant="body.sm">
          {`${Math.abs(percentage).toFixed(0)}% ${isUp ? "Up" : "Down"}`}
        </Text>
      </Block>
    );
  };

  const indexedChartData = useMemo(() => {
    return chartData?.map((point, index) => ({
      ...point,
      index,
    }));
  }, [chartData]);

  return (
    <Block
      height={tokens.container.fixedHeight}
      border={`${tokens.container.border.width} solid ${tokens.container.border.color}`}
      borderRadius={tokens.container.border.radius}
      overflow="hidden"
      backgroundColor={tokens.container.background.color}
      boxShadow={tokens.container.effect.boxShadow}
      padding={tokens.container.spacing.padding}
      display="flex"
      flexDirection="column"
      gap={tokens.container.spacing.gap}
      data-statcard-variant={normalizedVariant}
    >
      {effectiveVariant !== StatCardVariant.NUMBER && (
        <Block
          display="flex"
          flexDirection="column"
          gap={tokens.header.spacing.gap}
        >
          <Block
            display="flex"
            alignItems="flex-start"
            gap={tokens.titleArea.spacing.gap}
          >
            {titleIcon && (
              <Block
                width={tokens.titleIcon.dimension.width}
                height={tokens.titleIcon.dimension.height}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                {titleIcon}
              </Block>
            )}
            <Block
              width="100%"
              display="flex"
              alignItems="center"
              flexGrow={1}
              gap={tokens.titleArea.spacing.gap} 
            >
              <Text
                variant="body.md"
                fontWeight={tokens.titleText.font.weight}
                color={tokens.titleText.color}
              >
                {title}
              </Text>
              {helpIconText && (
                <Block flexShrink={0}>
                  <Tooltip content={helpIconText}>
                    <CircleHelp
                      width={tokens.helpIcon.dimension.width as number} // Assuming number
                      height={tokens.helpIcon.dimension.height as number} // Assuming number
                      color={tokens.helpIcon.color}
                    />
                  </Tooltip>
                </Block>
              )}
            </Block>
            {actionIcon && (
              <Block
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexShrink={0}
              >
                {actionIcon}
              </Block>
            )}
          </Block>

          <Block
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            paddingLeft={titleIcon ? tokens.header.spacing.titleIconPaddingLeft : "0"}
          >
            <Block
              width="100%"
              display="flex"
              alignItems="center"
              gap={tokens.valueArea.spacing.gap}
            >
              <Text
                variant="heading.lg" // Size comes from variant
                fontWeight={tokens.valueText.font.default.weight}
                color={tokens.valueText.color}
              >
                {value}
              </Text>
              {formattedChange && (
                <Block marginLeft={tokens.changeIndicator.spacing.marginLeft}>
                  {/* formattedChange now has its styles applied internally */}
                  {formattedChange}
                </Block>
              )}
            </Block>
            <Text
              variant="body.sm" // Size comes from variant
              color={tokens.subtitleText.color}
              fontWeight={tokens.subtitleText.font.weight}
            >
              {subtitle}
            </Text>
          </Block>
        </Block>
      )}

      {effectiveVariant === StatCardVariant.NUMBER && (
        <Block
          display="flex"
          flexDirection="column"
          height="100%"
          alignItems="center"
          justifyContent="center"
        >
          <Block
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={tokens.container.spacing.gap} // Assuming same gap for NUMBER variant main content
          >
            {titleIcon && (
              <Block
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexShrink={0}
              >
                {titleIcon}
              </Block>
            )}
            <Block
              width="100%"
              display="flex"
              alignItems="center"
              justifyContent="center" // Center title area for NUMBER variant
              flexGrow={1} // Allow grow
              gap={tokens.titleArea.spacing.gap}
            >
              <Text
                variant="body.md"
                fontWeight={tokens.titleText.font.weight}
                color={tokens.titleText.color}
              >
                {title}
              </Text>
              {helpIconText && (
                <Block>
                  <Tooltip content={helpIconText}>
                    <CircleHelp
                      width={tokens.helpIcon.dimension.width as number}
                      height={tokens.helpIcon.dimension.height as number}
                      color={tokens.helpIcon.color}
                    />
                  </Tooltip>
                </Block>
              )}
            </Block>
          </Block>

          <Block display="flex" flexDirection="column" alignItems="center">
            <Block
              width="100%"
              display="flex"
              justifyContent="center" // Center value area for NUMBER variant
              alignItems="center"
              gap={tokens.valueArea.spacing.gap}
            >
              <Text
                variant="heading.xl" // Size from variant
                fontWeight={tokens.valueText.font.numberVariant.weight}
                color={tokens.valueText.color}
              >
                {value}
              </Text>
              {formattedChange && (
                <Block marginLeft={tokens.changeIndicator.spacing.marginLeft}>
                  {/* formattedChange now has its styles applied internally */}
                  {formattedChange}
                </Block>
              )}
            </Block>
            <Text
              variant="body.sm" // Size from variant
              color={tokens.subtitleText.color}
              fontWeight={tokens.subtitleText.font.weight}
            >
              {subtitle}
            </Text>
          </Block>
        </Block>
      )}

      {effectiveVariant !== StatCardVariant.NUMBER && (
        <Block height={tokens.chartArea.height}>
          {effectiveVariant === StatCardVariant.LINE && indexedChartData && (
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={indexedChartData}
                margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
              >
                <XAxis dataKey="date" hide />
                <YAxis hide />
                <RechartsTooltip
                  content={<CustomTooltip />}
                  cursor={{
                    strokeDasharray: tokens.chartTooltip.cursor.strokeDasharray,
                    stroke: tokens.chartTooltip.cursor.stroke,
                  }}
                  position={{ y: 0 }}
                  isAnimationActive={false}
                  animationDuration={350}
                />
                <defs>
                  <linearGradient
                    id="colorGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor={areaColor} stopOpacity={tokens.chartLine.areaFillOpacity} />
                    <stop
                      offset="100%"
                      stopColor={tokens.chartLine.areaBaseFill}
                      stopOpacity={0.5} /* This opacity could also be tokenized if needed */
                    />
                  </linearGradient>
                </defs>

                <Area
                  animationDuration={350}
                  type="monotone"
                  dataKey="value"
                  stroke={lineColor}
                  strokeWidth={tokens.chartLine.strokeWidth as number}
                  fill={`url(#colorGradient)`}
                  activeDot={{
                    r: 4, // This could be a token tokens.chartLine.activeDot.radius
                    fill: tokens.chartLine.activeDot.fill,
                    stroke: lineColor, // Uses the dynamic lineColor
                  }}
                />
              </AreaChart>
            </ResponsiveContainer>
          )}

          {effectiveVariant === StatCardVariant.BAR && indexedChartData && (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={indexedChartData}
                margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
              >
                <XAxis dataKey="date" hide />
                <YAxis hide />
                <RechartsTooltip
                  content={<CustomTooltip />}
                  cursor={{ fill: "transparent" }}
                  position={{ y: 0 }}
                  isAnimationActive={false}
                />
                <Bar
                  dataKey="value"
                  fill={tokens.chartBar.fill.default}
                  radius={tokens.chartBar.radius as [number, number, number, number]}
                  isAnimationActive={false}
                  activeBar={{
                    fill: tokens.chartBar.fill.active,
                  }}
                />
              </BarChart>
            </ResponsiveContainer>
          )}

          {effectiveVariant === StatCardVariant.PROGRESS_BAR &&
            progressValue && (
              <Block
                width="100%"
                height={tokens.progressBar.dimension.height}
                display="flex"
                alignItems="center"
                gap={tokens.progressBar.spacing.gap}
              >
                <Block
                  width="100%"
                  height="100%"
                  display="flex"
                  flexGrow={1}
                  borderRadius={tokens.progressBar.track.radius}
                  overflow="hidden"
                >
                  <Block
                    backgroundColor={tokens.progressBar.fill.background}
                    height="100%"
                    width={`${progressValue}%`}
                  />
                  <Block
                    backgroundColor={tokens.progressBar.track.background}
                    height="100%"
                    backgroundImage={`repeating-linear-gradient(
                      to right,
                      ${tokens.progressBar.track.patternColor},
                      ${tokens.progressBar.track.patternColor} 5px,
                      transparent 1px,
                      transparent
                    )`}
                    backgroundSize={tokens.progressBar.track.patternSegmentWidth}
                    style={{ width: `${100 - progressValue}%` }}
                  />
                </Block>
                <Text
                  variant="body.md"
                  fontWeight={tokens.progressBar.text.font.weight}
                  color={tokens.progressBar.text.color}
                >
                  {progressValue}%
                </Text>
              </Block>
            )}
        </Block>
      )}
    </Block>
  );
};

StatCard.displayName = "StatCard";

export default StatCard;
