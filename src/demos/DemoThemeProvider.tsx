import { useState } from "react";
import { SingleSelect, Tag } from "../../lib/main";

const DemoThemeProvider = () => {
  const [theme, setTheme] = useState<"EULER" | "JUSBIZ">("EULER");
  const codeBlock = `
  <ThemeProvider${
    theme === "EULER"
      ? ""
      : " foundationTokens={FOUNDATION_THEME} componentTokens={JUSBIZ_COMPONENT_TOKENS}"
  }>
    <Tag text="Subtle Variant, Primary Color Tag, Small Size" />
  </ThemeProvider>
  `;

  return (
    <div style={{ padding: 10, margin: 2 }}>
      <SingleSelect
        label="Theme"
        placeholder="Select Theme"
        selected={theme}
        onSelect={(value) => setTheme(value as "EULER" | "JUSBIZ")}
        items={[
          {
            items: [
              {
                value: "EULER",
                label: "EULER",
              },
              {
                value: "JUSBIZ",
                label: "JUSBIZ",
              },
            ],
          },
        ]}
      />
      <div>
        <pre>
          <code style={{ fontSize: 12, color: "black" }}>{codeBlock}</code>
        </pre>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          marginTop: 100,
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          <Tag text="Subtle Variant, Primary Color Tag, Small Size" />
          <Tag text="Subtle Variant, Primary Color Tag" />
        </div>
      </div>
    </div>
  );
};

export default DemoThemeProvider;
