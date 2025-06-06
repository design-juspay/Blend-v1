import React, { useState } from "react";

import {
  addSnackbar,
  FOUNDATION_THEME,
  SingleSelect,
  SnackbarVariant,
  Tag,
  TagColor,
  TagShape,
  TagSize,
  TagVariant,
} from "../../../lib/main";
import { ThemeProvider } from "../../../lib/context";
import Block from "../../../lib/components/Primitives/Block/Block";
import theme1Tokens from "../../themes/theme1_Foundation.tokens";
import theme1ComponentsToken from "../../themes/theme1_components.token";
import {
  SelectMenuAlignment,
  SelectMenuVariant,
} from "../../../lib/components/Select";
import tagTokens from "../../../lib/components/Tags/tag.tokens";
// import Menu from "../../../lib/components/Menu/Menu";

const TagsDemo: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = useState<string>("theme1");

  const options = [
    {
      items: [
        {
          label: "Euler",
          value: "theme1",
        },
        {
          label: "Theme 2",
          value: "theme2",
        },
      ],
    },
  ];

  const rest =
    selectedTheme === "theme1" ? {} : { foundationTokens: theme1Tokens };

  return (
    <div className="component-section">
      <header className="component-header">
        <h1 className="component-title">Tag Component</h1>
        <p className="component-description">
          Versatile tag components with various variants, statuses, and sizes.
        </p>
      </header>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <div
          style={{
            color: "red",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          default foundation token primary[50]:{" "}
          {FOUNDATION_THEME.colors.primary[50]}{" "}
          <div
            style={{
              backgroundColor: FOUNDATION_THEME.colors.primary[50],
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              position: "relative",
            }}
          ></div>
        </div>
        <div
          style={{
            color: "red",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          modified foundation token primary[50]:{" "}
          {theme1Tokens.colors.primary[50]}
          <div
            style={{
              backgroundColor: theme1Tokens.colors.primary[50],
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              position: "relative",
            }}
          ></div>
        </div>
      </div>

      <SingleSelect
        minWidth={200}
        alignment={SelectMenuAlignment.START}
        items={options}
        selected={selectedTheme}
        onSelect={setSelectedTheme}
        label="Select Theme"
        placeholder="Select Theme"
        variant={SelectMenuVariant.NO_CONTAINER}
      />

      <p style={{ color: "red" }}>{JSON.stringify(rest)}</p>

      <ThemeProvider
        // foundationTokens={
        //   selectedTheme === "theme1" ? theme1Tokens : FOUNDATION_THEME
        // }
        {...rest}
        componentTokens={
          selectedTheme === "theme1" ? {} : { TAGS: theme1ComponentsToken }
        }
      >
        {/* foundationTokens={theme1Tokens} componentTokens={theme1CompTokens} */}
        <Block className="debug" padding={10} display="flex" gap={10}>
          <Tag
            text="Hello"
            size={TagSize.XS}
            variant={TagVariant.NO_FILL}
            color={TagColor.NEUTRAL}
            shape={TagShape.SQUARICAL}
          />
          {/* <Tag text="Hello" size={TagSize.SM} />
          <Tag text="Hello" size={TagSize.MD} />
          <Tag text="Hello" size={TagSize.LG} /> */}
        </Block>
      </ThemeProvider>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <div
          style={{
            color: "red",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          default tag component token background.noFill.neutral:{" "}
          {tagTokens.background.noFill.neutral}{" "}
          <div
            style={{
              backgroundColor: tagTokens.background.noFill.primary,
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              position: "relative",
              border: "1px solid black",
            }}
          ></div>
        </div>
        <div
          style={{
            color: "red",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          modified tag component token background.noFill.neutral:{" "}
          {theme1ComponentsToken.background.noFill.neutral}
          <div
            style={{
              backgroundColor: theme1ComponentsToken.background.noFill.neutral,
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              position: "relative",
            }}
          ></div>
        </div>
      </div>

      <div style={{ height: 40 }}></div>
      <Tag
        text="Ref Euler No Fill Neutral variant"
        size={TagSize.XS}
        variant={TagVariant.NO_FILL}
        color={TagColor.NEUTRAL}
        shape={TagShape.SQUARICAL}
      />

      {/* <div>
        <section className="showcase-section" style={{ marginTop: "200px" }}>
          <h2 className="showcase-title">Tag Variants</h2>
          <div className="showcase-container">
            <div className="showcase-item">
              <Tag
                text="No Fill"
                variant={TagVariant.NO_FILL}
                leadingSlot={<Hash size={12} />}
              />
              <span className="showcase-label">No Fill</span>
            </div>
            <div className="showcase-item">
              <Tag
                text="Attentive"
                variant={TagVariant.ATTENTIVE}
                leadingSlot={<Hash size={12} />}
              />
              <span className="showcase-label">Attentive</span>
            </div>
            <div className="showcase-item">
              <Tag
                text="Subtle"
                variant={TagVariant.SUBTLE}
                leadingSlot={<Hash size={12} />}
              />
              <span className="showcase-label">Subtle</span>
            </div>
          </div>
        </section>

        <section className="showcase-section">
          <h2 className="showcase-title">Tag Statuses</h2>
          <div className="showcase-container">
            <div className="showcase-item">
              <Tag
                text="Neutral"
                color={TagColor.NEUTRAL}
                leadingSlot={<Hash size={12} />}
              />
              <span className="showcase-label">Neutral</span>
            </div>
            <div className="showcase-item">
              <Tag
                text="Primary"
                color={TagColor.PRIMARY}
                leadingSlot={<Hash size={12} />}
              />
              <span className="showcase-label">Primary</span>
            </div>
            <div className="showcase-item">
              <Tag
                text="Success"
                color={TagColor.SUCCESS}
                leadingSlot={<Hash size={12} />}
              />
              <span className="showcase-label">Success</span>
            </div>
            <div className="showcase-item">
              <Tag
                text="Error"
                color={TagColor.ERROR}
                leadingSlot={<Hash size={12} />}
              />
              <span className="showcase-label">Error</span>
            </div>
            <div className="showcase-item">
              <Tag
                text="Warning"
                color={TagColor.WARNING}
                leadingSlot={<Hash size={12} />}
              />
              <span className="showcase-label">Warning</span>
            </div>
            <div className="showcase-item">
              <Tag
                text="Purple"
                color={TagColor.PURPLE}
                leadingSlot={<Hash size={12} />}
              />
              <span className="showcase-label">Purple</span>
            </div>
          </div>
        </section>

        <section className="showcase-section">
          <h2 className="showcase-title">Tag Sizes</h2>
          <div className="showcase-container">
            <div className="showcase-item">
              <Tag
                text="Extra Small"
                size={TagSize.XS}
                leadingSlot={<Hash size={10} />}
              />
              <span className="showcase-label">XS</span>
            </div>
            <div className="showcase-item">
              <Tag
                text="Small"
                size={TagSize.SM}
                leadingSlot={<Hash size={12} />}
              />
              <span className="showcase-label">SM</span>
            </div>
            <div className="showcase-item">
              <Tag
                text="Medium"
                size={TagSize.MD}
                leadingSlot={<Hash size={12} />}
              />
              <span className="showcase-label">MD</span>
            </div>
            <div className="showcase-item">
              <Tag
                text="Large"
                size={TagSize.LG}
                leadingSlot={<Hash size={14} />}
              />
              <span className="showcase-label">LG</span>
            </div>
          </div>
        </section>

        <section className="showcase-section">
          <h2 className="showcase-title">Tag Shapes</h2>
          <div className="showcase-container">
            <div className="showcase-item">
              <Tag
                text="Rounded"
                shape={TagShape.ROUNDED}
                leadingSlot={<Hash size={12} />}
              />
              <span className="showcase-label">Rounded</span>
            </div>
            <div className="showcase-item">
              <Tag
                text="Squarical"
                shape={TagShape.SQUARICAL}
                leadingSlot={<Hash size={12} />}
              />
              <span className="showcase-label">Squarical</span>
            </div>
          </div>
        </section>
        <section className="showcase-section">
          <h2 className="showcase-title">Slot Usage</h2>
          <div className="showcase-container">
            <div className="showcase-item">
              <Tag text="Leading Slot" leadingSlot={<Hash size={12} />} />
              <span className="showcase-label">Leading Slot</span>
            </div>
            <div className="showcase-item">
              <Tag text="Trailing Slot" trailingSlot={<Hash size={12} />} />
              <span className="showcase-label">Trailing Slot</span>
            </div>
            <div className="showcase-item">
              <Tag
                text="Both Slots"
                leadingSlot={<Hash size={12} />}
                trailingSlot={<Filter size={12} />}
              />
              <span className="showcase-label">Both Slots</span>
            </div>
            <div className="showcase-item">
              <Tag
                text="Custom Slot"
                leadingSlot={<Hash size={12} />}
                trailingSlot={
                  <Block
                    backgroundColor="rgba(0,0,0,0.1)"
                    paddingX={4}
                    paddingY={2}
                    borderRadius="9999px"
                    display="flex"
                    alignItems="center"
                  >
                    <PrimitiveText as="span" style={{ marginRight: "2px" }}>
                      5
                    </PrimitiveText>
                    <Filter size={10} />
                  </Block>
                }
              />
              <span className="showcase-label">Complex Content</span>
            </div>
          </div>
          <Block display="flex" alignItems="center" gap={10} marginTop={10}>
            <button
              onClick={() =>
                addSnackbar({
                  header: "Info Heading",
                  description:
                    "This is body message of the information bar. This text is going to a run a bit longer.",
                  variant: SnackbarVariant.SUCCESS,
                  actionButton: {
                    label: "Action",
                    onClick: () => alert("Action clicked"),
                  },
                })
              }
            >
              Click me
            </button>
            <button
              onClick={() =>
                addSnackbar({
                  header: "Info Heading",
                  description:
                    "This is body message of the information bar. This text is going to a run a bit longer.",
                  variant: SnackbarVariant.SUCCESS,
                  actionButton: {
                    label: "Action",
                    onClick: () => alert("Action clicked"),
                  },
                })
              }
            >
              Click me
            </button>
            <button
              onClick={() =>
                addSnackbar({
                  header: "Info Heading",
                  description:
                    "This is body message of the information bar. This text is going to a run a bit longer.",
                  variant: SnackbarVariant.ERROR,
                  actionButton: {
                    label: "Action",
                    onClick: () => alert("Action clicked"),
                  },
                })
              }
            >
              Click me
            </button>
          </Block>
        </section>
      </div> */}
    </div>
  );
};

export default TagsDemo;
