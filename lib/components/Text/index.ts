import TextComponent from './Text';
export type { TextProps, VariantType, SemanticTagType } from './Text';

export const Text = TextComponent;
// Ensure default is also exported if anything relies on that pattern from this index file, though main.ts uses named.
export default TextComponent;
