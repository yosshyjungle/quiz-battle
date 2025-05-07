const Timer = ({ seconds, isActive }) => {
    const isWarning = seconds <= 3;
    const pulseClass = isWarning ? "pulse-animation" : "";
    const colorClass = isWarning ? "from-red-500 to-red-600" : "from-blue-500 to-blue-600";
    
    return (
      <div className="flex items-center justify-center mb-6">
        <div className={`relative text-4xl font-bold rounded-full w-28 h-28 flex items-center justify-center ${pulseClass}`}>
          <div className={`absolute inset-0 bg-gradient-to-br ${colorClass} rounded-full opacity-80`}></div>
          <div className="absolute inset-2 bg-white rounded-full"></div>
          <span className={`relative z-10 ${isWarning ? "text-red-600" : "text-blue-600"} font-black`}>
            {seconds}
          </span>
          
          {/* Circular progress indicator */}
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle 
              cx="50" cy="50" r="45" 
              fill="none" 
              stroke={isWarning ? "#FCA5A5" : "#93C5FD"}
              strokeWidth="8"
              strokeDasharray="283"
              strokeDashoffset={283 - (283 * seconds / 10)}
              strokeLinecap="round"
            />
          </svg>
          
          {isWarning && (
            <span className="absolute top-1 right-1">
              <i className="fas fa-exclamation-triangle text-red-500 text-sm animate-pulse"></i>
            </span>
          )}
        </div>
      </div>
    );
  };

  export default Timer;