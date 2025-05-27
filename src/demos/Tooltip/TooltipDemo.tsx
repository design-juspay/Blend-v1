import React, { useState } from "react";
import styled from "styled-components";
import { Info, HelpCircle, Check, Settings, MessageCircle } from "lucide-react";
import {
  Tooltip,
  TooltipSide,
  TooltipAlign,
  TooltipSize,
  TooltipSlotDirection,
} from "../../../lib/components/Tooltip";
import Block from "../../../lib/components/Primitives/Block/Block";
import Text from "../../../lib/components/Text/Text";
import { Button, ButtonType, ButtonSize } from "../../../lib/components/Button";
import { foundationToken } from "../../../lib/foundationToken";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px;
`;

const ConfigSection = styled.div`
  margin-bottom: 32px;
  padding: 24px;
  border-radius: 8px;
  background-color: ${foundationToken.colors.gray[50]};
  border: 1px solid ${foundationToken.colors.gray[200]};
`;

const ConfigGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 16px;
`;

const CheckboxGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 16px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: ${foundationToken.colors.gray[700]};
`;

const Select = styled.select`
  width: 100%;
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid ${foundationToken.colors.gray[300]};
  font-size: 14px;
  background-color: white;

  &:focus {
    border-color: ${foundationToken.colors.primary[500]};
    outline: none;
  }
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${foundationToken.colors.gray[700]};
`;

const Checkbox = styled.input`
  margin-right: 8px;
  cursor: pointer;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid ${foundationToken.colors.gray[300]};
  font-size: 14px;

  &:focus {
    border-color: ${foundationToken.colors.primary[500]};
    outline: none;
  }
`;

const PreviewSection = styled.div`
  margin-top: 40px;
  padding: 24px;
  border-radius: 8px;
  background-color: white;
  border: 1px solid ${foundationToken.colors.gray[200]};
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  position: relative;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: ${foundationToken.colors.gray[100]};
  cursor: pointer;
`;

const TooltipDemo: React.FC = () => {
  // Configuration state
  const [config, setConfig] = useState({
    content: "This is a configurable tooltip",
    side: TooltipSide.TOP,
    align: TooltipAlign.CENTER,
    size: TooltipSize.SMALL,
    showArrow: true,
    forceVisible: false,
    hasSlot: false,
    slotDirection: TooltipSlotDirection.RIGHT,
    delayDuration: 300,
    offset: 5,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const isCheckbox = type === "checkbox";

    setConfig({
      ...config,
      [name]: isCheckbox
        ? (e.target as HTMLInputElement).checked
        : name === "delayDuration" || name === "offset"
        ? Number(value)
        : value,
    });
  };

  // Render slot content if enabled
  const renderSlot = () => {
    if (config.hasSlot) {
      return <Check size={14} color={foundationToken.colors.gray[0]} />;
    }
    return null;
  };

  return (
    <Container>
      <Block marginBottom={24}>
        <Text
          as="h1"
          variant="heading.xl"
          color={foundationToken.colors.gray[700]}
        >
          Tooltip Configuration Playground
        </Text>
        <Text variant="body.lg" color={foundationToken.colors.gray[600]}>
          Customize the tooltip to see different configurations in action
        </Text>
      </Block>

      <ConfigSection>
        <ConfigGrid>
          {/* Left Column */}
          <Block>
            <FormGroup>
              <Label htmlFor="content">Tooltip Content</Label>
              <Input
                type="text"
                id="content"
                name="content"
                value={config.content}
                onChange={handleChange}
                placeholder="Enter tooltip content"
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="side">Side</Label>
              <Select
                id="side"
                name="side"
                value={config.side}
                onChange={handleChange}
              >
                {Object.values(TooltipSide).map((side) => (
                  <option key={side} value={side}>
                    {side.charAt(0).toUpperCase() + side.slice(1)}
                  </option>
                ))}
              </Select>
            </FormGroup>

            <FormGroup>
              <Label htmlFor="align">Alignment</Label>
              <Select
                id="align"
                name="align"
                value={config.align}
                onChange={handleChange}
              >
                {Object.values(TooltipAlign).map((align) => (
                  <option key={align} value={align}>
                    {align.charAt(0).toUpperCase() + align.slice(1)}
                  </option>
                ))}
              </Select>
            </FormGroup>

            <FormGroup>
              <Label htmlFor="size">Size</Label>
              <Select
                id="size"
                name="size"
                value={config.size}
                onChange={handleChange}
              >
                {Object.values(TooltipSize).map((size) => (
                  <option key={size} value={size}>
                    {size.charAt(0).toUpperCase() + size.slice(1)}
                  </option>
                ))}
              </Select>
            </FormGroup>
          </Block>

          {/* Right Column */}
          <Block>
            {config.hasSlot && (
              <FormGroup>
                <Label htmlFor="slotDirection">Slot Direction</Label>
                <Select
                  id="slotDirection"
                  name="slotDirection"
                  value={config.slotDirection}
                  onChange={handleChange}
                >
                  {Object.values(TooltipSlotDirection).map((direction) => (
                    <option key={direction} value={direction}>
                      {direction.charAt(0).toUpperCase() + direction.slice(1)}
                    </option>
                  ))}
                </Select>
              </FormGroup>
            )}

            <FormGroup>
              <Label htmlFor="delayDuration">Delay Duration (ms)</Label>
              <Input
                type="number"
                id="delayDuration"
                name="delayDuration"
                value={config.delayDuration}
                onChange={handleChange}
                min={0}
                max={1000}
                step={50}
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="offset">Offset (px)</Label>
              <Input
                type="number"
                id="offset"
                name="offset"
                value={config.offset}
                onChange={handleChange}
                min={0}
                max={20}
              />
            </FormGroup>

            <CheckboxGroup>
              <Block>
                <CheckboxLabel>
                  <Checkbox
                    type="checkbox"
                    name="showArrow"
                    checked={config.showArrow}
                    onChange={handleChange}
                  />
                  <span>Show Arrow</span>
                </CheckboxLabel>
              </Block>

              <Block>
                <CheckboxLabel>
                  <Checkbox
                    type="checkbox"
                    name="forceVisible"
                    checked={config.forceVisible}
                    onChange={handleChange}
                  />
                  <span>Force Visible</span>
                </CheckboxLabel>
              </Block>

              <Block>
                <CheckboxLabel>
                  <Checkbox
                    type="checkbox"
                    name="hasSlot"
                    checked={config.hasSlot}
                    onChange={handleChange}
                  />
                  <span>Include Slot</span>
                </CheckboxLabel>
              </Block>
            </CheckboxGroup>
          </Block>
        </ConfigGrid>
      </ConfigSection>

      <PreviewSection>
        <Tooltip
          content={config.content}
          side={config.side}
          align={config.align}
          size={config.size}
          showArrow={config.showArrow}
          slot={renderSlot()}
          slotDirection={config.slotDirection}
          delayDuration={config.delayDuration}
          offset={config.offset}
          open={config.forceVisible || undefined}
        >
          <Button
            text="Hover Me"
            buttonType={ButtonType.PRIMARY}
            size={ButtonSize.MEDIUM}
            leadingIcon={Settings}
          />
        </Tooltip>
      </PreviewSection>

      <Block marginTop={40}>
        <Text variant="heading.md" color={foundationToken.colors.gray[700]}>
          Tooltip Gallery
        </Text>
        <Text variant="body.md" color={foundationToken.colors.gray[600]}>
          Pre-configured tooltip examples
        </Text>
        <Block marginBottom={24} />

        <Block display="flex" flexWrap="wrap" gap={24}>
          <Tooltip content="Basic tooltip">
            <IconWrapper>
              <Info size={20} color={foundationToken.colors.gray[700]} />
            </IconWrapper>
          </Tooltip>

          <Tooltip
            content="Large tooltip with more information"
            size={TooltipSize.LARGE}
          >
            <IconWrapper>
              <HelpCircle size={20} color={foundationToken.colors.gray[700]} />
            </IconWrapper>
          </Tooltip>

          <Tooltip content="Right side tooltip" side={TooltipSide.RIGHT}>
            <IconWrapper>
              <MessageCircle
                size={20}
                color={foundationToken.colors.gray[700]}
              />
            </IconWrapper>
          </Tooltip>

          <Tooltip content="No arrow tooltip" showArrow={false}>
            <IconWrapper>
              <Check size={20} color={foundationToken.colors.gray[700]} />
            </IconWrapper>
          </Tooltip>

          <Tooltip
            content="With slot"
            slot={<Check size={14} color={foundationToken.colors.gray[0]} />}
          >
            <IconWrapper>
              <Settings size={20} color={foundationToken.colors.gray[700]} />
            </IconWrapper>
          </Tooltip>
        </Block>
      </Block>
    </Container>
  );
};

export default TooltipDemo;
