import css from './VoteOptions.module.css'
import type { VoteType } from '../../types/votes.ts'


interface VoteOptionsProps {
    onVotes: (type: VoteType) => void;
    onReset: () => void;
    canReset: boolean;
}

export default function VoteOptions({onVotes, onReset, canReset}: VoteOptionsProps) {
    return(
        <div className={css.container}>
            <button className={css.button} onClick={() => onVotes('good')}>Good</button>
            <button className={css.button} onClick={() => onVotes('neutral')}>Neutral</button>
            <button className={css.button} onClick={() => onVotes('bad')}>Bad</button>
            <button className={`${css.button} ${css.reset} ${!canReset ? css.disabled : ''}`} onClick={onReset} disabled={!canReset}>Reset</button>
        </div>
    );
}