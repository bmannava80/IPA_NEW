export default function AdministratorPage({ tabs, currentTab, setCurrentTab }) {
  return (
    <div>
      {!currentTab && (
        <ul>
          {tabs.map((tab) => (
            <li key={tab.title} className="nav list-item-disc" onClick={() => setCurrentTab(tab)}>
              {tab.title}
            </li>
          ))}
        </ul>
      )}
      {currentTab && <currentTab.component clickBack={() => setCurrentTab(null)} />}
    </div>
  );
}
