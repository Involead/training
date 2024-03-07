import React from 'react';
import { Question } from '../types/types';

interface ModalProps {
  isCorrectAnswer: boolean;
  question: Question;
  closeModal: () => void;
  currentQuestionIndex: number;
  totalQuestions: number;
}

const Modal: React.FC<ModalProps> = ({ isCorrectAnswer, question, closeModal, currentQuestionIndex, totalQuestions }) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
      <div className="bg-white p-5 rounded-lg flex flex-col items-center max-w-lg">
        {isCorrectAnswer ? (
          <div className="flex items-center text-green-500 mb-4 ">
            <span className="text-2xl">✅</span>
            <h3 className="text-xl font-bold ml-2">Correct!</h3>
          </div>
        ) : (
          <>
            <div className="flex items-center text-red-500 mb-4 ">
              <span className="text-2xl">❌</span>
              <h3 className="text-xl font-bold ml-2">Incorrect</h3>
            </div>
            <p className="text-md mb-2 font-bold w-full ">Correct answer is option {question.correctAnswer}</p>
          </>
        )}
        <p className="mb-4">{question.description}</p>
        <button onClick={closeModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {currentQuestionIndex === totalQuestions - 1 ? "See Results" : "Continue"}
        </button>
      </div>
    </div>
  );
};

export default Modal;
