import { WORDS } from '../constants/wordlist'
import { VALIDGUESSES } from '../constants/validGuesses'

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
  // January 1, 2022 Game Epoch
  const index = 0;
  console.log(WORDS[index]);

  return {
    solution: WORDS[index],
    solutionIndex: index,
  }
}

export const { solution, solutionIndex } = getWordOfDay()
