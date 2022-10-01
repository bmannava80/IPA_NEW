import { first } from 'lodash';
import { useState } from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Sidebar from '../../components/sideBar';
import TabLayout from '../tabsLayout';

const getPageTitle = (tab, subTab) =>
  subTab?.pageTitle || subTab?.title || tab.pageTitle || tab.title;

export default function AppLayout({ tabs, children }) {
  const [currentTab, setCurrentTab] = useState(first(tabs));
  const [currentSubTab, setCurrentSubTab] = useState(null);
  const CurrentTab = currentTab.component;
  let currentTabProps = {};

  if (currentTab.subTabs) {
    currentTabProps = {
      tabs: currentTab.subTabs || [],
      currentTab: currentSubTab,
      setCurrentTab: setCurrentSubTab,
    };
  }

  return (
    <div className="layout">
      <div>
        <Header />
      </div>
      <div className="layout-content">
        <Sidebar
          tabs={tabs}
          onChangeTab={(tab) => {
            setCurrentSubTab(null);
            setCurrentTab(tab);
          }}
        />
        <TabLayout title={getPageTitle(currentTab, currentSubTab)}>
          <CurrentTab {...currentTabProps} />
          {children}
        </TabLayout>
      </div>
      <Footer />
    </div>
  );
}
