import React, { useState } from 'react';
import { Checkbox } from '../../../lib/components/Checkbox';
import { CheckboxSize } from '../../../lib/components/Checkbox/types';
import Block from '../../../lib/components/Primitives/Block/Block';
import PrimitiveText from '../../../lib/components/Primitives/PrimitiveText/PrimitiveText';
import { Tag, TagSize, TagColor, TagVariant } from '../../../lib/components/Tags';
import ThemeProvider from '../../../lib/context/ThemeProvider';
import { HDFC_COMPONENT_TOKENS } from '../../themes/HDFC_COMPONENT_TOKENS';
import { FOUNDATION_THEME } from '../../../lib/tokens';

const CheckboxDemo = () => {
  const [hdfcDemoValue, setHdfcDemoValue] = useState(false); 
  const [hdfcThemedStates, setHdfcThemedStates] = useState({
    unchecked: false,
    checked: true,
    indeterminate: 'indeterminate' as boolean | 'indeterminate',
    error: false,
    required: true,
  });

  const [basicStates, setBasicStates] = useState({
    unchecked: false,
    checked: true,
    indeterminate: 'indeterminate' as boolean | 'indeterminate',
  });

  const [sizeExamples, setSizeExamples] = useState({
    small: false,
    medium: false,
  });

  const [specialStates, setSpecialStates] = useState({
    required: false,
    error: false,
    withSlot: false,
  });

  const [parentChild, setParentChild] = useState<{
    parent: boolean | 'indeterminate';
    child1: boolean;
    child2: boolean;
    child3: boolean;
  }>({
    parent: false,
    child1: false,
    child2: false,
    child3: false,
  });

  // Update parent checkbox state based on children
  const { child1, child2, child3 } = parentChild;
  React.useEffect(() => {
    if (child1 && child2 && child3) {
      setParentChild(prev => ({ ...prev, parent: true }));
    } else if (!child1 && !child2 && !child3) {
      setParentChild(prev => ({ ...prev, parent: false }));
    } else {
      setParentChild(prev => ({ ...prev, parent: 'indeterminate' }));
    }
  }, [child1, child2, child3]);

  // Handle parent checkbox change
  const handleParentChange = (checked: boolean | 'indeterminate') => {
    const newState = checked === true;
    setParentChild({
      parent: newState,
      child1: newState,
      child2: newState,
      child3: newState,
    });
  };

  return (
    <Block padding="24px">
      <PrimitiveText as="h1" fontSize="32px" fontWeight={700} margin="0 0 32px 0" color={FOUNDATION_THEME.colors.gray[800]}>
        Checkbox Component
      </PrimitiveText>

      {/* Basic States */}
      <Block marginBottom="40px">
        <PrimitiveText as="h2" fontSize="20px" fontWeight={600} margin="0 0 20px 0" color={FOUNDATION_THEME.colors.gray[700]}>
          Basic States
        </PrimitiveText>
        <Block display="flex" flexDirection="column" gap="16px">
          <Checkbox 
            checked={basicStates.unchecked} 
            onCheckedChange={(checked) => setBasicStates(prev => ({ ...prev, unchecked: checked === true }))}
          >
            Unchecked State
          </Checkbox>
          
          <Checkbox 
            checked={basicStates.checked} 
            onCheckedChange={(checked) => setBasicStates(prev => ({ ...prev, checked: checked === true }))}
          >
            Checked State
          </Checkbox>
          
          <Checkbox 
            checked={basicStates.indeterminate} 
            onCheckedChange={(checked) => setBasicStates(prev => ({ ...prev, indeterminate: checked }))}
          >
            Indeterminate State
          </Checkbox>
          
          <Checkbox disabled>
            Disabled Unchecked
          </Checkbox>
          
          <Checkbox checked disabled>
            Disabled Checked
          </Checkbox>
        </Block>
      </Block>

      {/* Sizes */}
      <Block marginBottom="40px">
        <PrimitiveText as="h2" fontSize="20px" fontWeight={600} margin="0 0 20px 0" color={FOUNDATION_THEME.colors.gray[700]}>
          Sizes
        </PrimitiveText>
        <Block display="flex" flexDirection="column" gap="16px">
          <Checkbox 
            size={CheckboxSize.SMALL}
            checked={sizeExamples.small}
            onCheckedChange={(checked) => setSizeExamples(prev => ({ ...prev, small: checked === true }))}
          >
            Small Checkbox
          </Checkbox>
          
          <Checkbox 
            size={CheckboxSize.MEDIUM}
            checked={sizeExamples.medium}
            onCheckedChange={(checked) => setSizeExamples(prev => ({ ...prev, medium: checked === true }))}
          >
            Medium Checkbox (Default)
          </Checkbox>
        </Block>
      </Block>

      {/* Special States */}
      <Block marginBottom="40px">
        <PrimitiveText as="h2" fontSize="20px" fontWeight={600} margin="0 0 20px 0" color={FOUNDATION_THEME.colors.gray[700]}>
          Special States & Features
        </PrimitiveText>
        <Block display="flex" flexDirection="column" gap="20px">
          <Checkbox 
            required 
            checked={specialStates.required}
            onCheckedChange={(checked) => setSpecialStates(prev => ({ ...prev, required: checked === true }))}
            subtext="This field is required"
          >
            Required Field
          </Checkbox>
          
          <Checkbox 
            error 
            checked={specialStates.error}
            onCheckedChange={(checked) => setSpecialStates(prev => ({ ...prev, error: checked === true }))}
            subtext="Please accept the terms and conditions"
          >
            Error State
          </Checkbox>
          
          <Checkbox 
            checked={specialStates.withSlot}
            onCheckedChange={(checked) => setSpecialStates(prev => ({ ...prev, withSlot: checked === true }))}
            slot={<Tag text="Optional" size={TagSize.XS} color={TagColor.PRIMARY} variant={TagVariant.SUBTLE} />}
            subtext="Checkbox with additional slot content"
          >
            With Slot Content
          </Checkbox>
        </Block>
      </Block>

      {/* Parent-Child Example */}
      <Block marginBottom="40px">
        <PrimitiveText as="h2" fontSize="20px" fontWeight={600} margin="0 0 20px 0" color={FOUNDATION_THEME.colors.gray[700]}>
          Parent-Child Relationship
        </PrimitiveText>
        <PrimitiveText as="p" fontSize="14px" color={FOUNDATION_THEME.colors.gray[600]} margin="0 0 16px 0">
          Demonstrates indeterminate state when some but not all children are selected
        </PrimitiveText>
        
        <Block display="flex" flexDirection="column" gap="12px">
          <Checkbox 
            checked={parentChild.parent} 
            onCheckedChange={handleParentChange}
          >
            Select All Options
          </Checkbox>
          
          <Block marginLeft="32px" display="flex" flexDirection="column" gap="12px">
            <Checkbox 
              checked={parentChild.child1} 
              onCheckedChange={(checked) => setParentChild(prev => ({ ...prev, child1: checked === true }))}
            >
              Option 1
            </Checkbox>
            
            <Checkbox 
              checked={parentChild.child2} 
              onCheckedChange={(checked) => setParentChild(prev => ({ ...prev, child2: checked === true }))}
            >
              Option 2
            </Checkbox>
            
            <Checkbox 
              checked={parentChild.child3} 
              onCheckedChange={(checked) => setParentChild(prev => ({ ...prev, child3: checked === true }))}
            >
              Option 3
            </Checkbox>
          </Block>
        </Block>
      </Block>

      {/* HDFC Themed Checkbox */}
      <Block marginBottom="40px" marginTop="40px" padding="20px" backgroundColor="#fff8f0" borderRadius="8px" border="1px solid #fed7aa">
        <PrimitiveText as="h2" fontSize="24px" fontWeight={700} margin="0 0 24px 0" color={HDFC_COMPONENT_TOKENS.CHECKBOX?.content?.label?.color?.default || FOUNDATION_THEME.colors.red[700]}>
          HDFC Themed Checkbox
        </PrimitiveText>
        <ThemeProvider 
          foundationTokens={FOUNDATION_THEME} 
          componentTokens={HDFC_COMPONENT_TOKENS}
        >
          {/* Removed HDFC Themed Demo checkbox and its value display */}
          <PrimitiveText as="h3" fontSize="18px" fontWeight={600} margin="0 0 16px 0" color={HDFC_COMPONENT_TOKENS.CHECKBOX?.content?.label?.color?.default || FOUNDATION_THEME.colors.red[600]}>
            Themed States
          </PrimitiveText>
          <Block display="flex" flexDirection="column" gap="16px">
            <Checkbox 
              checked={hdfcThemedStates.unchecked} 
              onCheckedChange={(val) => setHdfcThemedStates(prev => ({...prev, unchecked: val === true}))}
            >
              Themed Unchecked
            </Checkbox>
            <Checkbox 
              checked={hdfcThemedStates.checked} 
              onCheckedChange={(val) => setHdfcThemedStates(prev => ({...prev, checked: val === true}))}
            >
              Themed Checked
            </Checkbox>
            <Checkbox 
              checked={hdfcThemedStates.indeterminate}
              onCheckedChange={(val) => setHdfcThemedStates(prev => ({...prev, indeterminate: val}))}
            >
              Themed Indeterminate
            </Checkbox>
            <Checkbox 
              disabled
            >
              Themed Disabled Unchecked
            </Checkbox>
            <Checkbox 
              checked 
              disabled
            >
              Themed Disabled Checked
            </Checkbox>
             <Checkbox 
              error 
              checked={hdfcThemedStates.error}
              onCheckedChange={(val) => setHdfcThemedStates(prev => ({...prev, error: val === true}))}
              subtext="Themed error subtext"
            >
              Themed Error State
            </Checkbox>
            <Checkbox 
              required
              checked={hdfcThemedStates.required}
              onCheckedChange={(val) => setHdfcThemedStates(prev => ({...prev, required: val === true}))}
              subtext="Themed required subtext"
            >
              Themed Required State
            </Checkbox>
          </Block>
        </ThemeProvider>
      </Block>
    </Block>
  );
};

export default CheckboxDemo;
