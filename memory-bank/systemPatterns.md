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
- Create standalone components for complex variants when appropriate (e.g., SplitTag).

## Design Patterns
- Separation of concerns: logic, styles, tokens, types, and utilities in separate files.
- Barrel files (`index.ts`) for clean imports.
- Extensible enums and token structures for variants and states.
- Consistent height handling across variants using transparent borders and box-sizing: border-box.
- Size-specific styling for better visual consistency (e.g., border-radius scaled to component size).
- Slot-based component API for flexible content customization, allowing both simple icon usage and complex custom content.
- Typography inheritance: Components should never override font-family, allowing it to be inherited from parent elements for better integration with host applications.
- Component reuse and extension: Reuse existing components when appropriate (e.g., SplitTag using Tag for single tag fallback).
- **Style encapsulation: Components do not accept className props to prevent custom styling that could break component UI consistency and design system integrity.**

## Component Relationships
- All components consume foundation tokens for consistency.
- Components are designed to be composed and extended as needed.
- Split components (like SplitTag) support different variants while maintaining visual consistency.
- Slot-based components allow for custom content insertion while maintaining consistent styling and layout.
- Component reuse hierarchy: Complex components can leverage simpler components when appropriate.
- Component extension patterns: 
  - SplitTag extends Tag functionality for dual-section tags
  - SplitTag falls back to Tag when only one section is needed
  - Both maintain consistent styling and behavior

## Component Reuse Patterns
- **Fallback Pattern**: When a complex component doesn't need all its features, it falls back to a simpler component (e.g., SplitTag → Tag).
- **Token Sharing**: Components in the same family share tokens for consistent styling (Tag and SplitTag).
- **Utility Reuse**: Component-specific utilities can be shared between related components.
- **Consistent APIs**: Related components maintain consistent prop naming and behavior. 