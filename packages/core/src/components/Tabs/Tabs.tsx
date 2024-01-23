import React, { useState } from 'react';
import { cn } from '../../utils/cn';

export interface TabProps {
  label: string;
  content: React.ReactNode;
}

export interface TabsProps {
  tabs: TabProps[];
  actions?: React.ReactNode;
  centered?: boolean;
  type?: 'default' | 'extended';
  prefixCls?: string;
  classNames: {
    wrapper?: string;
    tabs?: string;
    tab?: string;
    tabActive?: string;
    content?: string;
  }
}

const Tabs: React.FC<TabsProps> = ({ 
  tabs, 
  actions,
  centered = false,
  type = 'default',
  prefixCls = 'apg-tabs',
  classNames = {},
}) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className={cn(
      prefixCls,
      "flex flex-col",
      classNames.wrapper,
    )}>
      <div className={cn(
        `${prefixCls}-tabs`,
        "flex flex-auto rounded-lg py-2 my-4 gap-2 justify-between",
        centered ? 'justify-center' : '',
        classNames.tabs
      )}>
        <ul className={cn(
          `${prefixCls}-list`,
          "flex gap-2 items-center",
          type === 'extended' ? 'flex-auto w-full' : '',
        )}>
          {tabs.map((tab, index) => (
            <li
              key={tab.label}
              className={cn(
                `${prefixCls}-tab`,
                'flex items-center transition-all duration-500 px-4 rounded-lg h-10 cursor-pointer hover:text-primary hover:bg-gray-100',
                type === 'extended' ? 'flex-auto text-center justify-center' : '',
                type === 'extended' && `${prefixCls}-tab-extended`,
                index === selectedTab ? 'text-primary bg-gray-100' : '',
                classNames.tab,
                index === selectedTab ? classNames.tabActive : '',
              )}
              onClick={() => setSelectedTab(index)}
            >
              {tab.label}
            </li>
          ))}
        </ul>
        <div className="flex gap-2 items-center">
          {actions}
        </div>
      </div>
      <div className={cn(
        `${prefixCls}-content`,
        "flex flex-col",
        classNames.content,
      )}>
        {tabs[selectedTab].content}
      </div>
    </div>
  );
};

export default Tabs;