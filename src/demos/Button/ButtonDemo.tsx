import React from "react";
import { Button } from "../../../lib/components/Button";
import {
  ButtonType,
  ButtonSize,
  ButtonSubType,
} from "../../../lib/components/Button/types";
import {
  Send,
  Mail,
  Settings,
  ChevronRight,
  Bell,
  Trash,
  Check,
  Plus,
  Circle,
  CircleAlert,
} from "lucide-react";
import "./ButtonDemo.css";
import ButtonV2 from "../../../lib/components/ButtonV2/ButtonV2";
import {
  ButtonSizeV2,
  ButtonSubTypeV2,
  ButtonTypeV2,
} from "../../../lib/components/ButtonV2/types";

const ButtonDemo: React.FC = () => {
  const buttonTypes = [
    {
      type: ButtonType.PRIMARY,
      label: "Primary",
      icon: Send,
      color: "#0561E2",
    },
    {
      type: ButtonType.SECONDARY,
      label: "Secondary",
      icon: Mail,
      color: "#666",
    },
    { type: ButtonType.DANGER, label: "Danger", icon: Trash, color: "#E53935" },
    {
      type: ButtonType.SUCCESS,
      label: "Success",
      icon: Check,
      color: "#2E7D32",
    },
  ];

  const buttonSizes = [
    { size: ButtonSize.SMALL, label: "Small" },
    { size: ButtonSize.MEDIUM, label: "Medium" },
    { size: ButtonSize.LARGE, label: "Large" },
  ];

  const buttonSubTypes = [
    { subType: ButtonSubType.DEFAULT, label: "Default" },
    { subType: ButtonSubType.ICON_ONLY, label: "Icon Only" },
    { subType: ButtonSubType.LINK, label: "Link" },
    { subType: ButtonSubType.PLAIN_ICON, label: "Plain Icon" },
  ];

  // Additional states to display
  const buttonStates = [
    { state: "default", label: "Default" },
    { state: "disabled", label: "Disabled" },
  ];

  return (
    <div className="button-demo">
      <div
        className="button-grid"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginBottom: 100,
        }}
      >
        <ButtonV2
          text="Button"
          buttonType={ButtonTypeV2.PRIMARY}
          onClick={() => alert("Primary")}

        />
        <ButtonV2
          text="Button"
          buttonType={ButtonTypeV2.SECONDARY}
          onClick={() => alert("Secondary")}
        />
        <ButtonV2
          text="Button"
          buttonType={ButtonTypeV2.DANGER}
          onClick={() => alert("Danger")}
        />
        <ButtonV2
          text="Button"
          buttonType={ButtonTypeV2.SUCCESS}
          onClick={() => alert("Success")}
        />
      </div>
      <div
        className="button-grid"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginBottom: 100,
        }}
      >
        <ButtonV2
          leadingIcon={<CircleAlert size={16} />}
          buttonType={ButtonTypeV2.PRIMARY}
          subType={ButtonSubTypeV2.ICON_ONLY}
          // onClick={() => alert("Primary")}
        />
        <ButtonV2
          leadingIcon={<CircleAlert size={16} />}
          buttonType={ButtonTypeV2.SECONDARY}
          subType={ButtonSubTypeV2.ICON_ONLY}
          // onClick={() => alert("Secondary")}
        />
        <ButtonV2
          leadingIcon={<CircleAlert size={16} />}
          buttonType={ButtonTypeV2.DANGER}
          subType={ButtonSubTypeV2.ICON_ONLY}
          // onClick={() => alert("Danger")}
        />
        <ButtonV2
          leadingIcon={<CircleAlert size={16} />}
          buttonType={ButtonTypeV2.SUCCESS}
          subType={ButtonSubTypeV2.ICON_ONLY}
          // onClick={() => alert("Success")}
        />
      </div>

      <div
        className="button-grid"
        style={{ display: "flex", gap: 10, marginBottom: 100 }}
      >
        <ButtonV2
          text="Button"
          buttonType={ButtonTypeV2.PRIMARY}
          subType={ButtonSubTypeV2.INLINE}
          onClick={() => alert("Primary")}
        />
        <ButtonV2
          text="Button"
          buttonType={ButtonTypeV2.SECONDARY}
          subType={ButtonSubTypeV2.INLINE}
          onClick={() => alert("Secondary")}
        />
        <ButtonV2
          text="Button"
          buttonType={ButtonTypeV2.DANGER}
          subType={ButtonSubTypeV2.INLINE}
          onClick={() => alert("Danger")}
        />
        <ButtonV2
          text="Button"
          buttonType={ButtonTypeV2.SUCCESS}
          subType={ButtonSubTypeV2.INLINE}
          onClick={() => alert("Success")}
        />
      </div>

      <h1>Button Component Demo</h1>

      <div className="demo-section">
        <h2>Button Types</h2>
        <div className="button-grid">
          {buttonTypes.map(({ type, label, icon: Icon }) => (
            <div key={type} className="button-card">
              <h3>{label}</h3>
              <div className="button-sample">
                <Button
                  buttonType={type}
                  text={`${label} Button`}
                  leadingIcon={Icon}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="demo-section">
        <h2>Button Sizes</h2>
        <div className="button-grid">
          {buttonSizes.map(({ size, label }) => (
            <div key={size} className="button-card">
              <h3>{label}</h3>
              <div className="button-sample">
                <Button
                  size={size}
                  text={`${label} Button`}
                  leadingIcon={Send}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="demo-section">
        <h2>Button SubTypes</h2>
        <div className="button-grid">
          {buttonSubTypes.map(({ subType, label }) => (
            <div key={subType} className="button-card">
              <h3>{label}</h3>
              <div className="button-sample">
                <Button
                  subType={subType}
                  text={
                    subType !== ButtonSubType.ICON_ONLY &&
                    subType !== ButtonSubType.PLAIN_ICON
                      ? `${label} Button`
                      : undefined
                  }
                  leadingIcon={Send}
                  trailingIcon={
                    subType === ButtonSubType.DEFAULT ? ChevronRight : undefined
                  }
                  ariaLabel={
                    subType === ButtonSubType.ICON_ONLY ||
                    subType === ButtonSubType.PLAIN_ICON
                      ? "Icon button"
                      : undefined
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="demo-section">
        <h2>Button States</h2>
        <div className="button-grid">
          {buttonStates.map(({ state, label }) => (
            <div key={state} className="button-card">
              <h3>{label}</h3>
              <div className="button-sample">
                <Button
                  text={`${label} State`}
                  leadingIcon={Send}
                  isDisabled={state === "disabled"}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="demo-section">
        <h2>Comprehensive Demo - All Types × Sizes</h2>
        <div className="comprehensive-grid">
          {buttonTypes.map(({ type, label, icon: Icon }) => (
            <div key={type} className="type-group">
              <h3>{label} Buttons</h3>
              <div className="button-row">
                {buttonSizes.map(({ size, label: sizeLabel }) => (
                  <div key={`${type}-${size}`} className="button-with-label">
                    <span className="size-label">{sizeLabel}</span>
                    <Button
                      buttonType={type}
                      size={size}
                      text={`${label} Button`}
                      leadingIcon={Icon}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="demo-section">
        <h2>Comprehensive Demo - All Types × SubTypes</h2>
        <div className="comprehensive-grid">
          {buttonTypes.map(({ type, label, icon: Icon }) => (
            <div key={type} className="type-group">
              <h3>{label} Buttons</h3>
              <div className="button-row">
                {buttonSubTypes.map(({ subType, label: subTypeLabel }) => (
                  <div key={`${type}-${subType}`} className="button-with-label">
                    <span className="subtype-label">{subTypeLabel}</span>
                    <Button
                      buttonType={type}
                      subType={subType}
                      text={
                        subType !== ButtonSubType.ICON_ONLY &&
                        subType !== ButtonSubType.PLAIN_ICON
                          ? `${subTypeLabel}`
                          : undefined
                      }
                      leadingIcon={Icon}
                      trailingIcon={
                        subType === ButtonSubType.DEFAULT
                          ? ChevronRight
                          : undefined
                      }
                      ariaLabel={
                        subType === ButtonSubType.ICON_ONLY ||
                        subType === ButtonSubType.PLAIN_ICON
                          ? "Icon button"
                          : undefined
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="demo-section">
        <h2>Loading State</h2>
        <div className="button-grid">
          {buttonTypes.map(({ type, label }) => (
            <div key={`${type}-loading`} className="button-card">
              <h3>{label} Loading</h3>
              <div className="button-sample">
                <Button buttonType={type} text="Loading..." isLoading={true} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="demo-section">
        <h2>Example Use Cases</h2>

        <div className="use-case-card">
          <h3>Form Actions</h3>
          <div className="form-example">
            <div className="form-fields">
              <label>Name</label>
              <input type="text" placeholder="John Doe" disabled />
              <label>Email</label>
              <input type="email" placeholder="john@example.com" disabled />
            </div>
            <div className="form-actions">
              <Button buttonType={ButtonType.SECONDARY} text="Cancel" />
              <Button
                buttonType={ButtonType.PRIMARY}
                text="Submit"
                trailingIcon={ChevronRight}
              />
            </div>
          </div>
        </div>

        <div className="use-case-card">
          <h3>Action Bar</h3>
          <div className="action-bar-example">
            <Button
              size={ButtonSize.SMALL}
              subType={ButtonSubType.PLAIN_ICON}
              leadingIcon={Plus}
              ariaLabel="Add item"
            />
            <Button
              size={ButtonSize.SMALL}
              subType={ButtonSubType.PLAIN_ICON}
              leadingIcon={Settings}
              ariaLabel="Settings"
            />
            <div className="spacer"></div>
            <Button
              size={ButtonSize.SMALL}
              buttonType={ButtonType.DANGER}
              text="Delete"
              leadingIcon={Trash}
            />
          </div>
        </div>

        <div className="use-case-card">
          <h3>Notification Panel</h3>
          <div className="notification-example">
            <div className="notification-header">
              <h4>New Message</h4>
              <Button
                subType={ButtonSubType.PLAIN_ICON}
                size={ButtonSize.SMALL}
                leadingIcon={Bell}
                ariaLabel="Notifications"
              />
            </div>
            <p>You have a new message from the support team.</p>
            <div className="notification-actions">
              <Button
                size={ButtonSize.SMALL}
                buttonType={ButtonType.SECONDARY}
                subType={ButtonSubType.LINK}
                text="Dismiss"
              />
              <Button
                size={ButtonSize.SMALL}
                buttonType={ButtonType.PRIMARY}
                text="View Message"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonDemo;
