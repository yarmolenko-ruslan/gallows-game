import { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../../shared/lib/hooks';
import { guessLetter } from '../model/gameSlice';

export const useKeyboardControl = () => {
	const dispatch = useAppDispatch();
	const { gameStatus } = useAppSelector(state => state.game);

	const focusRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		focusRef.current?.focus();
	}, []);

	const handleKeydown = (event: React.KeyboardEvent): void => {
		const letter = event.key.toLowerCase();

		if (gameStatus === 'playing' && /^[а-яё]$/.test(letter)) {
			dispatch(guessLetter(letter));
		}
	};

	return { focusRef, handleKeydown };
};
