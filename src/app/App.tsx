import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './store';
import { AppRouter } from './providers';
import './app.scss';

const App = () => {
	return (
		<StrictMode>
			<Provider store={store}>
				<BrowserRouter>
					<AppRouter />
				</BrowserRouter>
			</Provider>
		</StrictMode>
	);
};

export default App;
