import { useContext } from 'react';

import styles from './picture.module.scss';
import { Context } from '../../shared/constants';

function Picture() {
	const { wrongGuesses, maxWrongGuesses } = useContext(Context);

	const remained = maxWrongGuesses - wrongGuesses;

	return (
		<section className={styles.picture}>
			<img
				className={styles.img}
				src={`/images/${remained}.png`}
				alt='Виселица'
				title='Виселица'
			/>
		</section>
	);
}

export default Picture;
