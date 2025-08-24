import styles from './word.module.scss';
import { useAppSelector } from '@shared/lib/hooks';

function Word() {
	const { guessedLetters, mistakes, maxMistakes, gameStatus, word } =
		useAppSelector(state => state.game);

	const renderWord = () => {
		return word
			.split('')
			.map(letter =>
				letter === ' ' || guessedLetters.includes(letter.toLowerCase())
					? letter
					: '_ '
			)
			.join(' ');
	};

	const remained = maxMistakes - mistakes;

	return (
		<section className={styles.word}>
			{gameStatus === 'playing' ? (
				<div>
					<h2 className={styles.title}>{renderWord()}</h2>
				</div>
			) : gameStatus === 'lost' ? (
				<h2 className={styles.title}>Вы проиграли! Слово было: "{word}"</h2>
			) : (
				<h2 className={styles.title}>Поздравляем, вы выиграли!</h2>
			)}

			<div className={styles.wrapper}>
				<p className={styles.attempts}>
					Осталось попыток:{' '}
					{remained <= 3 ? (
						<span className={styles.number}>{remained}</span>
					) : (
						remained
					)}
				</p>
			</div>
		</section>
	);
}

export default Word;
