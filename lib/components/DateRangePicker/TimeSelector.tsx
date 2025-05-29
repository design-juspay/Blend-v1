import { forwardRef, useState, useEffect } from 'react';
import { styled } from 'styled-components';
import dateRangePickerTokens from './dateRangePicker.tokens';

interface TimeSelectorProps {
  value: string;
  onChange: (time: string) => void;
  className?: string;
}

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const StyledTimeInput = styled.input`
  ${dateRangePickerTokens.timePicker.input}
  width: 80px;
`;

const StyledSeparator = styled.span`
  ${dateRangePickerTokens.text.value}
  margin: 0 4px;
`;

const TimeSelector = forwardRef<HTMLDivElement, TimeSelectorProps>(
  ({ value, onChange, className }, ref) => {
    const [hours, setHours] = useState('00');
    const [minutes, setMinutes] = useState('00');

    useEffect(() => {
      const [h, m] = value.split(':');
      setHours(h || '00');
      setMinutes(m || '00');
    }, [value]);

    const handleHoursChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newHours = e.target.value.replace(/\D/g, '').slice(0, 2);
      const formattedHours = newHours.padStart(2, '0');
      
      if (parseInt(newHours) <= 23) {
        setHours(formattedHours);
        onChange(`${formattedHours}:${minutes}`);
      }
    };

    const handleMinutesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newMinutes = e.target.value.replace(/\D/g, '').slice(0, 2);
      const formattedMinutes = newMinutes.padStart(2, '0');
      
      if (parseInt(newMinutes) <= 59) {
        setMinutes(formattedMinutes);
        onChange(`${hours}:${formattedMinutes}`);
      }
    };

    return (
      <StyledContainer ref={ref} className={className}>
        <StyledTimeInput
          type="text"
          value={hours}
          onChange={handleHoursChange}
          placeholder="HH"
          maxLength={2}
        />
        <StyledSeparator>:</StyledSeparator>
        <StyledTimeInput
          type="text"
          value={minutes}
          onChange={handleMinutesChange}
          placeholder="MM"
          maxLength={2}
        />
      </StyledContainer>
    );
  }
);

TimeSelector.displayName = 'TimeSelector';

export default TimeSelector;
