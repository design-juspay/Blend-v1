import { Snackbar } from "../lib/main";
import "./App.css";
import SidebarDemo from "./demos/sidebar/SidebarDemo";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("datatable");

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
      id: "input",
      name: "Input",
      component: <InputDemo />,
    },
    {
      id: "charts",
      name: "Charts",
      component: <ChartDemo />,
    },
    {
      id: "daterangepicker",
      name: "Date Range Picker",
      component: <DateRangePickerDemo />,
    },
    {
      id: "datatable",
      name: "Data Table",
      component: <DataTableDemo />,
    },
  ];

  // Get the current component to display
  const currentComponent = componentCategories.find(
    (category) => category.id === selectedCategory
  )?.component;

  return (
    <>
      <SidebarDemo />
      <Snackbar duration={3000} />
    </>
  );
}

export default App;
