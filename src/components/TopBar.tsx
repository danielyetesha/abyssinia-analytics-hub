
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const TopBar = () => {
  return (
    <div className="flex gap-4 mb-8 animate-fade-in">
      <Select defaultValue="all-time">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select timeframe" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all-time">All-time</SelectItem>
          <SelectItem value="last-month">Last Month</SelectItem>
          <SelectItem value="last-week">Last Week</SelectItem>
        </SelectContent>
      </Select>

      <Select defaultValue="all-people">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select people" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all-people">All People</SelectItem>
          <SelectItem value="selected">Selected</SelectItem>
        </SelectContent>
      </Select>

      <Select defaultValue="all-topics">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select topic" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all-topics">All Topics</SelectItem>
          <SelectItem value="specific">Specific Topics</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default TopBar;
