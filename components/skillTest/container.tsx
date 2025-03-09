"use client";

import { useState } from "react";
import Test from "@/components/skillTest/test";
import Analysis from "@/components/skillTest/analysis";
import Syllabus from "@/components/skillTest/syllabus";
import Graph from "@/components/skillTest/graph";
import Statistics from "@/components/skillTest/statistics";
import MobileNav from "@/components/layout/mobilenav";

export default function Container() {
  const [stats, setStats] = useState({
    rank: "1",
    percentile: "30",
    score: "4",
  });

  return (
    <section className="md:w-full md:mx-0 w-[95%] mx-auto pt-4 pb-20">
      <div className="flex gap-4 pb-4 lg:block lg:gap-0 items-center">
        <div className="block lg:hidden">
          <MobileNav />
        </div>
        
        <h1 className="font-thin">Skill Test</h1>
        
      </div>

      <div className="flex flex-col w-full gap-5 md:flex-row">
        <div className="flex flex-col flex-[3] md:w-[60%] space-y-5">
          <Test setStats={setStats} />
          <Statistics stats={stats} />
          <Graph stats={stats} />
        </div>
        <div className="flex flex-col flex-[2] md:w-[40%] space-y-5">
          <Syllabus />
          <Analysis stats={stats} />
        </div>
      </div>
    </section>
  );
}
