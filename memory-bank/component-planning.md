# Component Planning: Modular, Scalable, and Maintainable Components

## 1. Directory Structure & File Roles

Each component should reside in its own directory under `lib/components/ComponentName/` with the following files:

| File Name             | Purpose                                                        |
|----------------------|----------------------------------------------------------------|
| `Component.tsx`      | Main React component implementation                            |
| `StyledComponent.tsx`| All styled-components (or emotion) for the component           |
| `token.ts`           | Component-specific design tokens, referencing foundationToken   |
| `types.ts`           | TypeScript types, enums, and interfaces for the component      |
| `componentUtils.ts`  | Utility functions for logic, style computation, etc.           |
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

## 2. Best Practices for Writing Component Code

### Type Safety
- Use TypeScript for all files.
- Define all props, enums, and utility function signatures explicitly.

### Separation of Concerns
- UI logic in `Component.tsx`.
- Styling in `StyledComponent.tsx`.
- Tokens in `token.ts`.
- Types in `types.ts`.
- Utilities in `componentUtils.ts`.

### Reusability
- Write utility functions that are generic and composable.
- Avoid hardcoding values; use tokens and enums.

### Readability
- Use descriptive variable and function names.
- Add comments for complex logic.
- Keep files focused and under 200 lines where possible.

### Extensibility
- Use enums for variants, sizes, and subtypes.
- Design tokens and types to be easily extendable.

### Testing
- Utilities and tokens should be easily testable in isolation.

### Accessibility
- Always consider ARIA attributes and keyboard navigation.

## 3. Writing Robust, Scalable Component Tokens

### Reference Foundation Tokens
- All component tokens must reference `foundationToken.ts` for colors, spacing, etc.

### Structure
- Organize tokens by state (default, hover, disabled) and by type (primary, secondary, etc.).

### Scalability
- Use nested objects for easy extension (e.g., `background.primary.default`).

### Consistency
- Use the same naming conventions and structure across all components.

### Documentation
- Comment on token choices, especially for non-obvious values.

#### Example: Button Token
```ts
import { foundationToken } from '../foundationToken';

const buttonTokens = {
  background: {
    primary: {
      default: foundationToken.colors.primary[500],
      hover: foundationToken.colors.primary[600],
      disabled: foundationToken.colors.primary[200],
    },
    // ... other types
  },
  // ... other token categories
};
export default buttonTokens;
```

## 4. Example Directory and Code Snippets

**Directory:**
```
lib/components/ComponentName/
  ├── ComponentName.tsx
  ├── StyledComponentName.tsx
  ├── token.ts
  ├── types.ts
  ├── componentNameUtils.ts
  └── index.ts
```

**Component Example:**
```tsx
// ComponentName.tsx
import { StyledComponentName } from './StyledComponentName';
import { ComponentNameProps } from './types';
import { getComponentNameStyles } from './componentNameUtils';

export const ComponentName = (props: ComponentNameProps) => {
  // ...component logic
  return <StyledComponentName {...props} />;
};
```

**Token Example:**
```ts
// token.ts
import { foundationToken } from '../foundationToken';

const componentNameTokens = {
  // ...tokens referencing foundationToken
};
export default componentNameTokens;
```

## 5. Slot-Based Component APIs

Slot-based components provide a flexible way to customize component content while maintaining consistent styling and behavior.

### Benefits of Slot-Based APIs
- More flexible than icon-only props
- Support for complex custom content
- Better composition and reusability
- Easier to extend with new features

### Implementation Guidelines
- Use ReactNode type for slot props
- Maintain backward compatibility with existing APIs
- Name slots descriptively (e.g., leadingSlot, trailingSlot, actionSlot)
- Provide sensible defaults or fallbacks

### Example
```tsx
// Component with slot-based API
export const ComponentWithSlots = ({
  leadingSlot,
  trailingSlot,
  children,
  // Backward compatibility
  leadingIcon: LeadingIcon,
  trailingIcon: TrailingIcon,
  ...props
}) => {
  // Fallback to icon if slot not provided
  const leadingContent = leadingSlot || (LeadingIcon && <LeadingIcon />);
  const trailingContent = trailingSlot || (TrailingIcon && <TrailingIcon />);
  
  return (
    <StyledContainer {...props}>
      {leadingContent}
      <Content>{children}</Content>
      {trailingContent}
    </StyledContainer>
  );
};

// Usage
<ComponentWithSlots 
  leadingSlot={<CustomComponent />}
  trailingSlot={<Button variant="primary" />}
>
  Content
</ComponentWithSlots>
```

This pattern enables advanced customization while maintaining the component's core functionality and styling.

---

This planning document should be referenced before building any new component to ensure consistency, scalability, and maintainability across the library. 