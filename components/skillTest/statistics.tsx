import Card from "@/components/skillTest/card";
import Line from "@/components/ui/line";

interface StatisticsProps {
  stats: { rank: string; percentile: string; score: string };
}

export default function Statistics({ stats }: StatisticsProps) {
  return (
    <Card>
      <div className="w-full">
        <h1 className="mb-5 text-lg font-semibold">Quick Statistics</h1>

        <div className="flex items-center justify-between w-full gap-4 lg:gap-6 lg:px-5 ">
          <div className="flex items-center w-full gap-2">
            <div className="relative flex-shrink-0 w-10 h-10 bg-gray-100 rounded-full lg:w-14 lg:h-14 flex-nowrap">
              <span className="absolute z-0 text-sm -translate-x-1/2 -translate-y-1/2 lg:text-lg top-1/2 left-1/2">
                🏆
              </span>
            </div>

            <p className="grid leading-tight">
              <span className="text-xl font-semibold">{stats.rank}</span>
              <span className="uppercase lg:text-[12px] text-[10px] text-gray-500">
                your rank
              </span>
            </p>
          </div>

          <Line className="w-[1px] h-14" />

          <div className="flex items-center w-full gap-2">
            <div className="relative flex-shrink-0 w-10 h-10 bg-gray-100 rounded-full lg:w-14 lg:h-14 flex-nowrap">
              <span className="absolute z-0 text-sm -translate-x-1/2 -translate-y-1/2 lg:text-lg top-1/2 left-1/2">
                📅
              </span>
            </div>

            <p className="grid leading-tight">
              <span className="text-xl font-semibold">{stats.percentile}%</span>
              <span className="uppercase lg:text-[12px] text-[10px] text-gray-500">
                percentile
              </span>
            </p>
          </div>

          <Line className="w-[1px] h-14" />

          <div className="flex items-center w-full gap-2">
            <div className="relative flex-shrink-0 w-10 h-10 bg-gray-100 rounded-full lg:w-14 lg:h-14 flex-nowrap">
              <span className="absolute z-0 text-sm -translate-x-1/2 -translate-y-1/2 lg:text-lg top-1/2 left-1/2">
                ✅
              </span>
            </div>

            <p className="grid leading-tight">
              <span className="text-xl font-semibold">{stats.score}/15</span>
              <span className="uppercase lg:text-[12px] text-[10px] text-gray-500">
                correct answers
              </span>
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
