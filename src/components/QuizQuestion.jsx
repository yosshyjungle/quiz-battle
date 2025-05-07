import { useEffect, useState } from "react";

const QuizQuestion = ({ question, onAnswer, seconds }) => {
    const [selectedOption, setSelectedOption] = useState(null);
  
    // Reset selected option when question changes
    useEffect(() => {
      setSelectedOption(null);
    }, [question]);
  
    const handleSelect = (index) => {
      setSelectedOption(index);
      onAnswer(index);
    };
  
    const optionColors = [
      'from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700',
      'from-blue-500 to-sky-600 hover:from-blue-600 hover:to-sky-700',
      'from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700',
      'from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700',
    ];
  
    const optionLabels = ['A', 'B', 'C', 'D'];
    
    return (
      <div className="bg-white p-8 rounded-2xl shadow-lg mb-8 quiz-container slide-in">
        <div className="relative mb-6 pb-4 border-b-2 border-gray-100">
          <span className="absolute -top-4 -left-4 bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md">
            <i className="fas fa-question"></i>
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mb-2 pl-6 text-gray-800">{question.question}</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleSelect(index)}
              disabled={seconds === 0 || selectedOption !== null}
              className={`option-btn p-5 rounded-xl text-white font-bold text-lg relative overflow-hidden transition-all duration-200 transform hover:scale-102 ${
                selectedOption === index 
                  ? 'ring-4 ring-yellow-400 scale-95' 
                  : selectedOption !== null  
                    ? 'opacity-70 hover:opacity-70 cursor-not-allowed' 
                    : ''
              }`}
              style={{
                background: `linear-gradient(135deg, ${
                  selectedOption === index 
                    ? '#10B981 0%, #059669 100%' 
                    : selectedOption !== null 
                      ? '#9CA3AF 0%, #6B7280 100%' 
                      : ''
                })`
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${optionColors[index]} ${selectedOption === null ? '' : 'opacity-30'}`}></div>
              <div className="relative flex items-center">
                <div className="bg-white bg-opacity-25 rounded-full w-8 h-8 flex items-center justify-center mr-3 font-semibold">
                  {optionLabels[index]}
                </div>
                <span className="flex-1">{option}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  };
export default QuizQuestion;