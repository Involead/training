import React from 'react';

interface OptionProps {
  option: {
    id: string;
    text: string;
  };
  selectedOption: string;
  handleChange: (value: string) => void;
  questionId: string;
}

const Option: React.FC<OptionProps> = ({ option, selectedOption, handleChange, questionId }) => {
  return (
    <div className="mb-2">
      <label className="inline-flex items-center">
        <input type="radio" name={`question-${questionId}`} className="form-radio" value={option.id} onChange={() => handleChange(option.id)} checked={selectedOption === option.id} />
        <span className="ml-2">{option.text}</span>
      </label>
    </div>
  );
};

export default Option;
