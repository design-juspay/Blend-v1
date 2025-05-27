import { useState } from "react";

import styled from "styled-components";
import { foundationToken } from "../../../lib/foundationToken";
import { Button, ButtonType } from "../../../lib/main";
import Block from "../../../lib/components/Primitives/Block/Block";
import Text from "../../../lib/components/Text/Text";
import { FOUNDATION_THEME } from "../../../lib/tokens";
import { Modal } from "../../../lib/components/Modal";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px;
`;

const ConfigSection = styled.div`
  margin-bottom: 32px;
  padding: 24px;
  border-radius: 8px;
  background-color: ${foundationToken.colors.gray[50]};
  border: 1px solid ${foundationToken.colors.gray[200]};
`;

const ConfigGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 16px;
`;

const CheckboxGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-top: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: ${foundationToken.colors.gray[700]};
`;

const Input = styled.input`
  width: 100%;
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid ${foundationToken.colors.gray[300]};
  font-size: 14px;

  &:focus {
    border-color: ${foundationToken.colors.primary[500]};
    outline: none;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid ${foundationToken.colors.gray[300]};
  font-size: 14px;
  background-color: white;

  &:focus {
    border-color: ${foundationToken.colors.primary[500]};
    outline: none;
  }
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${foundationToken.colors.gray[700]};
`;

const Checkbox = styled.input`
  margin-right: 8px;
  cursor: pointer;
  color: ${foundationToken.colors.gray[700]};
`;

const ModalDemo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Configuration state
  const [config, setConfig] = useState({
    title: "Modal Heading",
    subtitle: "One line description of the modal",
    primaryButtonText: "Confirm",
    secondaryButtonText: "Cancel",
    primaryButtonType: ButtonType.PRIMARY,
    secondaryButtonType: ButtonType.SECONDARY,
    showCloseButton: true,
    showDivider: true,
    closeOnBackdropClick: true,
    primaryButtonDisabled: false,
    secondaryButtonDisabled: false,
    showPrimaryButton: true,
    showSecondaryButton: true,
    contentType: "basic",
  });

  const handleCheckboxChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setConfig({
        ...config,
        [field]: e.target.checked,
      });
    };

  const handleInputChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setConfig({
        ...config,
        [field]: e.target.value,
      });
    };

  const handleSelectChange =
    (field: string) => (e: React.ChangeEvent<HTMLSelectElement>) => {
      setConfig({
        ...config,
        [field]: e.target.value,
      });
    };

  const renderModalContent = () => {
    switch (config.contentType) {
      case "basic":
        return (
          <Block>
            <Text variant="body.md" color={foundationToken.colors.gray[600]}>
              This is a configurable modal for demonstration purposes. You can
              adjust various settings using the controls.
            </Text>
          </Block>
        );
      case "form":
        return (
          <Block
            display="flex"
            flexDirection="column"
            gap={FOUNDATION_THEME.unit[16]}
          >
            <Block
              display="flex"
              flexDirection="column"
              gap={FOUNDATION_THEME.unit[8]}
            >
              <Text
                variant="body.md"
                fontWeight={500}
                color={foundationToken.colors.gray[700]}
              >
                Name
              </Text>
              <Input type="text" placeholder="Enter your name" />
            </Block>

            <Block
              display="flex"
              flexDirection="column"
              gap={FOUNDATION_THEME.unit[8]}
            >
              <Text
                variant="body.md"
                fontWeight={500}
                color={foundationToken.colors.gray[700]}
              >
                Email
              </Text>
              <Input type="email" placeholder="Enter your email" />
            </Block>

            <Block
              display="flex"
              alignItems="center"
              gap={FOUNDATION_THEME.unit[8]}
            >
              <input type="checkbox" id="notifications" />
              <label htmlFor="notifications">
                <Text
                  variant="body.md"
                  color={foundationToken.colors.gray[600]}
                >
                  Receive email notifications
                </Text>
              </label>
            </Block>
          </Block>
        );
      case "long":
        return (
          <Block
            display="flex"
            flexDirection="column"
            gap={FOUNDATION_THEME.unit[16]}
          >
            {Array.from({ length: 10 }).map((_, index) => (
              <Block
                key={index}
                padding={FOUNDATION_THEME.unit[16]}
                backgroundColor={foundationToken.colors.gray[50]}
                borderRadius={FOUNDATION_THEME.border.radius[8]}
              >
                <Text
                  variant="body.md"
                  color={foundationToken.colors.gray[700]}
                >
                  Section {index + 1}: Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt,
                  nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.
                  Nullam auctor, nisl eget ultricies tincidunt, nisl nisl
                  aliquam nisl, eget ultricies nisl nisl eget nisl.
                </Text>
              </Block>
            ))}
          </Block>
        );
      default:
        return <Text variant="body.md">Simple modal content</Text>;
    }
  };

  return (
    <Container>
      <Block marginBottom={FOUNDATION_THEME.unit[24]}>
        <Text
          as="h1"
          variant="heading.xl"
          color={foundationToken.colors.gray[700]}
        >
          Modal Configuration Playground
        </Text>
        <Text variant="body.lg" color={foundationToken.colors.gray[600]}>
          Customize the modal to see different configurations in action
        </Text>
      </Block>

      <ConfigSection>
        <ConfigGrid>
          {/* Left Column */}
          <Block>
            <FormGroup>
              <Label>Title</Label>
              <Input
                type="text"
                value={config.title}
                onChange={handleInputChange("title")}
              />
            </FormGroup>

            <FormGroup>
              <Label>Subtitle</Label>
              <Input
                type="text"
                value={config.subtitle}
                onChange={handleInputChange("subtitle")}
              />
            </FormGroup>

            <FormGroup>
              <Label>Primary Button Text</Label>
              <Input
                type="text"
                value={config.primaryButtonText}
                onChange={handleInputChange("primaryButtonText")}
              />
            </FormGroup>

            <FormGroup>
              <Label>Secondary Button Text</Label>
              <Input
                type="text"
                value={config.secondaryButtonText}
                onChange={handleInputChange("secondaryButtonText")}
              />
            </FormGroup>

            <FormGroup>
              <Label>Content Type</Label>
              <Select
                value={config.contentType}
                onChange={handleSelectChange("contentType")}
              >
                <option value="basic">Basic</option>
                <option value="form">Form</option>
                <option value="long">Long Content</option>
              </Select>
            </FormGroup>
          </Block>

          {/* Right Column */}
          <Block>
            <FormGroup>
              <Label>Primary Button Type</Label>
              <Select
                value={config.primaryButtonType}
                onChange={handleSelectChange("primaryButtonType")}
              >
                {Object.values(ButtonType).map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </Select>
            </FormGroup>

            <FormGroup>
              <Label>Secondary Button Type</Label>
              <Select
                value={config.secondaryButtonType}
                onChange={handleSelectChange("secondaryButtonType")}
              >
                {Object.values(ButtonType).map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </Select>
            </FormGroup>

            <CheckboxGroup>
              <Block>
                <CheckboxLabel>
                  <Checkbox
                    type="checkbox"
                    checked={config.showCloseButton}
                    onChange={handleCheckboxChange("showCloseButton")}
                  />
                  <span>Show Close Button</span>
                </CheckboxLabel>
              </Block>

              <Block>
                <CheckboxLabel>
                  <Checkbox
                    type="checkbox"
                    checked={config.closeOnBackdropClick}
                    onChange={handleCheckboxChange("closeOnBackdropClick")}
                  />
                  <span>Close on Backdrop Click</span>
                </CheckboxLabel>
              </Block>

              <Block>
                <CheckboxLabel>
                  <Checkbox
                    type="checkbox"
                    checked={config.showPrimaryButton}
                    onChange={handleCheckboxChange("showPrimaryButton")}
                  />
                  <span>Show Primary Button</span>
                </CheckboxLabel>
              </Block>

              <Block>
                <CheckboxLabel>
                  <Checkbox
                    type="checkbox"
                    checked={config.showSecondaryButton}
                    onChange={handleCheckboxChange("showSecondaryButton")}
                  />
                  <span>Show Secondary Button</span>
                </CheckboxLabel>
              </Block>

              <Block>
                <CheckboxLabel>
                  <Checkbox
                    type="checkbox"
                    checked={config.primaryButtonDisabled}
                    onChange={handleCheckboxChange("primaryButtonDisabled")}
                  />
                  <span>Primary Button Disabled</span>
                </CheckboxLabel>
              </Block>

              <Block>
                <CheckboxLabel>
                  <Checkbox
                    type="checkbox"
                    checked={config.secondaryButtonDisabled}
                    onChange={handleCheckboxChange("secondaryButtonDisabled")}
                  />
                  <span>Secondary Button Disabled</span>
                </CheckboxLabel>
              </Block>

              <Block>
                <CheckboxLabel>
                  <Checkbox
                    type="checkbox"
                    checked={config.showDivider}
                    onChange={handleCheckboxChange("showDivider")}
                  />
                  <span>Show Dividers</span>
                </CheckboxLabel>
              </Block>
            </CheckboxGroup>
          </Block>
        </ConfigGrid>

        <Block display="flex" justifyContent="center">
          <Button
            buttonType={ButtonType.PRIMARY}
            text="Open Configured Modal"
            onClick={() => setIsModalOpen(true)}
          />
        </Block>
      </ConfigSection>

      {/* Modal with current configuration */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={config.title}
        subtitle={config.subtitle}
        primaryAction={
          config.showPrimaryButton
            ? {
                label: config.primaryButtonText,
                onClick: () => setIsModalOpen(false),
                isDisabled: config.primaryButtonDisabled,
                type: config.primaryButtonType as ButtonType,
              }
            : undefined
        }
        secondaryAction={
          config.showSecondaryButton
            ? {
                label: config.secondaryButtonText,
                onClick: () => setIsModalOpen(false),
                isDisabled: config.secondaryButtonDisabled,
                type: config.secondaryButtonType as ButtonType,
              }
            : undefined
        }
        showCloseButton={config.showCloseButton}
        closeOnBackdropClick={config.closeOnBackdropClick}
        showDivider={config.showDivider}
      >
        {renderModalContent()}
      </Modal>
    </Container>
  );
};

export default ModalDemo;
