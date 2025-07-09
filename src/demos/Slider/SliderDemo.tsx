import { useState } from 'react';
import { 
  Slider, 
  SliderVariant, 
  SliderSize, 
  SliderValueType,
  createSliderRange,
  formatSliderValue 
} from '../../../lib/components/Slider';

const SliderDemo = () => {
  const [singleValue, setSingleValue] = useState([50]);
  const [rangeValue, setRangeValue] = useState([20, 80]);
  
  const [percentageRange, setPercentageRange] = useState([0.2, 0.8]);
  const [decimalRange, setDecimalRange] = useState([1.5, 8.5]);
  const [priceRange, setPriceRange] = useState([25, 150]);
  
  const [numberRange, setNumberRange] = useState([20, 80]);
  const [helperPercentageRange, setHelperPercentageRange] = useState([0.3, 0.7]);
  const [helperDecimalRange, setHelperDecimalRange] = useState([2.5, 7.5]);

  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '32px', fontSize: '32px', fontWeight: 'bold' }}>
        Slider Component Demo
      </h1>
      
      {/* Single Value Slider */}
      <div style={{ marginBottom: '48px' }}>
        <h2 style={{ marginBottom: '16px', fontSize: '24px', fontWeight: '600' }}>
          Single Value Slider
        </h2>
        <p style={{ marginBottom: '24px', color: '#6b7280' }}>
          Current value: {singleValue[0]}
        </p>
        <div style={{ marginBottom: '24px' }}>
          <Slider
            value={singleValue}
            onValueChange={setSingleValue}
            min={0}
            max={100}
            step={1}
            variant={SliderVariant.PRIMARY}
            size={SliderSize.MEDIUM}
            showValueLabels={true}
            aria-label="Single value slider"
          />
        </div>
      </div>

      {/* Range Slider - Both Start and End Adjustable */}
      <div style={{ marginBottom: '48px' }}>
        <h2 style={{ marginBottom: '16px', fontSize: '24px', fontWeight: '600' }}>
          Range Slider (Both Start and End Adjustable)
        </h2>
        <p style={{ marginBottom: '24px', color: '#6b7280' }}>
          Range: {rangeValue[0]} - {rangeValue[1]} (Drag either thumb to adjust)
        </p>
        <div style={{ marginBottom: '24px' }}>
          <Slider
            value={rangeValue}
            onValueChange={setRangeValue}
            min={0}
            max={100}
            step={1}
            variant={SliderVariant.PRIMARY}
            size={SliderSize.MEDIUM}
            showValueLabels={true}
            aria-label="Range slider"
          />
        </div>
      </div>

      {/* Percentage Range Slider */}
      <div style={{ marginBottom: '48px' }}>
        <h2 style={{ marginBottom: '16px', fontSize: '24px', fontWeight: '600' }}>
          Percentage Range Slider (Independent Start/End)
        </h2>
        <p style={{ marginBottom: '24px', color: '#6b7280' }}>
          Range: {formatSliderValue(percentageRange[0], { type: SliderValueType.PERCENTAGE, decimalPlaces: 0 })} - {formatSliderValue(percentageRange[1], { type: SliderValueType.PERCENTAGE, decimalPlaces: 0 })}
        </p>
        <div style={{ marginBottom: '24px' }}>
          <Slider
            value={percentageRange}
            onValueChange={setPercentageRange}
            min={0}
            max={1}
            step={0.01}
            variant={SliderVariant.PRIMARY}
            size={SliderSize.MEDIUM}
            showValueLabels={true}
            valueFormat={{
              type: SliderValueType.PERCENTAGE,
              decimalPlaces: 0,
              showLabels: true
            }}
            aria-label="Percentage range slider"
          />
        </div>
      </div>

      {/* Decimal Range Slider */}
      <div style={{ marginBottom: '48px' }}>
        <h2 style={{ marginBottom: '16px', fontSize: '24px', fontWeight: '600' }}>
          Decimal Range Slider (Precise Control)
        </h2>
        <p style={{ marginBottom: '24px', color: '#6b7280' }}>
          Range: {formatSliderValue(decimalRange[0], { type: SliderValueType.DECIMAL, decimalPlaces: 1 })} - {formatSliderValue(decimalRange[1], { type: SliderValueType.DECIMAL, decimalPlaces: 1 })}
        </p>
        <div style={{ marginBottom: '24px' }}>
          <Slider
            value={decimalRange}
            onValueChange={setDecimalRange}
            min={0}
            max={10}
            step={0.1}
            variant={SliderVariant.PRIMARY}
            size={SliderSize.MEDIUM}
            showValueLabels={true}
            valueFormat={{
              type: SliderValueType.DECIMAL,
              decimalPlaces: 1,
              showLabels: true
            }}
            aria-label="Decimal range slider"
          />
        </div>
      </div>

      {/* Price Range Slider with Custom Format */}
      <div style={{ marginBottom: '48px' }}>
        <h2 style={{ marginBottom: '16px', fontSize: '24px', fontWeight: '600' }}>
          Price Range Slider (Currency Format)
        </h2>
        <p style={{ marginBottom: '24px', color: '#6b7280' }}>
          Range: ${priceRange[0]} - ${priceRange[1]} (Adjust min and max price)
        </p>
        <div style={{ marginBottom: '24px' }}>
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            min={0}
            max={200}
            step={5}
            variant={SliderVariant.PRIMARY}
            size={SliderSize.MEDIUM}
            showValueLabels={true}
            valueFormat={{
              type: SliderValueType.NUMBER,
              prefix: '$',
              showLabels: true
            }}
            aria-label="Price range slider"
          />
        </div>
      </div>

      {/* Different Sizes */}
      <div style={{ marginBottom: '48px' }}>
        <h2 style={{ marginBottom: '16px', fontSize: '24px', fontWeight: '600' }}>
          Different Sizes
        </h2>
        
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ marginBottom: '8px', fontSize: '16px', fontWeight: '500' }}>
            Small
          </h3>
          <Slider
            defaultValue={[30]}
            min={0}
            max={100}
            step={1}
            variant={SliderVariant.PRIMARY}
            size={SliderSize.SMALL}
            showValueLabels={true}
            aria-label="Small slider"
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ marginBottom: '8px', fontSize: '16px', fontWeight: '500' }}>
            Medium
          </h3>
          <Slider
            defaultValue={[50]}
            min={0}
            max={100}
            step={1}
            variant={SliderVariant.PRIMARY}
            size={SliderSize.MEDIUM}
            showValueLabels={true}
            aria-label="Medium slider"
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ marginBottom: '8px', fontSize: '16px', fontWeight: '500' }}>
            Large
          </h3>
          <Slider
            defaultValue={[70]}
            min={0}
            max={100}
            step={1}
            variant={SliderVariant.PRIMARY}
            size={SliderSize.LARGE}
            showValueLabels={true}
            aria-label="Large slider"
          />
        </div>
      </div>

      {/* Different Variants */}
      <div style={{ marginBottom: '48px' }}>
        <h2 style={{ marginBottom: '16px', fontSize: '24px', fontWeight: '600' }}>
          Different Variants
        </h2>
        
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ marginBottom: '8px', fontSize: '16px', fontWeight: '500' }}>
            Primary (Blue)
          </h3>
          <Slider
            defaultValue={[40]}
            min={0}
            max={100}
            step={1}
            variant={SliderVariant.PRIMARY}
            size={SliderSize.MEDIUM}
            showValueLabels={true}
            aria-label="Primary variant slider"
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ marginBottom: '8px', fontSize: '16px', fontWeight: '500' }}>
            Secondary (Gray)
          </h3>
          <Slider
            defaultValue={[60]}
            min={0}
            max={100}
            step={1}
            variant={SliderVariant.SECONDARY}
            size={SliderSize.MEDIUM}
            showValueLabels={true}
            aria-label="Secondary variant slider"
          />
        </div>
      </div>

      {/* Label Positions */}
      <div style={{ marginBottom: '48px' }}>
        <h2 style={{ marginBottom: '16px', fontSize: '24px', fontWeight: '600' }}>
          Label Positions
        </h2>
        
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ marginBottom: '8px', fontSize: '16px', fontWeight: '500' }}>
            Top Labels
          </h3>
          <Slider
            defaultValue={[30, 70]}
            min={0}
            max={100}
            step={1}
            variant={SliderVariant.PRIMARY}
            size={SliderSize.MEDIUM}
            showValueLabels={true}
            labelPosition="top"
            aria-label="Top labels slider"
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ marginBottom: '8px', fontSize: '16px', fontWeight: '500' }}>
            Bottom Labels
          </h3>
          <Slider
            defaultValue={[40, 80]}
            min={0}
            max={100}
            step={1}
            variant={SliderVariant.PRIMARY}
            size={SliderSize.MEDIUM}
            showValueLabels={true}
            labelPosition="bottom"
            aria-label="Bottom labels slider"
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ marginBottom: '8px', fontSize: '16px', fontWeight: '500' }}>
            Inline Labels
          </h3>
          <Slider
            defaultValue={[25, 75]}
            min={0}
            max={100}
            step={1}
            variant={SliderVariant.PRIMARY}
            size={SliderSize.MEDIUM}
            showValueLabels={true}
            labelPosition="inline"
            aria-label="Inline labels slider"
          />
        </div>
      </div>

      {/* Disabled State */}
      <div style={{ marginBottom: '48px' }}>
        <h2 style={{ marginBottom: '16px', fontSize: '24px', fontWeight: '600' }}>
          Disabled State
        </h2>
        <Slider
          defaultValue={[50]}
          min={0}
          max={100}
          step={1}
          variant={SliderVariant.PRIMARY}
          size={SliderSize.MEDIUM}
          disabled
          showValueLabels={true}
          aria-label="Disabled slider"
        />
      </div>

      {/* Helper Functions Demo - Controlled Range Sliders */}
      <div style={{ marginBottom: '48px' }}>
        <h2 style={{ marginBottom: '16px', fontSize: '24px', fontWeight: '600' }}>
          Quick Range Setup (Both Thumbs Adjustable)
        </h2>
        <p style={{ marginBottom: '16px', color: '#6b7280' }}>
          Using createSliderRange helper with controlled state for independent start/end adjustment:
        </p>
        
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ marginBottom: '8px', fontSize: '16px', fontWeight: '500' }}>
            Number Range (0-100): {numberRange[0]} - {numberRange[1]}
          </h3>
          <Slider
            {...createSliderRange(0, 100, 1, 20, 80, SliderValueType.NUMBER)}
            value={numberRange}
            onValueChange={setNumberRange}
            variant={SliderVariant.PRIMARY}
            size={SliderSize.MEDIUM}
            showValueLabels={true}
            aria-label="Number range helper"
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ marginBottom: '8px', fontSize: '16px', fontWeight: '500' }}>
            Percentage Range (0-100%): {Math.round(helperPercentageRange[0] * 100)}% - {Math.round(helperPercentageRange[1] * 100)}%
          </h3>
          <Slider
            {...createSliderRange(0, 1, 0.01, 0.3, 0.7, SliderValueType.PERCENTAGE)}
            value={helperPercentageRange}
            onValueChange={setHelperPercentageRange}
            variant={SliderVariant.PRIMARY}
            size={SliderSize.MEDIUM}
            showValueLabels={true}
            aria-label="Percentage range helper"
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ marginBottom: '8px', fontSize: '16px', fontWeight: '500' }}>
            Decimal Range (0.0-10.0): {helperDecimalRange[0].toFixed(1)} - {helperDecimalRange[1].toFixed(1)}
          </h3>
          <Slider
            {...createSliderRange(0, 10, 0.1, 2.5, 7.5, SliderValueType.DECIMAL)}
            value={helperDecimalRange}
            onValueChange={setHelperDecimalRange}
            variant={SliderVariant.PRIMARY}
            size={SliderSize.MEDIUM}
            showValueLabels={true}
            aria-label="Decimal range helper"
          />
        </div>
      </div>

      <div style={{ marginBottom: '48px' }}>
        <h2 style={{ marginBottom: '16px', fontSize: '24px', fontWeight: '600' }}>
          Sliders Without Labels
        </h2>
        <p style={{ marginBottom: '16px', color: '#6b7280' }}>
          Clean sliders without value labels on thumbs:
        </p>
        
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ marginBottom: '8px', fontSize: '16px', fontWeight: '500' }}>
            Single Value - No Labels
          </h3>
          <Slider
            defaultValue={[40]}
            min={0}
            max={100}
            step={1}
            variant={SliderVariant.PRIMARY}
            size={SliderSize.MEDIUM}
            aria-label="Single value no labels"
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ marginBottom: '8px', fontSize: '16px', fontWeight: '500' }}>
            Range - No Labels
          </h3>
          <Slider
            defaultValue={[30, 70]}
            min={0}
            max={100}
            step={1}
            variant={SliderVariant.SECONDARY}
            size={SliderSize.MEDIUM}
            aria-label="Range no labels"
          />
        </div>
      </div>
    </div>
  );
};

export default SliderDemo; 