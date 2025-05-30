import { forwardRef } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { styled } from 'styled-components';
import { DateRangePreset } from './types';
import { getPresetLabel } from './utils';
import dateRangePickerTokens from './dateRangePicker.tokens';
import Block from '../Primitives/Block/Block';
import PrimitiveButton from '../Primitives/PrimitiveButton/PrimitiveButton';

type QuickRangeSelectorProps = {
  isOpen: boolean;
  onToggle: () => void;
  activePreset: DateRangePreset;
  onPresetSelect: (preset: DateRangePreset) => void;
  excludeCustom?: boolean;
  className?: string;
  disableFutureDates?: boolean;
  disablePastDates?: boolean;
}


  const StyledTrigger = styled(Block)<{ $isOpen: boolean }>`
    ${dateRangePickerTokens.quickRange.trigger}
  `;

const QuickRangeSelector = forwardRef<HTMLDivElement, QuickRangeSelectorProps>(
  (
    {
      isOpen,
      onToggle,
      activePreset,
      onPresetSelect,
      excludeCustom = false,
      className,
      disableFutureDates = false,
      disablePastDates = false,
    },
    ref
  ) => {
    const activePresetLabel = getPresetLabel(activePreset);

    const getFilteredPresets = () => {
      const pastPresets = [
        DateRangePreset.YESTERDAY,
        DateRangePreset.LAST_1_HOUR,
        DateRangePreset.LAST_6_HOURS,
        DateRangePreset.LAST_7_DAYS,
        DateRangePreset.LAST_30_DAYS,
        DateRangePreset.LAST_3_MONTHS,
        DateRangePreset.LAST_12_MONTHS,
      ];

      const futurePresets = [
        DateRangePreset.TOMORROW,
        DateRangePreset.NEXT_7_DAYS,
        DateRangePreset.NEXT_30_DAYS,
        DateRangePreset.NEXT_3_MONTHS,
        DateRangePreset.NEXT_12_MONTHS,
      ];

      const neutralPresets = [DateRangePreset.TODAY];

      let availablePresets = [...neutralPresets];

      if (!disablePastDates) {
        availablePresets = [...availablePresets, ...pastPresets];
      }

      if (!disableFutureDates) {
        availablePresets = [...availablePresets, ...futurePresets];
      }

      if (!excludeCustom) {
        availablePresets.push(DateRangePreset.CUSTOM);
      }

      return availablePresets;
    };

    const filteredPresets = getFilteredPresets();

    return (
      <Block position='relative' width='100%' ref={ref} className={className}>
        <StyledTrigger $isOpen={isOpen} onClick={onToggle}>
          <Block display='flex' alignItems='center' justifyContent='space-between' width='100%' style={{...dateRangePickerTokens.text.value}}>
            <Block as='span'>{activePresetLabel}</Block>
            {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </Block>
        </StyledTrigger>

        {isOpen && (
          <Block style={{...dateRangePickerTokens.dropdown.container}}>
            <Block style={{...dateRangePickerTokens.dropdown.content}}>
              {filteredPresets.map((preset) => (
                <PrimitiveButton
                  key={preset}
                  onClick={() => {
                    onPresetSelect(preset);
                    onToggle();
                  }}
                  style={{
                    ...dateRangePickerTokens.dropdown.item,
                    ...dateRangePickerTokens.text.value,
                    ...(preset === activePreset && dateRangePickerTokens.dropdown.activeItem),
                  }}
                >
                  {getPresetLabel(preset)}
                </PrimitiveButton>
              ))}
            </Block>
          </Block>
        )}
      </Block>
    );
  }
);

QuickRangeSelector.displayName = 'QuickRangeSelector';

export default QuickRangeSelector;
