import React, { useState } from "react";
import Alert, {
  AlertVariant,
  AlertStyle,
  AlertActionPlacement,
} from "../../../lib/components/Alert/Alert";
import "./AlertDemo.css";
import { Info } from "lucide-react";
import Block from "../../../lib/components/Primitives/Block/Block";
import { FOUNDATION_THEME } from "../../../lib/tokens";
import PrimitiveButton from "../../../lib/components/Primitives/PrimitiveButton/PrimitiveButton";

const AlertDemo: React.FC = () => {
  const [playgroundProps, setPlaygroundProps] = useState({
    variant: AlertVariant.PRIMARY,
    style: AlertStyle.SUBTLE,
    actionPlacement: AlertActionPlacement.RIGHT,
    heading: "Alert Heading",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    showIcon: true,
    showClose: true,
    showPrimaryAction: true,
    showSecondaryAction: true,
  });

  const handleVariantChange = (variant: AlertVariant) => {
    setPlaygroundProps((prev) => ({ ...prev, variant }));
  };

  const handleStyleChange = (style: AlertStyle) => {
    setPlaygroundProps((prev) => ({ ...prev, style }));
  };

  const handlePlacementChange = (placement: AlertActionPlacement) => {
    setPlaygroundProps((prev) => ({ ...prev, actionPlacement: placement }));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      <PrimitiveButton
        onClick={() => alert("Hello")}
        paddingX={"16px"}
        paddingY={"8px"}
        borderRadius={FOUNDATION_THEME.border.radius[10]}
        backgroundColor={FOUNDATION_THEME.colors.gray[100]}
        color={FOUNDATION_THEME.colors.gray[900]}
        style={{
          border: `1px solid red`,
        }}
      >
        Hello
      </PrimitiveButton>
      {/* Playground Section */}
      <div>
        <h2>Playground</h2>
        <Block
          display="flex"
          gap={FOUNDATION_THEME.spacing[16]}
          marginY={FOUNDATION_THEME.spacing[16]}
        >
          <div style={{ marginBottom: "8px" }}>
            <label style={{ marginRight: "8px" }}>Variant:</label>
            <select
              value={playgroundProps.variant}
              onChange={(e) =>
                handleVariantChange(e.target.value as AlertVariant)
              }
            >
              {Object.values(AlertVariant).map((variant) => (
                <option key={variant} value={variant}>
                  {variant}
                </option>
              ))}
            </select>
          </div>
          <div style={{ marginBottom: "8px" }}>
            <label style={{ marginRight: "8px" }}>Style:</label>
            <select
              value={playgroundProps.style}
              onChange={(e) => handleStyleChange(e.target.value as AlertStyle)}
            >
              {Object.values(AlertStyle).map((style) => (
                <option key={style} value={style}>
                  {style}
                </option>
              ))}
            </select>
          </div>
          <div style={{ marginBottom: "8px" }}>
            <label style={{ marginRight: "8px" }}>Action Placement:</label>
            <select
              value={playgroundProps.actionPlacement}
              onChange={(e) =>
                handlePlacementChange(e.target.value as AlertActionPlacement)
              }
            >
              {Object.values(AlertActionPlacement).map((placement) => (
                <option key={placement} value={placement}>
                  {placement}
                </option>
              ))}
            </select>
          </div>
        </Block>

        <Alert
          icon={
            playgroundProps.showIcon ? (
              <Info size={16} color="black" />
            ) : undefined
          }
          heading={playgroundProps.heading}
          description={playgroundProps.description}
          variant={playgroundProps.variant}
          style={playgroundProps.style}
          actionPlacement={playgroundProps.actionPlacement}
          onClose={playgroundProps.showClose ? () => alert("Close") : undefined}
          primaryAction={
            playgroundProps.showPrimaryAction
              ? {
                  label: "Primary Action",
                  onClick: () => alert("Primary Action"),
                }
              : undefined
          }
          secondaryAction={
            playgroundProps.showSecondaryAction
              ? {
                  label: "Secondary Action",
                  onClick: () => alert("Secondary Action"),
                }
              : undefined
          }
        />
      </div>

      {/* All Variants Section */}
      <div>
        <h2>All Variants</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {Object.values(AlertVariant).map((variant) => (
            <Alert
              key={variant}
              icon={<Info size={16} color="black" />}
              heading={`${variant} Alert`}
              description={`This is a ${variant.toLowerCase()} alert example.`}
              variant={variant}
              onClose={() => alert("Close")}
              primaryAction={{
                label: "Primary Action",
                onClick: () => alert("Primary Action"),
              }}
              secondaryAction={{
                label: "Secondary Action",
                onClick: () => alert("Secondary Action"),
              }}
            />
          ))}
        </div>
      </div>

      {/* All Styles Section */}
      <div>
        <h2>All Styles</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {Object.values(AlertStyle).map((style) => (
            <Alert
              key={style}
              icon={<Info size={16} color="black" />}
              heading={`${style} Style Alert`}
              description={`This is an alert with ${style.toLowerCase()} style.`}
              variant={AlertVariant.PRIMARY}
              style={style}
              onClose={() => alert("Close")}
              primaryAction={{
                label: "Primary Action",
                onClick: () => alert("Primary Action"),
              }}
              secondaryAction={{
                label: "Secondary Action",
                onClick: () => alert("Secondary Action"),
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlertDemo;
