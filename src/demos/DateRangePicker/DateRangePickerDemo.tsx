import { useState } from 'react';
import { DateRangePicker } from '../../../lib/components/DateRangePicker';
import { DateRange } from '../../../lib/components/DateRangePicker/types';

const DateRangePickerDemo = () => {
  const [basicRange, setBasicRange] = useState<DateRange>({
    startDate: new Date(),
    endDate: new Date(),
  });

  const [timeRange, setTimeRange] = useState<DateRange>({
    startDate: new Date(),
    endDate: new Date(),
  });

  const [singleDateRange, setSingleDateRange] = useState<DateRange>({
    startDate: new Date(),
    endDate: new Date(),
  });

  const [pastOnlyRange, setPastOnlyRange] = useState<DateRange>({
    startDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 7 days ago
    endDate: new Date(),
  });

  const [customTriggerRange, setCustomTriggerRange] = useState<DateRange>({
    startDate: new Date(),
    endDate: new Date(),
  });

  const [noPresetsRange, setNoPresetsRange] = useState<DateRange>({
    startDate: new Date(),
    endDate: new Date(),
  });

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px' }}>
      <h1 style={{ marginBottom: '2rem', fontSize: '2rem', fontWeight: 'bold' }}>
        DateRangePicker Component Demo
      </h1>

      <div style={{ display: 'grid', gap: '3rem' }}>
        {/* Basic DateRangePicker */}
        <section>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem', fontWeight: '600' }}>
            Basic DateRangePicker
          </h2>
          <p style={{ marginBottom: '1rem', color: '#666' }}>
            Standard date range picker with presets and calendar selection.
          </p>
          <DateRangePicker
            value={basicRange}
            onChange={setBasicRange}
            showPresets={true}
          />
          <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
            <strong>Selected Range:</strong><br />
            Start: {basicRange.startDate.toLocaleDateString()}<br />
            End: {basicRange.endDate.toLocaleDateString()}
          </div>
        </section>

        {/* DateRangePicker with Time */}
        <section>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem', fontWeight: '600' }}>
            DateRangePicker with Time Selection
          </h2>
          <p style={{ marginBottom: '1rem', color: '#666' }}>
            Date range picker with time selection enabled.
          </p>
          <DateRangePicker
            value={timeRange}
            onChange={setTimeRange}
            showTimePicker={true}
            showPresets={true}
            dateFormat="dd/MM/yyyy HH:mm"
          />
          <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
            <strong>Selected Range with Time:</strong><br />
            Start: {timeRange.startDate.toLocaleString()}<br />
            End: {timeRange.endDate.toLocaleString()}
          </div>
        </section>

        {/* Single Date Selection */}
        <section>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem', fontWeight: '600' }}>
            Single Date Selection
          </h2>
          <p style={{ marginBottom: '1rem', color: '#666' }}>
            Allow selecting a single date (start and end date are the same).
          </p>
          <DateRangePicker
            value={singleDateRange}
            onChange={setSingleDateRange}
            allowSingleDateSelection={true}
            showPresets={true}
          />
          <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
            <strong>Selected Date:</strong><br />
            Date: {singleDateRange.startDate.toLocaleDateString()}
            {singleDateRange.startDate.getTime() !== singleDateRange.endDate.getTime() && (
              <><br />End: {singleDateRange.endDate.toLocaleDateString()}</>
            )}
          </div>
        </section>

        {/* Past Dates Only */}
        <section>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem', fontWeight: '600' }}>
            Past Dates Only
          </h2>
          <p style={{ marginBottom: '1rem', color: '#666' }}>
            DateRangePicker that only allows selection of past dates.
          </p>
          <DateRangePicker
            value={pastOnlyRange}
            onChange={setPastOnlyRange}
            disableFutureDates={true}
            showPresets={true}
          />
          <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
            <strong>Selected Past Range:</strong><br />
            Start: {pastOnlyRange.startDate.toLocaleDateString()}<br />
            End: {pastOnlyRange.endDate.toLocaleDateString()}
          </div>
        </section>

        {/* Custom Trigger Element */}
        <section>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem', fontWeight: '600' }}>
            Custom Trigger Element
          </h2>
          <p style={{ marginBottom: '1rem', color: '#666' }}>
            DateRangePicker with a custom trigger element instead of the default button.
          </p>
          <DateRangePicker
            value={customTriggerRange}
            onChange={setCustomTriggerRange}
            showPresets={false}
            triggerElement={
              <div style={{
                padding: '12px 16px',
                border: '2px solid #3b82f6',
                borderRadius: '8px',
                backgroundColor: '#eff6ff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#1e40af',
                fontWeight: '500',
                minWidth: '300px'
              }}>
                📅 Custom Trigger: {customTriggerRange.startDate.toLocaleDateString()} - {customTriggerRange.endDate.toLocaleDateString()}
              </div>
            }
          />
          <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
            <strong>Selected Range (Custom Trigger):</strong><br />
            Start: {customTriggerRange.startDate.toLocaleDateString()}<br />
            End: {customTriggerRange.endDate.toLocaleDateString()}
          </div>
        </section>

        {/* No Quick Selector (Presets) */}
        <section>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem', fontWeight: '600' }}>
            Without Quick Selector
          </h2>
          <p style={{ marginBottom: '1rem', color: '#666' }}>
            DateRangePicker without the quick selector presets panel.
          </p>
          <DateRangePicker
            value={noPresetsRange}
            onChange={setNoPresetsRange}
            showPresets={false}
          />
          <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
            <strong>Selected Range (No Presets):</strong><br />
            Start: {noPresetsRange.startDate.toLocaleDateString()}<br />
            End: {noPresetsRange.endDate.toLocaleDateString()}
          </div>
        </section>

        {/* Disabled State */}
        <section>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem', fontWeight: '600' }}>
            Disabled State
          </h2>
          <p style={{ marginBottom: '1rem', color: '#666' }}>
            DateRangePicker in disabled state.
          </p>
          <DateRangePicker
            value={basicRange}
            onChange={setBasicRange}
            isDisabled={true}
          />
        </section>

        {/* Custom Date Format */}
        <section>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem', fontWeight: '600' }}>
            Custom Date Format
          </h2>
          <p style={{ marginBottom: '1rem', color: '#666' }}>
            DateRangePicker with custom date format (yyyy-MM-dd).
          </p>
          <DateRangePicker
            value={basicRange}
            onChange={setBasicRange}
            dateFormat="yyyy-MM-dd"
            showPresets={true}
          />
          <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
            <strong>Custom Format Display:</strong><br />
            Start: {basicRange.startDate.getFullYear()}-{(basicRange.startDate.getMonth() + 1).toString().padStart(2, '0')}-{basicRange.startDate.getDate().toString().padStart(2, '0')}<br />
            End: {basicRange.endDate.getFullYear()}-{(basicRange.endDate.getMonth() + 1).toString().padStart(2, '0')}-{basicRange.endDate.getDate().toString().padStart(2, '0')}
          </div>
        </section>
      </div>
    </div>
  );
};

export default DateRangePickerDemo; 