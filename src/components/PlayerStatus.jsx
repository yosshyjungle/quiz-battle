const PlayerStatus = ({ player, currentPlayer }) => {
    const healthPercentage = Math.max(0, player.hp);
    const isCurrentPlayer = player.id === currentPlayer;
    
    // Define health status based on remaining HP
    const getHealthStatus = () => {
      if (player.hp > 70) return { text: '絶好調！', color: 'text-green-600' };
      if (player.hp > 40) return { text: '好調', color: 'text-blue-500' };
      if (player.hp > 20) return { text: '危険', color: 'text-orange-500' };
      return { text: '瀕死', color: 'text-red-600 animate-pulse' };
    };
    
    const status = getHealthStatus();
    
    return (
      <div className={`p-6 rounded-xl shadow-lg slide-in quiz-container ${
        isCurrentPlayer 
          ? "border-l-8 border-blue-500 bg-gradient-to-r from-blue-50 to-white" 
          : "border-l-8 border-gray-300 bg-white"
      }`}>
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-2xl font-bold flex items-center">
            {isCurrentPlayer && <i className="fas fa-user-circle text-blue-500 mr-2"></i>}
            {player.name}
          </h3>
          <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
            isCurrentPlayer ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-700"
          }`}>
            {isCurrentPlayer ? "プレイ中" : "待機中"}
          </span>
        </div>
        
        <div className="relative w-full bg-gray-200 rounded-full h-7 mb-3 overflow-hidden">
          <div 
            className={`h-full rounded-full transition-all duration-500 ease-out ${
              player.hp > 70 ? "bg-gradient-to-r from-green-400 to-green-500" : 
              player.hp > 40 ? "bg-gradient-to-r from-blue-400 to-blue-500" : 
              player.hp > 20 ? "bg-gradient-to-r from-orange-400 to-orange-500" : 
              "bg-gradient-to-r from-red-400 to-red-600"
            }`}
            style={{ width: `${healthPercentage}%` }}
          >
          </div>
          {/* HP marker */}
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-end pr-2 pointer-events-none">
            <span className="text-xs font-bold text-white drop-shadow-md">{player.hp}/100</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <i className="fas fa-heartbeat text-red-500 mr-2"></i>
            <span className="font-bold">HP</span>
          </div>
          <span className={`font-bold ${status.color}`}>{status.text}</span>
        </div>
      </div>
    );
  };
export default PlayerStatus;