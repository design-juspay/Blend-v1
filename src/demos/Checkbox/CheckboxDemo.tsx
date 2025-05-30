import React, { useState } from 'react';
import { Checkbox } from '../../../lib/components/Checkbox';
import { CheckboxSize } from '../../../lib/components/Checkbox/types';
import Block from '../../../lib/components/Primitives/Block/Block';
import PrimitiveText from '../../../lib/components/Primitives/PrimitiveText/PrimitiveText';
import { Tag, TagSize, TagColor, TagVariant } from '../../../lib/components/Tags';

const CheckboxDemo = () => {
  const [demoValue, setDemoValue] = useState(false);

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
      <PrimitiveText as="h1" fontSize="32px" fontWeight={700} margin="0 0 32px 0">
        Checkbox Component
      </PrimitiveText>

      {/* Demo Value Display */}
      <Block marginBottom="40px" padding="20px" backgroundColor="#f0f9ff" borderRadius="8px">
        <PrimitiveText as="h3" fontSize="16px" fontWeight={600} margin="0 0 16px 0">
          Live Demo
        </PrimitiveText>
        <Block className="debug" display="flex" alignItems="center" gap="16px" marginBottom="12px">
          <Checkbox 
            size={CheckboxSize.SMALL}
            checked={demoValue}
            onCheckedChange={(checked) => setDemoValue(checked === true)}
          >
            Demo Checkbox
          </Checkbox>
        </Block>
        <Block padding="12px" backgroundColor="white" borderRadius="4px" border="1px solid #e5e7eb">
          <PrimitiveText as="code" fontSize="14px" fontFamily="monospace">
            Current value: {JSON.stringify(demoValue)}
          </PrimitiveText>
        </Block>
      </Block>

      {/* Basic States */}
      <Block marginBottom="40px">
        <PrimitiveText as="h2" fontSize="20px" fontWeight={600} margin="0 0 20px 0">
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
        <PrimitiveText as="h2" fontSize="20px" fontWeight={600} margin="0 0 20px 0">
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
        <PrimitiveText as="h2" fontSize="20px" fontWeight={600} margin="0 0 20px 0">
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
        <PrimitiveText as="h2" fontSize="20px" fontWeight={600} margin="0 0 20px 0">
          Parent-Child Relationship
        </PrimitiveText>
        <PrimitiveText as="p" fontSize="14px" color="#666" margin="0 0 16px 0">
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
    </Block>
  );
};

export default CheckboxDemo; 