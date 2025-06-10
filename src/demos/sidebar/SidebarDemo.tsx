import { useState } from "react";
// import "./App.css";
import {
  Tag as TagIcon,
  Menu as MenuIcon,
  BarChart2,
  Type,
  Calendar as CalendarIcon,
  ListFilter,
  User as UserIcon,
  Info,
  FormInput,
  AlertCircle,
  Bell as BellIcon,
  Square,
  Users,
  Layout,
  FileText,
  List,
  Grid,
  Box,
  Search,
  EyeClosed,
  IndianRupee,
  Table,
  Palette,
  MessageCircle,
  CircleDot as Radio,
} from "lucide-react";
import styled from "styled-components";
import { DirectoryData } from "../../../lib/components/Directory/types";
import Block from "../../../lib/components/Primitives/Block/Block";
import { FOUNDATION_THEME } from "../../../lib/tokens";
import AccordionDemo from "../Accordion/AccordionDemo";
import AlertDemo from "../Alert/AlertDemo";
import AvatarDemo from "../Avatar/AvatarDemo";
import ButtonDemo from "../Button/ButtonDemo";
import MenuDemo from "../Menu/MenuDemo";
import ModalDemo from "../Modal/ModalDemo";
import PopoverDemo from "../Popover/PopoverDemo";
import StatCardDemo from "../StatCard/StatCardDemo";
import TabsDemo from "../Tabs/TabsDemo";
import Text from "../../../lib/components/Text/Text";
import TagsDemo from "../Tags/TagsDemo";
import { Sidebar } from "../../../lib/components/Sidebar";
import TooltipDemo from "../Tooltip/TooltipDemo";
import ChartDemo from "../Charts";
import ButtonGroupDemo from "../ButtonGroup/ButtonGroupDemo";
import DateRangePickerDemo from "../DateRangePicker/DateRangePickerDemo";
import InputDemo from "../Input/InputDemo";
import DataTableDemo from "../DataTable/DataTableDemo";
import SplitTagDemo from "../SplitTag/SplitTagDemo";
import BreadcrumbDemo from "../Breadcrumb/BreadcrumbDemo";
import RadioDemo from "../Radio/RadioDemo";
import CheckboxDemo from "../Checkbox/CheckboxDemo";
import SwitchDemo from "../Switch/SwitchDemo";
import AvatarGroupDemo from "../AvatarGroup/AvatarGroupDemo";
import SnackbarDemo from "../Snackbar/SnackbarDemo";

const SearchContainer = styled(Block)`
  width: 160px;
  height: 100%;
  outline: 1px solid ${FOUNDATION_THEME.colors.gray[200]};
  border-radius: ${FOUNDATION_THEME.border.radius[4]};
  padding: 0 8px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ContentWrapper = styled(Block)`
  height: 100vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  background-color: ${FOUNDATION_THEME.colors.gray[0]};
`;

const SidebarDemo = () => {
  const [activeComponent, setActiveComponent] = useState<
    | "buttons"
    | "tooltips"
    | "tags"
    | "splitTags"
    | "breadcrumb"
    | "tabs"
    | "checkbox"
    | "radio"
    | "switch"
    | "textInput"
    | "alerts"
    | "avatarGroup"
    | "charts"
    | "chartsV2"
    | "fonts"
    | "datePicker"
    | "selectors"
    | "buttonGroups"
    | "avatars"
    | "menu"
    | "dropdown"
    | "accordion"
    | "statCard"
    | "modal"
    | "input"
    | "snackbar"
    | "dataTable"
    | "colorPalette"
    | "popover"
  >("input");

  const [activeTenant, setActiveTenant] = useState<string>("Juspay");
  const [activeMerchant, setActiveMerchant] = useState<string | undefined>(
    "Design System"
  );

  const topbar = (
    <Block
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      flexGrow={1}
    >
      <Block>
        <SearchContainer>
          <Search style={{ width: "16px", height: "16px" }} />
          <Text variant="body.sm" fontWeight={400}>
            Search
          </Text>
        </SearchContainer>
      </Block>
      <Text
        variant="body.sm"
        fontWeight={400}
        color={FOUNDATION_THEME.colors.gray[600]}
      >
        {activeMerchant}
      </Text>
      <Text
        variant="body.sm"
        fontWeight={400}
        color={FOUNDATION_THEME.colors.gray[600]}
      >
        {activeTenant}
      </Text>
      <Text
        variant="body.sm"
        fontWeight={400}
        color={FOUNDATION_THEME.colors.gray[600]}
      >
        {activeComponent}
      </Text>
      <EyeClosed style={{ width: "16px", height: "16px" }} />
    </Block>
  );

  const renderContent = () => {
    switch (activeComponent) {
      case "buttons":
        return <ButtonDemo />;
      case "buttonGroups":
        return <ButtonGroupDemo />;
      case "tooltips":
        return <TooltipDemo />;
      case "tags":
        return <TagsDemo />;
      case "splitTags":
        return <SplitTagDemo />;
      case "checkbox":
        return <CheckboxDemo />;
      case "radio":
        return <RadioDemo />;
      case "switch":
        return <SwitchDemo />;
      case "breadcrumb":
        return <BreadcrumbDemo />;
      case "tabs":
        return <TabsDemo />;
      case "alerts":
        return <AlertDemo />;
      case "snackbar":
        return <SnackbarDemo />;
      case "charts":
        return <ChartDemo />;
      case "datePicker":
        return <DateRangePickerDemo />;
      case "avatars":
        return <AvatarDemo />;
      case "avatarGroup":
        return <AvatarGroupDemo />;
      case "accordion":
        return <AccordionDemo />;
      case "statCard":
        return <StatCardDemo />;
      case "menu":
        return <MenuDemo />;
      case "modal":
        return <ModalDemo />;
      case "input":
        return <InputDemo />;
      case "dataTable":
        return <DataTableDemo />;
      case "popover":
        return <PopoverDemo />;
      default:
        return null;
    }
  };

  const tenants = [
    {
      label: "Juspay",
      icon: (
        <IndianRupee
          style={{ width: "16px", height: "16px" }}
          color={FOUNDATION_THEME.colors.gray[600]}
        />
      ),
      id: "juspay",
    },
    {
      label: "Razorpay",
      icon: (
        <UserIcon
          style={{ width: "16px", height: "16px" }}
          color={FOUNDATION_THEME.colors.gray[600]}
        />
      ),
      id: "razorpay",
    },
  ];

  const merchants = [
    {
      label: "Design System",
      icon: <UserIcon style={{ width: "16px", height: "16px" }} />,
      id: "design-system",
    },
    {
      label: "Design System 2",
      icon: <UserIcon style={{ width: "16px", height: "16px" }} />,
      id: "design-system-2",
    },
  ];

  const sampleData: DirectoryData[] = [
    {
      label: "Basic Components",
      items: [
        {
          label: "Button",
          leftSlot: <Square style={{ width: "16px", height: "16px" }} />,
          onClick: () => setActiveComponent("buttons"),
        },
        {
          label: "Button Group",
          leftSlot: <Grid style={{ width: "16px", height: "16px" }} />,
          onClick: () => setActiveComponent("buttonGroups"),
        },
        {
          label: "Input",
          leftSlot: <FormInput style={{ width: "16px", height: "16px" }} />,
          onClick: () => setActiveComponent("input"),
        },
        {
          label: "Tag",
          leftSlot: <TagIcon style={{ width: "16px", height: "16px" }} />,
          onClick: () => setActiveComponent("tags"),
        },
        {
          label: "Avatar",
          leftSlot: <Users style={{ width: "16px", height: "16px" }} />,
          onClick: () => setActiveComponent("avatars"),
        },
        {
          label: "Avatar Group",
          leftSlot: <Users style={{ width: "16px", height: "16px" }} />,
          onClick: () => setActiveComponent("avatarGroup"),
        },
        {
          label: "Breadcrumb",
          leftSlot: <Grid style={{ width: "16px", height: "16px" }} />,
          onClick: () => setActiveComponent("breadcrumb"),
        },
      ],
    },
    {
      label: "Navigation",
      items: [
        {
          label: "Menu",
          leftSlot: <MenuIcon style={{ width: "16px", height: "16px" }} />,
          items: [
            {
              label: "Item 1",
              leftSlot: <Square style={{ width: "16px", height: "16px" }} />,
              onClick: () => setActiveComponent("menu"),
              items: [
                {
                  label: "Item 1.1",
                  leftSlot: (
                    <Square style={{ width: "16px", height: "16px" }} />
                  ),
                  onClick: () => setActiveComponent("menu"),
                  items: [
                    {
                      label: "Item 1.1.1",
                      leftSlot: (
                        <Square style={{ width: "16px", height: "16px" }} />
                      ),
                      onClick: () => setActiveComponent("menu"),
                    },
                  ],
                },
              ],
            },
            {
              label: "Item 2",
              leftSlot: <Square style={{ width: "16px", height: "16px" }} />,
            },
          ],
        },
        {
          label: "Tabs",
          leftSlot: <Layout style={{ width: "16px", height: "16px" }} />,
          onClick: () => setActiveComponent("tabs"),
        },
        {
          label: "Accordion",
          leftSlot: <List style={{ width: "16px", height: "16px" }} />,
          onClick: () => setActiveComponent("accordion"),
        },
      ],
    },
    {
      label: "Feedback",
      items: [
        {
          label: "Alert",
          leftSlot: <AlertCircle style={{ width: "16px", height: "16px" }} />,
          onClick: () => setActiveComponent("alerts"),
        },
        {
          label: "Snackbar",
          leftSlot: <BellIcon style={{ width: "16px", height: "16px" }} />,
          onClick: () => setActiveComponent("snackbar"),
        },
        {
          label: "Tooltip",
          leftSlot: <Info style={{ width: "16px", height: "16px" }} />,
          onClick: () => setActiveComponent("tooltips"),
        },
        {
          label: "Modal",
          leftSlot: <Box style={{ width: "16px", height: "16px" }} />,
          onClick: () => setActiveComponent("modal"),
        },
        {
          label: "Popover",
          leftSlot: <MessageCircle style={{ width: "16px", height: "16px" }} />,
          onClick: () => setActiveComponent("popover"),
        },
      ],
    },
    {
      label: "Data Display",
      isCollapsible: true,
      defaultOpen: true,
      items: [
        {
          label: "Chart",
          leftSlot: <BarChart2 style={{ width: "16px", height: "16px" }} />,
          onClick: () => setActiveComponent("charts"),
        },
        {
          label: "Stat Card",
          leftSlot: <FileText style={{ width: "16px", height: "16px" }} />,
          onClick: () => setActiveComponent("statCard"),
        },
        {
          label: "Data Table",
          leftSlot: <Table style={{ width: "16px", height: "16px" }} />,
          onClick: () => setActiveComponent("dataTable"),
        },
      ],
    },
    {
      label: "Form Elements",
      isCollapsible: true,
      defaultOpen: false,
      items: [
        {
          label: "Date Picker",
          leftSlot: <CalendarIcon style={{ width: "16px", height: "16px" }} />,
          onClick: () => setActiveComponent("datePicker"),
        },
        {
          label: "Radio",
          leftSlot: <Radio style={{ width: "16px", height: "16px" }} />,
          onClick: () => setActiveComponent("radio"),
        },
        {
          label: "Selectors",
          leftSlot: <ListFilter style={{ width: "16px", height: "16px" }} />,
          onClick: () => setActiveComponent("selectors"),
        },
      ],
    },
    {
      label: "Typography",
      items: [
        {
          label: "Fonts",
          leftSlot: <Type style={{ width: "16px", height: "16px" }} />,
          onClick: () => setActiveComponent("fonts"),
        },
      ],
    },
    {
      label: "Design System",
      items: [
        {
          label: "Color Palette",
          leftSlot: <Palette style={{ width: "16px", height: "16px" }} />,
          onClick: () => setActiveComponent("colorPalette"),
        },
      ],
    },
  ];

  const footer = (
    <Block
      width="100%"
      backgroundColor={FOUNDATION_THEME.colors.gray[25]}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      gap="12px"
      padding="0 8px"
    >
      <Block display="flex" alignItems="center" gap="8px">
        <Text
          variant="body.sm"
          fontWeight={400}
          color={FOUNDATION_THEME.colors.gray[600]}
        >
          Lorem ipsum dolor sit.
        </Text>
      </Block>
    </Block>
  );

  return (
    <Block height="100vh">
      <Sidebar
        tenants={tenants}
        merchants={merchants}
        data={sampleData}
        topbar={topbar}
        activeTenant={activeTenant}
        setActiveTenant={setActiveTenant}
        activeMerchant={activeMerchant}
        setActiveMerchant={setActiveMerchant}
        footer={footer}
      >
        <ContentWrapper>{renderContent()}</ContentWrapper>
      </Sidebar>
    </Block>
  );
};

export default SidebarDemo;
