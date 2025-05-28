import React, { useState } from 'react';
import { Radio, RadioGroup, RadioSize } from '../../../lib/components/Radio';
import { FOUNDATION_THEME } from '../../../lib/tokens';
import Block from '../../../lib/components/Primitives/Block/Block';
import PrimitiveText from '../../../lib/components/Primitives/PrimitiveText/PrimitiveText';
import { Tag, TagSize, TagColor, TagVariant } from '../../../lib/components/Tags';

const RadioDemo: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string>('option1');
  const [selectedSize, setSelectedSize] = useState<string>('medium');

  return (
    <Block
      padding={FOUNDATION_THEME.unit[32]}
      display="flex"
      flexDirection="column"
      gap={FOUNDATION_THEME.unit[32]}
    >
      <Block>
        <Block marginBottom={FOUNDATION_THEME.unit[8]}>
          <PrimitiveText as="h1" fontSize="32px" fontWeight={600}>
            Radio Component Demo
          </PrimitiveText>
        </Block>
        <PrimitiveText as="p" fontSize="16px" color={FOUNDATION_THEME.colors.gray[600]}>
          Demonstration of Radio and RadioGroup components with different sizes, states, and features.
        </PrimitiveText>
      </Block>

      {/* Basic Radio Group */}
      <Block>
        <Block marginBottom={FOUNDATION_THEME.unit[16]}>
          <PrimitiveText as="h2" fontSize="24px" fontWeight={600}>
            Basic Radio Group
          </PrimitiveText>
        </Block>
        <RadioGroup
          name="basic-options"
          label="Choose an option"
          value={selectedValue}
          onChange={setSelectedValue}
        >
          <Radio value="option1">Option 1</Radio>
          <Radio value="option2">Option 2</Radio>
          <Radio value="option3">Option 3</Radio>
        </RadioGroup>
      </Block>

      {/* Radio Sizes */}
      <Block>
        <Block marginBottom={FOUNDATION_THEME.unit[16]}>
          <PrimitiveText as="h2" fontSize="24px" fontWeight={600}>
            Radio Sizes
          </PrimitiveText>
        </Block>
        <Block display="flex" flexDirection="column" gap={FOUNDATION_THEME.unit[16]}>
          <Block>
            <Block marginBottom={FOUNDATION_THEME.unit[8]}>
              <PrimitiveText as="h3" fontSize="18px" fontWeight={500}>
                Small Size
              </PrimitiveText>
            </Block>
            <RadioGroup name="size-small" defaultValue="small1">
              <Radio value="small1" size={RadioSize.SMALL}>Small Radio 1</Radio>
              <Radio value="small2" size={RadioSize.SMALL}>Small Radio 2</Radio>
            </RadioGroup>
          </Block>

          <Block>
            <Block marginBottom={FOUNDATION_THEME.unit[8]}>
              <PrimitiveText as="h3" fontSize="18px" fontWeight={500}>
                Medium Size (Default)
              </PrimitiveText>
            </Block>
            <RadioGroup name="size-medium" defaultValue="medium1">
              <Radio value="medium1" size={RadioSize.MEDIUM}>Medium Radio 1</Radio>
              <Radio value="medium2" size={RadioSize.MEDIUM}>Medium Radio 2</Radio>
            </RadioGroup>
          </Block>
        </Block>
      </Block>

      {/* Radio with Subtext */}
      <Block>
        <Block marginBottom={FOUNDATION_THEME.unit[16]}>
          <PrimitiveText as="h2" fontSize="24px" fontWeight={600}>
            Radio with Subtext
          </PrimitiveText>
        </Block>
        <RadioGroup name="subtext-options" label="Select your plan" defaultValue="basic">
          <Radio 
            value="basic" 
            subtext="Perfect for individuals getting started"
          >
            Basic Plan
          </Radio>
          <Radio 
            value="pro" 
            subtext="Great for small teams and growing businesses"
          >
            Pro Plan
          </Radio>
          <Radio 
            value="enterprise" 
            subtext="Advanced features for large organizations"
          >
            Enterprise Plan
          </Radio>
        </RadioGroup>
      </Block>

      {/* Radio with Slot */}
      <Block>
        <Block marginBottom={FOUNDATION_THEME.unit[16]}>
          <PrimitiveText as="h2" fontSize="24px" fontWeight={600}>
            Radio with Slot
          </PrimitiveText>
        </Block>
        <RadioGroup name="slot-options" label="Select subscription tier" defaultValue="starter">
          <Radio 
            value="starter" 
            slot={<Tag text="FREE" size={TagSize.XS} color={TagColor.NEUTRAL} variant={TagVariant.SUBTLE} />}
            subtext="Basic features for getting started"
          >
            Starter Plan
          </Radio>
          <Radio 
            value="professional" 
            slot={<Tag text="POPULAR" size={TagSize.XS} color={TagColor.SUCCESS} variant={TagVariant.SUBTLE} />}
            subtext="Advanced features for professionals"
          >
            Professional Plan
          </Radio>
          <Radio 
            value="enterprise" 
            slot={<Tag text="PREMIUM" size={TagSize.XS} color={TagColor.WARNING} variant={TagVariant.SUBTLE} />}
            subtext="Full feature set for large organizations"
          >
            Enterprise Plan
          </Radio>
        </RadioGroup>
      </Block>

      {/* Disabled States */}
      <Block>
        <Block marginBottom={FOUNDATION_THEME.unit[16]}>
          <PrimitiveText as="h2" fontSize="24px" fontWeight={600}>
            Disabled States
          </PrimitiveText>
        </Block>
        <RadioGroup name="disabled-options" label="Disabled options" defaultValue="enabled">
          <Radio value="enabled">Enabled Option</Radio>
          <Radio value="disabled1" disabled>Disabled Option 1</Radio>
          <Radio value="disabled2" disabled>Disabled Option 2</Radio>
        </RadioGroup>
      </Block>

      {/* Controlled Example */}
      <Block>
        <Block marginBottom={FOUNDATION_THEME.unit[16]}>
          <PrimitiveText as="h2" fontSize="24px" fontWeight={600}>
            Controlled Example
          </PrimitiveText>
        </Block>
        <Block display="flex" flexDirection="column" gap={FOUNDATION_THEME.unit[16]}>
          <PrimitiveText as="p" fontSize="14px" color={FOUNDATION_THEME.colors.gray[600]}>
            Selected value: <strong>{selectedSize}</strong>
          </PrimitiveText>
          <RadioGroup
            name="controlled-size"
            label="Select size"
            value={selectedSize}
            onChange={setSelectedSize}
          >
            <Radio value="small">Small</Radio>
            <Radio value="medium">Medium</Radio>
            <Radio value="large">Large</Radio>
          </RadioGroup>
        </Block>
      </Block>
    </Block>
  );
};

export default RadioDemo; 