import { useState, type JSX } from 'react';

import { Context } from '../../../shared/constants';
import type { ContextProviderProps, IWord } from '../../../shared/interface';

export const ContextProvider = ({
	children,
}: ContextProviderProps): JSX.Element => {
	const [data, setData] = useState<IWord[]>([]);
	const [categoryList, setCategoryList] = useState<string[]>([]);
	const [category, setCategory] = useState<string>('');
	const [word, setWord] = useState<string>('');
	const [guesses, setGuesses] = useState<string[]>([]);
	const [wrongGuesses, setWrongGuesses] = useState<number>(0);
	const [incorrectLetters, setIncorrectLetters] = useState<string[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const maxWrongGuesses = 7;
	const gameOver = wrongGuesses >= maxWrongGuesses;
	const isWinner = word.split('').every(letter => guesses.includes(letter));

	return (
		<Context.Provider
			value={{
				data,
				setData,
				categoryList,
				setCategoryList,
				category,
				setCategory,
				word,
				setWord,
				guesses,
				setGuesses,
				wrongGuesses,
				setWrongGuesses,
				incorrectLetters,
				setIncorrectLetters,
				maxWrongGuesses,
				gameOver,
				isWinner,
				isLoading,
				setIsLoading,
			}}
		>
			{children}
		</Context.Provider>
	);
};


[
	{
		"id": "0",
		"category": "Фрукты",
		"variants": ["Банан", "Апельсин", "Яблоко", "Груша", "Персик"],
	},
	{
		"id": "1",
		"category": "Профессии",
		"variants": ["Повар", "Программист", "Бухгалтер", "Музыкант", "Строитель"],
	},
	{
		"id": "2",
		"category": "Цвета",
		"variants": ["Белый", "Синий", "Красный", "Черный", "Зеленый"],
	},
	{
		"id": "3",
		"category": "Города",
		"variants": ["Красноярск", "Москва", "Краснодар", "Сочи", "Новосибирск"],
	},
	{
		"id": "4",
		"category": "Страны",
		"variants": ["Россия", "Америка", "Канада", "Франция", "Германия"],
	},
	{
		"id": "5",
		"category": "Животные",
		"variants": ["Собака", "Кошка", "Слон", "Лошадь", "Лев"],
	},
]