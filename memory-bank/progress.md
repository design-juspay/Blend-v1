# Progress

## What Works
- Modular component structure and rules are documented.
- Foundation tokens are defined and referenced in components.
- Button component serves as a reference implementation.
- Tags component has been refactored to follow the modular structure, including:
  - Proper TypeScript types and enums
  - Styled components
  - Token-based styling referencing foundation tokens
  - Utility functions for style computation
  - Separate Tag and SplitTag components
  - Consistent height handling across all tag variants
  - Custom border radius for different sizes of tags (squarical & rounded)
  - Support for different variants in left and right sections of SplitTags
  - Font integration with InterDisplay from the project fonts

## What's Left to Build
- Refactor or build additional components using the new structure.
- Expand token coverage for more design primitives.
- Add more accessibility and testing documentation.
- Implement removable/closable tags functionality.
- Consider adding a slot-based API for icons and custom content.

## Current Status
- Documentation and rules are in place.
- Two components (Button and Tags) now follow the modular structure.
- Demo page includes both components with a simple navigation system.
- Tags component now has consistent heights across all variants and handles mixed variants properly.

## Known Issues
- Some CSS styling may need fine-tuning for perfect alignment.
- Some legacy components may not yet comply with new standards.
- Token structure may need to evolve as new requirements emerge. 