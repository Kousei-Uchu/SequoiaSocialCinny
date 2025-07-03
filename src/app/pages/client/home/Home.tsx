import React from 'react';
import { useNavToActivePathMapper } from '../../../hooks/useNavToActivePathMapper';

export function Home() {
  useNavToActivePathMapper('home');

  return <div />;
}
