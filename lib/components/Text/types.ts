import { ThemeType } from "../../tokens";
import { CSS } from "styled-components/dist/types";
import { JSX } from "react";

export type VariantType =
  | "body.xs"
  | "body.sm"
  | "body.md"
  | "body.lg"
  | "display.sm"
  | "display.md"
  | "display.lg"
  | "display.xl"
  | "heading.sm"
  | "heading.md"
  | "heading.lg"
  | "heading.xl"
  | "heading.2xl"
  | "code.sm"
  | "code.md"
  | "code.lg";

export interface StyledTextProps {
  variant?: VariantType;
  weight?: keyof ThemeType["font"]["weight"];
  color?: CSS.Property.Color;
  textAlign?: CSS.Property.TextAlign;
  letterSpacing?: keyof ThemeType["font"]["letterSpacing"];
  fontFamily?: keyof ThemeType["font"]["family"];
  fontSize?: number;
  theme?: any;
  opacity?: keyof ThemeType["opacity"];
}

export type SemanticTagType = keyof Pick<
  JSX.IntrinsicElements,
  "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "span" | "div" | "code" | "q"
>;

export interface TextProps extends StyledTextProps {
  children: React.ReactNode;
  as?: SemanticTagType;
}

export interface TextProps extends StyledTextProps {
  children: React.ReactNode;
  as?: SemanticTagType;
}
