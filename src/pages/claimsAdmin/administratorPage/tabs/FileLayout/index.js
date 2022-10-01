import { useState } from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';
import DefaultParameters from './tabs/DefaultParameters';
import SupportedParameters from './tabs/SupportedParameters';

const tabs = [
  { title: 'Default Parameters', component: DefaultParameters },
  { title: 'Supported Parameters', component: SupportedParameters },
];

const FileLayout = () => {
  const [currentTab, setCurrentTab] = useState(tabs[0]);
  return (
    <div style={{ marginTop: '20px' }}>
      <Nav tabs>
        {tabs.map((tab) => {
          const isSelected = currentTab.title === tab.title;
          return (
            <NavItem className={classnames({ 'active-item': isSelected })} key={tab.title}>
              <NavLink
                className={classnames({ active: isSelected })}
                onClick={() => setCurrentTab(tab)}
              >
                {tab.title}
              </NavLink>
            </NavItem>
          );
        })}
      </Nav>
      <TabContent activeTab={currentTab.title}>
        {tabs.map((tab) => (
          <TabPane tabId={tab.title}>
            <tab.component />
          </TabPane>
        ))}
      </TabContent>
    </div>
  );
};

export default FileLayout;
