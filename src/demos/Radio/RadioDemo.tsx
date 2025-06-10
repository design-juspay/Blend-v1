import React, { useState } from 'react';
import { Radio, RadioGroup, RadioSize } from '../../../lib/components/Radio';
import { FOUNDATION_THEME } from '../../../lib/tokens';
import Block from '../../../lib/components/Primitives/Block/Block';
import PrimitiveText from '../../../lib/components/Primitives/PrimitiveText/PrimitiveText';
import { Tag, TagSize, TagColor, TagVariant } from '../../../lib/components/Tags';
import ThemeContext from '../../../lib/context/ThemeContext';
import { HDFC_COMPONENT_TOKENS } from '../../themes/HDFC_COMPONENT_TOKENS';
import { getTagTokens } from '../../../lib/components/Tags/tag.tokens';
import { getSearchInputTokens } from '../../../lib/components/Inputs/SearchInput/searchInput.tokens';
import { getRadioTokens } from '../../../lib/components/Radio/radio.token';

const CoreFeaturesDemo = () => {
  const [selectedSize, setSelectedSize] = useState<string>('small');
  const [selectedPlan, setSelectedPlan] = useState<string>('basic');
  const [selectedControlled, setSelectedControlled] = useState<string>('option1');
  const [selectedState, setSelectedState] = useState<string>('default');
  const [selectedTag, setSelectedTag] = useState<string>('featured');

  return (
    <Block display="flex" flexDirection="column" gap={FOUNDATION_THEME.unit[40]}>
      {/* Basic Usage */}
      <Block>
        <Block marginBottom={FOUNDATION_THEME.unit[16]}>
          <PrimitiveText as="h2" fontSize="24px" fontWeight={600} color={FOUNDATION_THEME.colors.gray[900]}>
            Basic Usage
          </PrimitiveText>
        </Block>
        <Block display="flex" flexDirection="column" gap={FOUNDATION_THEME.unit[16]}>
          <RadioGroup name="basic-options" value={selectedControlled} onChange={setSelectedControlled}>
            <Radio value="option1">Option 1</Radio>
            <Radio value="option2">Option 2</Radio>
            <Radio value="option3">Option 3</Radio>
          </RadioGroup>
        </Block>
      </Block>

      {/* Sizes */}
      <Block>
        <Block marginBottom={FOUNDATION_THEME.unit[16]}>
          <PrimitiveText as="h2" fontSize="24px" fontWeight={600} color={FOUNDATION_THEME.colors.gray[900]}>
            Sizes
          </PrimitiveText>
        </Block>
        <Block display="flex" gap={FOUNDATION_THEME.unit[32]}>
          <RadioGroup name="size-demo" value={selectedSize} onChange={setSelectedSize}>
            <Radio value="small" size={RadioSize.SMALL}>Small</Radio>
            <Radio value="medium" size={RadioSize.MEDIUM}>Medium</Radio>
          </RadioGroup>
        </Block>
      </Block>

      {/* States */}
      <Block>
        <Block marginBottom={FOUNDATION_THEME.unit[16]}>
          <PrimitiveText as="h2" fontSize="24px" fontWeight={600} color={FOUNDATION_THEME.colors.gray[900]}>
            States
          </PrimitiveText>
        </Block>
        <Block display="flex" flexDirection="column" gap={FOUNDATION_THEME.unit[16]}>
          <RadioGroup name="states-demo" value={selectedState} onChange={setSelectedState}>
            <Radio value="default">Default State</Radio>
            <Radio value="disabled" disabled>Disabled State</Radio>
            <Radio value="error" error>Error State</Radio>
            <Radio value="required" required>Required State</Radio>
          </RadioGroup>
        </Block>
      </Block>

      {/* Advanced Usage */}
      <Block>
        <Block marginBottom={FOUNDATION_THEME.unit[16]}>
          <PrimitiveText as="h2" fontSize="24px" fontWeight={600} color={FOUNDATION_THEME.colors.gray[900]}>
            Advanced Usage
          </PrimitiveText>
        </Block>
        <Block display="flex" flexDirection="column" gap={FOUNDATION_THEME.unit[32]}>
          {/* With Helper Text */}
          <Block>
            <Block marginBottom={FOUNDATION_THEME.unit[12]}>
              <PrimitiveText as="h3" fontSize="18px" fontWeight={500} color={FOUNDATION_THEME.colors.gray[900]}>
                With Helper Text
              </PrimitiveText>
            </Block>
            <RadioGroup name="plan-options" value={selectedPlan} onChange={setSelectedPlan}>
              <Radio 
                value="basic" 
                subtext="Perfect for individuals"
              >
                Basic Plan
              </Radio>
              <Radio 
                value="pro" 
                subtext="For growing teams"
              >
                Pro Plan
              </Radio>
            </RadioGroup>
          </Block>

          {/* With Tags */}
          <Block>
            <Block marginBottom={FOUNDATION_THEME.unit[12]}>
              <PrimitiveText as="h3" fontSize="18px" fontWeight={500} color={FOUNDATION_THEME.colors.gray[900]}>
                With Tags
              </PrimitiveText>
            </Block>
            <RadioGroup name="tag-options" value={selectedTag} onChange={setSelectedTag}>
              <Radio 
                value="featured" 
                slot={<Tag text="NEW" size={TagSize.XS} color={TagColor.SUCCESS} variant={TagVariant.SUBTLE} />}
              >
                Featured Option
              </Radio>
              <Radio 
                value="standard"
                slot={<Tag text="BASIC" size={TagSize.XS} color={TagColor.WARNING} variant={TagVariant.SUBTLE} />}
              >
                Standard Option
              </Radio>
            </RadioGroup>
          </Block>
        </Block>
      </Block>
    </Block>
  );
};

const ThemeCustomizationDemo = () => {
  const [selectedValue, setSelectedValue] = useState<string>('option1');
  
  const themeContextValue = {
    foundationTokens: FOUNDATION_THEME,
    componentTokens: {
      TAGS: getTagTokens(FOUNDATION_THEME),
      SEARCH_INPUT: getSearchInputTokens(FOUNDATION_THEME),
      RADIO: HDFC_COMPONENT_TOKENS.RADIO || getRadioTokens(FOUNDATION_THEME),
    },
  };

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <Block display="flex" flexDirection="column" gap={FOUNDATION_THEME.unit[24]}>
        <Block>
          <Block marginBottom={FOUNDATION_THEME.unit[16]}>
            <PrimitiveText as="h2" fontSize="24px" fontWeight={600} color={FOUNDATION_THEME.colors.gray[900]}>
              HDFC Theme
            </PrimitiveText>
          </Block>
          <Block marginBottom={FOUNDATION_THEME.unit[16]}>
            <PrimitiveText as="p" fontSize="16px" color={FOUNDATION_THEME.colors.gray[600]}>
              Customized radio buttons with HDFC brand colors and styling
            </PrimitiveText>
          </Block>
          <Block display="flex" flexDirection="column" gap={FOUNDATION_THEME.unit[16]}>
            <RadioGroup name="theme-demo" value={selectedValue} onChange={setSelectedValue}>
              <Radio value="option1">Default Radio</Radio>
              <Radio value="option2" disabled>Disabled Radio</Radio>
              <Radio value="option3" error>Error Radio</Radio>
              <Radio 
                value="option4" 
                subtext="With helper text"
                slot={<Tag text="CUSTOM" size={TagSize.XS} color={TagColor.WARNING} variant={TagVariant.SUBTLE} />}
              >
                Advanced Radio
              </Radio>
            </RadioGroup>
          </Block>
        </Block>
      </Block>
    </ThemeContext.Provider>
  );
};

const RadioDemo: React.FC = () => {
  return (
    <Block
      padding={FOUNDATION_THEME.unit[32]}
      display="flex"
      flexDirection="column"
      gap={FOUNDATION_THEME.unit[48]}
    >
      {/* Header */}
      <Block>
        <Block marginBottom={FOUNDATION_THEME.unit[8]}>
          <PrimitiveText as="h1" fontSize="32px" fontWeight={600} color={FOUNDATION_THEME.colors.gray[900]}>
            Radio
          </PrimitiveText>
        </Block>
        <PrimitiveText as="p" fontSize="16px" color={FOUNDATION_THEME.colors.gray[600]}>
          Radio buttons allow users to select a single option from a list of mutually exclusive options.
        </PrimitiveText>
      </Block>

      {/* Core Features */}
      <Block>
        <Block marginBottom={FOUNDATION_THEME.unit[24]}>
          <PrimitiveText as="h2" fontSize="28px" fontWeight={600} color={FOUNDATION_THEME.colors.gray[900]}>
            Core Features
          </PrimitiveText>
        </Block>
        <CoreFeaturesDemo />
      </Block>

      {/* Theme Customization */}
      <Block>
        <Block marginBottom={FOUNDATION_THEME.unit[24]}>
          <PrimitiveText as="h2" fontSize="28px" fontWeight={600} color={FOUNDATION_THEME.colors.gray[900]}>
            Theme Customization
          </PrimitiveText>
        </Block>
        <ThemeCustomizationDemo />
      </Block>
    </Block>
  );
};

export default RadioDemo; 