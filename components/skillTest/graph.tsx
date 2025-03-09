import Card from "@/components/skillTest/card";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

interface GraphProps {
  stats: { percentile: string };
}

export default function Graph({ stats }: GraphProps) {
  const percentile = parseFloat(stats.percentile) || 0;

  const data = [
    { x: 0, numberOfStudents: 1 },
    { x: 10, numberOfStudents: 3 },
    { x: 20, numberOfStudents: 4 },
    { x: 25, numberOfStudents: 5 },
    { x: 30, numberOfStudents: 8 },
    { x: 40, numberOfStudents: 10 },
    { x: 50, numberOfStudents: 15 },
    { x: 60, numberOfStudents: 13 },
    { x: 70, numberOfStudents: 4 },
    { x: 75, numberOfStudents: 2 },
    { x: 85, numberOfStudents: 3 },
    { x: 90, numberOfStudents: 4 },
    { x: 100, numberOfStudents: 1 },
  ];

  return (
    <Card>
      <div className="flex items-center justify-between gap-3">
        <div>
          <h1 className="text-lg font-semibold">Comparison Graph</h1>
          <p className="text-gray-600 pt-3 lg:grid lg:text-base text-[14px]">
            <span>
              <strong>You scored {percentile}% Percentile </strong>which is
              lower than the
            </span>
            <span>
              average percentile 72% of all the engineers who took the
              assessment.
            </span>
          </p>
        </div>

        <div className="relative flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full lg:w-14 lg:h-14 flex-nowrap">
          <span className="absolute text-sm -translate-x-1/2 -translate-y-1/2 lg:text-xl top-1/2 left-1/2">
            📈
          </span>
        </div>
      </div>

      <div className="h-[300px] w-full mt-5">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis
              dataKey="x"
              tick={{ fill: "gray" }}
              tickFormatter={(value) => {
                return [0, 25, 50, 75, 100].includes(value) ? value : "";
              }}
            />
            <Tooltip />

            <ReferenceLine
              x={percentile}
              stroke="gray"
              strokeWidth={1}
              strokeDasharray="3 3"
              label={{
                value: "your percentile",
                position: "right",
                fill: "gray",
                fontSize: 12,
              }}
            />

            <Line
              type="monotone"
              dataKey="numberOfStudents"
              stroke="blue"
              strokeWidth={1}
              dot={{ fill: "blue", r: 3 }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
