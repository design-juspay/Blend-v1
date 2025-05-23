# Active Context

## Current Focus
- Establishing and enforcing a modular, scalable component architecture for the Blend-v1 component library.
- Refactoring existing components to follow the established patterns.
- Building a demo system to showcase component variants and usage.
- Ensuring all components follow accessibility best practices.
- Improving code quality by applying DRY principles to reduce repetition.

## Current Work Focus

### UI Improvements and Features
1. **Tags Component Refinement:**
   - Completely removed deprecated icon-based props in favor of a pure slot-based API
   - Fixed height inconsistencies and improved typography
   - Added comprehensive token system for styling 
   - Implemented new slot-based API for enhanced flexibility

2. **SplitTag Component Implementation:**
   - Created a standalone SplitTag component with its own directory structure
   - Designed to reuse Tag component functionality when appropriate
   - Implemented a clear API with primaryTag and secondaryTag objects
   - Added fallback to regular Tag when secondaryTag is not provided
   - Reused Tag tokens and utilities to maintain consistency
   - Created a dedicated demo for SplitTag with comprehensive examples

3. **Breadcrumb Component Implementation:**
   - Created a fully modular Breadcrumb component following the established architecture pattern
   - Implemented support for default and truncated variants
   - Added flexible slot-based API for customizable content on both sides of each item
   - Included proper accessibility attributes and semantic markup
   - Designed with customizable active state highlighting
   - Created comprehensive demo with various examples
   - Applied DRY principles to reuse code for rendering breadcrumb items
   - Removed unnecessary documentation comments in favor of self-documenting code

4. **Demo System Improvements:**
   - Restructured the demo system to be more modular and maintainable
   - Created dedicated component demo files in separate directories
   - Moved Button demos to `src/demos/Button/ButtonDemo.tsx`
   - Moved Tag demos to `src/demos/Tags/TagsDemo.tsx`
   - Added SplitTag demos to `src/demos/SplitTag/SplitTagDemo.tsx`
   - Added Breadcrumb demos to `src/demos/Breadcrumb/BreadcrumbDemo.tsx`
   - Simplified `App.tsx` by importing modularized demo components
   - Enhanced component showcasing with better organization and aesthetics
   - Beautified all demos with consistent headers, section dividers, and descriptive text
   - Improved visual hierarchy with better spacing and organization

5. **Code Quality Improvements:**
   - Applied consistent styling patterns across components
   - Implemented cleaner utility functions
   - Removed unnecessary comments while maintaining essential documentation
   - Ensured proper TypeScript typing throughout the codebase
   - Removed all references to `testId` prop across components for cleaner APIs
   - Applied DRY principles to reduce code repetition in components
   - Created type aliases to improve code readability and maintenance
   - Implemented reusable rendering functions for component parts

## Recent Changes
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

- Refactored the Tags component to follow the modular component structure:
  - Created proper TypeScript types with enums for variants, statuses, sizes, and shapes
  - Implemented token-based styling using foundationToken.ts as the source of truth
  - Separated styled components, utils, and tokens into their own files
  - Developed both Tag and SplitTag components with consistent APIs
  - Restructured SplitTag to use a more intuitive API with primaryTag and secondaryTag objects
  - Added single Tag fallback functionality when secondaryTag is not provided
  - Added the components to the demo system with a simple navigation bar

- Created a standalone SplitTag component:
  - Moved SplitTag from the Tags directory to its own directory
  - Established proper component structure with separate files for component logic, styling, tokens, types, and utilities
  - Reused Tag component for the single tag fallback case
  - Leveraged Tag tokens and utilities for consistency
  - Created a dedicated demo with comprehensive examples
  - Implemented a clean API with primaryTag and secondaryTag objects

- Enhanced the demo system with a more organized and beautiful UI:
  - Implemented a vertical navigation sidebar for better component organization
  - Created a structured showcase format with labeled component examples
  - Added descriptive section headers and component descriptions
  - Improved visual styling with cards, proper spacing, and consistent typography
  - Demonstrated slot-based API usage with custom content examples

- Streamlined component APIs by removing references to `testId` prop:
  - Removed `testId` from Button component
  - Removed `testId` from Tag component
  - Removed `testId` from SplitTag component
  - Ensured consistent props pattern across all components

- Created the foundationToken.ts file as the central design token system
- Documented best practices for code quality and token management.
- **Removed className props from all components (Button, Tag, SplitTag) to prevent custom styling that could break component UI consistency**
- **Converted interfaces to type aliases in all component type definitions for better consistency and to prevent accidental declaration merging**

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
   - Removing unnecessary props like `testId` for cleaner interfaces
   - Focusing on essential functionality and flexibility

5. **DRY Code Principles:**
   - Identify and extract repeated patterns into reusable functions
   - Prefer type aliases and shared types to improve readability
   - Use state-based token accessors for cleaner component code

## Active Decisions & Considerations
- All new components must follow the modular directory and file structure.
- Foundation tokens are the single source of truth for design primitives.
- Consider adding specific hover/focus/active states to components for better interactivity.
- **Resolved strategy for component variants vs. subcomponents by creating standalone components when appropriate (e.g., SplitTag).**
- All components should use box-sizing: border-box to ensure consistent dimensions.
- Self-documenting code is preferred over verbose documentation comments.
- Maintain consistent token structure across components to ensure similar patterns.

## Active Development Focus

### Current Focus Areas
- Tag component refactoring and improvements
- Breadcrumb component implementation and optimization
- Demo system organization and aesthetics
- Component structure alignment with best practices
- Application of DRY principles across the codebase

### Recent Changes

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
- Maintained consistent token structure with other components

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