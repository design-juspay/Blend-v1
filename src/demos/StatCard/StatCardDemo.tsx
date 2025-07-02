import React, { useState } from "react";
import { StatCard } from "../../../lib/components/StatCard";
import {
  ChangeType,
  StatCardVariant,
} from "../../../lib/components/StatCard/types";
import {
  Activity,
  ArrowUpRight,
  PieChart,
  User,
  BarChart2,
} from "lucide-react";
import "./StatCardDemo.css";

const StatCardDemo: React.FC = () => {
  const [variant, setVariant] = useState<StatCardVariant>(
    StatCardVariant.NUMBER
  );
  const [showChange, setShowChange] = useState(true);
  const [changeType, setChangeType] = useState<ChangeType>(ChangeType.INCREASE);
  const [changeValue, setChangeValue] = useState(-12.5);
  const [showIcon, setShowIcon] = useState(true);
  const [showActionIcon, setShowActionIcon] = useState(true);
  const [progressValue, setProgressValue] = useState(73);
  const [showHelpIcon, setShowHelpIcon] = useState(false);
  const [trendDirection, setTrendDirection] = useState<"up" | "down" | "mountain">("up");

  // const lineChartData = Array.from({ length: 30 }, (_, i) => ({
  //   value: 20 + (i * 2) + Math.floor(Math.random() * 5),
  //   label: `2025-05-${i + 1}`,
  //   date: `05/${i + 1}`,
  // }));

  const lineChartData = Array.from({ length: 30 }, (_, i) => ({
    value: 20 + Math.floor(Math.random() * 30),
    label: `2025-05-${i + 1}`,
    date: `05/${i + 1}`,
  }));

  const lineChartDataDecreasing = Array.from({ length: 30 }, (_, i) => ({
    value: 80 - (i * 2) + Math.floor(Math.random() * 5), 
    label: `2025-05-${i + 1}`,
    date: `05/${i + 1}`,
  }));

  const lineChartDataFlat = Array.from({ length: 30 }, (_, i) => ({
    value: 50, // All values the same (delta 0)
    label: `2025-05-${i + 1}`,
    date: `05/${i + 1}`,
  }));

  // Mountain/curve data: 0 -> peak -> 0
  const lineChartDataMountain = Array.from({ length: 30 }, (_, i) => {
    let value = 0;
    if (i >= 6 && i <= 24) {
      // Create a bell curve/mountain shape between index 6-24
      const progress = (i - 6) / (24 - 6); // 0 to 1
      const bellCurve = Math.sin(progress * Math.PI); // Creates smooth curve
      value = Math.round(bellCurve * 80); // Peak at 80
    }
    return {
      value,
      label: `2025-05-${i + 1}`,
      date: `05/${i + 1}`,
    };
  });

  const barChartData = Array.from({ length: 20 }, (_, i) => ({
    value: 20 + Math.floor(Math.random() * 10),
    label: `2025-05-${i + 1}`,
    date: `05/${i + 1}`,
  }));

  const renderControls = () => (
    <div className="control-panel">
      <h3 className="control-title">Customize StatCard</h3>
      <div className="control-grid">
        <div className="control-group">
          <label>Variant</label>
          <select
            value={variant}
            onChange={(e) => setVariant(e.target.value as StatCardVariant)}
            className="control-select"
          >
            {Object.values(StatCardVariant).map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </div>

        <div className="control-group">
          <label>Change Type</label>
          <select
            value={changeType}
            onChange={(e) => setChangeType(e.target.value as ChangeType)}
            disabled={!showChange}
            className="control-select"
          >
            {Object.values(ChangeType).map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div className="control-group">
          <label>Change Value (%)</label>
          <input
            type="number"
            value={changeValue}
            onChange={(e) => setChangeValue(Number(e.target.value))}
            disabled={!showChange}
            min={-100}
            max={100}
            step={0.1}
            className="control-input"
          />
        </div>

        {variant === StatCardVariant.PROGRESS_BAR && (
          <div className="control-group">
            <label>Progress Value (%)</label>
            <input
              type="number"
              value={progressValue}
              onChange={(e) => setProgressValue(Number(e.target.value))}
              min={0}
              max={100}
              step={1}
              className="control-input"
            />
          </div>
        )}

        {(variant === StatCardVariant.LINE) && (
          <div className="control-group">
            <label>Trend Direction</label>
            <select
              value={trendDirection}
              onChange={(e) => setTrendDirection(e.target.value as "up" | "down" | "mountain")}
              className="control-select"
            >
              <option value="up">Trending Up (Green)</option>
              <option value="down">Trending Down (Red)</option>
              <option value="mountain">Mountain Curve (0→Peak→0)</option>
            </select>
          </div>
        )}

        <div className="control-group">
          <label>Options</label>
          <div className="checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={showChange}
                onChange={(e) => setShowChange(e.target.checked)}
                className="checkbox-input"
              />
              <span>Show Change</span>
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={showIcon}
                onChange={(e) => setShowIcon(e.target.checked)}
                className="checkbox-input"
              />
              <span>Show Title Icon</span>
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={showActionIcon}
                onChange={(e) => setShowActionIcon(e.target.checked)}
                className="checkbox-input"
              />
              <span>Show Action Icon</span>
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={showHelpIcon}
                onChange={(e) => setShowHelpIcon(e.target.checked)}
                className="checkbox-input"
              />
              <span>Show Help Icon</span>
            </label>

          </div>
        </div>
      </div>
    </div>
  );

  const renderStatCardPreview = () => {
    const titleIcon = showIcon ? (
      <Activity size={20} color="purple" />
    ) : undefined;
    const actionIcon = showActionIcon ? (
      <ArrowUpRight size={20} color="purple" />
    ) : undefined;
    const helpIconText = showHelpIcon
      ? "This is a helpful description of the statistic"
      : undefined;

    return (
      <div className="preview-section">
        <h3 className="preview-title">Preview</h3>
        <div className="preview-card">
          <StatCard
            variant={variant}
            title="Active Users"
            value="2,573"
            subtitle="Last 7 days"
            change={
              showChange
                ? {
                    type: changeType,
                    value: changeValue,
                  }
                : undefined
            }
            chartData={
              variant === StatCardVariant.LINE ||
              variant === StatCardVariant.BAR
                ? variant === StatCardVariant.LINE
                  ? trendDirection === "up" ? lineChartData 
                    : trendDirection === "down" ? lineChartDataDecreasing
                    : lineChartDataMountain
                  : barChartData
                : undefined
            }
            progressValue={
              variant === StatCardVariant.PROGRESS_BAR
                ? progressValue
                : undefined
            }
            titleIcon={titleIcon}
            actionIcon={actionIcon}
            helpIconText={helpIconText}
          />
        </div>
      </div>
    );
  };

  const renderPresetExamples = () => (
    <div className="presets-section">
      <h3 className="presets-title">Preset Examples</h3>
      <div className="presets-grid">
        <div className="preset-item">
          <p className="preset-label">Number Variant (+12.50%)</p>
          <StatCard
            variant={StatCardVariant.NUMBER}
            title="Total Revenue"
            value="$45,231"
            change={{ type: ChangeType.INCREASE, value: 12.5 }}
            titleIcon={<PieChart size={20} />}
            actionIcon={<ArrowUpRight size={20} />}
            helpIconText="Total revenue generated in the last 30 days"
          />
        </div>

        <div className="preset-item">
          <p className="preset-label">Line Chart - Increasing Trend (+8.20%)</p>
          <StatCard
            variant={StatCardVariant.LINE}
            title="Daily Active Users"
            value="2,573"
            change={{ type: ChangeType.INCREASE, value: 8.2 }}
            chartData={lineChartData}
            titleIcon={<User size={20} />}
            actionIcon={<ArrowUpRight size={20} />}
          />
        </div>

        <div className="preset-item">
          <p className="preset-label">Line Chart - Decreasing Trend (-15.30%)</p>
          <StatCard
            variant={StatCardVariant.LINE}
            title="Server Errors"
            value="127"
            change={{ type: ChangeType.DECREASE, value: -15.3 }}
            chartData={lineChartDataDecreasing}
            titleIcon={<Activity size={20} />}
            actionIcon={<ArrowUpRight size={20} />}
          />
        </div>

        <div className="preset-item">
          <p className="preset-label">Bar Chart Variant (-3.70%)</p>
          <StatCard
            variant={StatCardVariant.BAR}
            title="Transactions"
            value="12,543"
            change={{ type: ChangeType.DECREASE, value: -3.7 }}
            chartData={barChartData}
            titleIcon={<BarChart2 size={20} />}
            actionIcon={<ArrowUpRight size={20} />}
          />
        </div>

        <div className="preset-item">
          <p className="preset-label">Progress Bar Variant (+5.20%)</p>
          <StatCard
            variant={StatCardVariant.PROGRESS_BAR}
            title="Payment Methods"
            value="73%"
            change={{ type: ChangeType.INCREASE, value: 5.2 }}
            progressValue={73}
            titleIcon={<Activity size={20} />}
          />
        </div>

        <div className="preset-item">
          <p className="preset-label">Mountain Curve (0→Peak→0)</p>
          <StatCard
            variant={StatCardVariant.LINE}
            title="Campaign Activity"
            value="80"
            change={{ type: ChangeType.INCREASE, value: 0 }}
            chartData={lineChartDataMountain}
            subtitle="Campaign lifecycle"
            titleIcon={<BarChart2 size={20} />}
            actionIcon={<ArrowUpRight size={20} />}
            helpIconText="Shows mountain curve pattern: starts at 0, peaks, returns to 0"
          />
        </div>

        <div className="preset-item">
          <p className="preset-label">No Change Data (User Controlled)</p>
          <StatCard
            variant={StatCardVariant.LINE}
            title="Stable Metrics"
            value="1,250"
            chartData={lineChartDataFlat}
            subtitle="No change data provided"
            titleIcon={<Activity size={20} />}
            actionIcon={<ArrowUpRight size={20} />}
            helpIconText="Example showing no change prop - users control when to show/hide delta"
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="interactive-demo">
      <h2 className="demo-title">Interactive Stat Card Demo</h2>
      {renderControls()}
      {renderStatCardPreview()}
      {renderPresetExamples()}
    </div>
  );
};

export default StatCardDemo;
