import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500">
        Guess the WORDLE in 6 tries. After each guess, the color of the tiles
        will change to show how close your guess was to the word.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="T" status="correct" />
        <Cell value="O" />
        <Cell value="L" />
        <Cell value="Y" />
        <Cell value="S" />
      </div>
      <p className="text-sm text-gray-500">
        The letter T is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="R" />
        <Cell value="I" />
        <Cell value="Z" />
        <Cell value="U" status="present" />
        <Cell value="N" />
      </div>
      <p className="text-sm text-gray-500">
        The letter U is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="A" />
        <Cell value="B" status="absent" />
        <Cell value="R" />
        <Cell value="A" />
        <Cell value="R" />
      </div>
      <p className="text-sm text-gray-500">
        The letter B is not in the word in any spot.
      </p>
    </BaseModal>
  )
}
