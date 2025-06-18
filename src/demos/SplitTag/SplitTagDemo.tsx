import React from "react";
import { Tag, TagVariant } from "../../../lib/main";

const SplitTagDemo: React.FC = () => {
  return (
    <div className="component-demo">
      <div className="demo-header">
        <h1 className="component-title">SplitTag Component</h1>
        <p className="component-description">
          Split tags combine two tags into a single connected component with
          various styling options.
        </p>
      </div>

      {/* <SplitTag primaryTag={{ text: "Primary Tag" }} variant/> */}
      <Tag text="Primary Tag" variant={TagVariant.ATTENTIVE} />
    </div>
  );
};

export default SplitTagDemo; 
