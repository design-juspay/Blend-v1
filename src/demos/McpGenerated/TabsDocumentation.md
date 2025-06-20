# Tabs Component Documentation

## Description
Props for the main Tabs root component. This component wraps `TabsList` and `TabsContent`.
It's based on Radix UI Tabs Primitive and manages the overall state of the tabs.

## Features
- Organizes content into switchable tabbed sections.
- Supports different visual variants (boxed, floating, underline).
- Customizable size.
- Controlled or uncontrolled active tab.

## Props

### Appearance

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `variant` | `'boxed' \| 'floating' \| 'underline' \| undefined` | false | The visual style variant of the tabs. | `-` |
| `size` | `'md' \| 'lg' \| undefined` | false | The size of the tabs. | `-` |

## Usage Examples

### ```tsx
```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent, TabsVariant, TabsSize } from "./components/Tabs"; // Assuming path

<Tabs defaultValue="tab1" variant={TabsVariant.UNDERLINE} size={TabsSize.MD}>
  <TabsList>
    <TabsTrigger value="tab1">Account</TabsTrigger>
    <TabsTrigger value="tab2">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">
    <p>Account settings go here.</p>
  </TabsContent>
  <TabsContent value="tab2">
    <p>Password settings go here.</p>
  </TabsContent>
</Tabs>
