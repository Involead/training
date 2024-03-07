import React from 'react';
import OptionComponent from '@/components/Option';
import { Question, Option } from '../types/types'; // Assume you have a types.ts file

interface QuizCardProps {
  question: Question;
  selectedOption: string;
  totalQuestions: number;
  currentQuestionIndex: number;
  handleOptionChange: (value: string) => void;
  handleNextQuestion: () => void;
}

const QuizCard: React.FC<QuizCardProps> = ({ question, selectedOption, totalQuestions, currentQuestionIndex, handleOptionChange, handleNextQuestion }) => {
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="block text-gray-700 text-xl font-bold mb-2">
        Question {currentQuestionIndex + 1} of {totalQuestions}
      </h2>
      <p className="text-gray-700 text-base mb-4">{question.text}</p>
      <div className="mb-6">
        {question.options.map((option) => (
          <OptionComponent key={option.id} option={option} selectedOption={selectedOption} handleChange={handleOptionChange} questionId={question.id} />
        ))}
      </div>
      <div className="flex justify-between">
        <span>{` `}</span>
        <button onClick={handleNextQuestion} className={`${selectedOption ? 'bg-blue-500 hover:bg-blue-700' : 'bg-blue-500 opacity-50 cursor-not-allowed'} text-white font-bold py-2 px-4 rounded-r`} disabled={!selectedOption}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default QuizCard;
