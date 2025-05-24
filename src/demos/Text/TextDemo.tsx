import React from "react";
import { Text, TextProps } from "../../../lib/components/Text"; // Assuming TextProps is exported from Text.tsx
import { theme, ThemeType } from "../../../lib/tokens";
import "./TextDemo.css"; // We'll create this file next for styling

const TextDemo: React.FC = () => {
  // const textSamples: Array<Partial<TextProps> & { description: string }> = [
  //   {
  //     description: "Default Text (Body Medium)",
  //     children: "This is a default paragraph of text.",
  //   },
  //   {
  //     description: "Heading Large",
  //     children: "This is a Large Heading",
  //     size: "lg", // Assuming 'lg' is a valid heading size
  //   },
  //   {
  //     description: "Display Small",
  //     children: "Display Small Text",
  //     size: "sm", // Assuming 'sm' is a valid display size
  //   },
  //   {
  //     description: "Code Medium",
  //     children: 'const example = "This is code";',
  //     size: "md", // Assuming 'md' is a valid code size
  //     fontFamily: theme.font.family.mono,
  //   },
  //   {
  //     description: "Custom Color",
  //     children: "This text has a custom color.",
  //     color: theme.text.color.primary,
  //   },
  //   {
  //     description: "Custom Weight (Bold)",
  //     children: "This text is bold.",
  //     weight: "bold" as keyof ThemeType["font"]["weight"],
  //   },
  //   {
  //     description: "Text Align (Right)",
  //     children: "This text is right-aligned.",
  //     align: "right",
  //   },
  //   {
  //     description: "Letter Spacing (Expanded)",
  //     children: "Wide Spacing",
  //     letterSpacing: "expanded" as keyof ThemeType["font"]["letterSpacing"],
  //   },
  // ];

  return (
    <div className="text-demo">
      <h1>Text Component Demo</h1>

      <Text opacity={40}>Hello</Text>
    </div>
  );
};

export default TextDemo;
