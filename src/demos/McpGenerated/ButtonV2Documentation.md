# ButtonV2 Component Documentation

## Description
A revised version of the Button component (ButtonV2).
It provides various styles, sizes, and states for user interaction.
Note: This version does not explicitly extend standard HTMLButtonElement props, so ARIA attributes
and other standard button props might need to be passed directly or considered for future enhancement.

## Features
- Multiple visual types (primary, secondary, danger, success).
- Different sizes (small, medium, large).
- Sub-types for specific use cases (icon-only, inline).
- Support for leading and trailing icons (ReactNode).
- Loading and disabled states.

## Props

### Appearance

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `buttonType` | `'primary' \| 'secondary' \| 'danger' \| 'success' \| undefined` | false | The main visual style of the button. | `-` |
| `size` | `'sm' \| 'md' \| 'lg' \| undefined` | false | The size of the button. | `-` |
| `subType` | `'default' \| 'iconOnly' \| 'inline' \| undefined` | false | The specific stylistic variation of the button. | `-` |

### Content

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `text` | `string \| undefined` | false | The text content displayed on the button. | `-` |
| `leadingIcon` | `import("/Users/deepanshu.kumar/Documents/Blend-v1/node_modules/.pnpm/@types+react@19.1.5/node_modules/@types/react/index").ReactNode` | false | A ReactNode (e.g., an icon component) to be displayed before the button text. | `-` |
| `trailingIcon` | `import("/Users/deepanshu.kumar/Documents/Blend-v1/node_modules/.pnpm/@types+react@19.1.5/node_modules/@types/react/index").ReactNode` | false | A ReactNode (e.g., an icon component) to be displayed after the button text. | `-` |

### State

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `isLoading` | `boolean \| undefined` | false | If true, displays a loading indicator and disables the button. Alias for `loading`. | `-` |
| `isDisabled` | `boolean \| undefined` | false | If true, disables the button and applies a disabled style. Alias for `disabled`. | `-` |
| `disabled` | `boolean \| undefined` | false | If true, disables the button. | `-` |
| `loading` | `boolean \| undefined` | false | If true, displays a loading indicator. | `-` |

### Advanced

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `ref` | `import("/Users/deepanshu.kumar/Documents/Blend-v1/node_modules/.pnpm/@types+react@19.1.5/node_modules/@types/react/index").RefObject<HTMLButtonElement> \| undefined` | false | A ref to the underlying HTML button element. | `-` |
| `key` | `string \| number \| undefined` | false | A key for the component, useful when rendering lists of buttons. | `-` |

### Event Handler

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `onClick` | `(() => void) \| undefined` | false | Callback function invoked when the button is clicked. | `-` |

### Layout

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `buttonGroupPosition` | `'center' \| 'left' \| 'right' \| undefined` | false | Specifies the button's position within a ButtonGroupV2, influencing border radius. Not typically set manually; managed by ButtonGroupV2. | `-` |

## Usage Examples

### ```tsx
```tsx
import { ButtonV2, ButtonTypeV2, ButtonSizeV2 } from "./components/ButtonV2";
import { Zap } from "lucide-react"; // Assuming lucide-react for icons

<ButtonV2
  text="Primary Action V2"
  buttonType={ButtonTypeV2.PRIMARY}
  size={ButtonSizeV2.MEDIUM}
  onClick={() => console.log("ButtonV2 clicked")}
/>

<ButtonV2
  buttonType={ButtonTypeV2.SECONDARY}
  size={ButtonSizeV2.SMALL}
  leadingIcon={<Zap size={16} />}
  text="With Icon V2"
/>

<ButtonV2
  subType={ButtonSubTypeV2.ICON_ONLY}
  leadingIcon={<Zap size={20} />}
  aria-label="Perform action V2" // aria-label passed directly
/>
