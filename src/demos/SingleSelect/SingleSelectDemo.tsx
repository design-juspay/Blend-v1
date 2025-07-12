import { useState } from 'react';
import { SingleSelect } from '../../../lib/main';
import {
  SelectMenuAlignment,
  SelectMenuSide,
  SelectMenuSize,
  SelectMenuVariant,
  SelectMenuGroupType,
} from '../../../lib/components/Select';
import { Button, ButtonType, ButtonSize } from '../../../lib/main';
import { FOUNDATION_THEME } from '../../../lib/tokens';
import Tag from '../../../lib/components/Tags/Tags';
import { TagColor, TagSize, TagShape } from '../../../lib/components/Tags/types';
import {
  User,
  Settings,
  Bell,
  Globe,
  Briefcase,
  Users,
  Mail,
  MapPin,
  Code,
  Server,
  Smartphone,

  Monitor,

  RefreshCw,
  Trash2,


  Search,
  Filter,

} from 'lucide-react';

const SingleSelectDemo = () => {
  // Basic Examples State
  const [basicSelected, setBasicSelected] = useState<string>('');
  const [advancedSelected, setAdvancedSelected] = useState<string>('tech');
  const [nestedSelected, setNestedSelected] = useState<string>('frontend-react');
  
  // Configuration Examples State
  const [variantSelected, setVariantSelected] = useState<string>('option1');
  const [sizeSelected, setSizeSelected] = useState<string>('');
  const [searchSelected, setSearchSelected] = useState<string>('');
  
  // Complex Examples State
  const [teamSelected, setTeamSelected] = useState<string>('emp1');
  const [locationSelected, setLocationSelected] = useState<string>('ny');
  const [preferencesSelected, setPreferencesSelected] = useState<string>('notifications-email');
  
  // Demo Controls State
  const [currentVariant, setCurrentVariant] = useState<SelectMenuVariant>(SelectMenuVariant.CONTAINER);
  const [currentSize, setCurrentSize] = useState<SelectMenuSize>(SelectMenuSize.MEDIUM);
  const [currentAlignment, setCurrentAlignment] = useState<SelectMenuAlignment>(SelectMenuAlignment.START);
  const [currentSide, setCurrentSide] = useState<SelectMenuSide>(SelectMenuSide.BOTTOM);
  const [enableSearch, setEnableSearch] = useState<boolean>(false);

  // Reset functions
  const resetBasicSelections = () => {
    setBasicSelected('');
    setAdvancedSelected('');
    setNestedSelected('');
  };

  const resetAllSelections = () => {
    setBasicSelected('');
    setAdvancedSelected('');
    setNestedSelected('');
    setVariantSelected('');
    setSizeSelected('');
    setSearchSelected('');
    setTeamSelected('');
    setLocationSelected('');
    setPreferencesSelected('');
  };

  // Data structures for different examples
  const basicItems: SelectMenuGroupType[] = [
    {
      groupLabel: "Basic Options",
      showSeparator: true,
      items: [
        {
          label: "Option 1",
          value: "option1",
          subLabel: "First basic option"
        },
        {
          label: "Option 2",
          value: "option2",
          subLabel: "Second basic option"
        },
        {
          label: "Option 3",
          value: "option3",
          subLabel: "Third basic option"
        },
        {
          label: "Disabled Option",
          value: "disabled",
          subLabel: "This option is disabled",
          disabled: true
        }
      ]
    }
  ];

  const advancedItems: SelectMenuGroupType[] = [
    {
      groupLabel: "Departments",
      showSeparator: true,
      items: [
        {
          label: "Technology",
          value: "tech",
          slot1: <Code size={16} color={FOUNDATION_THEME.colors.gray[500]} />,
          slot2: <Tag text="Hot" color={TagColor.ERROR} size={TagSize.XS} shape={TagShape.ROUNDED} />,
          subLabel: "Software development and IT"
        },
        {
          label: "Marketing",
          value: "marketing",
          slot1: <Briefcase size={16} color={FOUNDATION_THEME.colors.gray[500]} />,
          slot2: <Tag text="Growth" color={TagColor.SUCCESS} size={TagSize.XS} shape={TagShape.ROUNDED} />,
          subLabel: "Brand and customer acquisition"
        },
        {
          label: "Sales",
          value: "sales",
          slot1: <Users size={16} color={FOUNDATION_THEME.colors.gray[500]} />,
          subLabel: "Revenue generation and client relations"
        },
        {
          label: "Human Resources",
          value: "hr",
          slot1: <User size={16} color={FOUNDATION_THEME.colors.gray[500]} />,
          subLabel: "Employee management and culture"
        }
      ]
    },
    {
      groupLabel: "Locations",
      showSeparator: false,
      items: [
        {
          label: "New York",
          value: "ny",
          slot1: <MapPin size={16} color={FOUNDATION_THEME.colors.gray[500]} />,
          subLabel: "East Coast headquarters"
        },
        {
          label: "San Francisco",
          value: "sf",
          slot1: <MapPin size={16} color={FOUNDATION_THEME.colors.gray[500]} />,
          subLabel: "West Coast innovation hub"
        },
        {
          label: "Remote",
          value: "remote",
          slot1: <Globe size={16} color={FOUNDATION_THEME.colors.gray[500]} />,
          slot2: <Tag text="Flexible" color={TagColor.WARNING} size={TagSize.XS} shape={TagShape.ROUNDED} />,
          subLabel: "Work from anywhere"
        }
      ]
    }
  ];

  const nestedItems: SelectMenuGroupType[] = [
    {
      groupLabel: "Frontend Technologies",
      showSeparator: true,
      items: [
        {
          label: "React Ecosystem",
          value: "frontend-react-main",
          slot1: <Code size={16} color={FOUNDATION_THEME.colors.primary[500]} />,
          subMenu: [
            {
              label: "React",
              value: "frontend-react",
              subLabel: "Core React library"
            },
            {
              label: "Next.js",
              value: "frontend-nextjs",
              subLabel: "Full-stack React framework"
            },
            {
              label: "React Router",
              value: "frontend-router",
              subLabel: "Client-side routing"
            }
          ]
        },
        {
          label: "Vue Ecosystem",
          value: "frontend-vue-main",
          slot1: <Code size={16} color={FOUNDATION_THEME.colors.green[500]} />,
          subMenu: [
            {
              label: "Vue.js",
              value: "frontend-vue",
              subLabel: "Progressive JavaScript framework"
            },
            {
              label: "Nuxt.js",
              value: "frontend-nuxt",
              subLabel: "Full-stack Vue framework"
            },
            {
              label: "Vuex",
              value: "frontend-vuex",
              subLabel: "State management"
            }
          ]
        }
      ]
    },
    {
      groupLabel: "Backend Technologies",
      showSeparator: true,
      items: [
        {
          label: "Node.js Ecosystem",
          value: "backend-node-main",
          slot1: <Server size={16} color={FOUNDATION_THEME.colors.green[600]} />,
          subMenu: [
            {
              label: "Node.js",
              value: "backend-node",
              subLabel: "JavaScript runtime"
            },
            {
              label: "Express.js",
              value: "backend-express",
              subLabel: "Web application framework"
            },
            {
              label: "NestJS",
              value: "backend-nest",
              subLabel: "Progressive Node.js framework"
            }
          ]
        },
        {
          label: "Python Ecosystem",
          value: "backend-python-main",
          slot1: <Server size={16} color={FOUNDATION_THEME.colors.yellow[600]} />,
          subMenu: [
            {
              label: "Django",
              value: "backend-django",
              subLabel: "High-level Python web framework"
            },
            {
              label: "FastAPI",
              value: "backend-fastapi",
              subLabel: "Modern, fast web framework"
            },
            {
              label: "Flask",
              value: "backend-flask",
              subLabel: "Lightweight WSGI framework"
            }
          ]
        }
      ]
    }
  ];

  const teamItems: SelectMenuGroupType[] = [
    {
      groupLabel: "Employees",
      showSeparator: true,
      items: [
        {
          label: "John Doe",
          value: "emp1",
          slot1: <User size={16} color={FOUNDATION_THEME.colors.primary[500]} />,
          slot2: <Tag text="Senior" color={TagColor.SUCCESS} size={TagSize.XS} />,
          subLabel: "Senior Frontend Developer"
        },
        {
          label: "Jane Smith",
          value: "emp2",
          slot1: <User size={16} color={FOUNDATION_THEME.colors.primary[500]} />,
          slot2: <Tag text="Lead" color={TagColor.PRIMARY} size={TagSize.XS} />,
          subLabel: "Lead Backend Developer"
        },
        {
          label: "Mike Johnson",
          value: "emp3",
          slot1: <User size={16} color={FOUNDATION_THEME.colors.green[500]} />,
          subLabel: "UI/UX Designer"
        }
      ]
    },
    {
      groupLabel: "Managers",
      showSeparator: false,
      items: [
        {
          label: "Sarah Wilson",
          value: "manager1",
          slot1: <Users size={16} color={FOUNDATION_THEME.colors.primary[500]} />,
          slot2: <Tag text="Manager" color={TagColor.WARNING} size={TagSize.XS} />,
          subLabel: "Engineering Manager"
        },
        {
          label: "David Brown",
          value: "manager2",
          slot1: <Users size={16} color={FOUNDATION_THEME.colors.primary[500]} />,
          slot2: <Tag text="Director" color={TagColor.ERROR} size={TagSize.XS} />,
          subLabel: "Product Director"
        }
      ]
    }
  ];

  const searchableItems: SelectMenuGroupType[] = [
    {
      groupLabel: "Countries",
      showSeparator: true,
      items: [
        { label: "United States", value: "us", slot1: <Globe size={16} color={FOUNDATION_THEME.colors.primary[500]} />, subLabel: "North America" },
        { label: "United Kingdom", value: "uk", slot1: <Globe size={16} color={FOUNDATION_THEME.colors.primary[500]} />, subLabel: "Europe" },
        { label: "Canada", value: "ca", slot1: <Globe size={16} color={FOUNDATION_THEME.colors.red[500]} />, subLabel: "North America" },
        { label: "Australia", value: "au", slot1: <Globe size={16} color={FOUNDATION_THEME.colors.green[500]} />, subLabel: "Oceania" },
        { label: "Germany", value: "de", slot1: <Globe size={16} color={FOUNDATION_THEME.colors.yellow[600]} />, subLabel: "Europe" },
        { label: "France", value: "fr", slot1: <Globe size={16} color={FOUNDATION_THEME.colors.primary[600]} />, subLabel: "Europe" },
        { label: "Japan", value: "jp", slot1: <Globe size={16} color={FOUNDATION_THEME.colors.red[600]} />, subLabel: "Asia" },
        { label: "India", value: "in", slot1: <Globe size={16} color={FOUNDATION_THEME.colors.orange[500]} />, subLabel: "Asia" },
        { label: "Brazil", value: "br", slot1: <Globe size={16} color={FOUNDATION_THEME.colors.green[600]} />, subLabel: "South America" },
        { label: "China", value: "cn", slot1: <Globe size={16} color={FOUNDATION_THEME.colors.red[500]} />, subLabel: "Asia" }
      ]
    }
  ];

  const preferencesItems: SelectMenuGroupType[] = [
    {
      groupLabel: "Notifications",
      showSeparator: true,
      items: [
        {
          label: "Email Notifications",
          value: "notifications-email",
          slot1: <Mail size={16} color={FOUNDATION_THEME.colors.primary[500]} />,
          subLabel: "Receive updates via email"
        },
        {
          label: "Push Notifications",
          value: "notifications-push",
          slot1: <Bell size={16} color={FOUNDATION_THEME.colors.orange[500]} />,
          subLabel: "Browser and mobile alerts"
        },
        {
          label: "SMS Notifications",
          value: "notifications-sms",
          slot1: <Smartphone size={16} color={FOUNDATION_THEME.colors.green[500]} />,
          subLabel: "Text message updates"
        }
      ]
    },
    {
      groupLabel: "Appearance",
      showSeparator: true,
      items: [
        {
          label: "Dark Theme",
          value: "theme-dark",
          slot1: <Monitor size={16} color={FOUNDATION_THEME.colors.gray[700]} />,
          subLabel: "Use dark mode interface"
        },
        {
          label: "Light Theme",
          value: "theme-light",
          slot1: <Monitor size={16} color={FOUNDATION_THEME.colors.yellow[500]} />,
          subLabel: "Use light mode interface"
        },
        {
          label: "Auto Theme",
          value: "theme-auto",
          slot1: <Settings size={16} color={FOUNDATION_THEME.colors.purple[500]} />,
          subLabel: "Match system preference"
        }
      ]
    }
  ];

  return (
    <div style={{ padding: '20px', maxWidth: '1200px' }}>
      <div style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '8px' }}>
          SingleSelect Component Demo
        </h1>
        <p style={{ fontSize: '16px', color: '#6b7280', marginBottom: '20px' }}>
          Comprehensive showcase of SingleSelect component variants, features, and use cases
        </p>
        
        <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
          <Button
            buttonType={ButtonType.SECONDARY}
            leadingIcon={RefreshCw}
            size={ButtonSize.SMALL}
            onClick={resetBasicSelections}
          >
            Reset Basic Examples
          </Button>
          <Button
            buttonType={ButtonType.DANGER}
            leadingIcon={Trash2}
            size={ButtonSize.SMALL}
            onClick={resetAllSelections}
          >
            Reset All Selections
          </Button>
        </div>

        {/* Summary Section */}
        <div style={{ 
          padding: '16px', 
          backgroundColor: '#f8fafc', 
          borderRadius: '8px',
          border: '1px solid #e2e8f0',
          marginBottom: '32px'
        }}>
          <h3 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: 600 }}>
            Current Selections Summary
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', fontSize: '14px' }}>
            <div><strong>Basic:</strong> {basicSelected || 'None'}</div>
            <div><strong>Advanced:</strong> {advancedSelected || 'None'}</div>
            <div><strong>Nested:</strong> {nestedSelected || 'None'}</div>
            <div><strong>Team:</strong> {teamSelected || 'None'}</div>
            <div><strong>Location:</strong> {locationSelected || 'None'}</div>
            <div><strong>Preferences:</strong> {preferencesSelected || 'None'}</div>
          </div>
        </div>
      </div>

      {/* Basic Examples Section */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>
          1. Basic Examples
        </h2>
        <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '24px' }}>
          Simple SingleSelect components with different configurations
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '32px' }}>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '12px' }}>
              Basic SingleSelect
            </h3>
            <SingleSelect
              selected={basicSelected}
              onSelect={setBasicSelected}
              items={basicItems}
              label="Select an Option"
              placeholder="Choose from basic options..."
              hintText="This is a basic example with simple options"
            />
          </div>

          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '12px' }}>
              No Container Variant
            </h3>
            <SingleSelect
              selected={variantSelected}
              onSelect={setVariantSelected}
              items={basicItems}
              label="Inline Selection"
              placeholder="Choose options..."
              variant={SelectMenuVariant.NO_CONTAINER}
            />
          </div>

          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '12px' }}>
              With Custom Slot
            </h3>
            <SingleSelect
              selected={basicSelected}
              onSelect={setBasicSelected}
              items={basicItems}
              label="Select with Icon"
              placeholder="Select items..."
              slot={<Filter size={16} color={FOUNDATION_THEME.colors.gray[500]} />}
              hintText="Shows a custom icon in the trigger"
            />
          </div>
        </div>
      </section>

      {/* Size Variants Section */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>
          2. Size Variants
        </h2>
        <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '24px' }}>
          SingleSelect components in different sizes
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginBottom: '32px' }}>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '12px' }}>
              Small Size
            </h3>
            <SingleSelect
              selected={sizeSelected}
              onSelect={setSizeSelected}
              items={basicItems}
              label="Small SingleSelect"
              placeholder="Small size..."
              size={SelectMenuSize.SMALL}
            />
          </div>

          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '12px' }}>
              Medium Size (Default)
            </h3>
            <SingleSelect
              selected={sizeSelected}
              onSelect={setSizeSelected}
              items={basicItems}
              label="Medium SingleSelect"
              placeholder="Medium size..."
              size={SelectMenuSize.MEDIUM}
            />
          </div>

          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '12px' }}>
              Large Size
            </h3>
            <SingleSelect
              selected={sizeSelected}
              onSelect={setSizeSelected}
              items={basicItems}
              label="Large SingleSelect"
              placeholder="Large size..."
              size={SelectMenuSize.LARGE}
            />
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>
          3. Advanced Features
        </h2>
        <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '24px' }}>
          SingleSelect with icons, tags, sublabels, and disabled states
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px', marginBottom: '32px' }}>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '12px' }}>
              With Icons & Tags
            </h3>
            <SingleSelect
              selected={advancedSelected}
              onSelect={setAdvancedSelected}
              items={advancedItems}
              label="Select Department & Location"
              subLabel="Choose from available departments and office locations"
              placeholder="Choose department or location..."
              helpIconText="This field supports selections with icons and status tags"
              hintText="Icons and tags provide additional context for each option"
              required
            />
          </div>

          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '12px' }}>
              Team Member Selection
            </h3>
            <SingleSelect
              selected={teamSelected}
              onSelect={setTeamSelected}
              items={teamItems}
              label="Select Team Member"
              subLabel="Choose an employee or manager"
              placeholder="Select team member..."
              hintText="Mix of employees and managers with role indicators"
            />
          </div>
        </div>
      </section>

      {/* Searchable Section */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>
          4. Searchable Select
        </h2>
        <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '24px' }}>
          SingleSelect with search functionality for large datasets
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px', marginBottom: '32px' }}>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '12px' }}>
              Country Selection (Searchable)
            </h3>
            <SingleSelect
              selected={searchSelected}
              onSelect={setSearchSelected}
              items={searchableItems}
              label="Select Country"
              subLabel="Search and select from available countries"
              placeholder="Search countries..."
              enableSearch={true}
              hintText="Type to search through the list of countries"
              slot={<Search size={16} color={FOUNDATION_THEME.colors.gray[500]} />}
            />
          </div>

          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '12px' }}>
              Location Selection
            </h3>
            <SingleSelect
              selected={locationSelected}
              onSelect={setLocationSelected}
              items={advancedItems}
              label="Select Location"
              subLabel="Choose your work location"
              placeholder="Select location..."
              hintText="Available office locations and remote work options"
            />
          </div>
        </div>
      </section>

      {/* Nested/Submenu Section */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>
          5. Nested Options & Submenus
        </h2>
        <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '24px' }}>
          SingleSelect with hierarchical options and nested submenus
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px', marginBottom: '32px' }}>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '12px' }}>
              Technology Selection
            </h3>
            <SingleSelect
              selected={nestedSelected}
              onSelect={setNestedSelected}
              items={nestedItems}
              label="Select Technology"
              subLabel="Choose from frontend and backend technologies"
              placeholder="Choose your primary tech..."
              helpIconText="Organized by category with nested options for specific technologies"
              hintText="Expand categories to see specific framework and library options"
              maxHeight={400}
            />
          </div>

          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '12px' }}>
              User Preferences
            </h3>
            <SingleSelect
              selected={preferencesSelected}
              onSelect={setPreferencesSelected}
              items={preferencesItems}
              label="Primary Preference"
              subLabel="Select your main preference setting"
              placeholder="Choose preference..."
              hintText="Your primary preference setting"
              maxHeight={350}
            />
          </div>
        </div>
      </section>

      {/* Interactive Configuration Section */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>
          6. Interactive Configuration Demo
        </h2>
        <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '24px' }}>
          Try different configurations and see how they affect the component
        </p>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '300px 1fr', 
          gap: '32px',
          padding: '24px',
          backgroundColor: '#f8fafc',
          borderRadius: '8px',
          border: '1px solid #e2e8f0'
        }}>
          {/* Controls Panel */}
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '16px' }}>
              Configuration Controls
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ fontSize: '14px', fontWeight: 500, marginBottom: '8px', display: 'block' }}>
                  Variant
                </label>
                <select
                  value={currentVariant}
                  onChange={(e) => setCurrentVariant(e.target.value as SelectMenuVariant)}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: '1px solid #d1d5db',
                    fontSize: '14px'
                  }}
                >
                  <option value={SelectMenuVariant.CONTAINER}>Container</option>
                  <option value={SelectMenuVariant.NO_CONTAINER}>No Container</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '14px', fontWeight: 500, marginBottom: '8px', display: 'block' }}>
                  Size
                </label>
                <select
                  value={currentSize}
                  onChange={(e) => setCurrentSize(e.target.value as SelectMenuSize)}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: '1px solid #d1d5db',
                    fontSize: '14px'
                  }}
                >
                  <option value={SelectMenuSize.SMALL}>Small</option>
                  <option value={SelectMenuSize.MEDIUM}>Medium</option>
                  <option value={SelectMenuSize.LARGE}>Large</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '14px', fontWeight: 500, marginBottom: '8px', display: 'block' }}>
                  Enable Search
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
                  <input
                    type="checkbox"
                    checked={enableSearch}
                    onChange={(e) => setEnableSearch(e.target.checked)}
                    style={{ margin: 0 }}
                  />
                  Enable search functionality
                </label>
              </div>

              <div>
                <label style={{ fontSize: '14px', fontWeight: 500, marginBottom: '8px', display: 'block' }}>
                  Menu Alignment
                </label>
                <select
                  value={currentAlignment}
                  onChange={(e) => setCurrentAlignment(e.target.value as SelectMenuAlignment)}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: '1px solid #d1d5db',
                    fontSize: '14px'
                  }}
                >
                  <option value={SelectMenuAlignment.START}>Start</option>
                  <option value={SelectMenuAlignment.CENTER}>Center</option>
                  <option value={SelectMenuAlignment.END}>End</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '14px', fontWeight: 500, marginBottom: '8px', display: 'block' }}>
                  Menu Side
                </label>
                <select
                  value={currentSide}
                  onChange={(e) => setCurrentSide(e.target.value as SelectMenuSide)}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: '1px solid #d1d5db',
                    fontSize: '14px'
                  }}
                >
                  <option value={SelectMenuSide.TOP}>Top</option>
                  <option value={SelectMenuSide.BOTTOM}>Bottom</option>
                  <option value={SelectMenuSide.LEFT}>Left</option>
                  <option value={SelectMenuSide.RIGHT}>Right</option>
                </select>
              </div>
            </div>
          </div>

          {/* Demo Component */}
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '16px' }}>
              Live Preview
            </h3>
            <SingleSelect
              selected={advancedSelected}
              onSelect={setAdvancedSelected}
              items={enableSearch ? searchableItems : advancedItems}
              label="Configurable SingleSelect"
              subLabel="This component updates based on the controls on the left"
              placeholder="Try different configurations..."
              helpIconText="Use the controls to see how different settings affect the component"
              hintText="Configuration changes are applied immediately"
              variant={currentVariant}
              size={currentSize}
              enableSearch={enableSearch}
              alignment={currentAlignment}
              side={currentSide}
              required
              slot={enableSearch ? <Search size={16} color={FOUNDATION_THEME.colors.gray[500]} /> : undefined}
            />
            
            <div style={{ 
              marginTop: '16px', 
              padding: '12px', 
              backgroundColor: 'white', 
              borderRadius: '6px',
              fontSize: '12px',
              color: '#6b7280'
            }}>
              <strong>Current Configuration:</strong><br />
              Variant: {currentVariant}, Size: {currentSize}, Search: {enableSearch ? 'Enabled' : 'Disabled'}<br />
              Alignment: {currentAlignment}, Side: {currentSide}
            </div>
          </div>
        </div>
      </section>

      {/* Feature Summary */}
      <section>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>
          7. Feature Summary
        </h2>
        <div style={{ 
          padding: '20px', 
          backgroundColor: '#f0f9ff', 
          borderRadius: '8px',
          border: '1px solid #bfdbfe'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px', fontSize: '14px' }}>
            <div>
              <h4 style={{ fontWeight: 600, marginBottom: '8px', color: '#1e40af' }}>Variants</h4>
              <ul style={{ margin: 0, paddingLeft: '16px', color: '#374151' }}>
                <li>Container (with labels & hints)</li>
                <li>No Container (inline style)</li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontWeight: 600, marginBottom: '8px', color: '#1e40af' }}>Sizes</h4>
              <ul style={{ margin: 0, paddingLeft: '16px', color: '#374151' }}>
                <li>Small, Medium, Large</li>
                <li>Responsive padding & typography</li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontWeight: 600, marginBottom: '8px', color: '#1e40af' }}>Search</h4>
              <ul style={{ margin: 0, paddingLeft: '16px', color: '#374151' }}>
                <li>Optional search functionality</li>
                <li>Filter items by label</li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontWeight: 600, marginBottom: '8px', color: '#1e40af' }}>Menu Features</h4>
              <ul style={{ margin: 0, paddingLeft: '16px', color: '#374151' }}>
                <li>Submenus & nested options</li>
                <li>Icons, tags, & sublabels</li>
                <li>Disabled states</li>
                <li>Group separators</li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontWeight: 600, marginBottom: '8px', color: '#1e40af' }}>Positioning</h4>
              <ul style={{ margin: 0, paddingLeft: '16px', color: '#374151' }}>
                <li>Top, Bottom, Left, Right</li>
                <li>Start, Center, End alignment</li>
                <li>Custom offsets</li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontWeight: 600, marginBottom: '8px', color: '#1e40af' }}>Accessibility</h4>
              <ul style={{ margin: 0, paddingLeft: '16px', color: '#374151' }}>
                <li>Keyboard navigation</li>
                <li>ARIA labels & states</li>
                <li>Focus management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleSelectDemo; 