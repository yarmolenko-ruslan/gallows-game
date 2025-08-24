import { ALPHABET } from '@shared/config/constants';
import { useAppDispatch, useAppSelector } from '@shared/lib/hooks';
import { guessLetter } from '@features/game/model/gameSlice';
import styles from './alphabet.module.scss';

const Alphabet = () => {
	const dispatch = useAppDispatch();

	const { guessedLetters, mistakes, maxMistakes, gameStatus, word } =
		useAppSelector(state => state.game);

	const remained = maxMistakes - mistakes;

	const btnStatus = {
		isDisButton: `${styles.button_inactive} ${styles.button}`,
		isActButton: `${styles.button_active} ${styles.button}`,
	};

	const isActiveButton = (letter: string) => {
		if (!word) return btnStatus.isDisButton;

		if (guessedLetters.includes(letter.toLowerCase())) {
			return word.toLowerCase().includes(letter.toLowerCase())
				? btnStatus.isActButton
				: btnStatus.isDisButton;
		}

		return styles.button;
	};

	const renderButton = (letter: string, index: number) => {
		return (
			<button
				key={index}
				className={isActiveButton(letter)}
				disabled={remained === 0 || gameStatus !== 'playing'}
				onClick={() => dispatch(guessLetter(letter))}
			>
				{letter}
			</button>
		);
	};

	return (
		<section className={styles.alphabet}>
			{ALPHABET.split('').map(renderButton)}
		</section>
	);
};

export default Alphabet;
