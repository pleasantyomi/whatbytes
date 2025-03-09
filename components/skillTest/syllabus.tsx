import Card from "@/components/skillTest/card";

export default function Syllabus() {
  const analysis = [
    {
      name: "HTML Tools, Forms, History",
      percentage: "80%",
      color: "bg-blue-800",
    },
    {
      name: "Tags & References in HTML",
      percentage: "60%",
      color: "bg-orange-500",
    },
    {
      name: "Tables & References in HTML",
      percentage: "24%",
      color: "bg-red-400",
    },
    { name: "Tables & CSS Basics", percentage: "96%", color: "bg-green-700" },
  ];

  return (
    <Card>
      <h1 className="mb-8 text-lg font-semibold">Syllabus Wise Analysis</h1>

      <div className="grid gap-10">
        {analysis.map((item, index) => (
          <div key={index}>
            <p className="text-[14px] mb-2">{item.name}</p>

            <div className="flex items-center justify-between gap-2">
              <div
                className={`w-10/12 h-2 ${item.color} bg-opacity-10 rounded-full overflow-hidden relative`}
              >
                <div
                  className={`h-full ${item.color} rounded-full`}
                  style={{ width: item.percentage }}
                ></div>
              </div>

              <p className={`text-sm text-${item.color} font-semibold`}>
                {item.percentage}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
