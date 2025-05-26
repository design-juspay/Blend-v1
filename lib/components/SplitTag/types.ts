import { ReactNode } from "react";
import {
  TagV2Color,
  TagV2Props,
  TagV2Shape,
  TagV2Size,
  TagV2Variant,
} from "../TagsV2";

export type TagConfig = {
  text: string;
  variant?: TagV2Variant;
  style?: TagV2Color;
  onClick?: () => {};
};

export type SplitTagProps = {
  primaryTag: Omit<TagV2Props, "splitTagPosition" | "size" | "shape">;
  secondaryTag?: Omit<TagV2Props, "splitTagPosition" | "size" | "shape">;
  leadingSlot?: ReactNode;
  trailingSlot?: ReactNode;
  size?: TagV2Size;
  shape?: TagV2Shape;
};
