import React, { useEffect, useState } from 'react';

export function Affirmation() {
  const [text, setText] = useState('Loading affirmation...');

  useEffect(() => {
    fetch('https://www.affirmations.dev/')
      .then((response) => {
        if (!response.ok) throw new Error('Failed to load affirmation');
        return response.json();
      })
      .then((data) => setText(data.affirmation))
      .catch(() => setText('Could not load affirmation.'));
  }, []);

  return <span>{text}</span>;
}
