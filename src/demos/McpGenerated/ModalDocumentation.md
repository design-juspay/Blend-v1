# Modal Component Documentation

## Description
A dialog component that overlays content on the page to focus user attention.
Modals are used for critical information, decisions, or tasks that require user interaction.

## Features
- Displays content in a layer above the main page.
- Controllable open/close state.
- Optional title, subtitle, header, and footer.
- Customizable primary and secondary action buttons.
- Option to close by clicking the backdrop or via a close button.
- Slots for custom header and footer content.

## Props

### Required

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `isOpen` | `boolean` | true | Controls whether the modal is open or closed. | `-` |
| `onClose` | `() => void` | true | Callback function invoked when the modal requests to be closed (e.g., by backdrop click or close button). | `-` |
| `children` | `ReactNode` | true | The main content of the modal. | `-` |

### Content

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `title` | `string \| undefined` | false | Optional title displayed in the modal header. | `-` |
| `subtitle` | `string \| undefined` | false | Optional subtitle displayed below the title in the modal header. | `-` |

### Actions

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `primaryAction` | `ModalButtonAction \| undefined` | false | Props for the primary action button in the modal footer (e.g., "Save", "Confirm"). Uses `ButtonV2Props` (excluding `buttonGroupPosition`). | `-` |
| `secondaryAction` | `ModalButtonAction \| undefined` | false | Props for the secondary action button in the modal footer (e.g., "Cancel"). Uses `ButtonV2Props` (excluding `buttonGroupPosition`). | `-` |

### Styling

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `className` | `string \| undefined` | false | Optional CSS class name to apply to the modal container. | `-` |

### Behavior

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `showCloseButton` | `boolean \| undefined` | false | If true, displays a close button (typically an 'X' icon) in the modal header. | `-` |
| `closeOnBackdropClick` | `boolean \| undefined` | false | If true, allows closing the modal by clicking on the backdrop overlay. | `-` |

### Appearance

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `showHeader` | `boolean \| undefined` | false | If true, displays the modal header (containing title, subtitle, close button). | `-` |
| `showFooter` | `boolean \| undefined` | false | If true, displays the modal footer (containing action buttons). | `-` |
| `showDivider` | `boolean \| undefined` | false | If true, shows a divider line below the header. | `-` |

### Content Slots

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `customHeader` | `ReactNode` | false | Optional ReactNode to replace the default header content. | `-` |
| `customFooter` | `ReactNode` | false | Optional ReactNode to replace the default footer content. | `-` |
| `headerRightSlot` | `ReactNode` | false | Optional ReactNode to be placed in the right slot of the default header (e.g., for additional controls). | `-` |

## Usage Examples

### ```tsx
```tsx
import { Modal } from "./components/Modal"; // Assuming path
import { ButtonV2, ButtonTypeV2 } from "./components/ButtonV2"; // Assuming path
import { useState } from "react";

function MyComponentWithModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <ButtonV2 onClick={() => setIsModalOpen(true)}>Open Modal</ButtonV2>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Confirm Action"
        subtitle="Are you sure you want to proceed with this action?"
        primaryAction={{
          text: "Confirm",
          buttonType: ButtonTypeV2.PRIMARY,
          onClick: () => {
            console.log("Confirmed!");
            setIsModalOpen(false);
          },
        }}
        secondaryAction={{
          text: "Cancel",
          onClick: () => setIsModalOpen(false),
        }}
        showCloseButton={true}
      >
        <p>This action cannot be undone. Please review carefully.</p>
      </Modal>
    </>
  );
}
