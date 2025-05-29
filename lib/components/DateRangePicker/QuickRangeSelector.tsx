import { forwardRef } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { styled } from 'styled-components';
import { DateRangePreset } from './types';
import { getPresetLabel } from './utils';
import dateRangePickerTokens from './dateRangePicker.tokens';

interface QuickRangeSelectorProps {
  isOpen: boolean;
  onToggle: () => void;
  activePreset: DateRangePreset;
  onPresetSelect: (preset: DateRangePreset) => void;
  excludeCustom?: boolean;
  className?: string;
  disableFutureDates?: boolean;
  disablePastDates?: boolean;
}

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
`;

const StyledTrigger = styled.div<{ $isOpen: boolean }>`
  ${dateRangePickerTokens.quickRange.trigger}
`;

const StyledTriggerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  ${dateRangePickerTokens.text.value}
`;

const StyledDropdown = styled.div`
  ${dateRangePickerTokens.dropdown.container}
`;

const StyledDropdownContent = styled.div`
  ${dateRangePickerTokens.dropdown.content}
`;

const StyledDropdownItem = styled.button<{ $isActive: boolean }>`
  ${dateRangePickerTokens.dropdown.item}
  ${dateRangePickerTokens.text.value}
  ${props => props.$isActive && dateRangePickerTokens.dropdown.activeItem}
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
      <StyledContainer ref={ref} className={className}>
        <StyledTrigger $isOpen={isOpen} onClick={onToggle}>
          <StyledTriggerContent>
            <span>{activePresetLabel}</span>
            {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </StyledTriggerContent>
        </StyledTrigger>

        {isOpen && (
          <StyledDropdown>
            <StyledDropdownContent>
              {filteredPresets.map((preset) => (
                <StyledDropdownItem
                  key={preset}
                  $isActive={preset === activePreset}
                  onClick={() => {
                    onPresetSelect(preset);
                    onToggle();
                  }}
                >
                  {getPresetLabel(preset)}
                </StyledDropdownItem>
              ))}
            </StyledDropdownContent>
          </StyledDropdown>
        )}
      </StyledContainer>
    );
  }
);

QuickRangeSelector.displayName = 'QuickRangeSelector';

export default QuickRangeSelector;
