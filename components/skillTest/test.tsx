"use client";

import { useState } from "react";
import Card from "@/components/skillTest/card";
import Image from "next/image";
import Button from "@/components/ui/button";
import Modal from "@/components/skillTest/modal";

interface TestProps {
  setStats: (stats: {
    rank: string;
    percentile: string;
    score: string;
  }) => void;
}

export default function Test({ setStats }: TestProps) {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={setStats}
      />

      <Card>
        <div className="flex flex-col items-center justify-between w-full gap-1 md:flex-row">
          <div>
            <Image
              src="/icons/html.png"
              alt="html"
              width={800}
              height={800}
              quality={100}
              className="flex-shrink-0 w-24 h-auto md:w-16 flex-nowrap"
            />
          </div>

          <div className="space-y-1">
            <h1 className="text-lg font-semibold text-center md:text-left">
              Hyper Text Markup Language
            </h1>
            <p className="text-[14px] text-gray-700 text-center md:text-left">
              Questions: 15 | Duration: 15 mins | Submitted on 5 June 2021
            </p>
          </div>

          <div>
            <Button
              onClick={() => setModalOpen(true)}
              className="font-semibold text-white"
            >
              Update
            </Button>
          </div>
        </div>
      </Card>
    </>
  );
}
