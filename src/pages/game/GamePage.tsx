import { Footer, Header } from '@/widgets';
import { Alphabet, Picture, useKeyboardControl, Word } from '@/features';

import styles from './game.module.scss';

export function Game() {
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
