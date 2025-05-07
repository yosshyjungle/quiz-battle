import { useEffect } from "react";

const GameResult = ({ winner, resetGame }) => {
    useEffect(() => {
      // Create confetti animation when component mounts
      const confetti = () => {
        // Simulate confetti with emojis
        const emojiArray = ["🎉", "🏆", "⭐", "🥇", "🎊", "✨"];
        const container = document.querySelector('.confetti-container');
        
        for (let i = 0; i < 100; i++) {
          const confetti = document.createElement('div');
          const emoji = emojiArray[Math.floor(Math.random() * emojiArray.length)];
          
          confetti.innerHTML = emoji;
          confetti.style.left = Math.random() * 100 + 'vw';
          confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
          confetti.style.fontSize = (Math.random() * 20 + 10) + 'px';
          confetti.className = 'absolute top-0 animate-fall';
          
          container.appendChild(confetti);
          
          setTimeout(() => {
            confetti.remove();
          }, 3000);
        }
      };
      
      confetti();
      
      let interval = setInterval(() => {
        confetti();
      }, 3000);
      
      return () => clearInterval(interval);
    }, []);
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
        <div className="confetti-container absolute inset-0 overflow-hidden pointer-events-none"></div>
        
        <div className="relative bg-white bg-opacity-95 p-10 rounded-2xl shadow-2xl max-w-md w-full text-center scale-in">
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
            <span className="text-8xl">🏆</span>
          </div>
          
          <h2 className="text-4xl font-bold mt-6 mb-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
            ゲーム終了！
          </h2>
          
          <div className="py-5 px-8 mb-6 bg-blue-50 rounded-xl">
            <p className="text-xl text-gray-700 mb-2">勝者</p>
            <p className="text-3xl font-bold text-blue-600 mb-2">
              {winner.name}
            </p>
            <div className="flex justify-center">
              <div className="bg-blue-100 px-4 py-1 rounded-full text-blue-800 font-bold">
                残りHP: {winner.hp}
              </div>
            </div>
          </div>
          
          <button 
            onClick={resetGame}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 
              text-white font-bold py-4 px-8 rounded-xl text-xl transition-all transform hover:scale-105 
              shadow-lg hover:shadow-xl w-full flex justify-center items-center"
          >
            <i className="fas fa-redo-alt mr-2"></i>
            もう一度プレイする
          </button>
        </div>
        
        <style>{`
          @keyframes fall {
            0% { transform: translateY(-10vh) rotate(0deg); opacity: 1; }
            100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
          }
          .animate-fall {
            animation-name: fall;
            animation-timing-function: linear;
            animation-iteration-count: 1;
          }
        `}</style>
      </div>
    );
  };
export default GameResult;