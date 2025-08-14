import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './start.module.scss';
import { Context } from '../../shared/constants';

const URL = 'https://66c1719af83fffcb587951a3.mockapi.io/gallows';

const Start = () => {
	const {
		category,
		setCategory,
		setIsLoading,
		isLoading,
		data,
		setData,
		setCategoryList,
		categoryList,
	} = useContext(Context);

	useEffect(() => {
		setIsLoading(true);
		fetch(URL)
			.then(res => res.json())
			.then(json => setData(json))
			.catch(console.error)
			.finally(() => setIsLoading(false));
	}, []);

	useEffect(() => {
		const categoryListApi = data.map(item => item.category);
		setCategoryList(categoryListApi);
	}, [data, setCategoryList]);

	const btnStatus = {
		isActive: `${styles.item} ${styles.item_active}`,
		isDisButton: `${styles.link} ${styles.link_disabled}`,
	};

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

				{isLoading ? (
					<p className={styles.loading}>Загрузка...</p>
				) : (
					<ul className={styles.list}>
						{categoryList.map((_category, index) => (
							<li
								key={index}
								onClick={e => {
									const target = e.target as HTMLElement;
									setCategory(target.textContent?.toLowerCase() || '');
								}}
							>
								<button
									type='button'
									className={
										_category == category ? btnStatus.isActive : styles.item
									}
								>
									{_category.toUpperCase()}
								</button>
							</li>
						))}
					</ul>
				)}

				<Link
					to={category && 'game'}
					className={category ? styles.link : btnStatus.isDisButton}
				>
					Начать игру
				</Link>
			</div>
		</section>
	);
};

export default Start;
