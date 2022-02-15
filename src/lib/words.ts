import { WORDS } from '../constants/wordlist'
import { VALIDGUESSES } from '../constants/validGuesses'
import seedrandom from 'seedrandom';

export const isWordInWordList = (word: string) => {
  return (
    WORDS.some((w) => w[0] === word.toLowerCase()) ||
    VALIDGUESSES.some((w) => w === word.toLowerCase())
  )
}

export const isWinningWord = (word: string) => {
  return solution[0] === word
}

export const getWordOfDay = () => {
  const today = new Date();
  const rng = seedrandom("" + today.getFullYear() + today.getMonth() + today.getDate());
  const index = Math.floor(rng() * WORDS.length);
  return {
    solution: WORDS[index],
    solutionIndex: index,
  }
}

export const { solution, solutionIndex } = getWordOfDay()
