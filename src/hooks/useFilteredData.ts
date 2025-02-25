
import { useState, useMemo } from 'react';
import { DashboardType } from '../App';

// Apollo Data
const apolloData = {
  transactions: [
    { date: '2024-01-01', type: 'giro zip', value: 800, success: true },
    { date: '2024-01-15', type: 'ftm', value: 600, success: false },
    { date: '2024-02-01', type: 'website', value: 400, success: true },
    { date: '2024-02-15', type: 'pos', value: 300, success: true },
    { date: '2024-03-01', type: 'RTGS', value: 200, success: false },
  ],
  successData: [
    { date: '2024-01-01', name: 'Existing', value: 871363301 },
    { date: '2024-01-01', name: 'New', value: 1112 },
  ],
  failureData: [
    { date: '2024-02-01', name: 'Existing', value: 300 },
    { date: '2024-02-01', name: 'New', value: 812 },
  ]
};

// Mobile Banking Data
const mobileData = {
  userGrowth: [
    { month: "2024-01", appUsers: 18906, ussdUsers: 39720 },
    { month: "2024-02", appUsers: 52845, ussdUsers: 63000 },
    { month: "2024-03", appUsers: 47842, ussdUsers: 22244 },
  ],
  districtData: [
    { name: "East", total: 174510, app: 73294, ussd: 101216 },
    { name: "West", total: 139872, app: 65740, ussd: 74132 },
    { name: "Central", total: 125273, app: 58878, ussd: 66395 },
  ]
};

// Card Banking Data
const cardData = {
  cardHolderData: {
    performance: {
      activated: 710475,
      nonActivated: 240784,
      totalNonActivated: 469260,
      recruited: 714417,
      plan: 485678
    }
  },
  transactionVolume: {
    total: 33081170,
    approved: 28746001,
    declined: 9089385,
    atm: 3467031,
    pos: 7310896
  }
};

interface FilterState {
  startDate: Date | null;
  endDate: Date | null;
  selectedType: string | null;
  selectedValue: string | null;
}

export const useFilteredData = (type: DashboardType) => {
  const [filters, setFilters] = useState<FilterState>({
    startDate: null,
    endDate: null,
    selectedType: null,
    selectedValue: null,
  });

  const resetFilters = () => {
    setFilters({
      startDate: null,
      endDate: null,
      selectedType: null,
      selectedValue: null,
    });
  };

  const data = useMemo(() => {
    let dataSet;
    switch (type) {
      case 'apollo':
        dataSet = apolloData;
        break;
      case 'mobile':
        dataSet = mobileData;
        break;
      case 'card':
        dataSet = cardData;
        break;
      default:
        dataSet = apolloData;
    }

    // Apply date filters if present
    if (filters.startDate && filters.endDate) {
      // Filter data based on date range
      // This is a simplified example - you'll need to adapt this for each data structure
      if (type === 'apollo') {
        dataSet = {
          ...dataSet,
          transactions: dataSet.transactions.filter(item => {
            const date = new Date(item.date);
            return date >= filters.startDate && date <= filters.endDate;
          })
        };
      }
    }

    // Apply type/value filters if present
    if (filters.selectedType && filters.selectedValue) {
      // Filter based on selected chart element
      // This is a simplified example - you'll need to adapt this for each data structure
      if (type === 'apollo') {
        dataSet = {
          ...dataSet,
          transactions: dataSet.transactions.filter(item => 
            item[filters.selectedType as keyof typeof item] === filters.selectedValue
          )
        };
      }
    }

    return dataSet;
  }, [type, filters]);

  return {
    data,
    filters,
    setFilters,
    resetFilters,
  };
};
