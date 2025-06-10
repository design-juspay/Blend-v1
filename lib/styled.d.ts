import 'styled-components';
import { ThemeType } from './tokens';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
} 