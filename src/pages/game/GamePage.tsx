import styles from './game.module.scss';
import Header from '../../widgets/header/Header.tsx';
import Picture from '../../features/picture/Picture.tsx';
import Word from '../../features/word/Word.tsx';
import Alphabet from '../../features/alphabet/Alphabet.tsx';
import Footer from '../../widgets/footer/Footer.tsx';
import { useKeyboardControl } from '../../features/game/lib/useKeyboardControl.ts';

function Game() {
	const { focusRef, handleKeydown } = useKeyboardControl();

	return (
		<section
			className={styles.game}
			tabIndex={0}
			ref={focusRef}
			onKeyDown={handleKeydown}
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
