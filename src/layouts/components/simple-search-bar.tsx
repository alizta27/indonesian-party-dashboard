import { Input } from "@/ui/input";
import { Icon } from "@/components/icon";

interface SearchBarProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

const SimpleSearchBar = ({
  placeholder = "Cari...",
  value,
  onChange,
}: SearchBarProps) => {
  return (
    <div className="relative max-w-sm w-full">
      <div className="absolute left-3 top-1/2 -translate-y-[55%] text-muted-foreground">
        <Icon icon="local:ic-search" size="20" />
      </div>
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-10"
      />
    </div>
  );
};

export default SimpleSearchBar;
