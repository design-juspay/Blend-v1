import { Snackbar } from "../lib/main";
import "./App.css";
import SidebarDemo from "./demos/sidebar/SidebarDemo"; // Import the new demo

function App() {
  return (
    <>
      <SidebarDemo /> {/* Render SidebarDemo which will handle McpTestDemo */}
      <Snackbar duration={3000} />
    </>
  );
}

export default App;
