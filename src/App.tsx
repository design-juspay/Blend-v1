import "./App.css";
import { useState } from "react";
import { ArrowRight, Send, Hash, Filter, ChevronDown } from "lucide-react";
import {
  Button,
  ButtonSubType,
  ButtonType,
  ButtonSize,
} from "../lib/components/Button";
import {
  Tag,
  SplitTag,
  TagVariant,
  TagStatus,
  TagSize,
  TagStyle
} from "../lib/components/Tags";

type ComponentSection = "buttons" | "tags";

function App() {
  const [activeSection, setActiveSection] = useState<ComponentSection>("buttons");

  return (
    <div className="container">
      {/* Simple Navigation */}
      <nav className="nav">
        <button
          className={`nav-item ${activeSection === "buttons" ? "active" : ""}`}
          onClick={() => setActiveSection("buttons")}
        >
          Buttons
        </button>
        <button
          className={`nav-item ${activeSection === "tags" ? "active" : ""}`}
          onClick={() => setActiveSection("tags")}
        >
          Tags
        </button>
      </nav>

      {/* Button Section */}
      {activeSection === "buttons" && (
        <>
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
        </>
      )}

      {/* Tags Section */}
      {activeSection === "tags" && (
        <>
          <h1 className="heading-1">Tags Component Library</h1>

          {/* Tag Variants */}
          <section className="section">
            <h2 className="heading-2">Tag Variants</h2>
            <div className="flex flex-wrap gap-4 items-center mb-4">
              <Tag text="No Fill" variant={TagVariant.NO_FILL} leadingIcon={Hash} />
              <Tag text="Attentive" variant={TagVariant.ATTENTIVE} leadingIcon={Hash} />
              <Tag text="Subtle" variant={TagVariant.SUBTLE} leadingIcon={Hash} />
            </div>
          </section>

          {/* Tag Statuses */}
          <section className="section">
            <h2 className="heading-2">Tag Statuses</h2>
            <div className="flex flex-wrap gap-4 items-center mb-4">
              <Tag text="Neutral" status={TagStatus.NEUTRAL} leadingIcon={Hash} />
              <Tag text="Primary" status={TagStatus.PRIMARY} leadingIcon={Hash} />
              <Tag text="Success" status={TagStatus.SUCCESS} leadingIcon={Hash} />
              <Tag text="Error" status={TagStatus.ERROR} leadingIcon={Hash} />
              <Tag text="Warning" status={TagStatus.WARNING} leadingIcon={Hash} />
              <Tag text="Purple" status={TagStatus.PURPLE} leadingIcon={Hash} />
            </div>
          </section>

          {/* Tag Sizes */}
          <section className="section">
            <h2 className="heading-2">Tag Sizes</h2>
            <div className="flex flex-wrap gap-4 items-center mb-4">
              <Tag text="Extra Small" size={TagSize.XS} leadingIcon={Hash} />
              <Tag text="Small" size={TagSize.SM} leadingIcon={Hash} />
              <Tag text="Medium" size={TagSize.MD} leadingIcon={Hash} />
              <Tag text="Large" size={TagSize.LG} leadingIcon={Hash} />
            </div>
          </section>

          {/* Tag Styles */}
          <section className="section">
            <h2 className="heading-2">Tag Styles</h2>
            <div className="flex flex-wrap gap-4 items-center mb-4">
              <Tag text="Rounded" style={TagStyle.ROUNDED} leadingIcon={Hash} />
              <Tag text="Squarical" style={TagStyle.SQUARICAL} leadingIcon={Hash} />
            </div>
          </section>

          {/* Icon Placement */}
          <section className="section">
            <h2 className="heading-2">Icon Placement</h2>
            <div className="flex flex-wrap gap-4 items-center mb-4">
              <Tag text="Leading Icon" leadingIcon={Hash} />
              <Tag text="Trailing Icon" trailingIcon={Hash} />
              <Tag text="Both Icons" leadingIcon={Hash} trailingIcon={Filter} />
            </div>
          </section>

          {/* Split Tags */}
          <section className="section">
            <h2 className="heading-2">Split Tags</h2>
            <div className="flex flex-wrap gap-4 items-center mb-4">
              <SplitTag 
                text="New" 
                secondaryText="2" 
                variant={TagVariant.ATTENTIVE}
                status={TagStatus.NEUTRAL}
                secondaryVariant={TagVariant.NO_FILL}
                secondaryStatus={TagStatus.NEUTRAL}
              />
              <SplitTag 
                text="Pending" 
                secondaryText="5" 
                variant={TagVariant.ATTENTIVE}
                status={TagStatus.WARNING}
                secondaryVariant={TagVariant.NO_FILL}
                secondaryStatus={TagStatus.WARNING}
              />
              <SplitTag 
                text="Completed" 
                secondaryText="10" 
                variant={TagVariant.ATTENTIVE}
                status={TagStatus.SUCCESS}
                secondaryVariant={TagVariant.NO_FILL}
                secondaryStatus={TagStatus.SUCCESS}
              />
              <SplitTag 
                text="Failed" 
                secondaryText="3" 
                variant={TagVariant.ATTENTIVE}
                status={TagStatus.ERROR}
                secondaryVariant={TagVariant.NO_FILL}
                secondaryStatus={TagStatus.ERROR}
              />
              <SplitTag 
                text="Key" 
                secondaryText="Value" 
                variant={TagVariant.NO_FILL}
                status={TagStatus.NEUTRAL}
                secondaryVariant={TagVariant.ATTENTIVE}
                secondaryStatus={TagStatus.PRIMARY}
              />
            </div>
          </section>
        </>
      )}
    </div>
  );
}

export default App;
