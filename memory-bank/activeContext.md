# Active Context

## Current Focus
- Establishing and enforcing a modular, scalable component architecture for the Blend-v1 component library.
- Refactoring existing components to follow the established patterns.
- Building a demo system to showcase component variants and usage.
- Ensuring all components follow accessibility best practices.
- Improving code quality by applying DRY principles to reduce repetition.

## Current Work Focus

### UI Improvements and Features
1. **ButtonGroup Component Implementation:**
   - Created a fully modular ButtonGroup component following the established architecture pattern
   - Implemented support for different button group sizes (small, medium, large)
   - Added stacked and non-stacked layout options for buttons
   - Implemented three modes for button type handling (singlePrimary, allSecondary, noTransform)
   - Applied DRY principles by extracting utility functions for button position and type transformation
   - Created a comprehensive demo showcasing all variations and combinations
   - Used consistent styling aligned with the Button component for visual consistency
   - Removed unnecessary memoization to simplify the codebase

2. **Tags Component Refinement:**
   - Completely removed deprecated icon-based props in favor of a pure slot-based API
   - Fixed height inconsistencies and improved typography
   - Added comprehensive token system for styling 
   - Implemented new slot-based API for enhanced flexibility

3. **SplitTag Component Implementation:**
   - Created a standalone SplitTag component with its own directory structure
   - Designed to reuse Tag component functionality when appropriate
   - Implemented a clear API with primaryTag and secondaryTag objects
   - Added fallback to regular Tag when secondaryTag is not provided
   - Reused Tag tokens and utilities to maintain consistency
   - Created a dedicated demo for SplitTag with comprehensive examples

4. **Breadcrumb Component Implementation:**
   - Created a fully modular Breadcrumb component following the established architecture pattern
   - Implemented support for default and truncated variants
   - Added flexible slot-based API for customizable content on both sides of each item
   - Included proper accessibility attributes and semantic markup
   - Designed with customizable active state highlighting
   - Created comprehensive demo with various examples
   - Applied DRY principles to reuse code for rendering breadcrumb items
   - Removed unnecessary documentation comments in favor of self-documenting code

5. **Avatar Component Implementation:**
   - Created a fully modular Avatar component following the established architecture pattern
   - Implemented support for different avatar sizes (small, medium, large, xlarge)
   - Added circular and rounded shape options
   - Implemented online status indicator with size-appropriate styling
   - Added fallback mechanism for when images are not available or fail to load:
     - Supports both string-based initials (auto-generated from alt text)
     - Supports custom ReactNode fallback content (like icons)
   - Created proper token structure referencing foundationToken for colors, spacing, and sizing:
     - Size-specific tokens for width, height, font size, indicator size
     - Shape-specific tokens for border radius (circular and rounded)
     - Color tokens for container, border, text, and online indicator
   - Implemented styled components with TypeScript props for better type safety
   - Added slot-based API for leading and trailing content with proper styling
   - Included comprehensive accessibility features:
     - Visually hidden text for screen readers
     - Appropriate aria attributes
     - Alt text enforcement
   - Created utility functions for generating initials and validating images:
     - `getInitialsFromText` for extracting initials from user names
     - `isValidImageUrl` for validating image URLs
     - `hexToRgb` for color manipulation
   - Applied DRY principles by extracting reusable functionality
   - Implemented error handling for failed image loads with fallback display
   - Removed slot-based API from the demo to focus on core Avatar functionality

6. **AvatarGroup Component Implementation:**
   - Created a fully modular AvatarGroup component that builds on the established Avatar component
   - Implemented features for displaying multiple avatars with an overflow counter:
     - Support for configurable maximum number of visible avatars
     - Auto-calculation of overflow with "+X" counter display
     - Stacked appearance with negative margins and z-index layering
   - Added selection capabilities for avatars:
     - Individual avatar selection through direct click
     - Selection tracking with visual indicators
     - Callback support for parent components to respond to selection changes
   - Created an overflow menu for additional avatars:
     - Dynamic positioning based on counter location
     - Search functionality for filtering avatars
     - Selection state syncing between visible avatars and menu
   - Implemented comprehensive token system:
     - Reusing Avatar component tokens for consistency
     - Adding AvatarGroup-specific tokens for spacing and stacking
     - Defining overflow counter styling with proper states
   - Added utility functions for AvatarGroup-specific operations:
     - `positionMenu` for correctly positioning the overflow menu
     - `createMenuItems` for generating menu items from avatar data
     - `filterAvatars` for search functionality
   - Enhanced with accessibility features:
     - Keyboard navigation support
     - Screen reader announcements for overflow avatars
     - ARIA attributes for interactive elements
     - Focus management and focus states
   - Improved code quality through:
     - Proper React hooks usage (useCallback, useRef)
     - Event cleanup in useEffect
     - Modular styled components
     - Type safety with proper TypeScript interfaces

7. **Demo System Improvements:**
   - Restructured the demo system to be more modular and maintainable
   - Created dedicated component demo files in separate directories
   - Moved Button demos to `src/demos/Button/ButtonDemo.tsx`
   - Moved Tag demos to `src/demos/Tags/TagsDemo.tsx`
   - Added SplitTag demos to `src/demos/SplitTag/SplitTagDemo.tsx`
   - Added Breadcrumb demos to `src/demos/Breadcrumb/BreadcrumbDemo.tsx`
   - Added ButtonGroup demos to `src/demos/ButtonGroup/ButtonGroupDemo.tsx`
   - Moved Tabs demos to `src/demos/Tabs/TabsDemo.tsx` to align with component demo structure
   - Simplified `App.tsx` by importing modularized demo components
   - Enhanced component showcasing with better organization and aesthetics
   - Beautified all demos with consistent headers, section dividers, and descriptive text
   - Improved visual hierarchy with better spacing and organization
   - Ensured all demos follow consistent directory structure pattern (src/demos/{ComponentName})

## Recent Changes

- Implemented the ButtonGroup component with full modular structure:
  - Created a flexible ButtonGroup component that works with existing Button components
  - Added three modes for handling button types: singlePrimary (default), allSecondary, and noTransform
  - Implemented stacked and non-stacked layout options for different use cases
  - Supported all button sizes (small, medium, large) with consistent spacing
  - Ensured proper styling for connected buttons with correct border radius handling
  - Applied DRY principles by extracting utility functions:
    - `findPrimaryButtonIndex` to locate the first non-secondary button
    - `getTransformedButtonType` to apply button type transformations based on mode
    - `getButtonPosition` to determine a button's position in the group (first, middle, last)
  - Created proper token structure referencing foundationToken for spacing and border radius
  - Implemented styled components with TypeScript props for better type safety
  - Avoided over-optimization by removing unnecessary memoization
  - Added a comprehensive demo with examples of all variants, sizes, and modes
  - Fixed TypeScript and linting errors for a clean build
  - Removed className props to maintain style consistency

- Applied DRY principles to the Breadcrumb component:
  - Created reusable `renderBreadcrumbItem` function to eliminate repetitive code
  - Added a shared type definition `ProcessedBreadcrumbItem` to improve type safety
  - Implemented `resetActiveState` utility to avoid code duplication
  - Removed documentation comments in favor of self-documenting code
  - Kept original token structure to maintain consistency with other components

- Implemented the Breadcrumb component with full modular structure:
  - Created BreadcrumbItem subcomponent for individual items in the breadcrumb trail
  - Added support for truncated variant to handle long breadcrumb paths
  - Implemented proper accessibility attributes for navigation
  - Included flexible slot-based API for custom content on both sides of each item
  - Created token system with proper foundation token references
  - Added comprehensive demo with various examples
  - Ensured semantic markup with proper list structure

- Enhanced all component demos with improved aesthetics and organization:
  - Added consistent headers with component descriptions
  - Created clear section dividers and explanatory text
  - Improved visual hierarchy with better spacing
  - Added descriptive labels to all examples
  - Applied consistent styling across all demos
  - Fixed style implementation to avoid linting errors

- Enhanced the Tags component with improved styling and functionality:
  - Fixed height inconsistencies between different variants by implementing consistent border handling
  - Added size-specific border radius values for better visual design
  - Improved SplitTag component to support different variants in left and right sections
  - Integrated InterDisplay font family throughout the component library
  - Implemented box-sizing fixes to ensure consistent dimensions
  - Enhanced token structure with more granular control over styling
  - Completely replaced icon-based props with a slot-based API for leading and trailing content, making the component more flexible and future-proof
  - Improved token naming for better semantics (renamed 'style' to 'borderRadius' for clarity)
  - **Removed font-family definitions to allow proper inheritance from parent elements**

- Implemented the Avatar component with full modular structure:
  - Created a fully modular Avatar component following our standardized directory structure
  - Created a robust component with support for multiple use cases:
    - Four size variants (SM, MD, LG, XL) with appropriate sizing, padding, and typography
    - Two shape options (circular and rounded) controlled via enum
    - Online status indicator with size-specific styling that scales with avatar size
    - Image support with automatic error handling and fallback display
    - Fallback content system that accepts both string initials and custom ReactNode
  - Developed a comprehensive token system:
    - Properly structured tokens referencing foundationToken
    - Size-specific dimensions, font sizing, and indicator dimensions
    - Clear separation of concerns in styled component props
    - Consistent naming patterns aligned with other components
  - Implemented utility functions to handle common tasks:
    - Automatic generation of initials from full names
    - Image URL validation
    - Color manipulation for styling
  - Added accessibility features:
    - Properly hidden text for screen readers
    - Appropriate ARIA attributes
    - Alt text requirements
  - Created error handling for image loading failures
  - Simplified demo by removing slot-based API examples to focus on core functionality
  - Fixed TypeScript issues and enhanced type safety throughout

- Implemented AvatarGroup component with improved overlapping avatar layout styling
- Added size-specific spacing for overlapping avatars to enhance visibility:
  - Small (SM): 6px overlap
  - Medium (MD): 8px overlap
  - Large (LG): 12px overlap
  - Extra Large (XL): 16px overlap
- Used token-based border styling for better design consistency
- Created a comprehensive demo showcasing various features:
  - Size variations (SM, MD, LG, XL)
  - Shape options (rounded, circular)
  - Maximum visible avatar count with overflow
  - Plain avatars with initials
  - Interactive selection with visual feedback
  - Mixed avatar content (images, initials, icons)
- Enhanced the component's usability and appearance across different size variants
- Fixed TypeScript errors and improved type safety of styled components

## Next Steps

1. **Extend Component Library:**
   - Add more base components (Input, Dropdown, etc.)
   - Ensure all components follow the modular architecture pattern

2. **Documentation:**
   - Create comprehensive API documentation for each component
   - Add usage examples and best practices

3. **Testing:**
   - Set up testing infrastructure
   - Add unit tests for components and utilities

4. **Code Quality:**
   - Continue refactoring existing components to apply DRY principles
   - Create shared utilities for common patterns across components

## Active Decisions

1. **Slot-Based API for Components:**
   - Moving away from specific props like `icon` to more flexible slot-based patterns
   - Enhances component extensibility and future-proofs the component API

2. **Modular Demo Structure:**
   - Each component should have its own demo file in dedicated demo directories
   - Improves maintainability and reduces complexity in the main application file

3. **Component Directory Structure:**
   - Maintaining strict adherence to the component directory pattern
   - Each component must have its own directory with standardized files

4. **Simplified Component APIs:**
   - Removing unnecessary props like `testId` and `className` for cleaner interfaces
   - Focusing on essential functionality and flexibility

5. **DRY Code Principles:**
   - Identify and extract repeated patterns into reusable functions
   - Prefer type aliases and shared types to improve readability
   - Use state-based token accessors for cleaner component code
   - Create utility functions for common operations when appropriate
   - Avoid over-optimization like unnecessary memoization

## Active Decisions & Considerations
- All new components must follow the modular directory and file structure.
- Foundation tokens are the single source of truth for design primitives.
- Consider adding specific hover/focus/active states to components for better interactivity.
- **Resolved strategy for component variants vs. subcomponents by creating standalone components when appropriate (e.g., SplitTag).**
- All components should use box-sizing: border-box to ensure consistent dimensions.
- Self-documenting code is preferred over verbose documentation comments.
- Maintain consistent token structure across components to ensure similar patterns.
- Avoid premature optimization and unnecessary complexity.

## Active Development Focus

### Current Focus Areas
- ButtonGroup component implementation and optimization
- Tag component refactoring and improvements
- Breadcrumb component implementation and optimization
- Avatar component implementation and optimization
- Demo system organization and aesthetics
- Component structure alignment with best practices
- Application of DRY principles across the codebase

### Recent Changes

#### ButtonGroup Component
- Implemented fully modular ButtonGroup component that works with existing Button components
- Added support for different layouts (stacked and non-stacked)
- Implemented three modes for button type handling (singlePrimary, allSecondary, noTransform)
- Created proper token structure referencing foundationToken for spacing and border radius
- Applied DRY principles by extracting utility functions for button position and type transformation
- Created a comprehensive demo showcasing all variations and combinations
- Removed unnecessary memoization to simplify the codebase
- Fixed TypeScript and linting errors for a clean build

#### Breadcrumb Component
- Implemented fully modular Breadcrumb component with separate BreadcrumbItem
- Created support for default and truncated variants for handling long breadcrumb paths
- Added flexible slot-based API for custom content
- Implemented proper accessibility attributes for navigation elements
- Designed to support interactive items with onClick handlers
- Created comprehensive demo with various examples
- Applied DRY principles to reduce repetition in rendering logic
- Removed documentation comments in favor of self-documenting code
- Added improved type safety with explicit state types and shared type definitions

#### Tags Component
- Completed implementation of a pure slot-based API, removing the deprecated icon-specific props for more flexibility
- Implemented a single Tag component with consistent styling for all variants
- Added SplitTag component for dual-section tags with different styling/behavior
- Simplified styling system with clear token structure
- Fixed tag height inconsistencies across different sizes
- Improved rendering performance with memo and useCallback
- **Removed backward compatibility for the `style` prop in favor of the semantically clearer `shape` prop**
- Added comprehensive type safety with proper TypeScript interfaces and enums
- Enhanced documentation and examples

#### Avatar Component
- Implemented fully modular Avatar component following our standardized directory structure
- Created a robust component with support for multiple use cases:
  - Four size variants (SM, MD, LG, XL) with appropriate sizing, padding, and typography
  - Two shape options (circular and rounded) controlled via enum
  - Online status indicator with size-specific styling that scales with avatar size
  - Image support with automatic error handling and fallback display
  - Fallback content system that accepts both string initials and custom ReactNode
- Developed a comprehensive token system:
  - Properly structured tokens referencing foundationToken
  - Size-specific dimensions, font sizing, and indicator dimensions
  - Clear separation of concerns in styled component props
  - Consistent naming patterns aligned with other components
- Implemented utility functions to handle common tasks:
  - Automatic generation of initials from full names
  - Image URL validation
  - Color manipulation for styling
- Added accessibility features:
  - Properly hidden text for screen readers
  - Appropriate ARIA attributes
  - Alt text requirements
- Created error handling for image loading failures
- Simplified demo by removing slot-based API examples to focus on core functionality
- Fixed TypeScript issues and enhanced type safety throughout

#### Token System Improvement
- **Implemented utility method pattern for token access**: Added getter functions in the token system that provide a standardized interface for accessing design values
- This approach offers key advantages over direct object access:
  - **Type Safety**: Ensures proper enum values with TypeScript validation
  - **Abstraction**: Shields components from internal token structure changes
  - **Normalization**: Handles data transformations consistently
  - **Performance**: Reduces complex inline expressions in styled components
  - **Maintainability**: Centralizes token access logic for easier updates
- Pattern is demonstrated in the Tags component and will be adopted across all components

#### Demo System
- Improved organization of demos with consistent styling
- Added comprehensive examples for each component variant
- Created a more structured approach to component demonstrations
- Enhanced visual clarity of the demo interface
- Added clear labeling and section organization
- Implemented a proper grid system for demo items
- Beautified all demos with consistent headers, section dividers, and explanatory text
- Standardized demo directory structure with all demos in src/demos/{ComponentName}
- Completed migration of all demos to the standard structure including Tabs

### Upcoming Tasks
- Continue refining component APIs for consistency
- Implement remaining core components
- Develop comprehensive documentation
- Add accessibility improvements to all components
- Create a unified system for component state management
- Apply DRY principles to all components

### Active Decisions

#### Component Structure
We've established a component architecture that separates concerns:

1. **Main Component File (`Component.tsx`)**: Core component logic and rendering
2. **Styled Component File (`StyledComponent.tsx`)**: All styled-components definitions
3. **Types File (`types.ts`)**: TypeScript interfaces, types, and enums
4. **Token File (`token.ts`)**: Design tokens specific to the component
5. **Utils File (`utils.ts`)**: Utility functions for style computation, helpers, etc.

This structure allows for better maintainability, clearer separation of concerns, and more modular code organization.

#### API Design Principles
- Favor composition over configuration when possible
- Use slot-based APIs for flexible content insertion
- Maintain consistent prop naming across components
- Use enums for variant/size/status definitions
- Ensure all components have proper TypeScript types
- Design for extensibility with future requirements in mind
- Remove unnecessary props (like `testId`) for cleaner interfaces
- Apply DRY principles to reduce code repetition

#### Typography Inheritance
- **Removed font-family definitions from all components**: Based on team discussion, we've determined that components should never define font-family properties, as this overrides project preferences.
- Font-family should be inherited from parent elements to allow better integration with host applications
- Components should only define typography properties like font-size, font-weight, line-height, and letter-spacing when necessary
- This change allows projects to set their preferred fonts at the application level without fighting against component-level overrides
- All components need to be audited to remove any font-family definitions

#### Token Access Pattern
- Use utility methods (`getBackgroundColor`, `getTextColor`, etc.) instead of direct object access
- Centralize token structure knowledge within the token file itself
- Keep styled components clean and focused on styling rather than token logic
- Provide a consistent interface that shields components from token structure changes
- Keep consistent token structure across components for familiarity and ease of maintenance

#### Migration and Backward Compatibility
- **Complete migration from `style` to `shape` prop**: The legacy `style` prop has been removed, with `shape` being the standard prop for controlling tag appearance
- As we refine components, we're documenting breaking changes and ensuring smooth migration paths
- Breaking changes are isolated to specific components and carefully communicated

#### Code Quality Standards
- All components must have comprehensive TypeScript types
- Styled components should use the proper typing for theme props
- Use modern React patterns (hooks, functional components)
- Maintain consistent code style throughout the codebase
- Performance considerations should be documented
- Apply DRY principles to reduce repetition
- Prefer self-documenting code over verbose comments 

## Hooks Improvements

### useClickOutside Hook Enhancement
- **Improved flexibility**: Refactored the `useClickOutside` hook to accept either a single ref or an array of refs
- **Better TypeScript typing**: Enhanced type definitions to support `HTMLElement | null` for better type safety
- **Comprehensive documentation**: Added JSDoc comments explaining the hook's purpose and parameters
- **Consistent implementation**: Applied the hook consistently across components (e.g., Breadcrumb dropdown)
- **DRY implementation**: Centralized click-outside detection logic that can be reused across multiple components
- **Performance optimization**: Properly memoized dependencies in useEffect to prevent unnecessary re-renders

### Reusability Principles for Hooks
- **Generic type parameters**: Designed hooks with flexible typing to work with various element types
- **Consistent API patterns**: Established consistent parameter ordering and naming conventions
- **Single responsibility**: Each hook focuses on one specific functionality (e.g., click detection)
- **Proper cleanup**: All hooks with event listeners or subscriptions include proper cleanup in their useEffect return function
- **Clear documentation**: Added comprehensive JSDoc comments to explain usage patterns
- **Exported through index**: All hooks are exported through the hooks index file for easy importing

These improvements align with our overall goal of creating a modular, reusable component library with consistent patterns and high-quality code. 