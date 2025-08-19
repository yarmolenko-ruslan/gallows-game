import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './app.scss';

import Start from '../pages/start/Start';
import Game from '../pages/game/Game';

const App = () => {
	return (
		<StrictMode>
			<Provider store={store}>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Start />} />
						<Route path='/game' element={<Game />} />
					</Routes>
				</BrowserRouter>
			</Provider>
		</StrictMode>
	);
};

export default App;
