import { useState, memo, useMemo } from 'react';
import { TabsContainer, TabsHeader, Tab, TabContent } from './Tabs.styles';
import { IProductData } from '../../interfaces/IProductData';

interface ITabs {
  productData: IProductData | undefined;
}

const Tabs = ({ productData }: ITabs) => {
  const tabs = ['Detalhes', 'Caimento', 'Cuidados'];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  const tabContent = useMemo(() => {
    switch (activeTab) {
      case 'Detalhes':
        return productData?.details;
      case 'Caimento':
        return productData?.trim;
      case 'Cuidados':
        return productData?.care;
    }
  }, [activeTab, productData]);

  return (
    <TabsContainer>
      <TabsHeader>
        {tabs.map((tab) => (
          <Tab key={tab} active={activeTab === tab} onClick={() => setActiveTab(tab)}>
            {tab}
          </Tab>
        ))}
      </TabsHeader>
      <TabContent>{tabContent}</TabContent>
    </TabsContainer>
  );
};

export default memo(Tabs);
