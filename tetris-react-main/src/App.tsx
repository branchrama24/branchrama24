import Board from './components/Board';
import UpcomingBlocks from './components/UpcomingBlocks';
import { useTetris } from './hooks/useTetris';

function App() {
  const { board, startGame, isPlaying, score, upcomingBlocks } = useTetris();

  return (
    <div className="app">
      <div className='div1'>
      <Board currentBoard={board} />
      </div>
      <div className="div2">
      <div className="controls">
        <h2>Score: {score}</h2>
        {isPlaying ? (
          <UpcomingBlocks upcomingBlocks={upcomingBlocks} />
        ) : (
          <button className="buttonClass" onClick={startGame}>Jugar</button>
        )}
      </div>
    </div>
    </div>
  );
}

export default App;
