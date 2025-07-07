import { useState } from 'react';
import MultiSelect from '../../../lib/components/MultiSelect/MultiSelect';
import {
  MultiSelectVariant,
  MultiSelectSelectionTagType,
  MultiSelectMenuSize,
  MultiSelectMenuAlignment,
  MultiSelectMenuSide,
  MultiSelectMenuGroupType,
} from '../../../lib/components/MultiSelect/types';
import { Button, ButtonType, ButtonSize } from '../../../lib/main';
import { FOUNDATION_THEME } from '../../../lib/tokens';
import Tag from '../../../lib/components/Tags/Tags';
import { TagColor, TagSize, TagShape } from '../../../lib/components/Tags/types';
import {
  User,
  Shield,
  CreditCard,
  Settings,
  Bell,
  Lock,
  Globe,
  Briefcase,
  Users,
  Mail,
  Calendar,
  MapPin,
  Star,
  Heart,
  Bookmark,
  Camera,
  Music,
  Film,
  Gamepad,
  Code,
  Database,
  Server,
  Cloud,
  Smartphone,
  Laptop,
  Monitor,
  Coffee,
  Pizza,
  Car,
  Plane,
  Home,
  Building,
  RefreshCw,
  Trash2,
  Edit3,
  Plus,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';

const MultiSelectDemo = () => {
  // Basic Examples State
  const [basicSelected, setBasicSelected] = useState<string[]>([]);
  const [advancedSelected, setAdvancedSelected] = useState<string[]>(['tech', 'marketing']);
  const [nestedSelected, setNestedSelected] = useState<string[]>(['frontend-react', 'backend-node']);
  
  // Configuration Examples State
  const [variantSelected, setVariantSelected] = useState<string[]>(['option1']);
  const [sizeSelected, setSizeSelected] = useState<string[]>([]);
  const [tagTypeSelected, setTagTypeSelected] = useState<string[]>(['item1', 'item2', 'item3']);
  
  // Complex Examples State
  const [teamSelected, setTeamSelected] = useState<string[]>(['emp1', 'manager2']);
  const [projectSelected, setProjectSelected] = useState<string[]>(['proj1', 'task1-1']);
  const [preferencesSelected, setPreferencesSelected] = useState<string[]>(['notifications-email', 'theme-dark']);
  
  // Demo Controls State
  const [currentVariant, setCurrentVariant] = useState<MultiSelectVariant>(MultiSelectVariant.CONTAINER);
  const [currentSize, setCurrentSize] = useState<MultiSelectMenuSize>(MultiSelectMenuSize.MEDIUM);
  const [currentTagType, setCurrentTagType] = useState<MultiSelectSelectionTagType>(MultiSelectSelectionTagType.COUNT);
  const [currentAlignment, setCurrentAlignment] = useState<MultiSelectMenuAlignment>(MultiSelectMenuAlignment.START);
  const [currentSide, setCurrentSide] = useState<MultiSelectMenuSide>(MultiSelectMenuSide.BOTTOM);

  // Helper function to handle selection changes
  const handleSelectionChange = (
    value: string,
    currentSelected: string[],
    setSelected: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    if (currentSelected.includes(value)) {
      setSelected(currentSelected.filter(item => item !== value));
    } else {
      setSelected([...currentSelected, value]);
    }
  };

  // Reset functions
  const resetBasicSelections = () => {
    setBasicSelected([]);
    setAdvancedSelected([]);
    setNestedSelected([]);
  };

  const resetAllSelections = () => {
    setBasicSelected([]);
    setAdvancedSelected([]);
    setNestedSelected([]);
    setVariantSelected([]);
    setSizeSelected([]);
    setTagTypeSelected([]);
    setTeamSelected([]);
    setProjectSelected([]);
    setPreferencesSelected([]);
  };

  // Data structures for different examples
  const basicItems: MultiSelectMenuGroupType[] = [
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

  const advancedItems: MultiSelectMenuGroupType[] = [
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

  const nestedItems: MultiSelectMenuGroupType[] = [
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
    },
    {
      groupLabel: "Databases",
      showSeparator: false,
      items: [
        {
          label: "SQL Databases",
          value: "db-sql-main",
          slot1: <Database size={16} color={FOUNDATION_THEME.colors.purple[500]} />,
          subMenu: [
            {
              label: "PostgreSQL",
              value: "db-postgres",
              subLabel: "Advanced open source database"
            },
            {
              label: "MySQL",
              value: "db-mysql",
              subLabel: "Popular relational database"
            }
          ]
        },
        {
          label: "NoSQL Databases",
          value: "db-nosql-main",
          slot1: <Database size={16} color={FOUNDATION_THEME.colors.orange[500]} />,
          subMenu: [
            {
              label: "MongoDB",
              value: "db-mongo",
              subLabel: "Document database"
            },
            {
              label: "Redis",
              value: "db-redis",
              subLabel: "In-memory data structure store"
            }
          ]
        }
      ]
    }
  ];

  const teamItems: MultiSelectMenuGroupType[] = [
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

  const projectItems: MultiSelectMenuGroupType[] = [
    {
      groupLabel: "Active Projects",
      showSeparator: true,
      items: [
        {
          label: "Project Alpha",
          value: "proj1",
          slot1: <Briefcase size={16} color={FOUNDATION_THEME.colors.primary[500]} />,
          slot2: <Tag text="High Priority" color={TagColor.ERROR} size={TagSize.XS} />,
          subLabel: "Q1 2024 launch target",
          subMenu: [
            {
              label: "Frontend Development",
              value: "task1-1",
              subLabel: "React components and UI"
            },
            {
              label: "Backend API",
              value: "task1-2",
              subLabel: "REST API development"
            },
            {
              label: "Database Design",
              value: "task1-3",
              subLabel: "Schema and optimization"
            }
          ]
        },
        {
          label: "Project Beta",
          value: "proj2",
          slot1: <Briefcase size={16} color={FOUNDATION_THEME.colors.green[500]} />,
          slot2: <Tag text="Medium Priority" color={TagColor.WARNING} size={TagSize.XS} />,
          subLabel: "Q2 2024 research phase",
          subMenu: [
            {
              label: "Market Research",
              value: "task2-1",
              subLabel: "Competitive analysis"
            },
            {
              label: "User Testing",
              value: "task2-2",
              subLabel: "Prototype validation"
            }
          ]
        }
      ]
    },
    {
      groupLabel: "Future Projects",
      showSeparator: false,
      items: [
        {
          label: "Project Gamma",
          value: "proj3",
          slot1: <Briefcase size={16} color={FOUNDATION_THEME.colors.gray[400]} />,
          slot2: <Tag text="Planning" color={TagColor.NEUTRAL} size={TagSize.XS} />,
          subLabel: "Q3 2024 planning stage",
          disabled: true
        }
      ]
    }
  ];

  const preferencesItems: MultiSelectMenuGroupType[] = [
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
    },
    {
      groupLabel: "Privacy",
      showSeparator: false,
      items: [
        {
          label: "Analytics",
          value: "privacy-analytics",
          slot1: <Lock size={16} color={FOUNDATION_THEME.colors.red[500]} />,
          subLabel: "Allow usage analytics"
        },
        {
          label: "Data Sharing",
          value: "privacy-sharing",
          slot1: <Shield size={16} color={FOUNDATION_THEME.colors.primary[500]} />,
          subLabel: "Share data with partners"
        }
      ]
    }
  ];

  return (
    <div style={{ padding: '20px', maxWidth: '1200px' }}>
      <div style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '8px' }}>
          MultiSelect Component Demo
        </h1>
        <p style={{ fontSize: '16px', color: '#6b7280', marginBottom: '20px' }}>
          Comprehensive showcase of MultiSelect component variants, features, and use cases
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
            <div><strong>Basic:</strong> {basicSelected.length > 0 ? basicSelected.join(', ') : 'None'}</div>
            <div><strong>Advanced:</strong> {advancedSelected.length > 0 ? advancedSelected.join(', ') : 'None'}</div>
            <div><strong>Nested:</strong> {nestedSelected.length > 0 ? nestedSelected.join(', ') : 'None'}</div>
            <div><strong>Team:</strong> {teamSelected.length > 0 ? teamSelected.join(', ') : 'None'}</div>
            <div><strong>Projects:</strong> {projectSelected.length > 0 ? projectSelected.join(', ') : 'None'}</div>
            <div><strong>Preferences:</strong> {preferencesSelected.length > 0 ? preferencesSelected.join(', ') : 'None'}</div>
          </div>
        </div>
      </div>

      {/* Basic Examples Section */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>
          1. Basic Examples
        </h2>
        <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '24px' }}>
          Simple MultiSelect components with different configurations
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '32px' }}>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '12px' }}>
              Basic MultiSelect
            </h3>
            <MultiSelect
              selectedValues={basicSelected}
              onChange={(value) => handleSelectionChange(value, basicSelected, setBasicSelected)}
              items={basicItems}
              label="Select Options"
              placeholder="Choose from basic options..."
              hintText="This is a basic example with simple options"
            />
          </div>

          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '12px' }}>
              No Container Variant
            </h3>
            <MultiSelect
              selectedValues={variantSelected}
              onChange={(value) => handleSelectionChange(value, variantSelected, setVariantSelected)}
              items={basicItems}
              label="Inline Selection"
              placeholder="Choose options..."
              variant={MultiSelectVariant.NO_CONTAINER}
            />
          </div>

          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '12px' }}>
              Text Selection Tag
            </h3>
            <MultiSelect
              selectedValues={tagTypeSelected}
              onChange={(value) => handleSelectionChange(value, tagTypeSelected, setTagTypeSelected)}
              items={basicItems}
              label="Text Display"
              placeholder="Select items..."
              selectionTagType={MultiSelectSelectionTagType.TEXT}
              hintText="Shows selected item names instead of count"
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
          MultiSelect components in different sizes
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginBottom: '32px' }}>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '12px' }}>
              Small Size
            </h3>
            <MultiSelect
              selectedValues={sizeSelected}
              onChange={(value) => handleSelectionChange(value, sizeSelected, setSizeSelected)}
              items={basicItems}
              label="Small MultiSelect"
              placeholder="Small size..."
              size={MultiSelectMenuSize.SMALL}
            />
          </div>

          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '12px' }}>
              Medium Size (Default)
            </h3>
            <MultiSelect
              selectedValues={sizeSelected}
              onChange={(value) => handleSelectionChange(value, sizeSelected, setSizeSelected)}
              items={basicItems}
              label="Medium MultiSelect"
              placeholder="Medium size..."
              size={MultiSelectMenuSize.MEDIUM}
            />
          </div>

          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '12px' }}>
              Large Size
            </h3>
            <MultiSelect
              selectedValues={sizeSelected}
              onChange={(value) => handleSelectionChange(value, sizeSelected, setSizeSelected)}
              items={basicItems}
              label="Large MultiSelect"
              placeholder="Large size..."
              size={MultiSelectMenuSize.LARGE}
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
          MultiSelect with icons, tags, sublabels, and disabled states
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px', marginBottom: '32px' }}>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '12px' }}>
              With Icons & Tags
            </h3>
            <MultiSelect
              selectedValues={advancedSelected}
              onChange={(value) => handleSelectionChange(value, advancedSelected, setAdvancedSelected)}
              items={advancedItems}
              label="Select Departments & Locations"
              sublabel="Choose from available departments and office locations"
              placeholder="Choose departments and locations..."
              helpIconHintText="This field supports multiple selections with icons and status tags"
              hintText="Icons and tags provide additional context for each option"
              required
            />
          </div>

          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '12px' }}>
              Team Selection
            </h3>
            <MultiSelect
              selectedValues={teamSelected}
              onChange={(value) => handleSelectionChange(value, teamSelected, setTeamSelected)}
              items={teamItems}
              label="Select Team Members"
              sublabel="Choose employees and managers for your project"
              placeholder="Select team members..."
              hintText="Mix of employees and managers with role indicators"
              selectionTagType={MultiSelectSelectionTagType.TEXT}
            />
          </div>
        </div>
      </section>

      {/* Nested/Submenu Section */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>
          4. Nested Options & Submenus
        </h2>
        <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '24px' }}>
          MultiSelect with hierarchical options and nested submenus
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px', marginBottom: '32px' }}>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '12px' }}>
              Technology Stack Selection
            </h3>
            <MultiSelect
              selectedValues={nestedSelected}
              onChange={(value) => handleSelectionChange(value, nestedSelected, setNestedSelected)}
              items={nestedItems}
              label="Select Technologies"
              sublabel="Choose from frontend, backend, and database technologies"
              placeholder="Choose your tech stack..."
              helpIconHintText="Organized by category with nested options for specific technologies"
              hintText="Expand categories to see specific framework and library options"
              maxHeight={400}
            />
          </div>

          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '12px' }}>
              Project & Task Assignment
            </h3>
            <MultiSelect
              selectedValues={projectSelected}
              onChange={(value) => handleSelectionChange(value, projectSelected, setProjectSelected)}
              items={projectItems}
              label="Assign Projects & Tasks"
              sublabel="Select projects and their specific tasks"
              placeholder="Choose projects and tasks..."
              hintText="Each project contains multiple assignable tasks"
              selectionTagType={MultiSelectSelectionTagType.COUNT}
              maxHeight={350}
            />
          </div>
        </div>
      </section>

      {/* Complex Example Section */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>
          5. User Preferences Example
        </h2>
        <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '24px' }}>
          Complex MultiSelect for user settings and preferences
        </p>

        <div style={{ maxWidth: '500px' }}>
          <MultiSelect
            selectedValues={preferencesSelected}
            onChange={(value) => handleSelectionChange(value, preferencesSelected, setPreferencesSelected)}
            items={preferencesItems}
            label="User Preferences"
            sublabel="Configure your notification, appearance, and privacy settings"
            placeholder="Select your preferences..."
            helpIconHintText="Choose multiple preferences across different categories"
            hintText="Your preferences will be saved automatically"
            selectionTagType={MultiSelectSelectionTagType.TEXT}
            required
            maxHeight={400}
          />
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
                  onChange={(e) => setCurrentVariant(e.target.value as MultiSelectVariant)}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: '1px solid #d1d5db',
                    fontSize: '14px'
                  }}
                >
                  <option value={MultiSelectVariant.CONTAINER}>Container</option>
                  <option value={MultiSelectVariant.NO_CONTAINER}>No Container</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '14px', fontWeight: 500, marginBottom: '8px', display: 'block' }}>
                  Size
                </label>
                <select
                  value={currentSize}
                  onChange={(e) => setCurrentSize(e.target.value as MultiSelectMenuSize)}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: '1px solid #d1d5db',
                    fontSize: '14px'
                  }}
                >
                  <option value={MultiSelectMenuSize.SMALL}>Small</option>
                  <option value={MultiSelectMenuSize.MEDIUM}>Medium</option>
                  <option value={MultiSelectMenuSize.LARGE}>Large</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '14px', fontWeight: 500, marginBottom: '8px', display: 'block' }}>
                  Selection Tag Type
                </label>
                <select
                  value={currentTagType}
                  onChange={(e) => setCurrentTagType(e.target.value as MultiSelectSelectionTagType)}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: '1px solid #d1d5db',
                    fontSize: '14px'
                  }}
                >
                  <option value={MultiSelectSelectionTagType.COUNT}>Count</option>
                  <option value={MultiSelectSelectionTagType.TEXT}>Text</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '14px', fontWeight: 500, marginBottom: '8px', display: 'block' }}>
                  Menu Alignment
                </label>
                <select
                  value={currentAlignment}
                  onChange={(e) => setCurrentAlignment(e.target.value as MultiSelectMenuAlignment)}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: '1px solid #d1d5db',
                    fontSize: '14px'
                  }}
                >
                  <option value={MultiSelectMenuAlignment.START}>Start</option>
                  <option value={MultiSelectMenuAlignment.CENTER}>Center</option>
                  <option value={MultiSelectMenuAlignment.END}>End</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '14px', fontWeight: 500, marginBottom: '8px', display: 'block' }}>
                  Menu Side
                </label>
                <select
                  value={currentSide}
                  onChange={(e) => setCurrentSide(e.target.value as MultiSelectMenuSide)}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: '1px solid #d1d5db',
                    fontSize: '14px'
                  }}
                >
                  <option value={MultiSelectMenuSide.TOP}>Top</option>
                  <option value={MultiSelectMenuSide.BOTTOM}>Bottom</option>
                  <option value={MultiSelectMenuSide.LEFT}>Left</option>
                  <option value={MultiSelectMenuSide.RIGHT}>Right</option>
                </select>
              </div>
            </div>
          </div>

          {/* Demo Component */}
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '16px' }}>
              Live Preview
            </h3>
            <MultiSelect
              selectedValues={advancedSelected}
              onChange={(value) => handleSelectionChange(value, advancedSelected, setAdvancedSelected)}
              items={advancedItems}
              label="Configurable MultiSelect"
              sublabel="This component updates based on the controls on the left"
              placeholder="Try different configurations..."
              helpIconHintText="Use the controls to see how different settings affect the component"
              hintText="Configuration changes are applied immediately"
              variant={currentVariant}
              size={currentSize}
              selectionTagType={currentTagType}
              alignment={currentAlignment}
              side={currentSide}
              required
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
              Variant: {currentVariant}, Size: {currentSize}, Tag: {currentTagType}<br />
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
              <h4 style={{ fontWeight: 600, marginBottom: '8px', color: '#1e40af' }}>Selection Display</h4>
              <ul style={{ margin: 0, paddingLeft: '16px', color: '#374151' }}>
                <li>Count (shows number selected)</li>
                <li>Text (shows selected labels)</li>
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

export default MultiSelectDemo; 