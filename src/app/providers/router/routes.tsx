import { ProtectedRoute } from '@/app/ProtectedRoute';
import Game from '@/pages/game/GamePage';
import Start from '@/pages/start/StartPage';
import type { RouteObject } from 'react-router-dom';

export const routes: RouteObject[] = [
	{
		path: '/',
		element: <Start />,
	},
	{
		path: '/game',
		element: (
			<ProtectedRoute>
				<Game />
			</ProtectedRoute>
		),
	},
];
