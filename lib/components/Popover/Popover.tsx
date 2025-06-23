import { useState } from "react";
import * as RadixPopover from "@radix-ui/react-popover";
import Block from "../Primitives/Block/Block";
import { PopoverProps, PopoverSize } from "./types";
import PopoverHeader from "./PopoverHeader";
import PopoverFooter from "./PopoverFooter";
import { PopoverTokenType } from "./popover.tokens";
import { useComponentToken } from "../../context/useComponentToken";

/**
 * @description A floating element that displays content in relation to a trigger element.
 * Provides rich interactive content in a non-modal overlay with flexible positioning and action support.
 * @feature Displays content in a floating panel anchored to a trigger element
 * @feature Customizable trigger element with controlled or uncontrolled state
 * @feature Optional heading, description, and close button in header
 * @feature Supports primary and secondary action buttons in footer
 * @feature Flexible positioning with side, alignment, and offset controls
 * @feature Modal or non-modal behavior options
 * @feature Built on Radix UI for accessibility and keyboard navigation
 * @example Basic Usage
 * ```tsx
 * import { Popover } from "blend-v1";
 * 
 * function BasicPopoverExample() {
 *   return (
 *     <div className="p-8">
 *       <Popover
 *         trigger={
 *           <button className="px-4 py-2 bg-blue-500 text-white rounded">
 *             Click me
 *           </button>
 *         }
 *         heading="Information"
 *         description="This is some helpful information displayed in a popover."
 *       >
 *         <div className="p-4">
 *           <p>Additional content can go here, such as forms, lists, or other interactive elements.</p>
 *         </div>
 *       </Popover>
 *     </div>
 *   );
 * }
 * ```
 * @example Controlled Popover with Actions
 * ```tsx
 * import { Popover, PopoverSize } from "blend-v1";
 * import { ButtonV2, ButtonTypeV2 } from "blend-v1";
 * import { useState } from "react";
 * import { Settings, User } from "lucide-react";
 * 
 * function ControlledPopoverExample() {
 *   const [isProfileOpen, setIsProfileOpen] = useState(false);
 *   const [isSettingsOpen, setIsSettingsOpen] = useState(false);
 * 
 *   const handleSaveProfile = () => {
 *     console.log("Profile saved");
 *     setIsProfileOpen(false);
 *   };
 * 
 *   return (
 *     <div className="p-8 space-x-4">
 *       <Popover
 *         trigger={
 *           <button className="inline-flex items-center gap-2 px-3 py-2 border rounded">
 *             <User size={16} />
 *             Profile
 *           </button>
 *         }
 *         heading="User Profile"
 *         description="Update your profile information"
 *         open={isProfileOpen}
 *         onOpenChange={setIsProfileOpen}
 *         size={PopoverSize.MEDIUM}
 *         side="bottom"
 *         align="start"
 *         primaryAction={{
 *           text: "Save Changes",
 *           buttonType: ButtonTypeV2.PRIMARY,
 *           onClick: handleSaveProfile
 *         }}
 *         secondaryAction={{
 *           text: "Cancel",
 *           buttonType: ButtonTypeV2.SECONDARY,
 *           onClick: () => setIsProfileOpen(false)
 *         }}
 *       >
 *         <div className="space-y-4">
 *           <div>
 *             <label className="block text-sm font-medium mb-1">Name</label>
 *             <input 
 *               type="text" 
 *               defaultValue="John Doe" 
 *               className="w-full p-2 border rounded"
 *             />
 *           </div>
 *           <div>
 *             <label className="block text-sm font-medium mb-1">Email</label>
 *             <input 
 *               type="email" 
 *               defaultValue="john@example.com" 
 *               className="w-full p-2 border rounded"
 *             />
 *           </div>
 *         </div>
 *       </Popover>
 * 
 *       <Popover
 *         trigger={
 *           <button className="inline-flex items-center gap-2 px-3 py-2 border rounded">
 *             <Settings size={16} />
 *             Settings
 *           </button>
 *         }
 *         heading="Quick Settings"
 *         open={isSettingsOpen}
 *         onOpenChange={setIsSettingsOpen}
 *         size={PopoverSize.SMALL}
 *         side="bottom"
 *         align="end"
 *         showCloseButton={false}
 *       >
 *         <div className="space-y-3">
 *           <label className="flex items-center gap-2">
 *             <input type="checkbox" defaultChecked />
 *             <span className="text-sm">Enable notifications</span>
 *           </label>
 *           <label className="flex items-center gap-2">
 *             <input type="checkbox" />
 *             <span className="text-sm">Dark mode</span>
 *           </label>
 *           <label className="flex items-center gap-2">
 *             <input type="checkbox" defaultChecked />
 *             <span className="text-sm">Auto-save</span>
 *           </label>
 *         </div>
 *       </Popover>
 *     </div>
 *   );
 * }
 * ```
 * @example Advanced Usage with All Props
 * ```tsx
 * import { Popover, PopoverSize } from "blend-v1";
 * import { ButtonV2, ButtonTypeV2, ButtonSizeV2 } from "blend-v1";
 * import { useState } from "react";
 * import { MoreHorizontal, Settings } from "lucide-react";
 * 
 * function AdvancedPopoverExample() {
 *   const [isMenuOpen, setIsMenuOpen] = useState(false);
 * 
 *   return (
 *     <div className="p-8 space-y-8">
 *       <Popover
 *         trigger={
 *           <button className="inline-flex items-center gap-2 px-3 py-2 border rounded">
 *             <MoreHorizontal size={16} />
 *             Advanced Options
 *           </button>
 *         }
 *         heading="Advanced Settings"
 *         description="Configure all available options"
 *         open={isMenuOpen}
 *         onOpenChange={setIsMenuOpen}
 *         side="right"
 *         align="start"
 *         sideOffset={12}
 *         alignOffset={0}
 *         width={320}
 *         minWidth={280}
 *         maxWidth={400}
 *         maxHeight={500}
 *         zIndex={1000}
 *         size={PopoverSize.MEDIUM}
 *         showCloseButton={true}
 *         asModal={false}
 *         primaryAction={{
 *           text: "Apply Settings",
 *           buttonType: ButtonTypeV2.PRIMARY,
 *           size: ButtonSizeV2.MEDIUM,
 *           onClick: () => {
 *             console.log("Settings applied");
 *             setIsMenuOpen(false);
 *           }
 *         }}
 *         secondaryAction={{
 *           text: "Reset to Default",
 *           buttonType: ButtonTypeV2.SECONDARY,
 *           size: ButtonSizeV2.MEDIUM,
 *           onClick: () => console.log("Settings reset")
 *         }}
 *         onClose={() => console.log("Popover closed")}
 *       >
 *         <div className="space-y-4">
 *           <div>
 *             <label className="block text-sm font-medium mb-2">Performance Mode</label>
 *             <select className="w-full p-2 border rounded">
 *               <option>Auto</option>
 *               <option>High Performance</option>
 *               <option>Power Save</option>
 *             </select>
 *           </div>
 *           <div>
 *             <label className="block text-sm font-medium mb-2">Cache Size (MB)</label>
 *             <input type="range" min="50" max="500" defaultValue="200" className="w-full" />
 *           </div>
 *           <div className="space-y-2">
 *             <label className="flex items-center gap-2">
 *               <input type="checkbox" defaultChecked />
 *               <span className="text-sm">Enable auto-sync</span>
 *             </label>
 *             <label className="flex items-center gap-2">
 *               <input type="checkbox" />
 *               <span className="text-sm">Debug mode</span>
 *             </label>
 *           </div>
 *         </div>
 *       </Popover>
 *     </div>
 *   );
 * }
 * ```
 */
const Popover = ({
  heading,
  description,
  trigger,
  children,
  showCloseButton = true,
  onOpenChange,
  open,
  asModal = false,
  primaryAction,
  secondaryAction,
  sideOffset = 8,
  side = "bottom",
  align = "center",
  alignOffset = 0,
  width,
  minWidth = 320,
  maxWidth = 400,
  height,
  minHeight,
  maxHeight,
  zIndex = 1000,
  size = PopoverSize.MEDIUM,
  onClose,
}: PopoverProps) => {
  const [isOpen, setIsOpen] = useState(open);
  const popoverTokens = useComponentToken("POPOVER") as PopoverTokenType;
  return (
    <RadixPopover.Root
      open={isOpen}
      onOpenChange={(open) => {
        setIsOpen(open);
        if (onOpenChange) {
          onOpenChange(open);
        }
      }}
      modal={asModal}
    >
      <RadixPopover.Trigger asChild>{trigger}</RadixPopover.Trigger>
      <RadixPopover.Content
        style={{ zIndex }}
        asChild
        sideOffset={sideOffset}
        side={side}
        align={align}
        alignOffset={alignOffset}
      >
        <Block
          zIndex={popoverTokens.zIndex}
          backgroundColor={popoverTokens.background}
          padding={popoverTokens.padding}
          boxShadow={popoverTokens.shadow}
          borderRadius={popoverTokens.borderRadius}
          border={popoverTokens.border}
          width={width}
          minWidth={minWidth}
          maxWidth={maxWidth}
          height={height}
          minHeight={minHeight}
          maxHeight={maxHeight}
          display="flex"
          flexDirection="column"
          gap={popoverTokens.gap}
        >
          <PopoverHeader
            heading={heading}
            description={description}
            showCloseButton={showCloseButton}
            size={size}
            onClose={() => {
              setIsOpen(false);
              if (onClose) {
                onClose();
              }
            }}
          />
          {children}
          <PopoverFooter
            primaryAction={primaryAction}
            secondaryAction={secondaryAction}
          />
        </Block>
      </RadixPopover.Content>
    </RadixPopover.Root>
  );
};

Popover.displayName = "Popover";

export default Popover;
