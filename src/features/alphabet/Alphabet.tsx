import { useContext } from 'react';
import styles from './alphabet.module.scss';
import { Context } from '../../shared/constants';
import type { IAlphaProp } from '../../shared/interface';
import { alphaWord } from './constants';

function Alphabet({ handleGuess }: IAlphaProp) {
	const {
		category,
		guesses,
		wrongGuesses,
		incorrectLetters,
		isWinner,
		gameOver,
		maxWrongGuesses,
	} = useContext(Context);
	const remained = maxWrongGuesses - wrongGuesses;

	const btnStatus = {
		isDisButton: `${styles.button_inactive} ${styles.button}`,
		isActButton: `${styles.button_active} ${styles.button}`,
	};

	const isActiveButton = (word: string) => {
		return incorrectLetters.includes(word) || !category
			? btnStatus.isDisButton
			: guesses.includes(word)
			? btnStatus.isActButton
			: styles.button;
	};

	const renderButton = (word: string, index: number) => {
		return (
			<button
				className={isActiveButton(word)}
				key={index}
				disabled={remained === 0 || gameOver || isWinner}
			>
				{word}
			</button>
		);
	};

	return (
		<section
			className={styles.alphabet}
			onClick={e => {
				const target = e.target as HTMLElement;
				handleGuess(target.textContent || '');
			}}
		>
			{alphaWord.map(renderButton)}
		</section>
	);
}

export default Alphabet;
