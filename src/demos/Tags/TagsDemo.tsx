import React from "react";
import { Hash, Filter } from "lucide-react";
import {
  Tag,
  TagVariant,
  TagStatus,
  TagSize,
  TagShape
} from "../../../lib/components/Tags";

const TagsDemo: React.FC = () => {
  return (
    <div className="component-section">
      <header className="component-header">
        <h1 className="component-title">Tag Component</h1>
        <p className="component-description">
          Versatile tag components with various variants, statuses, and sizes.
        </p>
      </header>

      {/* Tag Variants */}
      <section className="showcase-section">
        <h2 className="showcase-title">Tag Variants</h2>
        <div className="showcase-container">
          <div className="showcase-item">
            <Tag text="No Fill" variant={TagVariant.NO_FILL} leadingSlot={<Hash size={12} />} />
            <span className="showcase-label">No Fill</span>
          </div>
          <div className="showcase-item">
            <Tag text="Attentive" variant={TagVariant.ATTENTIVE} leadingSlot={<Hash size={12} />} />
            <span className="showcase-label">Attentive</span>
          </div>
          <div className="showcase-item">
            <Tag text="Subtle" variant={TagVariant.SUBTLE} leadingSlot={<Hash size={12} />} />
            <span className="showcase-label">Subtle</span>
          </div>
        </div>
      </section>

      {/* Tag Statuses */}
      <section className="showcase-section">
        <h2 className="showcase-title">Tag Statuses</h2>
        <div className="showcase-container">
          <div className="showcase-item">
            <Tag text="Neutral" status={TagStatus.NEUTRAL} leadingSlot={<Hash size={12} />} />
            <span className="showcase-label">Neutral</span>
          </div>
          <div className="showcase-item">
            <Tag text="Primary" status={TagStatus.PRIMARY} leadingSlot={<Hash size={12} />} />
            <span className="showcase-label">Primary</span>
          </div>
          <div className="showcase-item">
            <Tag text="Success" status={TagStatus.SUCCESS} leadingSlot={<Hash size={12} />} />
            <span className="showcase-label">Success</span>
          </div>
          <div className="showcase-item">
            <Tag text="Error" status={TagStatus.ERROR} leadingSlot={<Hash size={12} />} />
            <span className="showcase-label">Error</span>
          </div>
          <div className="showcase-item">
            <Tag text="Warning" status={TagStatus.WARNING} leadingSlot={<Hash size={12} />} />
            <span className="showcase-label">Warning</span>
          </div>
          <div className="showcase-item">
            <Tag text="Purple" status={TagStatus.PURPLE} leadingSlot={<Hash size={12} />} />
            <span className="showcase-label">Purple</span>
          </div>
        </div>
      </section>

      {/* Tag Sizes */}
      <section className="showcase-section">
        <h2 className="showcase-title">Tag Sizes</h2>
        <div className="showcase-container">
          <div className="showcase-item">
            <Tag text="Extra Small" size={TagSize.XS} leadingSlot={<Hash size={10} />} />
            <span className="showcase-label">XS</span>
          </div>
          <div className="showcase-item">
            <Tag text="Small" size={TagSize.SM} leadingSlot={<Hash size={12} />} />
            <span className="showcase-label">SM</span>
          </div>
          <div className="showcase-item">
            <Tag text="Medium" size={TagSize.MD} leadingSlot={<Hash size={12} />} />
            <span className="showcase-label">MD</span>
          </div>
          <div className="showcase-item">
            <Tag text="Large" size={TagSize.LG} leadingSlot={<Hash size={14} />} />
            <span className="showcase-label">LG</span>
          </div>
        </div>
      </section>

      {/* Tag Shapes */}
      <section className="showcase-section">
        <h2 className="showcase-title">Tag Shapes</h2>
        <div className="showcase-container">
          <div className="showcase-item">
            <Tag text="Rounded" shape={TagShape.ROUNDED} leadingSlot={<Hash size={12} />} />
            <span className="showcase-label">Rounded</span>
          </div>
          <div className="showcase-item">
            <Tag text="Squarical" shape={TagShape.SQUARICAL} leadingSlot={<Hash size={12} />} />
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
                <div style={{ 
                  backgroundColor: 'rgba(0,0,0,0.1)', 
                  padding: '0 4px', 
                  borderRadius: '4px', 
                  marginLeft: '2px',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <span style={{ fontSize: '10px', marginRight: '2px' }}>5</span>
                  <Filter size={10} />
                </div>
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