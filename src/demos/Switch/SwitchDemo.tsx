import React, { useState } from 'react';
import { Switch, SwitchGroup, SwitchSize } from '../../../lib/components/Switch';
import { FOUNDATION_THEME } from '../../../lib/tokens';
import Block from '../../../lib/components/Primitives/Block/Block';
import PrimitiveText from '../../../lib/components/Primitives/PrimitiveText/PrimitiveText';
import { Tag, TagSize, TagColor, TagVariant } from '../../../lib/components/Tags';

const SwitchDemo: React.FC = () => {
  const [demoValue, setDemoValue] = useState<boolean>(false);
  
  const [sizeExamples, setSizeExamples] = useState({
    smallChecked: true,
    smallUnchecked: false,
    mediumChecked: true,
    mediumUnchecked: false,
  });

  const [subtextExamples, setSubtextExamples] = useState({
    email: true,
    push: false,
    marketing: false,
  });

  const [slotExamples, setSlotExamples] = useState({
    premium: true,
    beta: false,
    experimental: false,
  });

  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(['notifications']);

  const [individualSwitches, setIndividualSwitches] = useState({
    setting1: true,
    setting2: false,
    setting3: false,
  });

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
            Switch Component Demo
          </PrimitiveText>
        </Block>
        <PrimitiveText as="p" fontSize="16px" color={FOUNDATION_THEME.colors.gray[600]}>
          Demonstration of Switch and SwitchGroup components with different sizes, states, and features.
        </PrimitiveText>
      </Block>

      {/* Live Demo */}
      <Block marginBottom="40px" padding="20px" backgroundColor="#f0f9ff" borderRadius="8px">
        <PrimitiveText as="h3" fontSize="16px" fontWeight={600} margin="0 0 16px 0">
          Live Demo
        </PrimitiveText>
        <Block display="flex" alignItems="center" gap="16px" marginBottom="12px">
          <Switch
            checked={demoValue}
            onChange={(checked) => setDemoValue(checked)}
          >
            Demo Switch
          </Switch>
        </Block>
        <Block padding="12px" backgroundColor="white" borderRadius="4px" border="1px solid #e5e7eb">
          <PrimitiveText as="code" fontSize="14px" fontFamily="monospace" color="#000000">
            Current value: {JSON.stringify(demoValue)}
          </PrimitiveText>
        </Block>
      </Block>

      {/* Switch Sizes */}
      <Block>
        <Block marginBottom={FOUNDATION_THEME.unit[16]}>
          <PrimitiveText as="h2" fontSize="24px" fontWeight={600}>
            Switch Sizes
          </PrimitiveText>
        </Block>
        <Block display="flex" flexDirection="column" gap={FOUNDATION_THEME.unit[16]}>
          <Block>
            <Block marginBottom={FOUNDATION_THEME.unit[8]}>
              <PrimitiveText as="h3" fontSize="18px" fontWeight={500}>
                Small Size
              </PrimitiveText>
            </Block>
            <Block display="flex" flexDirection="column" gap={FOUNDATION_THEME.unit[8]}>
              <Switch 
                size={SwitchSize.SMALL} 
                checked={sizeExamples.smallChecked}
                onChange={(checked) => setSizeExamples(prev => ({ ...prev, smallChecked: checked }))}
              >
                Small switch
              </Switch>
              <Switch 
                size={SwitchSize.SMALL}
                checked={sizeExamples.smallUnchecked}
                onChange={(checked) => setSizeExamples(prev => ({ ...prev, smallUnchecked: checked }))}
              >
                Small switch (unchecked)
              </Switch>
            </Block>
          </Block>

          <Block>
            <Block marginBottom={FOUNDATION_THEME.unit[8]}>
              <PrimitiveText as="h3" fontSize="18px" fontWeight={500}>
                Medium Size (Default)
              </PrimitiveText>
            </Block>
            <Block display="flex" flexDirection="column" gap={FOUNDATION_THEME.unit[8]}>
              <Switch 
                size={SwitchSize.MEDIUM} 
                checked={sizeExamples.mediumChecked}
                onChange={(checked) => setSizeExamples(prev => ({ ...prev, mediumChecked: checked }))}
              >
                Medium switch
              </Switch>
              <Switch 
                size={SwitchSize.MEDIUM}
                checked={sizeExamples.mediumUnchecked}
                onChange={(checked) => setSizeExamples(prev => ({ ...prev, mediumUnchecked: checked }))}
              >
                Medium switch (unchecked)
              </Switch>
            </Block>
          </Block>
        </Block>
      </Block>

      {/* Switch with Subtext */}
      <Block>
        <Block marginBottom={FOUNDATION_THEME.unit[16]}>
          <PrimitiveText as="h2" fontSize="24px" fontWeight={600}>
            Switch with Subtext
          </PrimitiveText>
        </Block>
        <Block display="flex" flexDirection="column" gap={FOUNDATION_THEME.unit[16]}>
          <Switch 
            subtext="Receive email updates about your account activity"
            checked={subtextExamples.email}
            onChange={(checked) => setSubtextExamples(prev => ({ ...prev, email: checked }))}
          >
            Email notifications
          </Switch>
          <Switch 
            subtext="Get instant notifications on your mobile device"
            checked={subtextExamples.push}
            onChange={(checked) => setSubtextExamples(prev => ({ ...prev, push: checked }))}
          >
            Push notifications
          </Switch>
          <Switch 
            subtext="Receive promotional content and product updates"
            checked={subtextExamples.marketing}
            onChange={(checked) => setSubtextExamples(prev => ({ ...prev, marketing: checked }))}
          >
            Marketing emails
          </Switch>
        </Block>
      </Block>

      {/* Switch with Slot */}
      <Block>
        <Block marginBottom={FOUNDATION_THEME.unit[16]}>
          <PrimitiveText as="h2" fontSize="24px" fontWeight={600}>
            Switch with Slot
          </PrimitiveText>
        </Block>
        <Block display="flex" flexDirection="column" gap={FOUNDATION_THEME.unit[16]}>
          <Switch 
            slot={<Tag text="PRO" size={TagSize.XS} color={TagColor.SUCCESS} variant={TagVariant.SUBTLE} />}
            checked={slotExamples.premium}
            onChange={(checked) => setSlotExamples(prev => ({ ...prev, premium: checked }))}
          >
            Premium features
          </Switch>
          <Switch 
            slot={<Tag text="BETA" size={TagSize.XS} color={TagColor.WARNING} variant={TagVariant.SUBTLE} />}
            checked={slotExamples.beta}
            onChange={(checked) => setSlotExamples(prev => ({ ...prev, beta: checked }))}
          >
            Beta features
          </Switch>
          <Switch 
            slot={<Tag text="EXPERIMENTAL" size={TagSize.XS} color={TagColor.ERROR} variant={TagVariant.SUBTLE} />}
            checked={slotExamples.experimental}
            onChange={(checked) => setSlotExamples(prev => ({ ...prev, experimental: checked }))}
          >
            Experimental features
          </Switch>
        </Block>
      </Block>

      {/* Special States */}
      <Block>
        <Block marginBottom={FOUNDATION_THEME.unit[16]}>
          <PrimitiveText as="h2" fontSize="24px" fontWeight={600}>
            Special States & Features
          </PrimitiveText>
        </Block>
        <Block display="flex" flexDirection="column" gap={FOUNDATION_THEME.unit[16]}>
          <Switch 
            required 
            subtext="This setting is required for the app to function"
          >
            Required Setting
          </Switch>
          
          <Switch 
            error 
            subtext="Please enable this setting to continue"
          >
            Error State
          </Switch>
          
          <Switch 
            slot={<Tag text="Optional" size={TagSize.XS} color={TagColor.PRIMARY} variant={TagVariant.SUBTLE} />}
            subtext="Switch with additional slot content"
          >
            With Slot Content
          </Switch>
        </Block>
      </Block>

      {/* Disabled States */}
      <Block>
        <Block marginBottom={FOUNDATION_THEME.unit[16]}>
          <PrimitiveText as="h2" fontSize="24px" fontWeight={600}>
            Disabled States
          </PrimitiveText>
        </Block>
        <Block display="flex" flexDirection="column" gap={FOUNDATION_THEME.unit[8]}>
          <Switch disabled checked>Disabled (checked)</Switch>
          <Switch disabled>Disabled (unchecked)</Switch>
          <Switch 
            subtext="This feature is not available in your current plan"
            disabled 
          >
            Disabled with subtext
          </Switch>
        </Block>
      </Block>

      {/* Switch Group */}
      <Block>
        <Block marginBottom={FOUNDATION_THEME.unit[16]}>
          <PrimitiveText as="h2" fontSize="24px" fontWeight={600}>
            Switch Group
          </PrimitiveText>
        </Block>
        <Block display="flex" flexDirection="column" gap={FOUNDATION_THEME.unit[16]}>
          <PrimitiveText as="p" fontSize="14px" color={FOUNDATION_THEME.colors.gray[600]}>
            Selected features: <strong>{selectedFeatures.join(', ') || 'None'}</strong>
          </PrimitiveText>
          <SwitchGroup
            label="App Features"
            name="features"
            value={selectedFeatures}
            onChange={setSelectedFeatures}
          >
            <Switch value="notifications">Push Notifications</Switch>
            <Switch value="analytics">Analytics Tracking</Switch>
            <Switch value="darkmode">Dark Mode</Switch>
            <Switch value="autosave">Auto Save</Switch>
          </SwitchGroup>
        </Block>
      </Block>

      {/* Individual Switches (without group) */}
      <Block>
        <Block marginBottom={FOUNDATION_THEME.unit[16]}>
          <PrimitiveText as="h2" fontSize="24px" fontWeight={600}>
            Individual Switch Components
          </PrimitiveText>
        </Block>
        <Block display="flex" flexDirection="column" gap={FOUNDATION_THEME.unit[8]}>
          <Switch 
            name="individual" 
            value="setting1" 
            checked={individualSwitches.setting1}
            onChange={(checked) => setIndividualSwitches(prev => ({ ...prev, setting1: checked }))}
          >
            Setting 1
          </Switch>
          <Switch 
            name="individual" 
            value="setting2"
            checked={individualSwitches.setting2}
            onChange={(checked) => setIndividualSwitches(prev => ({ ...prev, setting2: checked }))}
          >
            Setting 2
          </Switch>
          <Switch 
            name="individual" 
            value="setting3" 
            disabled
            checked={individualSwitches.setting3}
          >
            Setting 3 (disabled)
          </Switch>
        </Block>
      </Block>
    </Block>
  );
};

export default SwitchDemo; 