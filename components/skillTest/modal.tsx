"use client";

import Image from "next/image";
import Button from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type React from "react";
import { useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { rank: number; percentile: number; score: number }) => void;
}

export default function Modal({ isOpen, onClose, onSubmit }: ModalProps) {
  const formFields = [
    {
      label: "Rank",
      name: "rank",
      validationMessage: "Rank is required",
      placeholder: "Rank",
    },
    {
      label: "Percentile",
      name: "percentile",
      validationMessage: "Percentile must be between 0 and 100",
      placeholder: "Percentile",
    },
    {
      label: "Current Score (out of 15)",
      name: "score",
      validationMessage: "Score must be between 0 and 15",
      placeholder: "Score",
    },
  ];

  const [formData, setFormData] = useState({
    rank: 1,
    percentile: 30,
    score: 4,
  });

  const [errors, setErrors] = useState({
    rank: "",
    percentile: "",
    score: "",
  });

  const validateField = (name: string, value: string | number) => {
    if (value === "" || value === null) return "This field is required";

    const num = Number(value);
    if (name === "percentile" && (isNaN(num) || num < 0 || num > 100)) {
      return "Percentile must be between 0 and 100";
    }

    if (name === "score" && (isNaN(num) || num < 0 || num > 15)) {
      return "Score must be between 0 and 15";
    }

    return "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const numValue = Number(value);

    setFormData((prev) => ({
      ...prev,
      [name]: isNaN(numValue) ? value : numValue,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  const handleSubmit = () => {
    const newErrors = {
      rank: validateField("rank", formData.rank),
      percentile: validateField("percentile", formData.percentile),
      score: validateField("score", formData.score),
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error)) return;

    onSubmit(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-[95%] lg:w-5/12 bg-white rounded-lg shadow-lg">
        <div className="p-5">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Update scores</h2>
            <Image src="/icons/html.png" alt="HTML5" width={36} height={36} />
          </div>

          <div className="space-y-6">
            {formFields.map((field, index) => (
              <div
                key={field.name}
                className="flex items-center justify-between "
              >
                <div className="flex gap-2">
                  <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 bg-blue-900 rounded-full">
                    <span className="text-sm font-semibold text-white">
                      {index + 1}
                    </span>
                  </div>

                  <label className="block mb-1">
                    Update your{" "}
                    <span className="font-semibold">{field.label}</span>
                  </label>
                </div>

                <div>
                  <input
                    type="text"
                    name={field.name}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className={`p-2 text-gray-500 font-semibold border rounded-md outline-none ${
                      errors[field.name as keyof typeof errors]
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-300 focus:border-blue-900"
                    }`}
                  />
                  {errors[field.name as keyof typeof errors] && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors[field.name as keyof typeof errors]}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end gap-3 mt-8">
            <Button
              onClick={onClose}
              className="px-6 bg-transparent border-[1px] border-blue-900 text-blue-900 font-semibold "
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              className="flex items-center gap-1 px-6 font-semibold text-white bg-blue-900"
            >
              Save
              <ArrowRight strokeWidth={2.75} className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
