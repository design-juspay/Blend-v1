import { Snackbar, Tag } from "../lib/main";
import "./App.css";
import SidebarDemo from "./demos/sidebar/SidebarDemo";

function App() {
  return (
    <>
      <SidebarDemo />
      <Snackbar duration={10000} />
    </>
  );
}

export default App;
