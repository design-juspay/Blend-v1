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
- Remove unnecessary props like `testId` for cleaner component APIs.
- Apply DRY principles to reduce code repetition across components.
- Use self-documenting code over verbose documentation comments.
- Maintain consistent token structure across components.

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
- **Type aliases over interfaces: Use `type` instead of `interface` for component props and other type definitions to prevent accidental declaration merging and maintain clearer intent.**
- Accessibility-first approach: All components include proper ARIA attributes and follow semantic markup patterns.
- DRY code implementation: Extract repetitive code into reusable functions and shared types.
- **Flexible hook design: Hooks are designed to be reusable across components with flexible typing and consistent API patterns.**

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
- Navigation components (like Breadcrumb) implement proper semantic markup and accessibility patterns.

## Component Reuse Patterns
- **Fallback Pattern**: When a complex component doesn't need all its features, it falls back to a simpler component (e.g., SplitTag → Tag).
- **Token Sharing**: Components in the same family share tokens for consistent styling (Tag and SplitTag).
- **Utility Reuse**: Component-specific utilities can be shared between related components.
- **Consistent APIs**: Related components maintain consistent prop naming and behavior.

## Code Quality Patterns
- **DRY Implementation**: Extract repeated code patterns into reusable functions.
- **Centralized Type Definitions**: Create shared type aliases for better consistency and maintenance.
- **Self-Documenting Code**: Prefer clear function and variable names over verbose documentation comments.
- **Utility Functions Over Inline Logic**: Extract complex transformations into utility functions for better testability and reuse.
- **Consistent Token Structure**: Maintain similar token structure across components for better readability and familiarity.
- **Getter Functions for Token Access**: Use utility methods to access token values rather than direct object access.

## Hook Patterns
- **Flexible Type Parameters**: Hooks use TypeScript generics or union types to support various element types.
- **Array or Single Input Support**: Where appropriate, hooks accept either arrays or single items (e.g., useClickOutside accepting a single ref or array of refs).
- **Proper Cleanup**: All hooks with event listeners or subscriptions include proper cleanup in their useEffect return function.
- **Consistent Parameter Order**: Maintain consistent parameter ordering across hooks (refs first, then callbacks, then options).
- **Comprehensive Documentation**: All hooks include JSDoc comments explaining their purpose, parameters, and usage patterns.
- **Single Responsibility**: Each hook focuses on one specific functionality rather than combining multiple concerns.
- **Centralized Exports**: All hooks are exported through an index file for clean imports.
- **Dependency Memoization**: Properly memoize dependencies in useEffect to prevent unnecessary re-renders.

## Demo Patterns
- **Component Isolation**: Each component has its own dedicated demo file for better maintainability.
- **Example Variety**: Demos showcase all component variants, states, and use cases.
- **Visual Organization**: Demo items are organized with clear section headers and explanatory text.
- **Consistent Structure**: All demos follow a similar structure with headers, sections, and examples.
- **Accessibility Demonstration**: Demos showcase proper accessibility patterns and semantic markup.
- **Interactive Examples**: Where appropriate, demos include interactive examples with onClick handlers.

### Specific Component Patterns

#### AvatarGroup Component Pattern

The AvatarGroup component follows the modular architecture pattern with a focus on composability and reusability.

1. **Core Structure**:
   - Main component (`AvatarGroup.tsx`): Handles the presentation logic for displaying multiple avatars with overflow
   - Styled component (`StyledAvatarGroup.tsx`): Contains all styled-components definitions
   - Tokens (`token.ts`): Component-specific design tokens with references to foundation tokens
   - Types (`types.ts`): TypeScript interfaces and types for the component
   - Utility functions (`avatarGroupUtils.ts`): Helper functions for calculations and processing

2. **Key Features**:
   - Displays a configurable number of avatars with an overflow counter for extras
   - Size-responsive overlapping avatar layout:
     - Small avatars use less overlap (6px) to maintain visibility
     - Medium avatars use moderate overlap (8px)
     - Large avatars use more pronounced overlap (12px)
     - Extra large avatars use maximum overlap (16px) for a polished look
   - Consistent border styling using token values
   - Selection mechanism with visual feedback
   - Support for different avatar sizes and shapes

3. **Usage Pattern**:
   - Provide an array of avatar objects with required properties (id, alt)
   - Optional properties include src for images, fallback content (string for initials or ReactNode for icons)
   - Configure maxCount to control how many avatars are visible before showing overflow counter
   - Optionally provide selection-related props for interactive avatar selection

4. **Component Relationships**:
   - Leverages the Avatar component for individual avatar rendering
   - Provides a complementary relationship to the Avatar component
   - Uses the foundation token system for styling consistency

5. **State Management**:
   - Manages selection state internally or accepts controlled state via props
   - Provides callback for selection changes

## Design Token Architecture
- All components consume foundation tokens for consistency.
- Components are designed to be composed and extended as needed.
- Split components (like SplitTag) support different variants while maintaining visual consistency.
- Slot-based components allow for custom content insertion while maintaining consistent styling and layout.
- Component reuse hierarchy: Complex components can leverage simpler components when appropriate.
- Component extension patterns: 
  - SplitTag extends Tag functionality for dual-section tags
  - SplitTag falls back to Tag when only one section is needed
  - Both maintain consistent styling and behavior
- Navigation components (like Breadcrumb) implement proper semantic markup and accessibility patterns.
- Components in the same family share tokens for consistent styling (Tag and SplitTag).
- Component-specific utilities can be shared between related components.
- Related components maintain consistent prop naming and behavior.