# AvatarGroup Component Documentation

## Description
Displays a stack of avatars, often used to represent a group of users or entities.
It can show a limited number of avatars with an overflow indicator for the rest.

## Features
- Displays multiple avatars in a compact, overlapping group.
- Limits the number of visible avatars with an overflow counter.
- Customizable size and shape for all avatars in the group.
- Supports selection of avatars within the group.

## Props

### Required

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `avatars` | `AvatarData[]` | true | An array of `AvatarData` objects, each representing an avatar to be displayed in the group. | `-` |

### Behavior

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `maxCount` | `number \| undefined` | false | The maximum number of avatars to display before showing an overflow counter. If not provided, all avatars are displayed. | `-` |

### Appearance

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl' \| undefined` | false | The size of the avatars in the group. Inherits from `AvatarSize` enum. | `-` |
| `shape` | `'circular' \| 'rounded' \| undefined` | false | The shape of the avatars in the group. Inherits from `AvatarShape` enum. | `-` |

### State

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `selectedAvatarIds` | `(string \| number)[] \| undefined` | false | An array of IDs for avatars that are currently selected. Used for controlled selection. | `-` |

### Event Handler

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `onSelectionChange` | `((selectedIds: (string \| number)[]) => void) \| undefined` | false | Callback function invoked when the selection of avatars changes. Receives an array of the currently selected avatar IDs. | `-` |

## Usage Examples

### ```tsx
```tsx
import { AvatarGroup } from "./components/AvatarGroup";
import { AvatarSize, AvatarShape } from "./components/Avatar/types";

const avatarsData = [
  { id: 1, src: "url1.jpg", alt: "User 1" },
  { id: 2, src: "url2.jpg", alt: "User 2" },
  { id: 3, fallback: "U3" },
];

<AvatarGroup
  avatars={avatarsData}
  maxCount={2}
  size={AvatarSize.MEDIUM}
  shape={AvatarShape.CIRCLE}
/>
