# Component Planning: Primitive-First Architecture

## 1. Component Hierarchy

### Primitive Components
Primitive components form the foundation of the design system:

1. **Block (`@Block.tsx`)**
   - Fundamental layout primitive
   - Supports most layout styling properties
   - Can render as various semantic HTML elements
   - Handles state-based styling

2. **PrimitiveText (`@PrimitiveText.tsx`)**
   - Base text primitive
   - Supports semantic text elements
   - Handles basic text styling
   - Foundation for typography system

3. **PrimitiveButton (`@PrimitiveButton.tsx`)**
   - Base button primitive
   - Handles fundamental button behavior
   - Provides layout and visual control
   - Foundation for button variants

### Higher-Level Components
Built on top of primitive components:
- Use primitives as building blocks
- Handle specific use cases
- Maintain consistent styling through tokens
- Follow the same directory structure

## 2. Directory Structure & File Roles

Each component should reside in its own directory under `lib/components/ComponentName/` with the following files:

| File Name             | Purpose                                                        |
|----------------------|----------------------------------------------------------------|
| `Component.tsx`      | Main React component implementation                            |
| `StyledComponent.tsx`| All styled-components definitions                              |
| `token.ts`           | Component-specific design tokens                               |
| `types.ts`           | TypeScript types, enums, and interfaces                        |
| `componentUtils.ts`  | Utility functions for logic and style computation              |
| `index.ts`           | Barrel file for clean imports                                  |

**Example:**
```
lib/components/Button/
  ├── Button.tsx
  ├── StyledButton.tsx
  ├── token.ts
  ├── types.ts
  ├── buttonUtils.ts
  └── index.ts
```

## 3. Token System

### Organization
Tokens are organized by category in the `lib/tokens` directory:

| File Name           | Purpose                                    |
|---------------------|--------------------------------------------|
| `color.tokens.ts`   | Color palette and semantic colors          |
| `font.tokens.ts`    | Typography tokens                          |
| `spacing.tokens.ts` | Layout and spacing values                  |
| `border.tokens.ts`  | Border styles and radius                   |
| `shadow.tokens.ts`  | Elevation and shadow styles                |
| `opacity.tokens.ts` | Transparency values                        |
| `unit.tokens.ts`    | Measurement units and scales               |

### Usage Guidelines
- All components must use tokens for styling
- Tokens are the single source of truth
- Component-specific tokens should reference foundation tokens
- Maintain consistent naming conventions

## 4. Best Practices

### Type Safety
- Use TypeScript for all files
- Define all props, enums, and utility function signatures explicitly
- Use proper type inference where possible
- **Use type aliases instead of interfaces for all type definitions**
- Avoid interface declaration merging for better predictability

### Type Definitions
```typescript
// ✅ Good: Using type aliases
type ButtonProps = {
  variant: 'primary' | 'secondary';
  size: 'small' | 'medium' | 'large';
  children: React.ReactNode;
};

// ❌ Bad: Using interfaces
interface ButtonProps {
  variant: 'primary' | 'secondary';
  size: 'small' | 'medium' | 'large';
  children: React.ReactNode;
}
```

### Separation of Concerns
- UI logic in `Component.tsx`
- Styling in `StyledComponent.tsx`
- Tokens in `token.ts`
- Types in `types.ts`
- Utilities in `componentUtils.ts`

### Reusability
- Write utility functions that are generic and composable
- Avoid hardcoding values; use tokens and enums
- Build on top of primitive components

### Readability
- Use descriptive variable and function names
- Add comments for complex logic
- Keep files focused and under 200 lines where possible

### Extensibility
- Use enums for variants, sizes, and subtypes
- Design tokens and types to be easily extendable
- Consider future use cases when designing primitives

### Testing
- Utilities and tokens should be easily testable in isolation
- Write tests for primitive components
- Ensure higher-level components are tested with primitives

### Accessibility
- Always consider ARIA attributes
- Ensure keyboard navigation works
- Test with screen readers

## 5. Component Development Process

1. **Start with Primitives**
   - Identify if a new primitive is needed
   - Build on existing primitives when possible
   - Keep primitives simple and focused

2. **Design Higher-Level Components**
   - Compose primitives for specific use cases
   - Maintain consistent styling through tokens
   - Follow established patterns

3. **Token Integration**
   - Use existing tokens when possible
   - Create new tokens only when necessary
   - Document token decisions

4. **Documentation**
   - Document component API
   - Provide usage examples
   - Explain design decisions

5. **Testing**
   - Write unit tests
   - Test accessibility
   - Verify token usage

## 6. Example Implementation

### Primitive Component
```tsx
// PrimitiveText.tsx
import { StyledPrimitiveText } from './StyledPrimitiveText';
import { PrimitiveTextProps } from './types';

export const PrimitiveText = (props: PrimitiveTextProps) => {
  return <StyledPrimitiveText {...props} />;
};
```

### Higher-Level Component
```tsx
// Text.tsx
import { PrimitiveText } from '../Primitives/PrimitiveText';
import { TextProps } from './types';
import { getTextStyles } from './textUtils';

export const Text = (props: TextProps) => {
  const styles = getTextStyles(props);
  return <PrimitiveText {...styles} {...props} />;
};
```

### Type Definitions
```typescript
// types.ts
type PrimitiveTextProps = {
  as?: SemanticTagType;
  children: React.ReactNode;
  color?: string;
  fontSize?: string | number;
  fontWeight?: number;
  // ... other props
};

type TextProps = PrimitiveTextProps & {
  variant?: 'heading' | 'body' | 'caption';
  size?: 'small' | 'medium' | 'large';
  // ... other props
};
```

### Token Usage
```ts
// token.ts
import { foundationToken } from '../../tokens';

const textTokens = {
  heading: {
    h1: {
      fontSize: foundationToken.font.size.xl,
      fontWeight: foundationToken.font.weight.bold,
    },
    // ... other heading styles
  },
  // ... other text styles
};
```

This planning document should be referenced when building new components to ensure consistency, scalability, and maintainability across the library. 