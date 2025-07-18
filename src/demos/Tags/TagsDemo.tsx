import React from "react";
import { Filter, Hash } from "lucide-react";
import {
  TagVariant,
  TagColor,
  TagSize,
  TagShape,
} from "../../../lib/components/Tags";
import {
  addSnackbar,
  SnackbarVariant,
  Tag,
  Tooltip,
  TooltipSize,
} from "../../../lib/main";
import Block from "../../../lib/components/Primitives/Block/Block";
import PrimitiveText from "../../../lib/components/Primitives/PrimitiveText/PrimitiveText";

const TagsDemo: React.FC = () => {
  return (
    <div className="component-section">
      <div>
        <section className="showcase-section">
          <h2 className="showcase-title">Tag Variants</h2>
          <div className="showcase-container">
            <div className="showcase-item">
              <Tooltip content="Jai Shree Ram" size={TooltipSize.SMALL}>
                <Tag
                  text="No Fill"
                  variant={TagVariant.NO_FILL}
                  leftSlot={<Hash size={12} />}
                />
              </Tooltip>
              <span className="showcase-label">No Fill</span>
            </div>
            <div className="showcase-item">
              <Tag
                text="Attentive"
                variant={TagVariant.ATTENTIVE}
                leftSlot={<Hash size={12} />}
              />
              <span className="showcase-label">Attentive</span>
            </div>
            <div className="showcase-item">
              <Tag
                text="Subtle"
                variant={TagVariant.SUBTLE}
                leftSlot={<Hash size={12} />}
              />
              <span className="showcase-label">Subtle</span>
            </div>
          </div>
        </section>

        <section className="showcase-section">
          <h2 className="showcase-title">Tag Statuses</h2>
          <div className="showcase-container">
            <div className="showcase-item">
              <Tag
                text="Neutral"
                color={TagColor.NEUTRAL}
                leftSlot={<Hash size={12} />}
              />
              <span className="showcase-label">Neutral</span>
            </div>
            <div className="showcase-item">
              <Tag
                text="Primary"
                color={TagColor.PRIMARY}
                leftSlot={<Hash size={12} />}
              />
              <span className="showcase-label">Primary</span>
            </div>
            <div className="showcase-item">
              <Tag
                text="Success"
                color={TagColor.SUCCESS}
                leftSlot={<Hash size={12} />}
              />
              <span className="showcase-label">Success</span>
            </div>
            <div className="showcase-item">
              <Tag
                text="Error"
                color={TagColor.ERROR}
                leftSlot={<Hash size={12} />}
              />
              <span className="showcase-label">Error</span>
            </div>
            <div className="showcase-item">
              <Tag
                text="Warning"
                color={TagColor.WARNING}
                leftSlot={<Hash size={12} />}
              />
              <span className="showcase-label">Warning</span>
            </div>
            <div className="showcase-item">
              <Tag
                text="Purple"
                color={TagColor.PURPLE}
                leftSlot={<Hash size={12} />}
              />
              <span className="showcase-label">Purple</span>
            </div>
          </div>
        </section>

        <section className="showcase-section">
          <h2 className="showcase-title">Tag Sizes</h2>
          <div className="showcase-container">
            <div className="showcase-item">
              <Tag
                text="Extra Small"
                size={TagSize.XS}
                leftSlot={<Hash size={10} />}
              />
              <span className="showcase-label">XS</span>
            </div>
            <div className="showcase-item">
              <Tag
                text="Small"
                size={TagSize.SM}
                leftSlot={<Hash size={12} />}
              />
              <span className="showcase-label">SM</span>
            </div>
            <div className="showcase-item">
              <Tag
                text="Medium"
                size={TagSize.MD}
                leftSlot={<Hash size={12} />}
              />
              <span className="showcase-label">MD</span>
            </div>
            <div className="showcase-item">
              <Tag
                text="Large"
                size={TagSize.LG}
                leftSlot={<Hash size={14} />}
              />
              <span className="showcase-label">LG</span>
            </div>
          </div>
        </section>

        <section className="showcase-section">
          <h2 className="showcase-title">Tag Shapes</h2>
          <div className="showcase-container">
            <div className="showcase-item">
              <Tag
                text="Rounded"
                shape={TagShape.ROUNDED}
                leftSlot={<Hash size={12} />}
              />
              <span className="showcase-label">Rounded</span>
            </div>
            <div className="showcase-item">
              <Tag
                text="Squarical"
                shape={TagShape.SQUARICAL}
                leftSlot={<Hash size={12} />}
              />
              <span className="showcase-label">Squarical</span>
            </div>
          </div>
        </section>

        <section className="showcase-section">
          <h2 className="showcase-title">Slot Usage</h2>
          <div className="showcase-container">
            <div className="showcase-item">
              <Tag text="Leading Slot" leftSlot={<Hash size={12} />} />
              <span className="showcase-label">Leading Slot</span>
            </div>
            <div className="showcase-item">
              <Tag text="Trailing Slot" rightSlot={<Hash size={12} />} />
              <span className="showcase-label">Trailing Slot</span>
            </div>
            <div className="showcase-item">
              <Tag
                text="Both Slots"
                leftSlot={<Hash size={12} />}
                rightSlot={<Filter size={12} />}
              />
              <span className="showcase-label">Both Slots</span>
            </div>
            <div className="showcase-item">
              <Tag
                text="Custom Slot"
                leftSlot={<Hash size={12} />}
                rightSlot={
                  <Block
                    backgroundColor="rgba(0,0,0,0.1)"
                    paddingX={4}
                    paddingY={2}
                    borderRadius="9999px"
                    display="flex"
                    alignItems="center"
                  >
                    <PrimitiveText as="span" style={{ marginRight: "2px" }}>
                      5
                    </PrimitiveText>
                    <Filter size={10} />
                  </Block>
                }
              />
              <span className="showcase-label">Complex Content</span>
            </div>
          </div>
          <Block display="flex" alignItems="center" gap={10} marginTop={10}>
            <button
              onClick={() =>
                addSnackbar({
                  header: "Info Heading",
                  description:
                    "This is body message of the information bar. This text is going to a run a bit longer.",
                  variant: SnackbarVariant.SUCCESS,
                  actionButton: {
                    label: "Action",
                    onClick: () => alert("Action clicked"),
                  },
                })
              }
            >
              Click me
            </button>
            <button
              onClick={() =>
                addSnackbar({
                  header: "Info Heading",
                  description:
                    "This is body message of the information bar. This text is going to a run a bit longer.",
                  variant: SnackbarVariant.SUCCESS,
                  actionButton: {
                    label: "Action",
                    onClick: () => alert("Action clicked"),
                  },
                })
              }
            >
              Click me
            </button>
            <button
              onClick={() =>
                addSnackbar({
                  header: "Info Heading",
                  description:
                    "This is body message of the information bar. This text is going to a run a bit longer.",
                  variant: SnackbarVariant.ERROR,
                  actionButton: {
                    label: "Action",
                    onClick: () => alert("Action clicked"),
                  },
                })
              }
            >
              Click me
            </button>
          </Block>
        </section>
      </div>
    </div>
  );
};

export default TagsDemo;
