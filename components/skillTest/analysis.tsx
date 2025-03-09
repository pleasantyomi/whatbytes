import Card from "@/components/skillTest/card";
import { PieChart, Pie, Cell } from "recharts";

interface AnalysisProps {
  stats: { score: string };
}

export default function Analysis({ stats }: AnalysisProps) {
  const totalQuestions = 15;
  const score = parseInt(stats.score, 10); // Convert string to number
  const completed = (score / totalQuestions) * 100;
  const incomplete = 100 - completed;

  const data = [
    { name: "completed", value: completed },
    { name: "incomplete", value: incomplete },
  ];

  const colors = ["#4285F4", "#E0E0E0"];

  return (
    <Card>
      <div className="flex justify-between">
        <h1 className="text-lg font-semibold">Question Analysis</h1>
        <p className="font-semibold text-blue-700">{score}/15</p>
      </div>

      <div>
        <p className="text-gray-600 pt-3 lg:text-base text-[14px]">
          <strong>You scored {score} questions correct out of 15. </strong>
          However, it still needs some improvements.
        </p>
      </div>

      <div className="relative flex items-center justify-center w-8/12 h-auto mx-auto">
        <PieChart width={250} height={250}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={100}
            dataKey="value"
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]} />
            ))}
          </Pie>
        </PieChart>

        <div className="absolute flex items-center justify-center">
          <span className="text-4xl">🎯</span>
        </div>
      </div>
    </Card>
  );
}
