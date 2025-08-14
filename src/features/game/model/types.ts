export type GameStatus = 'idle' | 'playing' | 'won' | 'lost';

export interface Category {
	id: string;
	name: string;
}

export interface GameState {
	chosenCategory: string | null;
	word: string;
	guessedLetters: string[];
	mistakes: number;
	maxMistakes: number;
	gameStatus: GameStatus;
	categories: Category[];
	loading: boolean;
	error: string | null;
}
