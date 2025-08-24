import { useRoutes } from 'react-router-dom';
import { routes } from './routes';

export const AppRouter = () => {
	const element = useRoutes(routes);
	return element;
};
