import styles from './game.module.scss';

import Header from '../../widgets/header/Header.tsx';
import Picture from '../../features/picture/Picture.tsx';
import Word from '../../features/word/Word.tsx';
import Alphabet from '../../features/alphabet/Alphabet.tsx';
import Footer from '../../widgets/footer/Footer.tsx';
// import { useRef } from 'react';

function Game() {
	// const focusKeyboardRef = useRef<HTMLDivElement | null>(null);

	// focusKeyboardRef.current?.focus();

	// const handleKeydown = (event: React.KeyboardEvent): void => {
	// 	const letter = event.key.toLowerCase();

	// 	if (isWinner || gameOver) return;

	// 	if (letter >= 'а' && letter <= 'я') {
	// 		handleGuess(letter);
	// 	}
	// };

	return (
		<section
			className={styles.game}
			tabIndex={0}
			// ref={focusKeyboardRef}
			// onKeyDown={handleKeydown}
		>
			<div className={styles.wrapper}>
				<Header />
				<main>
					<Picture />
					<Word />
					<Alphabet />
				</main>
				<Footer />
			</div>
		</section>
	);
}

export default Game;
