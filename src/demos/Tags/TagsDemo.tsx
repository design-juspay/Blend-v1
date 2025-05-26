import React from "react";
import { Hash, Filter } from "lucide-react";
import {
  TagV2Variant,
  TagV2Color,
  TagV2Size,
  TagV2Shape,
} from "../../../lib/components/TagsV2";
import Block from "../../../lib/components/Primitives/Block/Block";
import PrimitiveText from "../../../lib/components/Primitives/PrimitiveText/PrimitiveText";
import { SplitTag } from "../../../lib/main";
import { Tag } from "../../../lib/main";

const TagsDemo: React.FC = () => {
  return (
    <div className="component-section">
      <header className="component-header">
        <h1 className="component-title">Tag Component</h1>
        <p className="component-description">
          Versatile tag components with various variants, statuses, and sizes.
        </p>
      </header>

      <Block display="flex" gap={10} paddingBottom={10}>
        <Tag
          text="Hello"
          leadingSlot={<Hash size={12} />}
          trailingSlot={<Filter size={12} />}
          onClick={() => alert("Clicked")}
        />
        <Tag
          text="Hello"
          leadingSlot={<Hash size={12} />}
          trailingSlot={<Filter size={12} />}
          size={TagV2Size.SM}
          onClick={() => alert("Clicked")}
        />
        <Tag
          text="Hello"
          leadingSlot={<Hash size={12} />}
          trailingSlot={<Filter size={12} />}
          size={TagV2Size.MD}
          onClick={() => alert("Clicked")}
        />
        <Tag
          text="Hello"
          leadingSlot={<Hash size={12} />}
          trailingSlot={<Filter size={12} />}
          size={TagV2Size.LG}
          onClick={() => alert("Clicked")}
        />
      </Block>
      <Block display="flex" gap={10}>
        <SplitTag
          size={TagV2Size.XS}
          shape={TagV2Shape.SQUARICAL}
          primaryTag={{ text: "Primary Tag" }}
          secondaryTag={{ text: "Secondary Tag" }}
        />
      </Block>
      {/* Tag Variants */}
      <section className="showcase-section" style={{ marginTop: "200px" }}>
        <h2 className="showcase-title">Tag Variants</h2>
        <div className="showcase-container">
          <div className="showcase-item">
            <Tag
              text="No Fill"
              variant={TagV2Variant.NO_FILL}
              leadingSlot={<Hash size={12} />}
            />
            <span className="showcase-label">No Fill</span>
          </div>
          <div className="showcase-item">
            <Tag
              text="Attentive"
              variant={TagV2Variant.ATTENTIVE}
              leadingSlot={<Hash size={12} />}
            />
            <span className="showcase-label">Attentive</span>
          </div>
          <div className="showcase-item">
            <Tag
              text="Subtle"
              variant={TagV2Variant.SUBTLE}
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
              color={TagV2Color.NEUTRAL}
              leadingSlot={<Hash size={12} />}
            />
            <span className="showcase-label">Neutral</span>
          </div>
          <div className="showcase-item">
            <Tag
              text="Primary"
              color={TagV2Color.PRIMARY}
              leadingSlot={<Hash size={12} />}
            />
            <span className="showcase-label">Primary</span>
          </div>
          <div className="showcase-item">
            <Tag
              text="Success"
              color={TagV2Color.SUCCESS}
              leadingSlot={<Hash size={12} />}
            />
            <span className="showcase-label">Success</span>
          </div>
          <div className="showcase-item">
            <Tag
              text="Error"
              color={TagV2Color.ERROR}
              leadingSlot={<Hash size={12} />}
            />
            <span className="showcase-label">Error</span>
          </div>
          <div className="showcase-item">
            <Tag
              text="Warning"
              color={TagV2Color.WARNING}
              leadingSlot={<Hash size={12} />}
            />
            <span className="showcase-label">Warning</span>
          </div>
          <div className="showcase-item">
            <Tag
              text="Purple"
              color={TagV2Color.PURPLE}
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
              size={TagV2Size.XS}
              leadingSlot={<Hash size={10} />}
            />
            <span className="showcase-label">XS</span>
          </div>
          <div className="showcase-item">
            <Tag
              text="Small"
              size={TagV2Size.SM}
              leadingSlot={<Hash size={12} />}
            />
            <span className="showcase-label">SM</span>
          </div>
          <div className="showcase-item">
            <Tag
              text="Medium"
              size={TagV2Size.MD}
              leadingSlot={<Hash size={12} />}
            />
            <span className="showcase-label">MD</span>
          </div>
          <div className="showcase-item">
            <Tag
              text="Large"
              size={TagV2Size.LG}
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
              shape={TagV2Shape.ROUNDED}
              leadingSlot={<Hash size={12} />}
            />
            <span className="showcase-label">Rounded</span>
          </div>
          <div className="showcase-item">
            <Tag
              text="Squarical"
              shape={TagV2Shape.SQUARICAL}
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