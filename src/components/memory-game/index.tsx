import { useState, useEffect } from 'react';
import { FaGamepad, FaTrophy, FaRedo } from 'react-icons/fa';
import { skeleton } from '../../utils';

interface Card {
  id: number;
  symbol: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const MemoryGame = ({ loading }: { loading: boolean }) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [matches, setMatches] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('easy');

  const symbols = ['🎯', '🚀', '💎', '🎨', '🔥', '⭐', '🎪', '🎮', '🏆', '💡', '🎭', '🎸'];
  
  const getDifficultySettings = () => {
    switch (difficulty) {
      case 'easy': return { pairs: 6, gridCols: 'grid-cols-4' };
      case 'medium': return { pairs: 8, gridCols: 'grid-cols-4' };
      case 'hard': return { pairs: 12, gridCols: 'grid-cols-6' };
    }
  };

  const initializeGame = () => {
    const { pairs } = getDifficultySettings();
    const gameSymbols = symbols.slice(0, pairs);
    const cardPairs = [...gameSymbols, ...gameSymbols];
    
    const shuffledCards = cardPairs
      .sort(() => Math.random() - 0.5)
      .map((symbol, index) => ({
        id: index,
        symbol,
        isFlipped: false,
        isMatched: false,
      }));

    setCards(shuffledCards);
    setFlippedCards([]);
    setMoves(0);
    setMatches(0);
    setGameWon(false);
  };

  useEffect(() => {
    initializeGame();
  }, [difficulty]);

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [first, second] = flippedCards;
      const firstCard = cards.find(card => card.id === first);
      const secondCard = cards.find(card => card.id === second);

      if (firstCard?.symbol === secondCard?.symbol) {
        setCards(prev => prev.map(card => 
          card.id === first || card.id === second 
            ? { ...card, isMatched: true }
            : card
        ));
        setMatches(prev => prev + 1);
        setFlippedCards([]);
      } else {
        setTimeout(() => {
          setCards(prev => prev.map(card => 
            card.id === first || card.id === second 
              ? { ...card, isFlipped: false }
              : card
          ));
          setFlippedCards([]);
        }, 1000);
      }
      setMoves(prev => prev + 1);
    }
  }, [flippedCards, cards]);

  useEffect(() => {
    const { pairs } = getDifficultySettings();
    if (matches === pairs) {
      setGameWon(true);
    }
  }, [matches, difficulty]);

  const handleCardClick = (cardId: number) => {
    if (flippedCards.length === 2) return;
    
    const card = cards.find(c => c.id === cardId);
    if (card?.isFlipped || card?.isMatched) return;

    setCards(prev => prev.map(card => 
      card.id === cardId ? { ...card, isFlipped: true } : card
    ));
    setFlippedCards(prev => [...prev, cardId]);
  };

  const renderGame = () => {
    const { gridCols } = getDifficultySettings();
    
    return (
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-4">
            <select 
              value={difficulty} 
              onChange={(e) => setDifficulty(e.target.value as any)}
              className="select select-bordered select-sm"
            >
              <option value="easy">Easy (6 pairs)</option>
              <option value="medium">Medium (8 pairs)</option>
              <option value="hard">Hard (12 pairs)</option>
            </select>
            <button 
              onClick={initializeGame}
              className="btn btn-sm btn-outline"
            >
              <FaRedo className="w-4 h-4" />
              Reset
            </button>
          </div>
          
          <div className="flex items-center space-x-4 text-sm">
            <div className="badge badge-outline">Moves: {moves}</div>
            <div className="badge badge-outline">Matches: {matches}</div>
          </div>
        </div>

        {gameWon && (
          <div className="alert alert-success">
            <FaTrophy className="w-5 h-5" />
            <span>Congratulations! You won in {moves} moves!</span>
          </div>
        )}

        <div className={`grid ${gridCols} gap-3 max-w-2xl mx-auto`}>
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={() => handleCardClick(card.id)}
              className={`
                aspect-square flex items-center justify-center text-2xl font-bold
                rounded-lg cursor-pointer transition-all duration-300 transform
                ${card.isFlipped || card.isMatched 
                  ? 'bg-primary text-primary-content scale-105' 
                  : 'bg-base-300 hover:bg-base-200 hover:scale-105'
                }
                ${card.isMatched ? 'opacity-75' : ''}
              `}
            >
              {card.isFlipped || card.isMatched ? card.symbol : '?'}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderSkeleton = () => {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          {skeleton({ widthCls: 'w-32', heightCls: 'h-8' })}
          {skeleton({ widthCls: 'w-24', heightCls: 'h-8' })}
        </div>
        <div className="grid grid-cols-4 gap-3 max-w-2xl mx-auto">
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="aspect-square">
              {skeleton({ widthCls: 'w-full', heightCls: 'h-full', className: 'rounded-lg' })}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="col-span-1 lg:col-span-2">
      <div className="card bg-base-200 shadow-xl border border-base-300">
        <div className="card-body p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div className="flex items-center space-x-3">
              {loading ? (
                skeleton({
                  widthCls: 'w-12',
                  heightCls: 'h-12',
                  className: 'rounded-xl',
                })
              ) : (
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl">
                  <FaGamepad className="text-2xl" />
                </div>
              )}
              <div className="min-w-0 flex-1">
                <h3 className="text-base sm:text-lg font-bold text-base-content truncate">
                  {loading
                    ? skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
                    : 'Memory Game'}
                </h3>
                <div className="text-base-content/60 text-xs sm:text-sm mt-1 truncate">
                  {loading
                    ? skeleton({ widthCls: 'w-40', heightCls: 'h-4' })
                    : 'Test your memory skills!'}
                </div>
              </div>
            </div>
          </div>
          {loading ? renderSkeleton() : renderGame()}
        </div>
      </div>
    </div>
  );
};

export default MemoryGame;
