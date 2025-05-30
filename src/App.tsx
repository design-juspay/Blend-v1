import { useState } from "react";
import "./App.css";
import { Menu, X } from "lucide-react";
import { Button, ButtonSubType } from "../lib/components/Button";
import ButtonDemo from "./demos/Button/ButtonDemo";
import TagsDemo from "./demos/Tags/TagsDemo";
import SplitTagDemo from "./demos/SplitTag/SplitTagDemo";
import TabsDemo from "./demos/Tabs/TabsDemo";
import TextDemo from "./demos/Text/TextDemo";
import AlertDemo from "./demos/Alert/AlertDemo";
import BreadcrumbDemo from "./demos/Breadcrumb/BreadcrumbDemo";
import AvatarDemo from "./demos/Avatar/AvatarDemo";
import AvatarGroupDemo from "./demos/AvatarGroup/AvatarGroupDemo";
import ModalDemo from "./demos/Modal/ModalDemo";
import AccordionDemo from "./demos/Accordion/AccordionDemo";
import TooltipDemo from "./demos/Tooltip/TooltipDemo";
import PopoverDemo from "./demos/Popover/PopoverDemo";
import CheckboxDemo from "./demos/Checkbox/CheckboxDemo";
import RadioDemo from "./demos/Radio/RadioDemo";
import SwitchDemo from "./demos/Switch/SwitchDemo";
import MenuDemo from "./demos/Menu/MenuDemo";
import DateRangePickerDemo from "./demos/DateRangePicker/DateRangePickerDemo";
import StatCardDemo from "./demos/StatCard/StatCardDemo";
import Snackbar from "../lib/components/Snackbar/Snackbar";

// Component categories
type ComponentCategory = {
  id: string;
  name: string;
  component: React.ReactNode;
};

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("daterangepicker");

  // Define the component categories
  const componentCategories: ComponentCategory[] = [
    {
      id: "stat-cards",
      name: "Stat Cards",
      component: <StatCardDemo />,
    },
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
      id: "modals",
      name: "Modals",
      component: <ModalDemo />,
    },
    {
      id: "menu",
      name: "Menu",
      component: <MenuDemo />,
    },
    {
      id: "accordion",
      name: "Accordion",
      component: <AccordionDemo />,
    },
    {
      id: "avatar",
      name: "Avatar",
      component: <AvatarDemo />,
    },
    {
      id: "avatar-group",
      name: "Avatar Group",
      component: <AvatarGroupDemo />,
    },
    {
      id: "tooltips",
      name: "Tooltips",
      component: <TooltipDemo />,
    },
    {
      id: "popover",
      name: "Popover",
      component: <PopoverDemo />,
    },
    {
      id: "checkbox",
      name: "Checkbox",
      component: <CheckboxDemo />,
    },
    {
      id: "radio",
      name: "Radio",
      component: <RadioDemo />,
    },
    {
      id: "switch",
      name: "Switch",
      component: <SwitchDemo />,
    },
    {
      id: "daterangepicker",
      name: "Date Range Picker",
      component: <DateRangePickerDemo />,
    },
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

      <Snackbar visibleToasts={5} />

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
