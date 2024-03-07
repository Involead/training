'use client'
import React, { useState, useRef } from 'react';
import Link from "next/link";

const videoUrl = "cyber-security-1.mp4";

export const VideosContainer = () => {
  const [buttonEnabled, setButtonEnabled] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [confirmationChecked, setConfirmationChecked] = useState(false);

  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const percentPlayed = (videoRef.current.currentTime / videoRef.current.duration) * 100;
    if (percentPlayed >= 20 && !buttonEnabled) {
      setButtonEnabled(true);
    }
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmationChecked(event.target.checked);
  };
  const handleButtonClick = () => {
    setShowConfirmation(true);
  };

  const handleConfirm = () => {
    console.log("User confirmed to proceed to the test.");
    setShowConfirmation(false);
  };

  const handleCancel = () => {
    setShowConfirmation(false);
  };
  const isButtonActive = buttonEnabled && confirmationChecked;

  return (
    <div className='w-2/3 flex flex-col mr-4' style={{ padding: '30px 0' }}>
      <video
        src={videoUrl}
        controls
        className='w-full h-auto'
        style={{height: "420px"}}
        ref={videoRef}
        onTimeUpdate={handleTimeUpdate}
      ></video>
      <div className="pt-4">

        <label className="flex items-center mt-2 mb-4">
          <input
            type="checkbox"
            checked={confirmationChecked}
            onChange={handleCheckboxChange}
            className="form-checkbox"
          />
          <span className="ml-2 text-sm">I have read and watched the video completely and am ready for the test.</span>
        </label>

        <span className="text-xs italic text-blue-800 rounded">
          * You will start the test after you watch the video and confirm that you have understood the description of the topic.
        </span>
      </div>

      <button
        className={`bg-blue-500 ${!isButtonActive ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'} mt-2 text-white font-bold py-2 px-4 border border-blue-700 rounded `}
        disabled={!isButtonActive}
        onClick={handleButtonClick}
      >
        Proceed to Questions on Email Phishing
      </button>
      {showConfirmation && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
          <div className="bg-white p-5 rounded-lg flex flex-col items-center max-w-2xl">
            <p className="text-lg font-semibold mb-4">Hey there! Ready to kick off the test?</p>

            <div className="mt-1 mb-4 text-left bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 text-sm" role="alert">
              <p>{`Please read the passage about "Email Phishing" on the left side of the screen and watch the video completely before proceeding to the questions section. The questions are based on the scenario described in the video.`}</p>
              <p className='mt-2'>You will have <b>4 multiple-choice</b> questions to answer within a duration of 3 minutes.</p>
            </div>
            <div className="flex justify-around w-full">
              <Link href="/questions" passHref>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={handleConfirm}>
                  {`Let's Go!`}
                </button>
              </Link>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={handleCancel}>
                Maybe Later
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
