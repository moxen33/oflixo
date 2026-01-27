import React from 'react';
import { Nav } from 'react-bootstrap';

const Tab = ({ tabs, activeTab, onTabSelect }) => {
  return (
    <div className="streamit-verticle-tab">
      <Nav variant="pills" className="nav flex-column me-0 me-lg-3 mb-3 mb-md-0 list-inline streamit-tabs">
        {tabs.map((tab) => (
          <Nav.Item key={tab.id} as="button" className="border-0 px-0">
            <Nav.Link 
              eventKey={tab.id} 
              active={activeTab === tab.id} 
              onClick={() => onTabSelect(tab.id)}
            >
              {tab.label}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </div>
  );
};

export default Tab;
