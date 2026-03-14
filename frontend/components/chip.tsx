type Props = {
  label: string;
};

export default function Chip({ label }: Props) {
  return (
    <div className="bg-[#272321] inline border-2 border-[#2b2826]  px-2 py-0.5 rounded-sm text-textsubcolor text-xs">
      {label}
    </div>
  );
}