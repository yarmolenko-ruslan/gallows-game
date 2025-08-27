import { Link } from 'react-router-dom';

import { useAppDispatch } from '@/shared';
import { resetGame } from '@/features';

import styles from './footer.module.scss';

export function Footer() {
	const dispatch = useAppDispatch();

	const handleReset = () => {
		dispatch(resetGame());
	};

	return (
		<footer className={styles.footer}>
			<Link
				to='/'
				type='button'
				onClick={handleReset}
				className={styles.button}
			>
				Начать заново
			</Link>
		</footer>
	);
}
