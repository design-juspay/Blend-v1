import React from "react";
import "./ButtonDemo.css";
import ButtonV2 from "../../../lib/components/ButtonV2/ButtonV2";
import {
  ButtonSubTypeV2,
  ButtonTypeV2,
  ButtonSizeV2,
} from "../../../lib/components/ButtonV2/types";
import { Tooltip } from "../../../lib/main";
import {
  User,
  Plus,
  Trash2,
  Check,
  Download,
  Settings,
  Heart,
  Star,
} from "lucide-react";

const ButtonDemo: React.FC = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "1200px" }}>
      {/* Button Types Section */}
      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ marginBottom: "20px", color: "#555" }}>Button Types</h2>
        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            marginBottom: "20px",
          }}
        >
          <ButtonV2
            text="Primary Button"
            buttonType={ButtonTypeV2.PRIMARY}
            onClick={handleClick}
            data-button-for="add"
            data-value="add"
            data-button-status="active"
            data-dynamic-button="false"
            data-custom-value="add"
          />
          <ButtonV2
            text="Secondary Button"
            buttonType={ButtonTypeV2.SECONDARY}
            onClick={handleClick}
          />
          <ButtonV2
            text="Danger Button"
            buttonType={ButtonTypeV2.DANGER}
            onClick={handleClick}
          />
          <ButtonV2
            text="Success Button"
            buttonType={ButtonTypeV2.SUCCESS}
            onClick={handleClick}
          />
        </div>
      </section>

      {/* Button Sizes Section */}
      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ marginBottom: "20px", color: "#555" }}>Button Sizes</h2>
        <div
          style={{
            display: "flex",
            gap: "16px",
            alignItems: "center",
            flexWrap: "wrap",
            marginBottom: "20px",
          }}
        >
          <ButtonV2
            text="Small"
            size={ButtonSizeV2.SMALL}
            buttonType={ButtonTypeV2.PRIMARY}
            onClick={handleClick}
          />
          <ButtonV2
            text="Medium"
            size={ButtonSizeV2.MEDIUM}
            buttonType={ButtonTypeV2.PRIMARY}
            onClick={handleClick}
          />
          <ButtonV2
            text="Large"
            size={ButtonSizeV2.LARGE}
            buttonType={ButtonTypeV2.PRIMARY}
            onClick={handleClick}
          />
        </div>
      </section>

      {/* Button Sub Types Section */}
      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ marginBottom: "20px", color: "#555" }}>
          Button Sub Types
        </h2>

        {/* Default Sub Type */}
        <div style={{ marginBottom: "20px" }}>
          <h3 style={{ marginBottom: "10px", color: "#666" }}>Default</h3>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <ButtonV2
              text="Default Primary"
              buttonType={ButtonTypeV2.PRIMARY}
              subType={ButtonSubTypeV2.DEFAULT}
              onClick={handleClick}
            />
            <ButtonV2
              text="Default Secondary"
              buttonType={ButtonTypeV2.SECONDARY}
              subType={ButtonSubTypeV2.DEFAULT}
              onClick={handleClick}
            />
            <ButtonV2
              text="Default Danger"
              buttonType={ButtonTypeV2.DANGER}
              subType={ButtonSubTypeV2.DEFAULT}
              onClick={handleClick}
            />
            <ButtonV2
              text="Default Success"
              buttonType={ButtonTypeV2.SUCCESS}
              subType={ButtonSubTypeV2.DEFAULT}
              onClick={handleClick}
            />
          </div>
        </div>

        {/* Icon Only Sub Type */}
        <div style={{ marginBottom: "20px" }}>
          <h3 style={{ marginBottom: "10px", color: "#666" }}>Icon Only</h3>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Tooltip content="Primary Icon Button">
              <ButtonV2
                buttonType={ButtonTypeV2.PRIMARY}
                subType={ButtonSubTypeV2.ICON_ONLY}
                leadingIcon={<User size={16} />}
                size={ButtonSizeV2.LARGE}
                onClick={handleClick}
              />
            </Tooltip>
            <Tooltip content="Secondary Icon Button">
              <ButtonV2
                buttonType={ButtonTypeV2.SECONDARY}
                subType={ButtonSubTypeV2.ICON_ONLY}
                leadingIcon={<Settings size={16} />}
                onClick={handleClick}
              />
            </Tooltip>
            <Tooltip content="Danger Icon Button">
              <ButtonV2
                buttonType={ButtonTypeV2.DANGER}
                subType={ButtonSubTypeV2.ICON_ONLY}
                leadingIcon={<Trash2 size={16} />}
                onClick={handleClick}
              />
            </Tooltip>
            <Tooltip content="Success Icon Button">
              <ButtonV2
                buttonType={ButtonTypeV2.SUCCESS}
                subType={ButtonSubTypeV2.ICON_ONLY}
                leadingIcon={<Check size={16} />}
                onClick={handleClick}
              />
            </Tooltip>
          </div>
        </div>

        {/* Inline Sub Type */}
        <div style={{ marginBottom: "20px" }}>
          <h3 style={{ marginBottom: "10px", color: "#666" }}>Inline</h3>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <ButtonV2
              text="Inline Primary"
              buttonType={ButtonTypeV2.PRIMARY}
              subType={ButtonSubTypeV2.INLINE}
              onClick={handleClick}
            />
            <ButtonV2
              text="Inline Secondary"
              buttonType={ButtonTypeV2.SECONDARY}
              subType={ButtonSubTypeV2.INLINE}
              onClick={handleClick}
            />
            <ButtonV2
              text="Inline Danger"
              buttonType={ButtonTypeV2.DANGER}
              subType={ButtonSubTypeV2.INLINE}
              onClick={handleClick}
            />
            <ButtonV2
              text="Inline Success"
              buttonType={ButtonTypeV2.SUCCESS}
              subType={ButtonSubTypeV2.INLINE}
              onClick={handleClick}
            />
          </div>
        </div>
      </section>

      {/* Button with Icons Section */}
      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ marginBottom: "20px", color: "#555" }}>
          Buttons with Icons
        </h2>
        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            marginBottom: "20px",
          }}
        >
          <ButtonV2
            text="Download"
            leadingIcon={<Download size={16} />}
            buttonType={ButtonTypeV2.PRIMARY}
            onClick={handleClick}
          />
          <ButtonV2
            text="Add User"
            leadingIcon={<User size={16} />}
            trailingIcon={<Plus size={16} />}
            buttonType={ButtonTypeV2.SECONDARY}
            onClick={handleClick}
          />
          <ButtonV2
            text="Delete"
            leadingIcon={<Trash2 size={16} />}
            buttonType={ButtonTypeV2.DANGER}
            onClick={handleClick}
          />
          <ButtonV2
            text="Approve"
            leadingIcon={<Check size={16} />}
            buttonType={ButtonTypeV2.SUCCESS}
            onClick={handleClick}
          />
        </div>
      </section>

      {/* Button States Section */}
      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ marginBottom: "20px", color: "#555" }}>Button States</h2>
        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            marginBottom: "20px",
          }}
        >
          <ButtonV2
            text="Normal Button"
            buttonType={ButtonTypeV2.PRIMARY}
            onClick={handleClick}
          />
          <ButtonV2
            text="Loading Button"
            buttonType={ButtonTypeV2.PRIMARY}
            loading={true}
            onClick={handleClick}
          />
          <ButtonV2
            text="Disabled Button"
            buttonType={ButtonTypeV2.PRIMARY}
            disabled={true}
            onClick={handleClick}
          />
        </div>
      </section>

      {/* Full Width Section */}
      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ marginBottom: "20px", color: "#555" }}>
          Full Width Buttons
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            maxWidth: "400px",
          }}
        >
          <ButtonV2
            text="Full Width Primary"
            buttonType={ButtonTypeV2.PRIMARY}
            fullWidth={true}
            onClick={handleClick}
          />
          <ButtonV2
            text="Full Width Secondary"
            buttonType={ButtonTypeV2.SECONDARY}
            fullWidth={true}
            onClick={handleClick}
          />
          <ButtonV2
            text="Full Width with Icons"
            leadingIcon={<Heart size={16} />}
            trailingIcon={<Star size={16} />}
            buttonType={ButtonTypeV2.PRIMARY}
            fullWidth={true}
            justifyContent="space-between"
            onClick={handleClick}
          />
        </div>
      </section>

      {/* Button Group Example */}
      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ marginBottom: "20px", color: "#555" }}>
          Button Group Example
        </h2>
        <div style={{ display: "flex", gap: "0px" }}>
          <ButtonV2
            text="Left"
            buttonType={ButtonTypeV2.PRIMARY}
            buttonGroupPosition="left"
            onClick={handleClick}
          />
          <ButtonV2
            text="Center"
            buttonType={ButtonTypeV2.PRIMARY}
            buttonGroupPosition="center"
            onClick={handleClick}
          />
          <ButtonV2
            text="Right"
            buttonType={ButtonTypeV2.PRIMARY}
            buttonGroupPosition="right"
            onClick={handleClick}
          />
        </div>
      </section>

      {/* Comprehensive Example */}
      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ marginBottom: "20px", color: "#555" }}>
          Comprehensive Examples
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          <div
            style={{
              border: "1px solid #e0e0e0",
              padding: "20px",
              borderRadius: "8px",
            }}
          >
            <h3 style={{ marginBottom: "15px", color: "#666" }}>
              Primary Variants
            </h3>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <ButtonV2
                text="Small Primary"
                size={ButtonSizeV2.SMALL}
                buttonType={ButtonTypeV2.PRIMARY}
                onClick={handleClick}
              />
              <ButtonV2
                text="Medium Primary"
                size={ButtonSizeV2.MEDIUM}
                buttonType={ButtonTypeV2.PRIMARY}
                onClick={handleClick}
              />
              <ButtonV2
                text="Large Primary"
                size={ButtonSizeV2.LARGE}
                buttonType={ButtonTypeV2.PRIMARY}
                onClick={handleClick}
              />
            </div>
          </div>

          <div
            style={{
              border: "1px solid #e0e0e0",
              padding: "20px",
              borderRadius: "8px",
            }}
          >
            <h3 style={{ marginBottom: "15px", color: "#666" }}>
              Secondary Variants
            </h3>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <ButtonV2
                text="Small Secondary"
                size={ButtonSizeV2.SMALL}
                buttonType={ButtonTypeV2.SECONDARY}
                onClick={handleClick}
              />
              <ButtonV2
                text="Medium Secondary"
                size={ButtonSizeV2.MEDIUM}
                buttonType={ButtonTypeV2.SECONDARY}
                onClick={handleClick}
              />
              <ButtonV2
                text="Large Secondary"
                size={ButtonSizeV2.LARGE}
                buttonType={ButtonTypeV2.SECONDARY}
                onClick={handleClick}
              />
            </div>
          </div>

          <div
            style={{
              border: "1px solid #e0e0e0",
              padding: "20px",
              borderRadius: "8px",
            }}
          >
            <h3 style={{ marginBottom: "15px", color: "#666" }}>
              Danger Variants
            </h3>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <ButtonV2
                text="Small Danger"
                size={ButtonSizeV2.SMALL}
                buttonType={ButtonTypeV2.DANGER}
                onClick={handleClick}
              />
              <ButtonV2
                text="Medium Danger"
                size={ButtonSizeV2.MEDIUM}
                buttonType={ButtonTypeV2.DANGER}
                onClick={handleClick}
              />
              <ButtonV2
                text="Large Danger"
                size={ButtonSizeV2.LARGE}
                buttonType={ButtonTypeV2.DANGER}
                onClick={handleClick}
              />
            </div>
          </div>

          <div
            style={{
              border: "1px solid #e0e0e0",
              padding: "20px",
              borderRadius: "8px",
            }}
          >
            <h3 style={{ marginBottom: "15px", color: "#666" }}>
              Success Variants
            </h3>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <ButtonV2
                text="Small Success"
                size={ButtonSizeV2.SMALL}
                buttonType={ButtonTypeV2.SUCCESS}
                onClick={handleClick}
              />
              <ButtonV2
                text="Medium Success"
                size={ButtonSizeV2.MEDIUM}
                buttonType={ButtonTypeV2.SUCCESS}
                onClick={handleClick}
              />
              <ButtonV2
                text="Large Success"
                size={ButtonSizeV2.LARGE}
                buttonType={ButtonTypeV2.SUCCESS}
                onClick={handleClick}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ButtonDemo;
