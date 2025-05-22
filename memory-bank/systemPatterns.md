# System Patterns

## Architecture
- Component-based architecture using React and TypeScript.
- CSS-in-JS for styling (styled-components or emotion).
- Centralized design tokens for all visual primitives.

## Key Technical Decisions
- Enforce modular directory structure for all components.
- Use TypeScript for type safety and maintainability.
- Reference foundation tokens in all component tokens.
- Implement consistent box-sizing and border handling for predictable layouts.
- Use system fonts with custom font integration for typography.
- Never define font-family at the component level, allowing proper inheritance from the application.

## Design Patterns
- Separation of concerns: logic, styles, tokens, types, and utilities in separate files.
- Barrel files (`index.ts`) for clean imports.
- Extensible enums and token structures for variants and states.
- Consistent height handling across variants using transparent borders and box-sizing: border-box.
- Size-specific styling for better visual consistency (e.g., border-radius scaled to component size).
- Slot-based component API for flexible content customization, allowing both simple icon usage and complex custom content.
- Typography inheritance: Components should never override font-family, allowing it to be inherited from parent elements for better integration with host applications.

## Component Relationships
- All components consume foundation tokens for consistency.
- Components are designed to be composed and extended as needed.
- Split components (like SplitTag) support different variants while maintaining visual consistency.
- Slot-based components allow for custom content insertion while maintaining consistent styling and layout. 