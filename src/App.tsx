import "./App.css";
import { ArrowRight, Send } from "lucide-react";
import {
  Button,
  ButtonType,
  ButtonSize,
  ButtonSubType,
} from "../lib/components/Button";

function App() {
  return (
    <div className="container">
      <h1 className="heading-1">Button Component Library</h1>

      {/* Primary Buttons */}
      <section className="section">
        <h2 className="heading-2">Primary Buttons</h2>
        <div className="flex flex-wrap gap-4 items-center mb-4">
          <Button text="Send Message" trailingIcon={ArrowRight} />
          <Button text="Send Message" leadingIcon={Send} />
          <Button
            subType={ButtonSubType.ICON_ONLY}
            ariaLabel="Send message"
            leadingIcon={Send}
          />
        </div>
      </section>

      {/* Secondary Buttons */}
      <section className="section">
        <h2 className="heading-2">Secondary Buttons</h2>
        <div className="flex flex-wrap gap-4 items-center mb-4">
          <Button
            buttonType={ButtonType.SECONDARY}
            text="Send Message"
            trailingIcon={ArrowRight}
          />
          <Button
            buttonType={ButtonType.SECONDARY}
            text="Send Message"
            leadingIcon={Send}
          />
          <Button
            buttonType={ButtonType.SECONDARY}
            subType={ButtonSubType.ICON_ONLY}
            ariaLabel="Send message"
            leadingIcon={Send}
          />
        </div>
      </section>

      {/* Danger Buttons */}
      <section className="section">
        <h2 className="heading-2">Danger Buttons</h2>
        <div className="flex flex-wrap gap-4 items-center mb-4">
          <Button
            buttonType={ButtonType.DANGER}
            text="Send Message"
            trailingIcon={ArrowRight}
          />
          <Button
            buttonType={ButtonType.DANGER}
            text="Send Message"
            leadingIcon={Send}
          />
          <Button
            buttonType={ButtonType.DANGER}
            subType={ButtonSubType.ICON_ONLY}
            ariaLabel="Send message"
            leadingIcon={Send}
          />
        </div>
      </section>

      {/* Success Buttons */}
      <section className="section">
        <h2 className="heading-2">Success Buttons</h2>
        <div className="flex flex-wrap gap-4 items-center mb-4">
          <Button
            buttonType={ButtonType.SUCCESS}
            text="Send Message"
            trailingIcon={ArrowRight}
          />
          <Button
            buttonType={ButtonType.SUCCESS}
            text="Send Message"
            leadingIcon={Send}
          />
          <Button
            buttonType={ButtonType.SUCCESS}
            subType={ButtonSubType.ICON_ONLY}
            ariaLabel="Send message"
            leadingIcon={Send}
          />
        </div>
      </section>

      {/* Button Sizes */}
      <section className="section">
        <h2 className="heading-2">Button Sizes</h2>
        <div className="flex flex-wrap gap-4 items-center mb-4">
          <Button
            size={ButtonSize.SMALL}
            text="Send Message"
            trailingIcon={ArrowRight}
          />
          <Button
            size={ButtonSize.MEDIUM}
            text="Send Message"
            trailingIcon={ArrowRight}
          />
          <Button
            size={ButtonSize.LARGE}
            text="Send Message"
            trailingIcon={ArrowRight}
          />
        </div>
        <div className="flex flex-wrap gap-4 items-center">
          <Button
            size={ButtonSize.SMALL}
            subType={ButtonSubType.ICON_ONLY}
            ariaLabel="Send message"
            leadingIcon={Send}
          />
          <Button
            size={ButtonSize.MEDIUM}
            subType={ButtonSubType.ICON_ONLY}
            ariaLabel="Send message"
            leadingIcon={Send}
          />
          <Button
            size={ButtonSize.LARGE}
            subType={ButtonSubType.ICON_ONLY}
            ariaLabel="Send message"
            leadingIcon={Send}
          />
        </div>
      </section>

      {/* Link Buttons */}
      <section className="section">
        <h2 className="heading-2">Link Buttons</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button
            subType={ButtonSubType.LINK}
            text="Primary Link"
            trailingIcon={ArrowRight}
          />
          <Button
            buttonType={ButtonType.SECONDARY}
            subType={ButtonSubType.LINK}
            text="Secondary Link"
            trailingIcon={ArrowRight}
          />
          <Button
            buttonType={ButtonType.DANGER}
            subType={ButtonSubType.LINK}
            text="Danger Link"
            trailingIcon={ArrowRight}
          />
          <Button
            buttonType={ButtonType.SUCCESS}
            subType={ButtonSubType.LINK}
            text="Success Link"
            trailingIcon={ArrowRight}
          />
        </div>
      </section>

      {/* Disabled Buttons */}
      <section className="section">
        <h2 className="heading-2">Disabled Buttons</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button isDisabled text="Send Message" trailingIcon={ArrowRight} />
          <Button
            buttonType={ButtonType.SECONDARY}
            isDisabled
            text="Send Message"
            trailingIcon={ArrowRight}
          />
          <Button
            buttonType={ButtonType.DANGER}
            isDisabled
            text="Send Message"
            trailingIcon={ArrowRight}
          />
          <Button
            buttonType={ButtonType.SUCCESS}
            isDisabled
            text="Send Message"
            trailingIcon={ArrowRight}
          />
        </div>
      </section>

      {/* Loading Buttons */}
      <section className="section">
        <h2 className="heading-2">Loading Buttons</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button isLoading text="Loading" />
          <Button buttonType={ButtonType.SECONDARY} isLoading text="Loading" />
          <Button buttonType={ButtonType.DANGER} isLoading text="Loading" />
          <Button buttonType={ButtonType.SUCCESS} isLoading text="Loading" />
        </div>
      </section>

      {/* Example Usage */}
      <section className="section">
        <h2 className="heading-2">Example Usage</h2>
        <div className="card">
          <p>Basic form with buttons:</p>
          <div className="flex gap-4 mt-4">
            <Button buttonType={ButtonType.SECONDARY} text="Cancel" />
            <Button text="Submit" trailingIcon={ArrowRight} />
          </div>
        </div>

        <div className="card card-primary">
          <div className="card-title">Action Required</div>
          <p>Please review and approve the following request.</p>
          <div className="flex justify-between mt-4">
            <Button buttonType={ButtonType.SECONDARY} text="Decline" />
            <Button buttonType={ButtonType.SUCCESS} text="Approve" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
