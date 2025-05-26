import React from "react";
import { Hash, Filter } from "lucide-react";
import {
  TagVariant,
  TagColor,
  TagSize,
  TagShape,
} from "../../../lib/components/Tags";
import Block from "../../../lib/components/Primitives/Block/Block";
import PrimitiveText from "../../../lib/components/Primitives/PrimitiveText/PrimitiveText";
import { Button, ButtonSize, SplitTag } from "../../../lib/main";
import { Tag } from "../../../lib/main";
import Tooltip from "../../../lib/components/Tooltip/Tooltip";
import Popover from "../../../lib/components/Popover/Popover";
import Menu from "../../../lib/components/Menu/Menu";

const TagsDemo: React.FC = () => {
  return (
    <div className="component-section">
      <header className="component-header">
        <h1 className="component-title">Tag Component</h1>
        <p className="component-description">
          Versatile tag components with various variants, statuses, and sizes.
        </p>
      </header>

      <Block display="flex" flexDirection="column" gap={40}>
        <Block display="flex" gap={10} marginBottom={10}>
          <Tooltip content="Hello">
            <Block color="blue" cursor="pointer" height={"100%"}>
              Click me
            </Block>
          </Tooltip>
          <Tooltip content="Hello">
            <Tag
              text="Hello"
              leadingSlot={<Hash size={12} />}
              trailingSlot={<Filter size={12} />}
              size={TagSize.SM}
              onClick={() => alert("Clicked")}
            />
          </Tooltip>
        </Block>

        <Block display="flex" gap={10} marginBottom={10}>
          <SplitTag
            size={TagSize.XS}
            shape={TagShape.SQUARICAL}
            primaryTag={{ text: "Primary Tag" }}
            secondaryTag={{ text: "Secondary Tag" }}
          />
        </Block>

        <Block display="flex" gap={10} marginBottom={10}>
          <Menu
            trigger={<Button size={ButtonSize.SMALL} text="Open Menu" />}
          ></Menu>
        </Block>
      </Block>

      <Popover trigger={<Button text="Open Popover" />}>
        <Block
          padding={10}
          backgroundColor="red"
          className="debug"
          borderRadius="10px"
        >
          <h1>Hello</h1>
        </Block>
      </Popover>
      {/* Tag Variants */}
      <section className="showcase-section" style={{ marginTop: "200px" }}>
        <h2 className="showcase-title">Tag Variants</h2>
        <div className="showcase-container">
          <div className="showcase-item">
            <Tag
              text="No Fill"
              variant={TagVariant.NO_FILL}
              leadingSlot={<Hash size={12} />}
            />
            <span className="showcase-label">No Fill</span>
          </div>
          <div className="showcase-item">
            <Tag
              text="Attentive"
              variant={TagVariant.ATTENTIVE}
              leadingSlot={<Hash size={12} />}
            />
            <span className="showcase-label">Attentive</span>
          </div>
          <div className="showcase-item">
            <Tag
              text="Subtle"
              variant={TagVariant.SUBTLE}
              leadingSlot={<Hash size={12} />}
            />
            <span className="showcase-label">Subtle</span>
          </div>
        </div>
      </section>

      {/* Tag Statuses */}
      <section className="showcase-section">
        <h2 className="showcase-title">Tag Statuses</h2>
        <div className="showcase-container">
          <div className="showcase-item">
            <Tag
              text="Neutral"
              color={TagColor.NEUTRAL}
              leadingSlot={<Hash size={12} />}
            />
            <span className="showcase-label">Neutral</span>
          </div>
          <div className="showcase-item">
            <Tag
              text="Primary"
              color={TagColor.PRIMARY}
              leadingSlot={<Hash size={12} />}
            />
            <span className="showcase-label">Primary</span>
          </div>
          <div className="showcase-item">
            <Tag
              text="Success"
              color={TagColor.SUCCESS}
              leadingSlot={<Hash size={12} />}
            />
            <span className="showcase-label">Success</span>
          </div>
          <div className="showcase-item">
            <Tag
              text="Error"
              color={TagColor.ERROR}
              leadingSlot={<Hash size={12} />}
            />
            <span className="showcase-label">Error</span>
          </div>
          <div className="showcase-item">
            <Tag
              text="Warning"
              color={TagColor.WARNING}
              leadingSlot={<Hash size={12} />}
            />
            <span className="showcase-label">Warning</span>
          </div>
          <div className="showcase-item">
            <Tag
              text="Purple"
              color={TagColor.PURPLE}
              leadingSlot={<Hash size={12} />}
            />
            <span className="showcase-label">Purple</span>
          </div>
        </div>
      </section>

      {/* Tag Sizes */}
      <section className="showcase-section">
        <h2 className="showcase-title">Tag Sizes</h2>
        <div className="showcase-container">
          <div className="showcase-item">
            <Tag
              text="Extra Small"
              size={TagSize.XS}
              leadingSlot={<Hash size={10} />}
            />
            <span className="showcase-label">XS</span>
          </div>
          <div className="showcase-item">
            <Tag
              text="Small"
              size={TagSize.SM}
              leadingSlot={<Hash size={12} />}
            />
            <span className="showcase-label">SM</span>
          </div>
          <div className="showcase-item">
            <Tag
              text="Medium"
              size={TagSize.MD}
              leadingSlot={<Hash size={12} />}
            />
            <span className="showcase-label">MD</span>
          </div>
          <div className="showcase-item">
            <Tag
              text="Large"
              size={TagSize.LG}
              leadingSlot={<Hash size={14} />}
            />
            <span className="showcase-label">LG</span>
          </div>
        </div>
      </section>

      {/* Tag Shapes */}
      <section className="showcase-section">
        <h2 className="showcase-title">Tag Shapes</h2>
        <div className="showcase-container">
          <div className="showcase-item">
            <Tag
              text="Rounded"
              shape={TagShape.ROUNDED}
              leadingSlot={<Hash size={12} />}
            />
            <span className="showcase-label">Rounded</span>
          </div>
          <div className="showcase-item">
            <Tag
              text="Squarical"
              shape={TagShape.SQUARICAL}
              leadingSlot={<Hash size={12} />}
            />
            <span className="showcase-label">Squarical</span>
          </div>
        </div>
      </section>

      {/* Slot Usage */}
      <section className="showcase-section">
        <h2 className="showcase-title">Slot Usage</h2>
        <div className="showcase-container">
          <div className="showcase-item">
            <Tag text="Leading Slot" leadingSlot={<Hash size={12} />} />
            <span className="showcase-label">Leading Slot</span>
          </div>
          <div className="showcase-item">
            <Tag text="Trailing Slot" trailingSlot={<Hash size={12} />} />
            <span className="showcase-label">Trailing Slot</span>
          </div>
          <div className="showcase-item">
            <Tag
              text="Both Slots"
              leadingSlot={<Hash size={12} />}
              trailingSlot={<Filter size={12} />}
            />
            <span className="showcase-label">Both Slots</span>
          </div>
          <div className="showcase-item">
            <Tag
              text="Custom Slot"
              leadingSlot={<Hash size={12} />}
              trailingSlot={
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
      </section>
    </div>
  );
};

export default TagsDemo; 