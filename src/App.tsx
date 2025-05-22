import "./App.css";
import { useState } from "react";
import { CircleUser, TagIcon } from "lucide-react";
import ButtonDemo from "./demos/Button/ButtonDemo";
import TagsDemo from "./demos/Tags/TagsDemo";

type ComponentSection = "buttons" | "tags";

function App() {
  const [activeSection, setActiveSection] = useState<ComponentSection>("buttons");

  return (
    <div className="app-container">
      {/* Vertical Navigation Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <h1 className="sidebar-title">Blend-v1</h1>
          <div className="sidebar-subtitle">Component Library</div>
        </div>
        
        <nav className="sidebar-nav">
          <button
            className={`nav-item ${activeSection === "buttons" ? "active" : ""}`}
            onClick={() => setActiveSection("buttons")}
          >
            <CircleUser size={18} />
            <span>Buttons</span>
          </button>
          <button
            className={`nav-item ${activeSection === "tags" ? "active" : ""}`}
            onClick={() => setActiveSection("tags")}
          >
            <TagIcon size={18} />
            <span>Tags</span>
          </button>
          {/* Future components would be added here */}
        </nav>
        
        <div className="sidebar-footer">
          <div className="version">Version 1.0.0</div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="content-area">
        {activeSection === "buttons" && <ButtonDemo />}
        {activeSection === "tags" && <TagsDemo />}
      </main>
    </div>
  );
}

export default App;
