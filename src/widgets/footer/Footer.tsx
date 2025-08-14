import { Link } from 'react-router-dom';
import styles from './footer.module.scss';
import type { IFooterProp } from '../../shared/interface';

export default function Footer({ resetStateGame }: IFooterProp) {
	return (
		<footer className={styles.footer}>
			<Link to='/' onClick={resetStateGame} className={styles.button}>
				Начать заново
			</Link>
		</footer>
	);
}
