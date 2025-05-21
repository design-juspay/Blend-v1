import React from "react";
import { Button } from "../../lib/components/Button";
import type {
  ButtonType,
  ButtonSize,
  ButtonSubType,
} from "../../lib/components/Button";
import styled from "styled-components";

const Container = styled.div`
  padding: 24px;
  font-family: sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #f9f9f9;
`;

const Section = styled.div`
  margin-bottom: 32px;
  background-color: white;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  margin-bottom: 24px;
  color: #333;
  font-weight: 600;
`;

const SectionTitle = styled.h2`
  margin-bottom: 16px;
  color: #444;
  font-weight: 500;
`;

const SubsectionTitle = styled.h3`
  margin-bottom: 16px;
  color: #555;
  font-weight: 500;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 24px;
  align-items: center;
`;

const ButtonLabel = styled.div`
  font-size: 12px;
  color: #777;
  margin-bottom: 4px;
`;

const IconPlaceholder = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 3V13M3 8H13"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ButtonDemo = () => {
  const types: ButtonType[] = ["primary", "secondary", "danger", "success"];
  const sizes: ButtonSize[] = ["sm", "md", "lg"];
  const subTypes: ButtonSubType[] = [
    "default",
    "iconOnly",
    "link",
    "plainIcon",
  ];

  return (
    <Container>
      <Title>JP Button Component</Title>

      {/* Button Types */}
      <Section>
        <SectionTitle>Button Types</SectionTitle>
        <ButtonRow>
          {types.map((type) => (
            <div key={type}>
              <ButtonLabel>{type}</ButtonLabel>
              <Button type={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </Button>
            </div>
          ))}
        </ButtonRow>
      </Section>

      {/* Button Sizes */}
      <Section>
        <SectionTitle>Button Sizes</SectionTitle>
        <ButtonRow>
          {sizes.map((size) => (
            <div key={size}>
              <ButtonLabel>{size}</ButtonLabel>
              <Button size={size}>Size {size.toUpperCase()}</Button>
            </div>
          ))}
        </ButtonRow>
      </Section>

      {/* Button SubTypes */}
      <Section>
        <SectionTitle>Button SubTypes</SectionTitle>
        {types.map((type) => (
          <div key={type}>
            <SubsectionTitle>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </SubsectionTitle>
            <ButtonRow>
              {subTypes.map((subType) => (
                <div key={`${type}-${subType}`}>
                  <ButtonLabel>{subType}</ButtonLabel>
                  <Button
                    type={type}
                    subType={subType}
                    leftIcon={
                      subType !== "plainIcon" ? <IconPlaceholder /> : undefined
                    }
                  >
                    {subType !== "iconOnly" ? subType : undefined}
                  </Button>
                </div>
              ))}
            </ButtonRow>
          </div>
        ))}
      </Section>

      {/* Button States */}
      <Section>
        <SectionTitle>Button States</SectionTitle>
        <SubsectionTitle>Regular & Disabled</SubsectionTitle>
        <ButtonRow>
          {types.map((type) => (
            <React.Fragment key={type}>
              <div>
                <ButtonLabel>{type} - regular</ButtonLabel>
                <Button type={type}>{type}</Button>
              </div>
              <div>
                <ButtonLabel>{type} - disabled</ButtonLabel>
                <Button type={type} isDisabled>
                  {type}
                </Button>
              </div>
              <div>
                <ButtonLabel>{type} - loading</ButtonLabel>
                <Button type={type} isLoading>
                  {type}
                </Button>
              </div>
            </React.Fragment>
          ))}
        </ButtonRow>
      </Section>

      {/* Icons */}
      <Section>
        <SectionTitle>Button with Icons</SectionTitle>
        <ButtonRow>
          <div>
            <ButtonLabel>Left Icon</ButtonLabel>
            <Button leftIcon={<IconPlaceholder />}>Left Icon</Button>
          </div>
          <div>
            <ButtonLabel>Right Icon</ButtonLabel>
            <Button rightIcon={<IconPlaceholder />}>Right Icon</Button>
          </div>
          <div>
            <ButtonLabel>Both Icons</ButtonLabel>
            <Button
              leftIcon={<IconPlaceholder />}
              rightIcon={<IconPlaceholder />}
            >
              Both Icons
            </Button>
          </div>
        </ButtonRow>
      </Section>
    </Container>
  );
};

export default ButtonDemo;
