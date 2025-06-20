import { Snackbar } from "../lib/main";
import "./App.css";
import SidebarDemo from "./demos/sidebar/SidebarDemo";

function App() {
  return (
    <>
      <SidebarDemo />
      <Snackbar duration={3000} />
    </>
  );
}

export default App;