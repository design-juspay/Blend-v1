import React from "react";
import { Info, AlertCircle, Settings, Lock, User, Bell, HelpCircle } from "lucide-react";
import Accordion from "../../../lib/components/Accordion/Accordion";
import AccordionItem from "../../../lib/components/Accordion/AccordionItem";
import { AccordionType, AccordionChevronPosition } from "../../../lib/components/Accordion/types";
import "./AccordionDemo.css";

const AccordionDemo: React.FC = () => {
  return (
    <div className="accordion-demo">
      <h2 className="demo-title">Accordions</h2>

      <div className="demo-section">
        <h3 className="section-title">No Border Accordion (Default)</h3>
        <Accordion defaultValue="item-1" accordionType={AccordionType.NO_BORDER}>
          <AccordionItem
            value="item-1"
            title="Basic Information"
            subtext="Personal and account details"
            leftSlot={<Info className="icon-primary" />}
          >
            <div className="content-space">
              <p className="text-content">
                This section contains all your basic profile information, including name, email, and
                account preferences. You can update these details at any time.
              </p>
            </div>
          </AccordionItem>

          <AccordionItem
            value="item-2"
            title="Security Settings"
            subtext="Password and authentication options"
            leftSlot={<Lock className="icon-green" />}
          >
            <div className="content-space">
              <p className="text-content">Manage your security preferences:</p>
            </div>
          </AccordionItem>

          <AccordionItem
            value="item-3"
            title="Notifications"
            subtext="Email and push notification preferences"
            isDisabled={true}
          >
            <p className="text-content">
              Control which notifications you receive and how they are delivered. You can customize
              notifications for updates, messages, and system alerts.
            </p>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="demo-section">
        <h3 className="section-title">Border Accordion</h3>
        <Accordion defaultValue="border-1" accordionType={AccordionType.BORDER}>
          <AccordionItem
            value="border-1"
            title="How do I create an account?"
            leftSlot={<User className="icon-default" />}
          >
            <p className="text-content">
              To create an account, click the "Sign Up" button in the top right corner and follow
              the instructions. You'll need to provide a valid email address and create a secure
              password.
            </p>
          </AccordionItem>

          <AccordionItem
            value="border-2"
            title="What payment methods do you accept?"
            leftSlot={<AlertCircle className="icon-default" />}
            subtext="Information about our supported payment options"
          >
            <div className="content-space">
              <p className="text-content">We accept the following payment methods:</p>
            </div>
          </AccordionItem>

          <AccordionItem
            value="border-3"
            title="How do I contact customer support?"
            subtext="Choose the right plan for your needs"
            isDisabled={true}
            leftSlot={<HelpCircle className="icon-disabled" />}
          >
            <p className="text-content">
              This content is not accessible because the item is disabled.
            </p>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="demo-section">
        <h3 className="section-title">Left Accordion</h3>
        <Accordion
          isMultiple
          defaultValue={['multi-1', 'multi-3']}
          accordionType={AccordionType.BORDER}
        >
          <AccordionItem
            value="multi-1"
            title="Product Features"
            rightSlot={<Settings className="icon-default" />}
            chevronPosition={AccordionChevronPosition.LEFT}
          >
            <p className="text-content">
              Explore all the features our product has to offer. We provide comprehensive tools for
              productivity, collaboration, and data management.
            </p>
          </AccordionItem>

          <AccordionItem
            value="multi-2"
            title="Subscription Plans"
            subtext="Choose the right plan for your needs"
            chevronPosition={AccordionChevronPosition.LEFT}
          >
            <div className="content-space">
              <p className="text-content">We offer several subscription tiers:</p>
            </div>
          </AccordionItem>

          <AccordionItem
            value="multi-3"
            title="System Requirements"
            leftSlot={<Bell className="icon-default" />}
            chevronPosition={AccordionChevronPosition.LEFT}
          >
            <p className="text-content">
              Our application works on all modern browsers and operating systems. For optimal
              performance, we recommend using Chrome, Firefox, or Safari with at least 4GB RAM and a
              stable internet connection.
            </p>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default AccordionDemo; 