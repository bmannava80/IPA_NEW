import { map } from 'lodash';

export default function Sidebar({ tabs, onChangeTab }) {
  return (
    <div className="side-bar">
      {map(tabs, (tab) => (
        <div className="nav" key={tab.title} onClick={() => onChangeTab(tab)}>
          {tab.title}
        </div>
      ))}
    </div>
  );
}
