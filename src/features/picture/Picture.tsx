import styles from './picture.module.scss';

import { useAppSelector } from '@shared/lib/hooks';
import { images } from './constants';

export const Picture = () => {
	const { mistakes } = useAppSelector(state => state.game);

	return (
		<section className={styles.picture}>
			<img
				src={images[mistakes]}
				className={styles.img}
				alt='Виселица'
				title='Виселица'
			/>
		</section>
	);
};
