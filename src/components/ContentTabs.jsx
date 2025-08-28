export default function ContentTabs({ currentTab, setCurrentTab }) {
  return (
    <ul className="planet-main_content-tabs">
      <li className={`${currentTab === "overview" ? "activeTab" : ""}`}>
        <button onClick={() => setCurrentTab("overview")}>
          <span className="tabIndex">01 </span>Overview
        </button>
      </li>
      <li className={`${currentTab === "structure" ? "activeTab" : ""}`}>
        <button onClick={() => setCurrentTab("structure")}>
          <span className="tabIndex">01 </span>Structure
        </button>
      </li>
      <li className={`${currentTab === "geology" ? "activeTab" : ""}`}>
        <button onClick={() => setCurrentTab("geology")}>
          <span className="tabIndex">01 </span>Surface
        </button>
      </li>
    </ul>
  );
}
