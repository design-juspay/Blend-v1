import { useState } from "react";
import "./App.css";
import { Menu, X } from "lucide-react";
import { Button, ButtonSubType } from "../lib/components/Button";
import ButtonDemo from "./demos/Button/ButtonDemo";
import TagsDemo from "./demos/Tags/TagsDemo";
import SplitTagDemo from "./demos/SplitTag/SplitTagDemo";
import TabsDemo from "./Demo/TabsDemo";
import TextDemo from "./demos/Text/TextDemo";
import AlertDemo from "./demos/Alert/AlertDemo";

// Component categories
type ComponentCategory = {
  id: string;
  name: string;
  component: React.ReactNode;
};

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("tags");

  // Define the component categories
  const componentCategories: ComponentCategory[] = [
    {
      id: "buttons",
      name: "Buttons",
      component: <ButtonDemo />,
    },
    {
      id: "text",
      name: "Text",
      component: <TextDemo />,
    },
    {
      id: "tags",
      name: "Tags",
      component: <TagsDemo />,
    },
    {
      id: "split-tags",
      name: "Split Tags",
      component: <SplitTagDemo />,
    },
    {
      id: "breadcrumb",
      name: "Breadcrumb",
      component: <BreadcrumbDemo />,
    },
    {
      id: "tabs",
      name: "Tabs",
      component: <TabsDemo />,
    },
    {
      id: "alerts",
      name: "Alerts",
      component: <AlertDemo />,
    },
    {
      id: "data-display",
      name: "Data Display",
      component: <ComingSoon name="Data Display Components" />,
    },
    {
      id: "avatar-group",
      name: "Avatar Group",
      component: <AvatarGroupDemo />,
    }
  ];

  // Get the current component to display
  const currentComponent = componentCategories.find(
    (category) => category.id === selectedCategory
  )?.component;

  return (
    <div className="app-container">
      {/* Sidebar Toggle for Mobile */}
      <div className="sidebar-toggle">
        <Button
          subType={ButtonSubType.PLAIN_ICON}
          ariaLabel={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
          leadingIcon={isSidebarOpen ? X : Menu}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        />
      </div>

      {/* Sidebar */}
      <aside className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
        <div className="sidebar-header">
          <h1 className="sidebar-title">Component Library</h1>
        </div>
        <nav className="sidebar-nav">
          {componentCategories.map((category) => (
            <button
              key={category.id}
              className={`sidebar-nav-item ${
                selectedCategory === category.id ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">{currentComponent}</main>
    </div>
  );
}

export default App;
