import React, { useState } from 'react';
import { Switch, SwitchGroup, SwitchSize } from '../../../lib/components/Switch';
import { FOUNDATION_THEME } from '../../../lib/tokens';
import Block from '../../../lib/components/Primitives/Block/Block';
import PrimitiveText from '../../../lib/components/Primitives/PrimitiveText/PrimitiveText';

const SwitchDemo: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(['notifications']);

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

      {/* Basic Switch */}
      <Block>
        <Block marginBottom={FOUNDATION_THEME.unit[16]}>
          <PrimitiveText as="h2" fontSize="24px" fontWeight={600}>
            Basic Switch
          </PrimitiveText>
        </Block>
        <Block display="flex" flexDirection="column" gap={FOUNDATION_THEME.unit[8]}>
          <Switch
            label="Enable notifications"
            isChecked={isEnabled}
            onChange={setIsEnabled}
          />
          <PrimitiveText as="p" fontSize="14px" color={FOUNDATION_THEME.colors.gray[600]}>
            Current state: <strong>{isEnabled ? 'Enabled' : 'Disabled'}</strong>
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
              <Switch size={SwitchSize.SMALL} label="Small switch" defaultChecked />
              <Switch size={SwitchSize.SMALL} label="Small switch (unchecked)" />
            </Block>
          </Block>

          <Block>
            <Block marginBottom={FOUNDATION_THEME.unit[8]}>
              <PrimitiveText as="h3" fontSize="18px" fontWeight={500}>
                Medium Size (Default)
              </PrimitiveText>
            </Block>
            <Block display="flex" flexDirection="column" gap={FOUNDATION_THEME.unit[8]}>
              <Switch size={SwitchSize.MEDIUM} label="Medium switch" defaultChecked />
              <Switch size={SwitchSize.MEDIUM} label="Medium switch (unchecked)" />
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
            label="Email notifications"
            subtext="Receive email updates about your account activity"
            defaultChecked
          />
          <Switch 
            label="Push notifications"
            subtext="Get instant notifications on your mobile device"
          />
          <Switch 
            label="Marketing emails"
            subtext="Receive promotional content and product updates"
          />
        </Block>
      </Block>

      {/* Switch with Right Slot */}
      <Block>
        <Block marginBottom={FOUNDATION_THEME.unit[16]}>
          <PrimitiveText as="h2" fontSize="24px" fontWeight={600}>
            Switch with Right Slot
          </PrimitiveText>
        </Block>
        <Block display="flex" flexDirection="column" gap={FOUNDATION_THEME.unit[16]}>
          <Switch 
            label="Premium features"
            rightSlot={
              <PrimitiveText as="span" fontSize="12px" fontWeight={600} color={FOUNDATION_THEME.colors.green[600]}>
                PRO
              </PrimitiveText>
            }
            defaultChecked
          />
          <Switch 
            label="Beta features"
            rightSlot={
              <PrimitiveText as="span" fontSize="12px" fontWeight={600} color={FOUNDATION_THEME.colors.orange[600]}>
                BETA
              </PrimitiveText>
            }
          />
          <Switch 
            label="Experimental features"
            rightSlot={
              <PrimitiveText as="span" fontSize="12px" fontWeight={600} color={FOUNDATION_THEME.colors.red[600]}>
                EXPERIMENTAL
              </PrimitiveText>
            }
          />
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
          <Switch label="Disabled (checked)" isDisabled defaultChecked />
          <Switch label="Disabled (unchecked)" isDisabled />
          <Switch 
            label="Disabled with subtext" 
            subtext="This feature is not available in your current plan"
            isDisabled 
          />
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
            <Switch value="notifications" label="Push Notifications" />
            <Switch value="analytics" label="Analytics Tracking" />
            <Switch value="darkmode" label="Dark Mode" />
            <Switch value="autosave" label="Auto Save" />
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
          <Switch name="individual" value="setting1" label="Setting 1" defaultChecked />
          <Switch name="individual" value="setting2" label="Setting 2" />
          <Switch name="individual" value="setting3" label="Setting 3 (disabled)" isDisabled />
        </Block>
      </Block>
    </Block>
  );
};

export default SwitchDemo; 