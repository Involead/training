'use client'
import Link from "next/link";
import React, { useState } from "react";

export const Disclaimers = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="text-center">
      <div className="mb-4 text-center">
        <input
          type="checkbox"
          id="consentCheckbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="mr-2"
        />
        <label htmlFor="consentCheckbox">I agree to the terms and conditions.</label>
      </div>
      <div className="text-center">
        <Link href="/passage" passHref>
          <button
            className={`bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out ${!isChecked ? "opacity-50 cursor-not-allowed" : ""
              }`}
            disabled={!isChecked}
          >
            Start Test
          </button>
        </Link>
      </div>

    </div>
  )
}
