import React from "react";
import { Hash, Filter, ArrowRight, Tag as TagIcon, CheckCircle, AlertCircle } from "lucide-react";
import { SplitTag } from "../../../lib/components/SplitTag/SplitTag";
import { TagStatus, TagSize, TagVariant, TagShape } from "../../../lib/components/Tags/types";

const SplitTagDemo: React.FC = () => {
  return (
    <div className="component-demo">
      <div className="demo-header">
        <h1 className="component-title">SplitTag Component</h1>
        <h2 className="component-subtitle">Connected dual-section tags for key-value pairs and categorized information</h2>
      </div>

      <div className="section-header">
        <h2 className="heading-2">Basic Examples</h2>
      </div>
      <div className="section-divider"></div>
      
      <div className="demo-row">
        <div className="demo-card">
          <h3 className="heading-4">Split Tag (Two Sections)</h3>
          <div className="demo-item">
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
          </div>
          <p className="demo-description">
            Standard split tag with filled primary section and outlined secondary section.
          </p>
        </div>
        
        <div className="demo-card">
          <h3 className="heading-4">Single Tag Fallback</h3>
          <div className="demo-item">
            <SplitTag 
              primaryTag={{
                text: "Single Tag",
                variant: TagVariant.ATTENTIVE,
                status: TagStatus.PRIMARY
              }}
              // No secondaryTag = renders as regular Tag
            />
          </div>
          <p className="demo-description">
            Without a secondary tag, SplitTag automatically renders as a standard Tag component.
          </p>
        </div>
      </div>

      <div className="section-header">
        <h2 className="heading-2">Status Variants</h2>
      </div>
      <div className="section-divider"></div>
      
      <div className="demo-row">
        <div className="demo-card">
          <h3 className="heading-4">Neutral</h3>
          <div className="demo-item">
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
              leadingSlot={<TagIcon size={12} />}
            />
          </div>
          <p className="demo-description">
            Neutral status for general information display.
          </p>
        </div>
        
        <div className="demo-card">
          <h3 className="heading-4">Warning</h3>
          <div className="demo-item">
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
              leadingSlot={<AlertCircle size={12} />}
            />
          </div>
          <p className="demo-description">
            Warning status for items requiring attention.
          </p>
        </div>
        
        <div className="demo-card">
          <h3 className="heading-4">Success</h3>
          <div className="demo-item">
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
              leadingSlot={<CheckCircle size={12} />}
            />
          </div>
          <p className="demo-description">
            Success status for completed or confirmed items.
          </p>
        </div>
        
        <div className="demo-card">
          <h3 className="heading-4">Error</h3>
          <div className="demo-item">
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
          </div>
          <p className="demo-description">
            Error status for failed or critical items.
          </p>
        </div>
      </div>

      <div className="section-header">
        <h2 className="heading-2">Mixed Variants</h2>
      </div>
      <div className="section-divider"></div>
      
      <div className="demo-row">
        <div className="demo-card">
          <h3 className="heading-4">Mixed Variants</h3>
          <div className="demo-item">
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
          </div>
          <p className="demo-description">
            Different variant styles for primary and secondary sections.
          </p>
        </div>
        
        <div className="demo-card">
          <h3 className="heading-4">Subtle + Attentive</h3>
          <div className="demo-item">
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
          </div>
          <p className="demo-description">
            Combining subtle and attentive variants with different statuses.
          </p>
        </div>
      </div>

      <div className="section-header">
        <h2 className="heading-2">Different Sizes</h2>
      </div>
      <div className="section-divider"></div>
      
      <div className="demo-row">
        <div className="demo-card">
          <h3 className="heading-4">Extra Small (XS)</h3>
          <div className="demo-item">
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
          </div>
          <p className="demo-description">
            Compact size for dense UIs or minimal badges.
          </p>
        </div>
        
        <div className="demo-card">
          <h3 className="heading-4">Small (SM)</h3>
          <div className="demo-item">
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
          </div>
          <p className="demo-description">
            Small size for space-constrained layouts.
          </p>
        </div>
        
        <div className="demo-card">
          <h3 className="heading-4">Medium (MD)</h3>
          <div className="demo-item">
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
          </div>
          <p className="demo-description">
            Standard size appropriate for most use cases.
          </p>
        </div>
        
        <div className="demo-card">
          <h3 className="heading-4">Large (LG)</h3>
          <div className="demo-item">
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
          </div>
          <p className="demo-description">
            Large size for improved visibility and accessibility.
          </p>
        </div>
      </div>

      <div className="section-header">
        <h2 className="heading-2">Different Shapes</h2>
      </div>
      <div className="section-divider"></div>
      
      <div className="demo-row">
        <div className="demo-card">
          <h3 className="heading-4">Rounded</h3>
          <div className="demo-item">
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
          </div>
          <p className="demo-description">
            Fully rounded corners for a softer appearance.
          </p>
        </div>
        
        <div className="demo-card">
          <h3 className="heading-4">Squarical</h3>
          <div className="demo-item">
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
          </div>
          <p className="demo-description">
            Slightly rounded corners for a more structured look.
          </p>
        </div>
      </div>

      <div className="section-header">
        <h2 className="heading-2">With Slots</h2>
      </div>
      <div className="section-divider"></div>
      
      <div className="demo-row">
        <div className="demo-card">
          <h3 className="heading-4">Leading Slot</h3>
          <div className="demo-item">
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
          </div>
          <p className="demo-description">
            Icon before the primary tag text for visual categorization.
          </p>
        </div>
        
        <div className="demo-card">
          <h3 className="heading-4">Trailing Slot</h3>
          <div className="demo-item">
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
          </div>
          <p className="demo-description">
            Icon after the secondary tag text, often used for actions.
          </p>
        </div>
        
        <div className="demo-card">
          <h3 className="heading-4">Both Slots</h3>
          <div className="demo-item">
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
          </div>
          <p className="demo-description">
            Using both leading and trailing slots for comprehensive visual context.
          </p>
        </div>
      </div>

      <div className="section-header">
        <h2 className="heading-2">Single Tag Variant Examples</h2>
      </div>
      <div className="section-divider"></div>
      
      <div className="demo-row">
        <div className="demo-description-full">
          When no secondaryTag is provided, SplitTag renders as a regular Tag component, 
          maintaining a consistent API while supporting both split and single tag use cases.
        </div>
      </div>
      
      <div className="demo-row">
        <div className="demo-card">
          <h3 className="heading-4">Primary</h3>
          <div className="demo-item">
            <SplitTag 
              primaryTag={{
                text: "Primary",
                variant: TagVariant.ATTENTIVE,
                status: TagStatus.PRIMARY,
                onClick: () => console.log('Tag clicked')
              }}
              leadingSlot={<Hash size={12} />}
            />
          </div>
          <p className="demo-description">
            Primary single tag with leading icon and click handler.
          </p>
        </div>
        
        <div className="demo-card">
          <h3 className="heading-4">Success</h3>
          <div className="demo-item">
            <SplitTag 
              primaryTag={{
                text: "Success",
                variant: TagVariant.SUBTLE,
                status: TagStatus.SUCCESS,
              }}
              leadingSlot={<CheckCircle size={12} />}
            />
          </div>
          <p className="demo-description">
            Success single tag with subtle styling and checkmark icon.
          </p>
        </div>
        
        <div className="demo-card">
          <h3 className="heading-4">Warning</h3>
          <div className="demo-item">
            <SplitTag 
              primaryTag={{
                text: "Warning",
                variant: TagVariant.NO_FILL,
                status: TagStatus.WARNING,
              }}
              leadingSlot={<AlertCircle size={12} />}
            />
          </div>
          <p className="demo-description">
            Warning single tag with no-fill variant and alert icon.
          </p>
        </div>
      </div>
      
      <style>
        {`
          .component-demo {
            padding: 1rem;
            font-family: sans-serif;
          }
          
          .demo-header {
            margin-bottom: 2rem;
          }
          
          .component-title {
            font-size: 2rem;
            margin-bottom: 0.5rem;
          }
          
          .component-subtitle {
            font-size: 1.125rem;
            font-weight: normal;
            color: #666;
            margin-bottom: 1.5rem;
          }
          
          .description-block {
            display: flex;
            align-items: flex-start;
            gap: 0.75rem;
            background-color: #f5f7f9;
            padding: 1rem;
            border-radius: 0.5rem;
            margin-bottom: 1.5rem;
          }
          
          .section-header {
            margin-top: 2rem;
            margin-bottom: 0.5rem;
          }
          
          .section-divider {
            height: 1px;
            background-color: #e0e0e0;
            margin-bottom: 1.5rem;
          }
          
          .heading-2 {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
          }
          
          .heading-4 {
            font-size: 1.125rem;
            font-weight: 600;
            margin-bottom: 0.75rem;
          }
          
          .demo-row {
            display: flex;
            flex-wrap: wrap;
            gap: 1.5rem;
            margin-bottom: 2rem;
          }
          
          .demo-card {
            flex: 1;
            min-width: 300px;
            border: 1px solid #e0e0e0;
            border-radius: 0.5rem;
            padding: 1rem;
            background-color: white;
          }
          
          .demo-item {
            margin-bottom: 1rem;
            padding: 1rem;
            background-color: #f5f7f9;
            border-radius: 0.5rem;
            display: flex;
            justify-content: center;
          }
          
          .demo-description {
            font-size: 0.875rem;
            color: #666;
          }
          
          .demo-description-full {
            width: 100%;
            font-size: 0.9375rem;
            color: #555;
            background-color: #f5f7f9;
            padding: 0.75rem;
            border-radius: 0.5rem;
            border-left: 3px solid #3182ce;
          }
        `}
      </style>
    </div>
  );
};

export default SplitTagDemo; 