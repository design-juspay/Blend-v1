import { Snackbar, Tag } from "../lib/main";
import "./App.css";
import SidebarDemo from "./demos/sidebar/SidebarDemo";

function App() {
  return (
    <>
      <Tag text="Tag" />
      <SidebarDemo />
      <Snackbar />
    </>
  );
}

export default App;
