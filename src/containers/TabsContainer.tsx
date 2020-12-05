import React from 'react';
import Platform from './Platform';
import SecurityConfiguration from './SecurityConfiguration';
import Summary from './Summary';
import StorageNetwork from './StorageNetwork';
import InstanceType from './InstanceType';


export default function TabsContainer() {

    const tabs = [
        {id: 1, button: 'Choose Image', title: 'Platform'},
        {id: 2, button: 'Choose Instance Type', title: 'Instance Type'},
        {id: 3, button: 'Choose Storage and Network', title: 'Choose Storage/Network '},
        {id: 4, button: 'Configure Security', title: 'Security Configuration'},
        {id: 5, button: 'Review & Launch', title: 'Summary'}
    ];

    const [selectedTab, setSelectedTab] = React.useState(0);

    const renderSwitch = (tabId: number) => {
        switch(tabId) {
          case 0:
            return <Platform/>;
            case 1:
              return <InstanceType/>;
              case 2:
              return <StorageNetwork/>;
              case 3:
              return <SecurityConfiguration/>;
              case 4:
              return <Summary/>;
          default:
            return <Platform/>;
        }
    }

    return (
        <div>
            <h2>{tabs[selectedTab].title}</h2>
            <div className="tabSelectors">
                {tabs.map((tab, index) => {
                    return <button onClick={() => setSelectedTab(index)}>{tab.button}</button>
                })}
            </div>
            {renderSwitch(selectedTab)}
        </div>
    );
}
