import { useEffect, useState } from "react";
import quizQuestions from "../data/questions.js";
import QuizQuestion from './QuizQuestion';
import PlayerStatus from './PlayerStatus'; 
import GameResult from './GameResult';

// Timerコンポーネントを追加
const Timer = ({ seconds, isActive }) => {
  return (
    <div className="text-center mb-6">
      <div className={`inline-block px-6 py-3 rounded-full ${
        seconds > 5 
          ? 'bg-blue-100 text-blue-800' 
          : 'bg-red-100 text-red-800 animate-pulse'
      }`}>
        <span className="text-2xl font-bold">
          <i className="fas fa-clock mr-2"></i>
          {seconds}秒
        </span>
      </div>
    </div>
  );
};

const QuizBattle = () => {
    const [gameState, setGameState] = useState("start"); // start, playing, finished
    const [playerNames, setPlayerNames] = useState(["プレイヤー1", "プレイヤー2"]);
    const [players, setPlayers] = useState([
      { id: 0, name: "プレイヤー1", hp: 100 },
      { id: 1, name: "プレイヤー2", hp: 100 }
    ]);
    const [currentPlayer, setCurrentPlayer] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [seconds, setSeconds] = useState(10);
    const [usedQuestions, setUsedQuestions] = useState([]);
    const [timerActive, setTimerActive] = useState(false);
    const [winner, setWinner] = useState(null);
    const [answerResult, setAnswerResult] = useState(null); // correct, incorrect, null
    const [questionCount, setQuestionCount] = useState(0);
    const [showAnimation, setShowAnimation] = useState(false);
    const [questions, setQuestions] = useState(quizQuestions);
  
    // タイマー処理
    useEffect(() => {
      let interval;
      if (timerActive && seconds > 0) {
        interval = setInterval(() => {
          setSeconds(seconds - 1);
        }, 1000);
      } else if (seconds === 0 && timerActive) {
        handleTimeUp();
      }
      return () => clearInterval(interval);
    }, [seconds, timerActive]);
  
    // プレイヤー名変更
    const handleNameChange = (id, name) => {
      const newNames = [...playerNames];
      newNames[id] = name;
      setPlayerNames(newNames);
    };
  
    // ゲーム開始
    const startGame = () => {
      setPlayers([
        { id: 0, name: playerNames[0], hp: 100 },
        { id: 1, name: playerNames[1], hp: 100 }
      ]);
      setGameState("playing");
      pickRandomQuestion();
      setTimerActive(true);
      setQuestionCount(0);
    };
  
    // ランダムな問題を選択
    const pickRandomQuestion = () => {
      const availableQuestions = questions.filter(
        q => !usedQuestions.includes(q.id)
      );
      
      if (availableQuestions.length === 0 || (players[0].hp === 0 || players[1].hp === 0)) {
        // 全ての問題を使い切った場合、または片方のHPが0になった場合
        const winnerPlayer = players[0].hp > players[1].hp ? players[0] : players[1];
        setWinner(winnerPlayer);
        setGameState("finished");
        return;
      }
      
      const randomIndex = Math.floor(Math.random() * availableQuestions.length);
      const question = availableQuestions[randomIndex];
      setCurrentQuestion(question);
      setUsedQuestions([...usedQuestions, question.id]);
      setSeconds(10);
      setQuestionCount(prev => prev + 1);
      setAnswerResult(null);
      setShowAnimation(false);
    };
  
    // 回答処理
    const handleAnswer = (selectedIndex) => {
      setTimerActive(false);
      const isCorrect = selectedIndex === currentQuestion.answer;
      
      let newPlayers = [...players];
      if (isCorrect) {
        // 正解の場合：相手のHPを10減らす
        const opponentId = currentPlayer === 0 ? 1 : 0;
        newPlayers[opponentId].hp = Math.max(0, newPlayers[opponentId].hp - 10);
        setAnswerResult("correct");
      } else {
        // 不正解の場合：自身のHPを10減らす
        newPlayers[currentPlayer].hp = Math.max(0, newPlayers[currentPlayer].hp - 10);
        setAnswerResult("incorrect");
      }
      
      setShowAnimation(true);
      
      if (isCorrect) {
        const updatedPlayers = [...players];
        const opponentIndex = currentPlayer === 0 ? 1 : 0;
        updatedPlayers[opponentIndex].hp = Math.max(0, updatedPlayers[opponentIndex].hp - 10);
        setPlayers(updatedPlayers);
        
        // 相手のHPが0になったらゲーム終了
        if (updatedPlayers[opponentIndex].hp === 0) {
          setTimeout(() => {
            setWinner(updatedPlayers[currentPlayer]);
            setGameState("finished");
          }, 1500);
          return;
        }
      }
      
      // 結果を表示した後、次の問題へ
      setTimeout(() => {
        // 次のプレイヤーへ
        setCurrentPlayer(currentPlayer === 0 ? 1 : 0);
        pickRandomQuestion();
        setTimerActive(true);
      }, 1500);
    };
  
    // 時間切れ処理
    const handleTimeUp = () => {
      setTimerActive(false);
      setAnswerResult("timeout");
      setShowAnimation(true);
      
      // 結果を表示した後、次の問題へ
      setTimeout(() => {
        // 時間切れは不正解として扱う
        setCurrentPlayer(currentPlayer === 0 ? 1 : 0);
        pickRandomQuestion();
        setTimerActive(true);
      }, 1500);
    };
  
    // ゲームリセット
    const resetGame = () => {
      setPlayerNames(["プレイヤー1", "プレイヤー2"]);
      setPlayers([
        { id: 0, name: "プレイヤー1", hp: 100 },
        { id: 1, name: "プレイヤー2", hp: 100 }
      ]);
      setCurrentPlayer(0);
      setCurrentQuestion(null);
      setSeconds(10);
      setUsedQuestions([]);
      setTimerActive(false);
      setWinner(null);
      setAnswerResult(null);
      setQuestionCount(0);
      setGameState("start");
    };
  
    // 正解/不正解エフェクト
    const ResultOverlay = () => {
      if (!showAnimation || !answerResult) return null;
      
      const bgColor = answerResult === "correct" 
        ? "bg-green-500" 
        : answerResult === "timeout" ? "bg-yellow-500" : "bg-red-500";
      
      const icon = answerResult === "correct" 
        ? "fas fa-check-circle"
        : answerResult === "timeout" ? "fas fa-clock" : "fas fa-times-circle";
      
      const message = answerResult === "correct" 
        ? "正解!"
        : answerResult === "timeout" ? "時間切れ!" : "不正解!";
      
      return (
        <div className={`fixed inset-0 ${bgColor} bg-opacity-50 flex items-center justify-center z-40 animate-pulse`}>
          <div className="text-center text-white">
            <i className={`${icon} text-6xl mb-4`}></i>
            <h2 className="text-4xl font-bold">{message}</h2>
            {answerResult === "correct" && (
              <p className="text-xl mt-2">相手に 10 ダメージ!</p>
            )}
          </div>
        </div>
      );
    };
  
    if (gameState === "start") {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen py-10">
          <h1 className="text-5xl font-bold mb-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">クイズ対戦ゲーム</h1>
          
          <div className="bg-white p-8 rounded-xl shadow-xl max-w-md w-full quiz-container">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">プレイヤー設定</h2>
            
            {/* Player name inputs */}
            <div className="mb-6 space-y-4">
              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  <i className="fas fa-user-ninja mr-2 text-blue-500"></i>
                  プレイヤー1
                </label>
                <input 
                  type="text" 
                  value={playerNames[0]} 
                  onChange={(e) => handleNameChange(0, e.target.value)} 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  maxLength={10}
                  placeholder="名前を入力"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  <i className="fas fa-user-astronaut mr-2 text-purple-500"></i>
                  プレイヤー2
                </label>
                <input 
                  type="text" 
                  value={playerNames[1]} 
                  onChange={(e) => handleNameChange(1, e.target.value)} 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  maxLength={10}
                  placeholder="名前を入力"
                />
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mb-4 text-center">ゲームルール</h2>
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <i className="fas fa-user-friends mt-1 mr-2 text-blue-500"></i>
                  <span>2人のプレイヤーが交互に問題に回答</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle mt-1 mr-2 text-green-500"></i>
                  <span>正解すると相手のHPを10減らせる</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-clock mt-1 mr-2 text-yellow-500"></i>
                  <span>各問題の制限時間は10秒</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-trophy mt-1 mr-2 text-yellow-600"></i>
                  <span>相手のHPを0にしたら勝利</span>
                </li>
              </ul>
            </div>
            
            <button 
              onClick={startGame}
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 
                text-white font-bold py-4 px-6 rounded-xl text-xl transition-all transform hover:scale-105 
                shadow-lg hover:shadow-xl flex justify-center items-center"
              disabled={playerNames[0].trim() === '' || playerNames[1].trim() === ''}
            >
              <i className="fas fa-play mr-2"></i>
              ゲームスタート
            </button>
          </div>
        </div>
      );
    }
  
    if (gameState === "finished") {
      return <GameResult winner={winner} resetGame={resetGame} />;
    }
  
    return (
      <div className="max-w-4xl mx-auto p-4 pb-12">
        {/* Result overlay animation */}
        <ResultOverlay />
        
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            クイズ対戦ゲーム
          </h1>
          <div className="flex items-center">
            <span className="mr-4 px-3 py-1 bg-blue-100 text-blue-800 rounded-lg font-medium text-sm">
              問題: {questionCount}/{questions.length} {/* window.quizQuestionsをquestionsに変更 */}
            </span>
            <button 
              onClick={resetGame}
              className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg transition-colors flex items-center"
            >
              <i className="fas fa-redo mr-1"></i> リセット
            </button>
          </div>
        </div>
        
        <Timer seconds={seconds} isActive={timerActive} />
        
        <div className="mb-6 text-center bg-gradient-to-r from-blue-50 to-indigo-50 p-3 rounded-xl">
          <h2 className="text-2xl font-bold text-blue-700">
            <i className="fas fa-user-circle mr-2"></i>
            {players[currentPlayer].name} の番です
          </h2>
        </div>
        
        {currentQuestion && (
          <QuizQuestion 
            question={currentQuestion} 
            onAnswer={handleAnswer} 
            seconds={seconds}
          />
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {players.map(player => (
            <PlayerStatus 
              key={player.id} 
              player={player} 
              currentPlayer={currentPlayer}
            />
          ))}
        </div>
      </div>
    );
};
export default QuizBattle;