
'use client'
import React, { useState } from 'react';
import questionsData from '@/data/questions.json';
import QuizCard from '@/components/QuizCard';
import Modal from '@/components/Modal';
import { useRouter } from "next/navigation";
import { Question } from '../../types/types'
import { useQuiz } from '@/app/QuizContext';

const QuizComponent: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [showModal, setShowModal] = useState(false);
  const totalQuestions = questionsData.questions.length;
  const question: Question = questionsData.questions[currentQuestionIndex];
  const isCorrectAnswer = selectedOption === question.correctAnswer;
  const [correctCount, setCorrectCount] = useState(0);
  const router = useRouter()
  const { setQuizResults } = useQuiz();

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
  };

  const handleNextQuestion = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    if (isCorrectAnswer) {
      setCorrectCount(correctCount + 1);
    }
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption('');
    } else {
      setQuizResults(correctCount + (isCorrectAnswer ? 1 : 0), totalQuestions);

      router.push('/resultPage');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <QuizCard
        question={question}
        selectedOption={selectedOption}
        totalQuestions={totalQuestions}
        currentQuestionIndex={currentQuestionIndex}
        handleOptionChange={handleOptionChange}
        handleNextQuestion={handleNextQuestion}
      />
      {showModal && (
        <Modal
          isCorrectAnswer={isCorrectAnswer}
          question={question}
          closeModal={closeModal}
          currentQuestionIndex={currentQuestionIndex}
          totalQuestions={totalQuestions}
        />
      )}

    </div>
  );
};

export default QuizComponent;