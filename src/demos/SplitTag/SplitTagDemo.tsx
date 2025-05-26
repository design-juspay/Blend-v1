import React from "react";
import { Tag, TagV2Variant } from "../../../lib/main";

const SplitTagDemo: React.FC = () => {
  return (
    <div className="component-section">
      <header className="component-header">
        <h1 className="component-title">SplitTag Component</h1>
        <p className="component-description">
          Split tags combine two tags into a single connected component with
          various styling options.
        </p>
      </header>

      {/* <SplitTag primaryTag={{ text: "Primary Tag" }} variant/> */}
      <Tag text="Primary Tag" variant={TagV2Variant.ATTENTIVE} />
    </div>
  );
};

export default SplitTagDemo; 