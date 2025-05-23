import type { ReactNode, MouseEventHandler } from "react";
import { 
  TagVariant, 
  TagStatus, 
  TagSize, 
  TagShape 
} from "../Tags";

export { 
  TagVariant, 
  TagStatus, 
  TagSize, 
  TagShape 
};

export interface TagConfig {
  text: string;
  variant?: TagVariant;
  status?: TagStatus;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export interface SplitTagProps {
  primaryTag: TagConfig;
  secondaryTag?: TagConfig;
  size?: TagSize;
  shape?: TagShape;
  leadingSlot?: ReactNode;
  trailingSlot?: ReactNode;
  testId?: string;
} 