import styles from './footer.module.scss';
import { useAppDispatch } from '../../shared/lib/hooks';
import { resetGame } from '../../features/game/model/gameSlice';
import { Link } from 'react-router-dom';

export default function Footer() {
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
