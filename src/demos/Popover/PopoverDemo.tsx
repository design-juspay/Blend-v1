import React from "react";
import { Button } from "../../../lib/components/Button";
import Popover from "../../../lib/components/Popover/Popover";
import "./PopoverDemo.css";
import { FOUNDATION_THEME } from "../../../lib/tokens";

const PopoverDemo: React.FC = () => {
  return (
    <div className="popover-demo">
      <h1>Popover Component Demo</h1>
      <div className="demo-section">
        <h2>Popover Sizes</h2>
        <div className="popover-grid">
          <div className="popover-card">
            <h3>Small (sm) - 280px</h3>
            <div className="popover-sample">
              <Popover
                heading="Heading"
                description="This is a popover. It displays additional content or actions when triggered by the user."
                trigger={<Button text="Small Popover" />}
                size="sm"
                primaryAction={{
                  label: "Primary Action",
                  onClick: () => {},
                }}
                secondaryAction={{
                  label: "Secondary Action",
                  onClick: () => {},
                }}
              >
                <div className="popover-content-basic">
                  <p
                    style={{
                      color: FOUNDATION_THEME.colors.gray[500],
                      fontSize: "14px",
                    }}
                  >
                    This is a small popover with 280px width.
                  </p>
                </div>
              </Popover>
            </div>
          </div>

          <div className="popover-card">
            <h3>Medium (md) - 320px</h3>
            <div className="popover-sample">
              <Popover
                heading="Heading"
                description="This is a popover. It displays additional content or actions when triggered by the user."
                trigger={<Button text="Medium Popover" />}
                size="md"
                primaryAction={{
                  label: "Primary Action",
                  onClick: () => {},
                }}
                secondaryAction={{
                  label: "Secondary Action",
                  onClick: () => {},
                }}
              >
                <div className="popover-content-basic">
                  <p
                    style={{
                      color: FOUNDATION_THEME.colors.gray[500],
                      fontSize: "14px",
                    }}
                  >
                    This is a medium popover with 320px width.
                  </p>
                </div>
              </Popover>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopoverDemo;
