import React from 'react';
import { Tab } from 'react-bootstrap';

const TabContent = ({ tabs, activeTab }) => {
  return (
    <Tab.Content>
      {tabs.map((tab) => (
        <Tab.Pane key={tab.id} eventKey={tab.id} active={activeTab === tab.id}>
          {tab.content}
        </Tab.Pane>
      ))}
    </Tab.Content>
  );
};

export default TabContent;
