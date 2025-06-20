# ButtonGroupV2 Component Documentation

## Description
A container for grouping `ButtonV2` components.
It allows buttons to be arranged horizontally or vertically (stacked).
This version is specifically designed to work with `ButtonV2` components.

## Features
- Groups multiple `ButtonV2` components.
- Supports horizontal (default) and vertical (stacked) layouts.
- Ensures consistent spacing and styling for grouped `ButtonV2` instances.

## Props

### Layout

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `stacked` | `boolean \| undefined` | false | If true, stacks the `ButtonV2` components vertically. Otherwise, they are arranged horizontally. | `-` |

### Required

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `children` | `ReactElement<ButtonV2Props, string \| import("/Users/deepanshu.kumar/Documents/Blend-v1/node_modules/.pnpm/@types+react@19.1.5/node_modules/@types/react/index").JSXElementConstructor<any>> \| ReactElement<ButtonV2Props, string \| import("/Users/deepanshu.kumar/Documents/Blend-v1/node_modules/.pnpm/@types+react@19.1.5/node_modules/@types/react/index").JSXElementConstructor<any>>[]` | true | One or more `ButtonV2` React elements to be grouped. | `-` |

## Usage Examples

### ```tsx
```tsx
import { ButtonGroupV2 } from "./components/ButtonGroupV2";
import { ButtonV2 } from "./components/ButtonV2"; // Assuming ButtonV2 component

<ButtonGroupV2>
  <ButtonV2 variant="primary">Button 1</ButtonV2>
  <ButtonV2 variant="secondary">Button 2</ButtonV2>
</ButtonGroupV2>

<ButtonGroupV2 stacked={true}>
  <ButtonV2 variant="primary">Stacked Button 1</ButtonV2>
  <ButtonV2 variant="secondary">Stacked Button 2</ButtonV2>
</ButtonGroupV2>
