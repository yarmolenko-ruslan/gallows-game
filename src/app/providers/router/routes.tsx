import type { RouteObject } from 'react-router-dom';

import { ProtectedRoute } from '@/app/ProtectedRoute';
import { Game, Start } from '@/pages';

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
