import css from '../css/App.module.css'
import CafeInfo from './CafeInfo'
import VoteOptions from './VoteOptions.tsx'
import VoteStats from './VoteStats.tsx'
import Notification from './Notification.tsx'
import type { Votes, VoteType } from '../types/votes.ts'
import { useState } from 'react'


export default function App() {
  const [votes, setVotes] = useState<Votes>({ good: 0, neutral: 0, bad: 0 });
  
  const handleVote = (type: VoteType): void => {
    setVotes(votes => ({
      ...votes,
      [type]: votes[type] + 1,
    }))
  };
  
  const resetVotes = (): void => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    })
  };

  const totalVotes: number = votes.good + votes.neutral + votes.bad;

  const positiveRate: number = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0;

  return (
    <>
      <div className={css.app}>
        <CafeInfo />
        <VoteOptions 
          onVotes={handleVote}
          onReset={resetVotes}
          canReset={totalVotes > 0}
        />
        {totalVotes > 0
        ? <VoteStats 
            votes={votes} 
            totalVotes={totalVotes} 
            positiveRate={positiveRate}/>
        : <Notification />
        }
      </div>
    </>
  )
}

