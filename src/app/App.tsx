import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter } from 'react-router-dom';
import './app.scss';
import { AppRouter } from './providers/router';

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
