import { FOUNDATION_THEME } from "../../tokens";
import { CSSObject } from "styled-components";
import { foundationToken } from "../../foundationToken";

type ModalToken = {
  background: {
    modal: CSSObject["backgroundColor"];
    backdrop: CSSObject["backgroundColor"];
  };
  border: {
    radius: CSSObject["borderRadius"];
    color: CSSObject["borderColor"];
    divider: CSSObject["borderColor"];
  };
  shadow: {
    box: CSSObject["boxShadow"];
  };
  color: {
    title: CSSObject["color"];
    subtitle: CSSObject["color"];
    closeButton: CSSObject["color"];
    closeButtonHover: CSSObject["color"];
  };
  opacity: {
    backdrop: string;
  };
  size: {
    maxWidth: CSSObject["maxWidth"];
    maxHeight: CSSObject["maxHeight"];
  };
  padding: {
    header: CSSObject["padding"];
    body: CSSObject["padding"];
    footerX: CSSObject["paddingLeft"];
    footerY: CSSObject["paddingTop"];
  };
  gap: {
    header: CSSObject["gap"];
    footer: CSSObject["gap"];
  };
  z: {
    index: CSSObject["zIndex"];
  };
  interaction: {
    pointerEvents: CSSObject["pointerEvents"];
  };
};

const modalTokens: ModalToken = {
  background: {
    modal: foundationToken.colors.gray[0],
    backdrop: foundationToken.colors.gray[700],
  },
  border: {
    radius: FOUNDATION_THEME.border.radius[12],
    color: foundationToken.colors.gray[200],
    divider: foundationToken.colors.gray[200],
  },
  shadow: {
    box: FOUNDATION_THEME.shadows.xs,
  },
  color: {
    title: foundationToken.colors.gray[700],
    subtitle: foundationToken.colors.gray[500],
    closeButton: foundationToken.colors.gray[500],
    closeButtonHover: foundationToken.colors.gray[700],
  },
  opacity: {
    backdrop: "0.6",
  },
  size: {
    maxWidth: "calc(100vw - 2rem)",
    maxHeight: "calc(100vh - 2rem)",
  },
  padding: {
    header: FOUNDATION_THEME.unit[16],
    body: FOUNDATION_THEME.unit[16],
    footerX: FOUNDATION_THEME.unit[24],
    footerY: FOUNDATION_THEME.unit[16],
  },
  gap: {
    header: FOUNDATION_THEME.unit[16],
    footer: FOUNDATION_THEME.unit[12],
  },
  z: {
    index: "50",
  },
  interaction: {
    pointerEvents: "auto",
  },
};

export default modalTokens;
