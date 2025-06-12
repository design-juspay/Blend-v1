import { CSSObject } from "styled-components";
import { FOUNDATION_THEME, ThemeType } from "../../tokens";
import { TabsVariant, TabsSize } from "./types";

// Token Structure: $component.$target.$property.[$variant].[$type].[$state]
// $component: TABS (implied)

export type TabsInteractionState = 'default' | 'hover' | 'active' | 'focus' | 'disabled';

export type TabsTokensType = Readonly<{
  // $target: 'rootLayout'
  rootLayout?: {
    width?: CSSObject["width"];
  };

  // $target: 'list' (The container for tab triggers)
  list: {
    layout: { // $property
      [key in TabsVariant]?: { // $variant
        display?: CSSObject["display"];
        width?: CSSObject["width"];
        alignItems?: CSSObject["alignItems"];
        gap?: CSSObject["gap"];
        padding?: CSSObject["padding"];
        borderBottomWidth?: CSSObject["borderWidth"]; // For underline variant
        borderBottomColor?: CSSObject["borderColor"]; // For underline variant
        backgroundColor?: CSSObject["backgroundColor"]; // For boxed variant
        borderRadius?: CSSObject["borderRadius"]; // For boxed variant
      };
    };
    expandedLayout?: { // $property for when expanded is true
      justifyContent?: CSSObject["justifyContent"];
    };
    // Specific size property for list if needed, e.g., list.size.lg.height
    size?: {
        [key in TabsSize]?: {
            height?: CSSObject["height"];
        };
    };
  };

  // $target: 'trigger' (Individual tab button)
  trigger: {
    size: { // $property
      [key in TabsSize]: { // $variant: md, lg
        height: CSSObject["height"];
        paddingX: CSSObject["paddingLeft"]; // Assuming paddingLeft and Right are same
        fontSize: CSSObject["fontSize"];
      };
    };
    font: { // $property
      [key in TabsVariant]?: { // $variant: underline, boxed, floating
        [key in Extract<TabsInteractionState, 'default' | 'active'>]?: { // $state
          fontWeight: CSSObject["fontWeight"];
        };
      };
    };
    color: { // $property
      [key in TabsVariant]?: { // $variant
        [key in Extract<TabsInteractionState, 'default' | 'hover' | 'active' | 'disabled'>]?: CSSObject["color"]; // $state
      };
    };
    background: { // $property
      [key in TabsVariant]?: { // $variant
        [key in Extract<TabsInteractionState, 'default' | 'hover' | 'active'>]?: CSSObject["backgroundColor"]; // $state
      };
    };
    border: { // $property
      [key in TabsVariant]?: { // $variant
        radius?: CSSObject["borderRadius"]; // For boxed, floating
        underlineHeight?: CSSObject["height"]; // For active underline variant
        underlineColor?: CSSObject["borderColor"]; // For active underline variant
      };
    };
    shadow?: { // $property
      [key in Extract<TabsVariant, 'boxed'>]?: { // $variant: boxed
        [key in Extract<TabsInteractionState, 'active'>]?: CSSObject["boxShadow"]; // $state: active
      };
    };
    iconSpacing?: { // $property
      gap?: CSSObject["gap"]; // Gap between icon and text
    };
    focus?: { // $property (or $state of trigger)
      outlineColor?: CSSObject["borderColor"];
      outlineWidth?: CSSObject["borderWidth"];
      outlineOffset?: CSSObject["outlineOffset"];
      ringWidth?: CSSObject["string"]; // e.g. "2px"
      ringColor?: CSSObject["borderColor"];
      ringOffset?: CSSObject["string"];
    };
    disabledOpacity?: CSSObject["opacity"]; // $property
  };

  // $target: 'content' (The content area for a tab panel)
  content: {
    padding?: CSSObject["padding"]; // $property
    marginTop?: CSSObject["marginTop"]; // $property: Spacing between TabsList and TabsContent
    animation?: { // $property
      duration?: CSSObject["transitionDuration"];
      timingFunction?: CSSObject["transitionTimingFunction"];
    };
  };
  
  // General transition for properties not covered by content.animation
  transition?: {
    duration?: CSSObject["transitionDuration"];
    easing?: CSSObject["transitionTimingFunction"];
  };
}>;

export const getTabsTokens = (foundationToken: ThemeType): TabsTokensType => {
  const underlineBorderColor = foundationToken.colors.gray[700];
  const underlineBorderWidth = foundationToken.border.width[2];
  const listBottomBorderColor = foundationToken.colors.gray[200];

  return {
    rootLayout: {
      width: "100%",
    },
    list: {
      layout: {
        underline: {
          display: "flex",
          width: "100%",
          alignItems: "center",
          gap: foundationToken.unit[12], // Corrected path
          borderBottomWidth: foundationToken.border.width[1],
          borderBottomColor: listBottomBorderColor,
        },
        boxed: {
          display: "flex",
          width: "100%",
          alignItems: "center",
          gap: foundationToken.unit[4], // Corrected path
          backgroundColor: foundationToken.colors.gray[50],
          padding: foundationToken.unit[4], // Corrected path
          borderRadius: foundationToken.border.radius[8], // Corrected path
        },
        floating: {
          display: "flex",
          width: "100%",
          alignItems: "center",
          gap: foundationToken.unit[8], // Corrected path
        },
      },
      expandedLayout: {
        justifyContent: "space-between",
      },
      size: {
        lg: { height: foundationToken.unit[48] } // Corrected path
      }
    },
    trigger: {
      size: {
        md: {
          height: foundationToken.unit[36], 
          paddingX: foundationToken.unit[12], 
          fontSize: foundationToken.font.size.body.md.fontSize, // Corrected path
        },
        lg: {
          height: foundationToken.unit[40], 
          paddingX: foundationToken.unit[12], 
          fontSize: foundationToken.font.size.body.md.fontSize, // Corrected path
        },
      },
      font: {
        underline: {
          default: { fontWeight: foundationToken.font.weight[500] }, // Corrected path
          active: { fontWeight: foundationToken.font.weight[600] }, // Corrected path
        },
        boxed: {
          default: { fontWeight: foundationToken.font.weight[500] }, // Corrected path
          active: { fontWeight: foundationToken.font.weight[600] }, // Corrected path
        },
        floating: {
          default: { fontWeight: foundationToken.font.weight[500] }, // Corrected path
          active: { fontWeight: foundationToken.font.weight[600] }, // Corrected path
        },
      },
      color: {
        underline: {
          default: foundationToken.colors.gray[500],
          hover: foundationToken.colors.gray[600],
          active: foundationToken.colors.gray[700],
          disabled: foundationToken.colors.gray[400], // Assuming disabled color
        },
        boxed: {
          default: foundationToken.colors.gray[500],
          hover: foundationToken.colors.gray[600],
          active: foundationToken.colors.gray[700],
          disabled: foundationToken.colors.gray[400],
        },
        floating: {
          default: foundationToken.colors.gray[500],
          hover: foundationToken.colors.gray[700],
          active: foundationToken.colors.gray[700],
          disabled: foundationToken.colors.gray[400],
        },
      },
      background: {
        underline: {
          default: "transparent",
          hover: "transparent", // Or a very subtle hover like gray[25]
          active: "transparent",
        },
        boxed: {
          default: "transparent",
          hover: foundationToken.colors.gray[0],
          active: foundationToken.colors.gray[0],
        },
        floating: {
          default: "transparent",
          hover: foundationToken.colors.gray[50], // Subtle hover for floating
          active: foundationToken.colors.gray[100],
        },
      },
      border: {
        underline: {
          underlineHeight: underlineBorderWidth,
          underlineColor: underlineBorderColor,
        },
        boxed: {
          radius: foundationToken.border.radius[8], // Corrected path
        },
        floating: {
          radius: foundationToken.border.radius[8], // Corrected path
        },
      },
      shadow: {
        boxed: {
          active: foundationToken.shadows.sm, // Corrected path
        },
      },
      iconSpacing: {
        gap: foundationToken.unit[8], // Corrected path
      },
      focus: {
        // Using ring for focus as per original utils
        ringWidth: foundationToken.border.width[2],
        ringColor: foundationToken.colors.primary[500],
        ringOffset: foundationToken.unit[2], // Corrected path
        // outline properties can be an alternative
        // outlineColor: foundationToken.colors.primary[500],
        // outlineWidth: foundationToken.border.width[2],
        // outlineOffset: foundationToken.unit[1],
      },
      disabledOpacity: foundationToken.opacity[50],
    },
    content: {
      padding: foundationToken.unit[16], // Corrected path
      marginTop: foundationToken.unit[16], // Corrected path
      animation: {
        duration: "0.2s",
        timingFunction: "ease-in-out",
      },
    },
    transition: { // General transition for properties like color, background on trigger
        duration: "0.2s",
        easing: "ease-in-out",
    }
  };
};

const tabsTokens: TabsTokensType = getTabsTokens(FOUNDATION_THEME);

export default tabsTokens;
