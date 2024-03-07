'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import { useQuiz } from '@/app/QuizContext';
import { motion } from 'framer-motion';

const ResultPage = () => {
  const router = useRouter();
  const { correctCount, totalQuestions } = useQuiz();
  const score = (correctCount / totalQuestions) * 100;
  const isPerfectScore = score === 100;
  const [counter, setCounter] = useState(30);

  useEffect(() => {
    if (isPerfectScore) {
      const timer = setInterval(() => {
        setCounter((prevCounter) => prevCounter - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isPerfectScore]);

  useEffect(() => {
    if (counter === 0) {
      console.log('Automatically logging out...');
      router.push('/');
    }
  }, [counter, router]);


  const variants = {
    perfect: {
      scale: [1, 1.25, 1],
      rotate: [0, 0, 270, 270, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        scale: { duration: 2, repeat: Infinity },
        rotate: { duration: 2, repeat: Infinity }
      }
    },
    improvement: {
      y: [0, -20, 0],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        y: { duration: 2, repeat: Infinity },
        opacity: { duration: 2, repeat: Infinity }
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <motion.div
        className="bg-white p-5 rounded-lg flex flex-col items-center max-w-lg shadow-xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold mb-4">{isPerfectScore ? 'Congratulations!' : 'Good Effort!'}</h3>
        {isPerfectScore ? (
          <>
            <motion.img
              src="trophy.png"
              alt="Trophy"
              className="w-24 h-24 mb-4"
              variants={variants}
              animate="perfect"
            />
            <p className="mb-4">{`You've achieved a perfect score! 🎉`}</p>
            <p className="text-sm">You can logout and close the browser, or it will automatically log you out in {counter} seconds.</p>

          </>
        ) : (
          <>
            <motion.img
              src="improvement.png"
              alt="Improvement"
              className="w-24 h-24 mb-4"
              variants={variants}
              animate="improvement"
            />

            <p className="mb-4">You answered correctly {correctCount} out of {totalQuestions} questions.</p>
            <p className="mb-4">Your score is {score.toFixed(2)}%. Keep improving!</p>

            <button
              onClick={() => router.push('/passage')}
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
            >
              Try Again
            </button>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default ResultPage;
