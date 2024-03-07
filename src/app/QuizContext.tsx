'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface QuizContextType {
  correctCount: number;
  totalQuestions: number;
  setQuizResults: (correctCount: number, totalQuestions: number) => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

interface QuizProviderProps {
  children: ReactNode;
}

export const QuizProvider: React.FC<QuizProviderProps> = ({ children }) => {
  const [correctCount, setCorrectCount] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  const setQuizResults = (correct: number, total: number) => {
    setCorrectCount(correct);
    setTotalQuestions(total);
  };

  return (
    <QuizContext.Provider value={{ correctCount, totalQuestions, setQuizResults }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};
