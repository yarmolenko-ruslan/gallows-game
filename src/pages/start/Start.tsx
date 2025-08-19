import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './start.module.scss';
import { useAppDispatch, useAppSelector } from '../../shared/lib/hooks';
import { fetchGameData } from '../../features/game/model/thunks';
import { gameSlice, startGame } from '../../features/game/model/gameSlice';

const Start = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const { categories, loading, error, chosenCategory } = useAppSelector(
		state => state.game
	);

	useEffect(() => {
		dispatch(fetchGameData());
	}, [dispatch]);

	const handleCategorySelect = (id: string) => {
		dispatch(gameSlice.actions.resetGame());
		dispatch(gameSlice.actions.startGame(id));
	};

	const handleStart = () => {
		if (chosenCategory) {
			dispatch(startGame(chosenCategory));
			navigate('/game');
		}
	};

	const btnStatus = {
		isActive: `${styles.item} ${styles.item_active}`,
		isDisButton: `${styles.link} ${styles.link_disabled}`,
	};

	if (error) return <p>Ошибка: {error}</p>;

	return (
		<section className={styles.start}>
			<div className={styles.wrapper}>
				<h2 className={styles.title}>Висели _ а!</h2>
				<h3 className={styles.subtitle}>Описание и правила игры</h3>
				<p className={styles.text}>
					Добро пожаловать в игру Виселица! Выбери категорию, из которой будет
					выбрано слово для игры. Тебе нужно постараться угадать, какая буква
					может входить в это слово. Если буква угадана, она будет вписана в
					нужном месте, если буквы такой в слове нет, то на картинке будет
					отображаться виселица. За каждый неправильный ответ, добавляется части
					тела к виселице. Если туловище нарисовано раньше, чем угадано слово,
					то ты проиграл. Если же было угадано слово, а туловище еще не
					дорисовано, то ты победил.
				</p>

				<h3 className={styles.subtitle}>Категории</h3>

				{loading ? (
					<p className={styles.loading}>Загрузка...</p>
				) : (
					<ul className={styles.list}>
						{categories.map(cat => (
							<li key={cat.id}>
								<button
									type='button'
									onClick={() => handleCategorySelect(cat.id)}
									className={
										chosenCategory === cat.id ? btnStatus.isActive : styles.item
									}
								>
									{cat.category}
								</button>
							</li>
						))}
					</ul>
				)}

				<button
					type='button'
					onClick={handleStart}
					className={chosenCategory ? styles.link : btnStatus.isDisButton}
					disabled={!chosenCategory}
				>
					Начать игру
				</button>
			</div>
		</section>
	);
};

export default Start;
