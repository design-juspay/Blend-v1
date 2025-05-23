import React from "react";
import { Hash, Filter, ArrowRight } from "lucide-react";
import SplitTag from "../../../lib/components/SplitTag";
import { 
  TagVariant, 
  TagStatus, 
  TagSize, 
  TagShape 
} from "../../../lib/components/Tags";

const SplitTagDemo: React.FC = () => {
  return (
    <div className="component-section">
      <header className="component-header">
        <h1 className="component-title">SplitTag Component</h1>
        <p className="component-description">
          Split tags combine two tags into a single connected component with various styling options.
        </p>
      </header>

      {/* Component Variants */}
      <section className="showcase-section">
        <h2 className="showcase-title">Component Variants</h2>
        <div className="showcase-container">
          <div className="showcase-item">
            <SplitTag 
              primaryTag={{
                text: "Split",
                variant: TagVariant.ATTENTIVE,
                status: TagStatus.PRIMARY
              }}
              secondaryTag={{
                text: "Tag",
                variant: TagVariant.NO_FILL,
                status: TagStatus.PRIMARY
              }}
            />
            <span className="showcase-label">Split Tag (Two Sections)</span>
          </div>
          <div className="showcase-item">
            <SplitTag 
              primaryTag={{
                text: "Single Tag",
                variant: TagVariant.ATTENTIVE,
                status: TagStatus.PRIMARY
              }}
              // No secondaryTag = renders as regular Tag
            />
            <span className="showcase-label">Single Tag Fallback</span>
          </div>
        </div>
      </section>

      {/* Status Variants */}
      <section className="showcase-section">
        <h2 className="showcase-title">Status Variants</h2>
        <div className="showcase-container">
          <div className="showcase-item">
            <SplitTag 
              primaryTag={{
                text: "New",
                variant: TagVariant.ATTENTIVE,
                status: TagStatus.NEUTRAL
              }}
              secondaryTag={{
                text: "2",
                variant: TagVariant.NO_FILL,
                status: TagStatus.NEUTRAL
              }}
            />
            <span className="showcase-label">Neutral</span>
          </div>
          <div className="showcase-item">
            <SplitTag 
              primaryTag={{
                text: "Pending",
                variant: TagVariant.ATTENTIVE,
                status: TagStatus.WARNING
              }}
              secondaryTag={{
                text: "5",
                variant: TagVariant.NO_FILL,
                status: TagStatus.WARNING
              }}
            />
            <span className="showcase-label">Warning</span>
          </div>
          <div className="showcase-item">
            <SplitTag 
              primaryTag={{
                text: "Completed",
                variant: TagVariant.ATTENTIVE,
                status: TagStatus.SUCCESS
              }}
              secondaryTag={{
                text: "10",
                variant: TagVariant.NO_FILL,
                status: TagStatus.SUCCESS
              }}
            />
            <span className="showcase-label">Success</span>
          </div>
          <div className="showcase-item">
            <SplitTag 
              primaryTag={{
                text: "Failed",
                variant: TagVariant.ATTENTIVE,
                status: TagStatus.ERROR
              }}
              secondaryTag={{
                text: "3",
                variant: TagVariant.NO_FILL,
                status: TagStatus.ERROR
              }}
            />
            <span className="showcase-label">Error</span>
          </div>
        </div>
      </section>

      {/* Mixed Variants */}
      <section className="showcase-section">
        <h2 className="showcase-title">Mixed Variants</h2>
        <div className="showcase-container">
          <div className="showcase-item">
            <SplitTag 
              primaryTag={{
                text: "Key",
                variant: TagVariant.NO_FILL,
                status: TagStatus.NEUTRAL
              }}
              secondaryTag={{
                text: "Value",
                variant: TagVariant.ATTENTIVE,
                status: TagStatus.PRIMARY
              }}
            />
            <span className="showcase-label">Mixed Variants</span>
          </div>
          <div className="showcase-item">
            <SplitTag 
              primaryTag={{
                text: "Filter",
                variant: TagVariant.SUBTLE,
                status: TagStatus.NEUTRAL
              }}
              secondaryTag={{
                text: "Active",
                variant: TagVariant.ATTENTIVE,
                status: TagStatus.SUCCESS
              }}
            />
            <span className="showcase-label">Subtle + Attentive</span>
          </div>
        </div>
      </section>

      {/* Different Sizes */}
      <section className="showcase-section">
        <h2 className="showcase-title">Different Sizes</h2>
        <div className="showcase-container">
          <div className="showcase-item">
            <SplitTag 
              primaryTag={{
                text: "XS",
                variant: TagVariant.ATTENTIVE,
                status: TagStatus.PRIMARY
              }}
              secondaryTag={{
                text: "Size",
                variant: TagVariant.NO_FILL,
                status: TagStatus.PRIMARY
              }}
              size={TagSize.XS}
            />
            <span className="showcase-label">Extra Small</span>
          </div>
          <div className="showcase-item">
            <SplitTag 
              primaryTag={{
                text: "SM",
                variant: TagVariant.ATTENTIVE,
                status: TagStatus.PRIMARY
              }}
              secondaryTag={{
                text: "Size",
                variant: TagVariant.NO_FILL,
                status: TagStatus.PRIMARY
              }}
              size={TagSize.SM}
            />
            <span className="showcase-label">Small</span>
          </div>
          <div className="showcase-item">
            <SplitTag 
              primaryTag={{
                text: "MD",
                variant: TagVariant.ATTENTIVE,
                status: TagStatus.PRIMARY
              }}
              secondaryTag={{
                text: "Size",
                variant: TagVariant.NO_FILL,
                status: TagStatus.PRIMARY
              }}
              size={TagSize.MD}
            />
            <span className="showcase-label">Medium</span>
          </div>
          <div className="showcase-item">
            <SplitTag 
              primaryTag={{
                text: "LG",
                variant: TagVariant.ATTENTIVE,
                status: TagStatus.PRIMARY
              }}
              secondaryTag={{
                text: "Size",
                variant: TagVariant.NO_FILL,
                status: TagStatus.PRIMARY
              }}
              size={TagSize.LG}
            />
            <span className="showcase-label">Large</span>
          </div>
        </div>
      </section>

      {/* Different Shapes */}
      <section className="showcase-section">
        <h2 className="showcase-title">Different Shapes</h2>
        <div className="showcase-container">
          <div className="showcase-item">
            <SplitTag 
              primaryTag={{
                text: "Rounded",
                variant: TagVariant.ATTENTIVE,
                status: TagStatus.PRIMARY
              }}
              secondaryTag={{
                text: "Shape",
                variant: TagVariant.NO_FILL,
                status: TagStatus.PRIMARY
              }}
              shape={TagShape.ROUNDED}
            />
            <span className="showcase-label">Rounded</span>
          </div>
          <div className="showcase-item">
            <SplitTag 
              primaryTag={{
                text: "Squarical",
                variant: TagVariant.ATTENTIVE,
                status: TagStatus.PRIMARY
              }}
              secondaryTag={{
                text: "Shape",
                variant: TagVariant.NO_FILL,
                status: TagStatus.PRIMARY
              }}
              shape={TagShape.SQUARICAL}
            />
            <span className="showcase-label">Squarical</span>
          </div>
        </div>
      </section>

      {/* With Slots */}
      <section className="showcase-section">
        <h2 className="showcase-title">With Slots</h2>
        <div className="showcase-container">
          <div className="showcase-item">
            <SplitTag 
              primaryTag={{
                text: "Leading",
                variant: TagVariant.ATTENTIVE,
                status: TagStatus.PRIMARY
              }}
              secondaryTag={{
                text: "Slot",
                variant: TagVariant.NO_FILL,
                status: TagStatus.PRIMARY
              }}
              leadingSlot={<Hash size={12} />}
            />
            <span className="showcase-label">Leading Slot</span>
          </div>
          <div className="showcase-item">
            <SplitTag 
              primaryTag={{
                text: "Trailing",
                variant: TagVariant.ATTENTIVE,
                status: TagStatus.PRIMARY
              }}
              secondaryTag={{
                text: "Slot",
                variant: TagVariant.NO_FILL,
                status: TagStatus.PRIMARY
              }}
              trailingSlot={<ArrowRight size={12} />}
            />
            <span className="showcase-label">Trailing Slot</span>
          </div>
          <div className="showcase-item">
            <SplitTag 
              primaryTag={{
                text: "Both",
                variant: TagVariant.ATTENTIVE,
                status: TagStatus.PRIMARY
              }}
              secondaryTag={{
                text: "Slots",
                variant: TagVariant.NO_FILL,
                status: TagStatus.PRIMARY
              }}
              leadingSlot={<Hash size={12} />}
              trailingSlot={<Filter size={12} />}
            />
            <span className="showcase-label">Both Slots</span>
          </div>
        </div>
      </section>

      {/* Single Tag Variant Examples */}
      <section className="showcase-section">
        <h2 className="showcase-title">Single Tag Variant Examples</h2>
        <p className="showcase-description">When no secondaryTag is provided, SplitTag renders as a regular Tag</p>
        <div className="showcase-container">
          <div className="showcase-item">
            <SplitTag 
              primaryTag={{
                text: "Primary",
                variant: TagVariant.ATTENTIVE,
                status: TagStatus.PRIMARY,
                onClick: () => console.log('Tag clicked')
              }}
              leadingSlot={<Hash size={12} />}
            />
            <span className="showcase-label">Primary</span>
          </div>
          <div className="showcase-item">
            <SplitTag 
              primaryTag={{
                text: "Success",
                variant: TagVariant.SUBTLE,
                status: TagStatus.SUCCESS,
              }}
              leadingSlot={<Hash size={12} />}
            />
            <span className="showcase-label">Success</span>
          </div>
          <div className="showcase-item">
            <SplitTag 
              primaryTag={{
                text: "Warning",
                variant: TagVariant.NO_FILL,
                status: TagStatus.WARNING,
              }}
              leadingSlot={<Hash size={12} />}
            />
            <span className="showcase-label">Warning</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SplitTagDemo; 