import React from "react";
import { ArrowRight, Send } from "lucide-react";
import {
  Button,
  ButtonSubType,
  ButtonType,
  ButtonSize,
} from "../../../lib/components/Button";

const ButtonDemo: React.FC = () => {
  return (
    <div className="component-section">
      <header className="component-header">
        <h1 className="component-title">Button Component</h1>
        <p className="component-description">
          Versatile button components with various types, sizes, and states.
        </p>
      </header>

      {/* Primary Buttons */}
      <section className="showcase-section">
        <h2 className="showcase-title">Primary Buttons</h2>
        <div className="showcase-container">
          <div className="showcase-item">
            <Button text="Send Message" trailingIcon={ArrowRight} />
            <span className="showcase-label">With Trailing Icon</span>
          </div>
          <div className="showcase-item">
            <Button text="Send Message" leadingIcon={Send} />
            <span className="showcase-label">With Leading Icon</span>
          </div>
          <div className="showcase-item">
            <Button
              subType={ButtonSubType.ICON_ONLY}
              ariaLabel="Send message"
              leadingIcon={Send}
            />
            <span className="showcase-label">Icon Only</span>
          </div>
        </div>
      </section>

      {/* Secondary Buttons */}
      <section className="showcase-section">
        <h2 className="showcase-title">Secondary Buttons</h2>
        <div className="showcase-container">
          <div className="showcase-item">
            <Button
              buttonType={ButtonType.SECONDARY}
              text="Send Message"
              trailingIcon={ArrowRight}
            />
            <span className="showcase-label">With Trailing Icon</span>
          </div>
          <div className="showcase-item">
            <Button
              buttonType={ButtonType.SECONDARY}
              text="Send Message"
              leadingIcon={Send}
            />
            <span className="showcase-label">With Leading Icon</span>
          </div>
          <div className="showcase-item">
            <Button
              buttonType={ButtonType.SECONDARY}
              subType={ButtonSubType.ICON_ONLY}
              ariaLabel="Send message"
              leadingIcon={Send}
            />
            <span className="showcase-label">Icon Only</span>
          </div>
        </div>
      </section>

      {/* Danger Buttons */}
      <section className="showcase-section">
        <h2 className="showcase-title">Danger Buttons</h2>
        <div className="showcase-container">
          <div className="showcase-item">
            <Button
              buttonType={ButtonType.DANGER}
              text="Send Message"
              trailingIcon={ArrowRight}
            />
            <span className="showcase-label">With Trailing Icon</span>
          </div>
          <div className="showcase-item">
            <Button
              buttonType={ButtonType.DANGER}
              text="Send Message"
              leadingIcon={Send}
            />
            <span className="showcase-label">With Leading Icon</span>
          </div>
          <div className="showcase-item">
            <Button
              buttonType={ButtonType.DANGER}
              subType={ButtonSubType.ICON_ONLY}
              ariaLabel="Send message"
              leadingIcon={Send}
            />
            <span className="showcase-label">Icon Only</span>
          </div>
        </div>
      </section>

      {/* Success Buttons */}
      <section className="showcase-section">
        <h2 className="showcase-title">Success Buttons</h2>
        <div className="showcase-container">
          <div className="showcase-item">
            <Button
              buttonType={ButtonType.SUCCESS}
              text="Send Message"
              trailingIcon={ArrowRight}
            />
            <span className="showcase-label">With Trailing Icon</span>
          </div>
          <div className="showcase-item">
            <Button
              buttonType={ButtonType.SUCCESS}
              text="Send Message"
              leadingIcon={Send}
            />
            <span className="showcase-label">With Leading Icon</span>
          </div>
          <div className="showcase-item">
            <Button
              buttonType={ButtonType.SUCCESS}
              subType={ButtonSubType.ICON_ONLY}
              ariaLabel="Send message"
              leadingIcon={Send}
            />
            <span className="showcase-label">Icon Only</span>
          </div>
        </div>
      </section>

      {/* Button Sizes */}
      <section className="showcase-section">
        <h2 className="showcase-title">Button Sizes</h2>
        <div className="showcase-container">
          <div className="showcase-item">
            <Button
              size={ButtonSize.SMALL}
              text="Small Button"
              trailingIcon={ArrowRight}
            />
            <span className="showcase-label">Small</span>
          </div>
          <div className="showcase-item">
            <Button
              size={ButtonSize.MEDIUM}
              text="Medium Button"
              trailingIcon={ArrowRight}
            />
            <span className="showcase-label">Medium</span>
          </div>
          <div className="showcase-item">
            <Button
              size={ButtonSize.LARGE}
              text="Large Button"
              trailingIcon={ArrowRight}
            />
            <span className="showcase-label">Large</span>
          </div>
        </div>
        <div className="showcase-container mt-4">
          <div className="showcase-item">
            <Button
              size={ButtonSize.SMALL}
              subType={ButtonSubType.ICON_ONLY}
              ariaLabel="Send message"
              leadingIcon={Send}
            />
            <span className="showcase-label">Small Icon</span>
          </div>
          <div className="showcase-item">
            <Button
              size={ButtonSize.MEDIUM}
              subType={ButtonSubType.ICON_ONLY}
              ariaLabel="Send message"
              leadingIcon={Send}
            />
            <span className="showcase-label">Medium Icon</span>
          </div>
          <div className="showcase-item">
            <Button
              size={ButtonSize.LARGE}
              subType={ButtonSubType.ICON_ONLY}
              ariaLabel="Send message"
              leadingIcon={Send}
            />
            <span className="showcase-label">Large Icon</span>
          </div>
        </div>
      </section>

      {/* Link Buttons */}
      <section className="showcase-section">
        <h2 className="showcase-title">Link Buttons</h2>
        <div className="showcase-container">
          <div className="showcase-item">
            <Button
              subType={ButtonSubType.LINK}
              text="Primary Link"
              trailingIcon={ArrowRight}
            />
            <span className="showcase-label">Primary</span>
          </div>
          <div className="showcase-item">
            <Button
              buttonType={ButtonType.SECONDARY}
              subType={ButtonSubType.LINK}
              text="Secondary Link"
              trailingIcon={ArrowRight}
            />
            <span className="showcase-label">Secondary</span>
          </div>
          <div className="showcase-item">
            <Button
              buttonType={ButtonType.DANGER}
              subType={ButtonSubType.LINK}
              text="Danger Link"
              trailingIcon={ArrowRight}
            />
            <span className="showcase-label">Danger</span>
          </div>
          <div className="showcase-item">
            <Button
              buttonType={ButtonType.SUCCESS}
              subType={ButtonSubType.LINK}
              text="Success Link"
              trailingIcon={ArrowRight}
            />
            <span className="showcase-label">Success</span>
          </div>
        </div>
      </section>

      {/* States Section */}
      <section className="showcase-section">
        <h2 className="showcase-title">Button States</h2>
        
        {/* Disabled Buttons */}
        <h3 className="showcase-subtitle">Disabled</h3>
        <div className="showcase-container">
          <div className="showcase-item">
            <Button isDisabled text="Primary" trailingIcon={ArrowRight} />
            <span className="showcase-label">Primary</span>
          </div>
          <div className="showcase-item">
            <Button
              buttonType={ButtonType.SECONDARY}
              isDisabled
              text="Secondary"
              trailingIcon={ArrowRight}
            />
            <span className="showcase-label">Secondary</span>
          </div>
          <div className="showcase-item">
            <Button
              buttonType={ButtonType.DANGER}
              isDisabled
              text="Danger"
              trailingIcon={ArrowRight}
            />
            <span className="showcase-label">Danger</span>
          </div>
          <div className="showcase-item">
            <Button
              buttonType={ButtonType.SUCCESS}
              isDisabled
              text="Success"
              trailingIcon={ArrowRight}
            />
            <span className="showcase-label">Success</span>
          </div>
        </div>
        
        {/* Loading Buttons */}
        <h3 className="showcase-subtitle">Loading</h3>
        <div className="showcase-container">
          <div className="showcase-item">
            <Button isLoading text="Primary" />
            <span className="showcase-label">Primary</span>
          </div>
          <div className="showcase-item">
            <Button buttonType={ButtonType.SECONDARY} isLoading text="Secondary" />
            <span className="showcase-label">Secondary</span>
          </div>
          <div className="showcase-item">
            <Button buttonType={ButtonType.DANGER} isLoading text="Danger" />
            <span className="showcase-label">Danger</span>
          </div>
          <div className="showcase-item">
            <Button buttonType={ButtonType.SUCCESS} isLoading text="Success" />
            <span className="showcase-label">Success</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ButtonDemo; 