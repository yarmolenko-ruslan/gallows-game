import React from 'react';
import { createRoot } from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import './app.scss';
import Start from '../pages/start/Start';
import Game from '../pages/game/Game';
import { ContextProvider } from '../features/game/model/Context';
import { Provider } from 'react-redux';
import { store } from './store';

const router = createHashRouter([
	{
		path: '/',
		element: <Start />,
	},
	{
		path: '/game',
		element: <Game />,
	},
]);

createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<ContextProvider>
				<RouterProvider router={router} />
			</ContextProvider>
		</Provider>
	</React.StrictMode>
);
