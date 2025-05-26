import { useState } from 'react';
import { Accordion, AccordionItem, AccordionType, AccordionChevronPosition } from '../../../lib/components/Accordion';
import { InfoIcon, AlertCircleIcon, SettingsIcon } from 'lucide-react';

const AccordionDemo = () => {
  const [singleValue, setSingleValue] = useState<string>('item-1');
  const [multipleValue, setMultipleValue] = useState<string[]>(['item-1']);

  return (
    <div className="max-w-[800px] mx-auto space-y-10 py-8">
      <section>
        <h2 className="text-2xl font-bold mb-4">Accordion with Border</h2>
        <p className="text-gray-600 mb-4">
          Default accordion with border styling, single selection, and right chevron.
        </p>
        
        <Accordion accordionType={AccordionType.BORDER} defaultValue="item-1">
          <AccordionItem 
            value="item-1" 
            title="What is Accordion?"
            subtitle="A component that displays collapsible content panels"
          >
            <div className="text-gray-700">
              <p>
                Accordions display a list of high-level options that can expand/collapse to reveal more information.
                They're commonly used to reduce vertical space when presenting multiple sections of content.
              </p>
            </div>
          </AccordionItem>
          
          <AccordionItem 
            value="item-2" 
            title="When to use Accordion?"
            subtitle="Best practices for accordion usage"
          >
            <div className="text-gray-700">
              <p>
                Use accordions when you want to:
              </p>
              <ul className="list-disc pl-5 mt-2">
                <li>Save vertical space by hiding content until needed</li>
                <li>Organize related information into logical sections</li>
                <li>Reduce cognitive load by breaking content into manageable chunks</li>
                <li>Allow users to control what information they want to see</li>
              </ul>
            </div>
          </AccordionItem>
          
          <AccordionItem 
            value="item-3" 
            title="Accessibility Features"
            subtitle="ARIA attributes and keyboard navigation"
          >
            <div className="text-gray-700">
              <p>
                The accordion component is built with accessibility in mind:
              </p>
              <ul className="list-disc pl-5 mt-2">
                <li>Proper ARIA roles, states, and properties</li>
                <li>Keyboard navigation support (Tab, Space, Enter)</li>
                <li>Focus management for nested interactive elements</li>
                <li>Screen reader announcements for state changes</li>
              </ul>
            </div>
          </AccordionItem>
        </Accordion>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-4">Accordion without Border</h2>
        <p className="text-gray-600 mb-4">
          Clean accordion without external borders, only item separators.
        </p>
        
        <Accordion accordionType={AccordionType.NO_BORDER} defaultValue="item-1">
          <AccordionItem 
            value="item-1" 
            title="Simplified Look"
            subtitle="More minimalist appearance"
          >
            <div className="text-gray-700">
              <p>
                The no-border accordion variant provides a cleaner, more minimalist appearance
                that works well when space constraints are less of a concern or when you want
                a more subtle UI element.
              </p>
            </div>
          </AccordionItem>
          
          <AccordionItem 
            value="item-2" 
            title="When to Use This Variant"
            subtitle="Best for secondary information"
          >
            <div className="text-gray-700">
              <p>
                Consider using the no-border variant:
              </p>
              <ul className="list-disc pl-5 mt-2">
                <li>In content-heavy interfaces where visual clutter should be minimized</li>
                <li>For secondary or supplementary information</li>
                <li>When the accordion is nested inside another container with its own borders</li>
              </ul>
            </div>
          </AccordionItem>
        </Accordion>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-4">Controlled Accordion</h2>
        <p className="text-gray-600 mb-4">
          Accordion with controlled state management.
        </p>
        
        <Accordion 
          accordionType={AccordionType.BORDER} 
          value={singleValue}
          onValueChange={(value: string) => setSingleValue(value)}
        >
          <AccordionItem 
            value="item-1" 
            title="Controlled Component"
            subtitle="The current selection is: item-1"
          >
            <div className="text-gray-700">
              <p>
                This accordion's state is controlled externally. The current selected value is: <strong>{singleValue}</strong>
              </p>
              <div className="mt-3">
                <button 
                  className="px-3 py-1 bg-blue-500 text-white rounded mr-2"
                  onClick={() => setSingleValue('item-2')}
                >
                  Select Item 2
                </button>
                <button 
                  className="px-3 py-1 bg-blue-500 text-white rounded"
                  onClick={() => setSingleValue('item-3')}
                >
                  Select Item 3
                </button>
              </div>
            </div>
          </AccordionItem>
          
          <AccordionItem 
            value="item-2" 
            title="Item 2"
            subtitle="Click the buttons above to select this item"
          >
            <div className="text-gray-700">
              <p>
                Content for item 2. You can control which accordion item is open programmatically.
              </p>
            </div>
          </AccordionItem>
          
          <AccordionItem 
            value="item-3" 
            title="Item 3"
            subtitle="Click the buttons above to select this item"
          >
            <div className="text-gray-700">
              <p>
                Content for item 3. Controlled accordions are useful when you need to:
              </p>
              <ul className="list-disc pl-5 mt-2">
                <li>Persist accordion state across rerenders</li>
                <li>Control accordion state from parent components</li>
                <li>Synchronize accordion state with other UI elements</li>
              </ul>
            </div>
          </AccordionItem>
        </Accordion>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-4">Multiple Selection</h2>
        <p className="text-gray-600 mb-4">
          Accordion that allows multiple items to be expanded simultaneously.
        </p>
        
        <Accordion 
          accordionType={AccordionType.BORDER} 
          isMultiple={true}
          value={multipleValue}
          onValueChange={(value: string[]) => setMultipleValue(value)}
        >
          <AccordionItem 
            value="item-1" 
            title="Multiple Expansion"
            subtitle="Open multiple sections at once"
          >
            <div className="text-gray-700">
              <p>
                This accordion allows multiple items to be expanded simultaneously.
                The current selected values are: <strong>{multipleValue.join(', ')}</strong>
              </p>
              <div className="mt-3">
                <button 
                  className="px-3 py-1 bg-purple-500 text-white rounded mr-2"
                  onClick={() => setMultipleValue(['item-1', 'item-2'])}
                >
                  Select 1 & 2
                </button>
                <button 
                  className="px-3 py-1 bg-purple-500 text-white rounded mr-2"
                  onClick={() => setMultipleValue(['item-1', 'item-3'])}
                >
                  Select 1 & 3
                </button>
                <button 
                  className="px-3 py-1 bg-purple-500 text-white rounded"
                  onClick={() => setMultipleValue(['item-1', 'item-2', 'item-3'])}
                >
                  Select All
                </button>
              </div>
            </div>
          </AccordionItem>
          
          <AccordionItem 
            value="item-2" 
            title="Use Cases"
            subtitle="When to use multiple selection"
          >
            <div className="text-gray-700">
              <p>
                Multiple selection accordions are useful when:
              </p>
              <ul className="list-disc pl-5 mt-2">
                <li>Users need to compare information across sections</li>
                <li>Related but distinct content needs to be visible simultaneously</li>
                <li>Each section contains brief information that's valuable in context</li>
              </ul>
            </div>
          </AccordionItem>
          
          <AccordionItem 
            value="item-3" 
            title="Design Considerations"
            subtitle="Be mindful of content length"
          >
            <div className="text-gray-700">
              <p>
                When using multiple selection accordions:
              </p>
              <ul className="list-disc pl-5 mt-2">
                <li>Be mindful of the total height when multiple sections are open</li>
                <li>Keep content concise to avoid overwhelming the user</li>
                <li>Consider providing a "Collapse All" option for easy reset</li>
              </ul>
            </div>
          </AccordionItem>
        </Accordion>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-4">Left Chevron Position</h2>
        <p className="text-gray-600 mb-4">
          Accordion with chevron icon positioned on the left.
        </p>
        
        <Accordion accordionType={AccordionType.BORDER} defaultValue="item-1">
          <AccordionItem 
            value="item-1" 
            title="Left-positioned Chevron"
            subtitle="For hierarchical organization"
            chevronPosition={AccordionChevronPosition.LEFT}
          >
            <div className="text-gray-700">
              <p>
                Left-positioned chevrons can help emphasize the hierarchical nature of the content,
                similar to a tree view or nested menu structure.
              </p>
            </div>
          </AccordionItem>
          
          <AccordionItem 
            value="item-2" 
            title="When to Use This Variant"
            subtitle="For better visual scanning"
            chevronPosition={AccordionChevronPosition.LEFT}
          >
            <div className="text-gray-700">
              <p>
                Consider using left-positioned chevrons when:
              </p>
              <ul className="list-disc pl-5 mt-2">
                <li>Users need to quickly scan through headings</li>
                <li>The hierarchical relationship between items is important</li>
                <li>Consistency with other left-aligned UI elements is desired</li>
              </ul>
            </div>
          </AccordionItem>
        </Accordion>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-4">With Icons & Slots</h2>
        <p className="text-gray-600 mb-4">
          Accordion with leading and trailing slots for icons and additional content.
        </p>
        
        <Accordion accordionType={AccordionType.BORDER} defaultValue="item-1">
          <AccordionItem 
            value="item-1" 
            title="With Leading Icon"
            subtitle="Enhancing visual recognition"
            leadingSlot={<InfoIcon className="text-blue-500" size={16} />}
          >
            <div className="text-gray-700">
              <p>
                Adding icons to accordion headers can enhance visual recognition and provide
                additional context about the content contained within each section.
              </p>
            </div>
          </AccordionItem>
          
          <AccordionItem 
            value="item-2" 
            title="With Trailing Icon"
            subtitle="Important information indicator"
            trailingSlot={<AlertCircleIcon className="text-amber-500" size={16} />}
          >
            <div className="text-gray-700">
              <p>
                Trailing icons can be used to indicate additional information or status
                about the accordion item, such as new content, required attention, or
                completion status.
              </p>
            </div>
          </AccordionItem>
          
          <AccordionItem 
            value="item-3" 
            title="With Subtext Slots"
            subtitle="Enhanced descriptive elements"
            subtextLeadingSlot={<SettingsIcon className="text-gray-400" size={14} />}
            subtextTrailingSlot={<span className="text-xs text-gray-400">Optional</span>}
          >
            <div className="text-gray-700">
              <p>
                Subtext slots can provide additional context or metadata about the accordion item,
                such as category information, timestamps, or status indicators.
              </p>
            </div>
          </AccordionItem>
        </Accordion>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-4">Disabled State</h2>
        <p className="text-gray-600 mb-4">
          Accordion with some items in a disabled state.
        </p>
        
        <Accordion accordionType={AccordionType.BORDER} defaultValue="item-1">
          <AccordionItem 
            value="item-1" 
            title="Active Item"
            subtitle="This item is interactive"
          >
            <div className="text-gray-700">
              <p>
                This is a regular, interactive accordion item that users can expand and collapse.
              </p>
            </div>
          </AccordionItem>
          
          <AccordionItem 
            value="item-2" 
            title="Disabled Item"
            subtitle="This item cannot be interacted with"
            disabled={true}
          >
            <div className="text-gray-700">
              <p>
                This content won't be visible since the item is disabled. Disabled accordion items
                provide visual indication that content exists but is not currently available.
              </p>
            </div>
          </AccordionItem>
          
          <AccordionItem 
            value="item-3" 
            title="Another Disabled Item"
            subtitle="Also cannot be interacted with"
            disabled={true}
            leadingSlot={<AlertCircleIcon className="text-gray-400" size={16} />}
          >
            <div className="text-gray-700">
              <p>
                Disabled items can include icons and other visual elements, but with appropriate
                styling to indicate their disabled state.
              </p>
            </div>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
};

export default AccordionDemo; 