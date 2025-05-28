import React, { useState } from "react";
import { Button, ButtonType } from "../../../lib/components/Button";
import Popover from "../../../lib/components/Popover/Popover";
import { PopoverSize } from "../../../lib/components/Popover/types";
import "./PopoverDemo.css";
import { FOUNDATION_THEME } from "../../../lib/tokens";
import Block from "../../../lib/components/Primitives/Block/Block";
import Text from "../../../lib/components/Text/Text";

const PopoverDemo: React.FC = () => {
  // Playground state
  const [heading, setHeading] = useState("Popover Heading");
  const [description, setDescription] = useState(
    "This is a description for the popover"
  );
  const [showCloseButton, setShowCloseButton] = useState(true);
  const [size, setSize] = useState<PopoverSize>(PopoverSize.SM);
  const [hasPrimaryAction, setHasPrimaryAction] = useState(true);
  const [hasSecondaryAction, setHasSecondaryAction] = useState(true);
  const [primaryActionLabel, setPrimaryActionLabel] =
    useState("Primary Action");
  const [secondaryActionLabel, setSecondaryActionLabel] =
    useState("Secondary Action");
  const [content, setContent] = useState("This is the content of the popover.");

  return (
    <div className="popover-demo">
      <h1>Popover Component Demo</h1>

      <div className="demo-section">
        <h2>Popover Playground</h2>
        <div className="playground-container">
          <div className="playground-controls">
            <Block
              display="flex"
              flexDirection="column"
              gap={FOUNDATION_THEME.unit[16]}
            >
              <Block
                display="flex"
                flexDirection="column"
                gap={FOUNDATION_THEME.unit[8]}
              >
                <Text
                  color={FOUNDATION_THEME.colors.gray[700]}
                  variant="body.sm"
                  fontWeight={600}
                >
                  Header
                </Text>
                <label>
                  <span style={{ color: FOUNDATION_THEME.colors.gray[700] }}>
                    Heading:
                  </span>
                  <input
                    type="text"
                    value={heading}
                    onChange={(e) => setHeading(e.target.value)}
                    placeholder="Enter heading"
                  />
                </label>
                <label>
                  <span style={{ color: FOUNDATION_THEME.colors.gray[700] }}>
                    Description:
                  </span>
                  <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter description"
                  />
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={showCloseButton}
                    onChange={() => setShowCloseButton(!showCloseButton)}
                  />
                  <span style={{ color: FOUNDATION_THEME.colors.gray[700] }}>
                    Show Close Button
                  </span>
                </label>
              </Block>

              <Block
                display="flex"
                flexDirection="column"
                gap={FOUNDATION_THEME.unit[8]}
              >
                <Text
                  color={FOUNDATION_THEME.colors.gray[700]}
                  variant="body.sm"
                  fontWeight={600}
                >
                  Content
                </Text>
                <label>
                  <span style={{ color: FOUNDATION_THEME.colors.gray[700] }}>
                    Content:
                  </span>
                  <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    rows={3}
                    placeholder="Enter content"
                  />
                </label>
              </Block>

              <Block
                display="flex"
                flexDirection="column"
                gap={FOUNDATION_THEME.unit[8]}
              >
                <Text
                  color={FOUNDATION_THEME.colors.gray[700]}
                  variant="body.sm"
                  fontWeight={600}
                >
                  Size
                </Text>
                <div className="radio-group">
                  <label>
                    <input
                      type="radio"
                      name="size"
                      value={PopoverSize.SM}
                      checked={size === PopoverSize.SM}
                      onChange={() => setSize(PopoverSize.SM)}
                    />
                    <span style={{ color: FOUNDATION_THEME.colors.gray[700] }}>
                      Small (280px)
                    </span>
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="size"
                      value={PopoverSize.MD}
                      checked={size === PopoverSize.MD}
                      onChange={() => setSize(PopoverSize.MD)}
                    />
                    <span style={{ color: FOUNDATION_THEME.colors.gray[700] }}>
                      Medium (320px)
                    </span>
                  </label>
                </div>
              </Block>

              <Block
                display="flex"
                flexDirection="column"
                gap={FOUNDATION_THEME.unit[8]}
              >
                <Text
                  color={FOUNDATION_THEME.colors.gray[700]}
                  variant="body.sm"
                  fontWeight={600}
                >
                  Actions
                </Text>
                <label>
                  <input
                    type="checkbox"
                    checked={hasPrimaryAction}
                    onChange={() => setHasPrimaryAction(!hasPrimaryAction)}
                  />
                  <span style={{ color: FOUNDATION_THEME.colors.gray[700] }}>
                    Primary Action
                  </span>
                </label>
                {hasPrimaryAction && (
                  <label>
                    <span style={{ color: FOUNDATION_THEME.colors.gray[700] }}>
                      Primary Action Label:
                    </span>
                    <input
                      type="text"
                      value={primaryActionLabel}
                      onChange={(e) => setPrimaryActionLabel(e.target.value)}
                      placeholder="Enter primary action label"
                    />
                  </label>
                )}
                <label>
                  <input
                    type="checkbox"
                    checked={hasSecondaryAction}
                    onChange={() => setHasSecondaryAction(!hasSecondaryAction)}
                  />
                  <span style={{ color: FOUNDATION_THEME.colors.gray[700] }}>
                    Secondary Action
                  </span>
                </label>
                {hasSecondaryAction && (
                  <label>
                    <span style={{ color: FOUNDATION_THEME.colors.gray[700] }}>
                      Secondary Action Label:
                    </span>
                    <input
                      type="text"
                      value={secondaryActionLabel}
                      onChange={(e) => setSecondaryActionLabel(e.target.value)}
                      placeholder="Enter secondary action label"
                    />
                  </label>
                )}
              </Block>
            </Block>
          </div>

          <div className="playground-preview">
            <Block
              padding={FOUNDATION_THEME.unit[16]}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Popover
                heading={heading || undefined}
                description={description || undefined}
                showCloseButton={showCloseButton}
                trigger={
                  <Button text="Open Popover" buttonType={ButtonType.PRIMARY} />
                }
                size={size}
                primaryAction={
                  hasPrimaryAction
                    ? {
                        label: primaryActionLabel,
                        onClick: () =>
                          alert(
                            `Primary action clicked: ${primaryActionLabel}`
                          ),
                      }
                    : undefined
                }
                secondaryAction={
                  hasSecondaryAction
                    ? {
                        label: secondaryActionLabel,
                        onClick: () =>
                          alert(
                            `Secondary action clicked: ${secondaryActionLabel}`
                          ),
                      }
                    : undefined
                }
              >
                <div
                  style={{
                    color: FOUNDATION_THEME.colors.gray[500],
                    fontSize: size === PopoverSize.SM ? "12px" : "14px",
                    padding: FOUNDATION_THEME.unit[4],
                  }}
                >
                  {content}
                </div>
              </Popover>
            </Block>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopoverDemo;
