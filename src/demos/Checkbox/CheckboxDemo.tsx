import React, { useState } from 'react';
import { Checkbox } from '../../../lib/components/Checkbox';
import { CheckboxSize, CheckboxPosition } from '../../../lib/components/Checkbox/types';
import Block from '../../../lib/components/Primitives/Block/Block';
import PrimitiveText from '../../../lib/components/Primitives/PrimitiveText/PrimitiveText';

const CheckboxDemo = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(true);
  const [indeterminate, setIndeterminate] = useState<boolean | 'indeterminate'>('indeterminate');
  const [allChecked, setAllChecked] = useState(false);
  const [option1, setOption1] = useState(false);
  const [option2, setOption2] = useState(false);
  const [option3, setOption3] = useState(false);

  // Update parent checkbox state based on children
  React.useEffect(() => {
    if (option1 && option2 && option3) {
      setAllChecked(true);
      setIndeterminate(false);
    } else if (!option1 && !option2 && !option3) {
      setAllChecked(false);
      setIndeterminate(false);
    } else {
      setAllChecked(false);
      setIndeterminate('indeterminate');
    }
  }, [option1, option2, option3]);

  // Handle parent checkbox change
  const handleParentChange = (checked: boolean | 'indeterminate') => {
    const newState = checked === true;
    setAllChecked(newState);
    setOption1(newState);
    setOption2(newState);
    setOption3(newState);
    setIndeterminate(false);
  };

  return (
    <Block padding="24px">
      <PrimitiveText as="h1" fontSize="24px" fontWeight={600} margin="0 0 24px 0">
        Checkbox Component
      </PrimitiveText>

      <Block marginBottom="32px">
        <PrimitiveText as="h2" fontSize="18px" fontWeight={500} margin="0 0 16px 0">
          Basic Checkbox States
        </PrimitiveText>
        
        <Block display="flex" flexDirection="column" gap="16px">
          <Checkbox 
            isChecked={checked1} 
            onCheckedChange={(checked) => setChecked1(checked === true)}
          >
            Unchecked Checkbox
          </Checkbox>
          
          <Checkbox 
            isChecked={checked2} 
            onCheckedChange={(checked) => setChecked2(checked === true)}
          >
            Checked Checkbox
          </Checkbox>
          
          <Checkbox 
            isChecked={indeterminate} 
            onCheckedChange={(checked) => setIndeterminate(checked)}
          >
            Indeterminate Checkbox
          </Checkbox>
          
          <Checkbox isDisabled>
            Disabled Unchecked Checkbox
          </Checkbox>
          
          <Checkbox isChecked isDisabled>
            Disabled Checked Checkbox
          </Checkbox>
        </Block>
      </Block>

      <Block marginBottom="32px">
        <PrimitiveText as="h2" fontSize="18px" fontWeight={500} margin="0 0 16px 0">
          Checkbox Sizes
        </PrimitiveText>
        
        <Block display="flex" flexDirection="column" gap="16px">
          <Checkbox size={CheckboxSize.SMALL}>
            Small Checkbox
          </Checkbox>
          
          <Checkbox size={CheckboxSize.MEDIUM}>
            Medium Checkbox (Default)
          </Checkbox>
        </Block>
      </Block>

      <Block marginBottom="32px">
        <PrimitiveText as="h2" fontSize="18px" fontWeight={500} margin="0 0 16px 0">
          Checkbox Positions
        </PrimitiveText>
        
        <Block display="flex" flexDirection="column" gap="16px">
          <Checkbox position={CheckboxPosition.LEFT}>
            Left Position (Default)
          </Checkbox>
          
          <Checkbox position={CheckboxPosition.RIGHT}>
            Right Position
          </Checkbox>
        </Block>
      </Block>

      <Block marginBottom="32px">
        <PrimitiveText as="h2" fontSize="18px" fontWeight={500} margin="0 0 16px 0">
          With Subtext
        </PrimitiveText>
        
        <Checkbox subtext="This is additional information about the checkbox option">
          Checkbox with subtext
        </Checkbox>
      </Block>

      <Block marginBottom="32px">
        <PrimitiveText as="h2" fontSize="18px" fontWeight={500} margin="0 0 16px 0">
          With Right Slot
        </PrimitiveText>
        
        <Checkbox rightSlot={<span style={{ color: '#0561E2' }}>Optional</span>}>
          Checkbox with right slot
        </Checkbox>
      </Block>

      <Block marginBottom="32px">
        <PrimitiveText as="h2" fontSize="18px" fontWeight={500} margin="0 0 16px 0">
          Indeterminate Parent-Child Example
        </PrimitiveText>
        
        <Block display="flex" flexDirection="column" gap="8px">
          <Checkbox 
            isChecked={allChecked || indeterminate} 
            onCheckedChange={handleParentChange}
          >
            Select All Options
          </Checkbox>
          
          <Block marginLeft="24px" display="flex" flexDirection="column" gap="8px">
            <Checkbox 
              isChecked={option1} 
              onCheckedChange={(checked) => setOption1(checked === true)}
            >
              Option 1
            </Checkbox>
            
            <Checkbox 
              isChecked={option2} 
              onCheckedChange={(checked) => setOption2(checked === true)}
            >
              Option 2
            </Checkbox>
            
            <Checkbox 
              isChecked={option3} 
              onCheckedChange={(checked) => setOption3(checked === true)}
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