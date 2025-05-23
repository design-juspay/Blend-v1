import { 
  Breadcrumb, 
  BreadcrumbVariant 
} from "../../../lib/components/Breadcrumb";
import { Home, Settings, User, Folder, FileText } from "lucide-react";

const BreadcrumbDemo = () => {
  const simpleItems = [
    { label: "Home", href: "#" },
    { label: "Products", href: "#" },
    { label: "Categories", href: "#" },
    { label: "Electronics", href: "#" },
    { label: "Smartphones" },
  ];

  const mediumItems = [
    { label: "Dashboard", href: "#", leftSlot: <Home size={16} /> },
    { label: "Settings", href: "#", leftSlot: <Settings size={16} /> },
    { label: "User Profile", href: "#", leftSlot: <User size={16} /> },
    { label: "Security" },
  ];

  const longItems = [
    { label: "Home", href: "#", leftSlot: <Home size={16} /> },
    { label: "Documents", href: "#", leftSlot: <Folder size={16} /> },
    { label: "Projects", href: "#", leftSlot: <Folder size={16} /> },
    { label: "2023", href: "#" },
    { label: "Q1", href: "#" },
    { label: "Reports", href: "#", leftSlot: <FileText size={16} /> },
    { label: "Annual Report" },
  ];

  const clickableItems = [
    { label: "Home", href: "#" },
    { label: "Library", href: "#" },
    { 
      label: "Books", 
      onClick: () => alert("Books clicked!"),
    },
    { 
      label: "Fantasy", 
      onClick: () => alert("Fantasy clicked!"),
    },
    { label: "Current Book" },
  ];

  return (
    <div className="component-demo">
      <div className="demo-header">
        <h1 className="component-title">Breadcrumb Component</h1>
        <h2 className="component-subtitle">Navigation links that help users understand their current location</h2>
      </div>

      <div className="section-header">
        <h2 className="heading-2">Basic Examples</h2>
      </div>
      <div className="section-divider"></div>
      
      <div className="demo-row">
        <div className="demo-card">
          <h3 className="heading-4">Default Breadcrumb</h3>
          <div className="demo-item">
            <Breadcrumb items={simpleItems} />
          </div>
          <p className="demo-description">
            Simple breadcrumb with text-only navigation items.
          </p>
        </div>
        
        <div className="demo-card">
          <h3 className="heading-4">With Icons</h3>
          <div className="demo-item">
            <Breadcrumb items={mediumItems} />
          </div>
          <p className="demo-description">
            Breadcrumb with icons in the left slot for visual cues.
          </p>
        </div>
      </div>

      <div className="section-header">
        <h2 className="heading-2">Breadcrumb Variants</h2>
      </div>
      <div className="section-divider"></div>
      
      <div className="demo-row">
        <div className="demo-card">
          <h3 className="heading-4">Default</h3>
          <div className="demo-item">
            <Breadcrumb 
              items={longItems.slice(0, 4)} 
              variant={BreadcrumbVariant.DEFAULT} 
            />
          </div>
          <p className="demo-description">
            Shows all items in the breadcrumb path.
          </p>
        </div>
        
        <div className="demo-card">
          <h3 className="heading-4">Many Items (Auto-truncated)</h3>
          <div className="demo-item">
            <Breadcrumb 
              items={longItems} 
            />
          </div>
          <p className="demo-description">
            Automatically truncates when there are many items, providing a dropdown for hidden links.
          </p>
        </div>
        
        <div className="demo-card">
          <h3 className="heading-4">Explicitly Truncated</h3>
          <div className="demo-item">
            <Breadcrumb 
              items={longItems.slice(0, 4)} 
              variant={BreadcrumbVariant.TRUNCATED} 
            />
          </div>
          <p className="demo-description">
            Explicitly uses the truncated variant even for shorter paths.
          </p>
        </div>
      </div>

      <div className="section-header">
        <h2 className="heading-2">Interactive Breadcrumbs</h2>
      </div>
      <div className="section-divider"></div>
      
      <div className="demo-row">
        <div className="demo-card">
          <h3 className="heading-4">With onClick Handlers</h3>
          <div className="demo-item">
            <Breadcrumb items={clickableItems} />
          </div>
          <p className="demo-description">
            Click on "Books" or "Fantasy" to see onClick in action.
          </p>
        </div>
        
        <div className="demo-card">
          <h3 className="heading-4">Custom Dropdown Content</h3>
          <div className="demo-item">
            <Breadcrumb items={longItems} />
          </div>
          <p className="demo-description">
            Click on "..." to see the dropdown with hidden breadcrumb items.
          </p>
        </div>
      </div>
      
      <style>
        {`
          .component-demo {
            padding: 1rem;
            font-family: sans-serif;
          }
          
          .demo-header {
            margin-bottom: 2rem;
          }
          
          .component-title {
            font-size: 2rem;
            margin-bottom: 0.5rem;
          }
          
          .component-subtitle {
            font-size: 1.125rem;
            font-weight: normal;
            color: #666;
            margin-bottom: 1.5rem;
          }
          
          .description-block {
            display: flex;
            align-items: flex-start;
            gap: 0.75rem;
            background-color: #f5f7f9;
            padding: 1rem;
            border-radius: 0.5rem;
            margin-bottom: 1.5rem;
          }
          
          .section-header {
            margin-top: 2rem;
            margin-bottom: 0.5rem;
          }
          
          .section-divider {
            height: 1px;
            background-color: #e0e0e0;
            margin-bottom: 1.5rem;
          }
          
          .heading-2 {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
          }
          
          .heading-4 {
            font-size: 1.125rem;
            font-weight: 600;
            margin-bottom: 0.75rem;
          }
          
          .demo-row {
            display: flex;
            flex-wrap: wrap;
            gap: 1.5rem;
            margin-bottom: 2rem;
          }
          
          .demo-card {
            flex: 1;
            min-width: 300px;
            border: 1px solid #e0e0e0;
            border-radius: 0.5rem;
            padding: 1rem;
            background-color: white;
          }
          
          .demo-item {
            margin-bottom: 1rem;
            padding: 1rem;
            border-radius: 0.5rem;
          }
          
          .demo-description {
            font-size: 0.875rem;
            color: #666;
          }
        `}
      </style>
    </div>
  );
};

export default BreadcrumbDemo; 