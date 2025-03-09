import Avatar from "@/components/ui/avatar";

export default function User() {
  return (
    <div className="border-[2px] border-gray-200 rounded-lg p-2">
      <div className="flex items-center gap-3">
        <Avatar className="flex-shrink-0 flex-nowrap" />
        <p className="font-semibold">Pleasant Yomi</p>
      </div>
    </div>
  );
}
