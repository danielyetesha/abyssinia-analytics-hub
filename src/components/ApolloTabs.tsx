
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { User, ArrowRight, DollarSign, ArrowLeftRight, Store } from "lucide-react";

type ApolloTab = "account" | "onboarding" | "loan" | "transaction" | "merchant";

interface ApolloTabsProps {
  activeTab: ApolloTab;
  onChange: (value: ApolloTab) => void;
}

export const ApolloTabs = ({ activeTab, onChange }: ApolloTabsProps) => {
  const navigate = useNavigate();

  return (
    <Tabs value={activeTab} onValueChange={(value) => onChange(value as ApolloTab)} className="mb-6">
      <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full">
        <TabsTrigger value="account" className="flex items-center gap-2">
          <User className="h-4 w-4" />
          <span>Account</span>
        </TabsTrigger>
        <TabsTrigger value="onboarding" className="flex items-center gap-2">
          <ArrowRight className="h-4 w-4" />
          <span>Onboarding</span>
        </TabsTrigger>
        <TabsTrigger value="loan" className="flex items-center gap-2">
          <DollarSign className="h-4 w-4" />
          <span>Loan</span>
        </TabsTrigger>
        <TabsTrigger value="transaction" className="flex items-center gap-2">
          <ArrowLeftRight className="h-4 w-4" />
          <span>Transaction</span>
        </TabsTrigger>
        <TabsTrigger value="merchant" className="flex items-center gap-2">
          <Store className="h-4 w-4" />
          <span>Merchant</span>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};
