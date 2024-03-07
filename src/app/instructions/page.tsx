import React from "react";
import { Disclaimers } from "@/components/Disclaimers";

const InstructionPage = () => {
  const instructions = [
    "Begin the test only when ready, as it must be completed in a single session.",
    "Continue attempting new sets of questions until you score 100%.",
    "Expect four questions per test, each with a scenario, incident description, or image, focusing on workplace conduct topics.",
    "Each question offers four multiple-choice options. Select the one correct answer.",
    "After answering all questions, review your selections and submit the test for scoring. Aim for a 100% success rate to pass."
  ];

  return (
    <div className="font-poppins mx-auto max-w-4xl py-10 px-4">
      <h1 className="text-center font-bold text-3xl text-blue-600 mb-10">Instructions</h1>
      <div className="mb-2 p-6 bg-white  overflow-auto text-sm">
        {instructions.map((instruction, index) => (
          <div key={instruction} className="flex items-start space-x-4 mb-4">
            <span className="text-blue-500 font-semibold">{index + 1}.</span>
            <p className="flex-1">{instruction}</p>
          </div>
        ))}
      </div>
      <Disclaimers />
    </div>
  );
};

export default InstructionPage;
