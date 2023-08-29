"use client";

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@/lib/twMaterialAssets";
import { useState } from "react";
import CategoryCard from "@/components/landing-page/categories/categoryCard";
import { appTransitionClasses } from "@/lib/utils";

const AppTabs = ({ items = [] }) => {
  const [activeTab, setActiveTab] = useState(items[0]?.value);

  return (
    <div className="">
      <Tabs value={activeTab}>
        <TabsHeader
          className="rounded-none text-app-theme bg-transparent p-0 max-w-lg m-auto mb-4 md:mb-8"
          indicatorProps={{
            className:
              "bg-transparent border-b-2 border-app-theme shadow-none rounded-none",
          }}
        >
          {items.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={`text-xl font-medium !font-Cairo ${
                activeTab === value ? "text-app-theme" : ""
              } ${appTransitionClasses}`}
            >
              <strong className="">{label.toUpperCase()}</strong>
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {items.map(({ value, contents }) => (
            <TabPanel
              key={value}
              value={value}
              className="grid sm:grid-cols-4 gap-3 !font-Cairo"
            >
              {contents?.map((items, _idx) => (
                <CategoryCard key={_idx} item={items} />
              ))}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default AppTabs;
