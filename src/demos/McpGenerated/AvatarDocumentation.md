# Avatar Component Documentation

## Description
Displays an image, initials, or a fallback icon representing a user or entity.
Avatars can vary in size, shape, and can indicate online status.

## Features
- Supports image source, custom fallback content, or initials derived from `alt` text.
- Customizable sizes (sm, md, lg, xl) and shapes (circular, rounded).
- Optional online status indicator.
- Optional leading and trailing slots for additional content next to the avatar.

## Props

### Content

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `src` | `string \| undefined` | false | Image source URL for the avatar. | `-` |
| `alt` | `string \| undefined` | false | Alt text for the image, also used to generate initials if `src` fails or is not provided. | `-` |
| `fallback` | `import("/Users/deepanshu.kumar/Documents/Blend-v1/node_modules/.pnpm/@types+react@19.1.5/node_modules/@types/react/index").ReactNode` | false | Custom fallback content (e.g., an icon component) to display if `src` is invalid or not provided, and `alt` text is not suitable for initials. | `-` |

### Appearance

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl' \| undefined` | false | Defines the size of the avatar. | `-` |
| `shape` | `'circular' \| 'rounded' \| undefined` | false | Defines the shape of the avatar. | `-` |

### State

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `online` | `boolean \| undefined` | false | If true, displays an indicator suggesting online status. | `-` |

### Layout

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `leadingSlot` | `import("/Users/deepanshu.kumar/Documents/Blend-v1/node_modules/.pnpm/@types+react@19.1.5/node_modules/@types/react/index").ReactNode` | false | Optional content to be placed before the avatar image/fallback. | `-` |
| `trailingSlot` | `import("/Users/deepanshu.kumar/Documents/Blend-v1/node_modules/.pnpm/@types+react@19.1.5/node_modules/@types/react/index").ReactNode` | false | Optional content to be placed after the avatar image/fallback. | `-` |

## Usage Examples

### Basic Image Avatar
```tsx
<Avatar src="https://example.com/user.jpg" alt="User Name" />
```

### Fallback Initials
```tsx
<Avatar alt="John Doe" size={AvatarSize.LG} />
```

### Online Status Indicator
```tsx
