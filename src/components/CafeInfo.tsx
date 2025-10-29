import css from '../css/CafeInfo.module.css';
import { useState } from 'react';

export default function CafeInfo() {
  const [votes, setVotes] = useState<number | null>(null);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Sip Happens Café</h1>
      <p className={css.description}>
        Please rate our service by selecting one of the options below.
      </p>
    </div>

  );
}
