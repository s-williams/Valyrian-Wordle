import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        This is an implementation of Wordle in Valyrian -{' '}
        <a
          href="https://github.com/s-williams/valyrian-wordle"
          className="underline font-bold"
          target="_blank"
          rel="noopener noreferrer"
        >
          check out the code here
        </a>{' '}
        and{' '}
        <a
          href="https://wordle.latindictionary.io/"
          className="underline font-bold"
          target="_blank"
          rel="noopener noreferrer"
        >
          check out the original this game was forked from here.
        </a>
        {' '}Also{' '}
        <a
          href="https://www.powerlanguage.co.uk/wordle/"
          className="underline font-bold"
          target="_blank"
          rel="noopener noreferrer"
        >
          be sure to play the original English version here
        </a>
        .
      </p>
      <h4 className="text-lg leading-6 font-medium text-gray-900 dark:text-white mt-6">
        Feedback
      </h4>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        If you find any issues or problems when playing this game, please open an issue on{' '}
        <a
          href="https://github.com/s-williams/valyrian-wordle"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold  underline"
        >
          GitHub
        </a>.
      </p>
    </BaseModal>
  )
}
