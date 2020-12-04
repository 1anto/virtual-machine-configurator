import React from 'react';
import ChooseImage from './ChooseImage';

export default function TabsContainer() {
    const tabs = ['Choose Image', 'Choose Instance Type', 'Choose Storage and Network', 'Configure Security', 'Review & Launch'];
    const [selectedTab, setSelectedTab] = React.useState(2);

    return (
        <div>
            <div>
                {tabs.map(tab => {
                    return <button>{tab}</button>
                })}
            </div>

            <ChooseImage />
        </div>
    );
}
