import { useState } from "react";
import "./App.css";
import { Menu, X } from "lucide-react";
import { Button, ButtonSubType } from "../lib/components/Button";
import ButtonDemo from "./demos/Button/ButtonDemo";
import TagsDemo from "./demos/Tags/TagsDemo";
import SplitTagDemo from "./demos/SplitTag/SplitTagDemo";
import BreadcrumbDemo from "./demos/Breadcrumb/BreadcrumbDemo";
import TabsDemo from "./demos/Tabs/TabsDemo";
import ButtonGroupDemo from "./demos/ButtonGroup/ButtonGroupDemo";

// Component categories
type ComponentCategory = {
  id: string;
  name: string;
  component: React.ReactNode;
};

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("buttons");

  // Define the component categories
  const componentCategories: ComponentCategory[] = [
    {
      id: "buttons",
      name: "Buttons",
      component: <ButtonDemo />,
    },
    {
      id: "button-group",
      name: "Button Group",
      component: <ButtonGroupDemo />,
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
