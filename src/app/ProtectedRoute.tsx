import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../shared/lib/hooks';

interface ProtectedRouteProps {
	children: React.ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
	const chosenCategory = useAppSelector(state => state.game.chosenCategory);

	if (!chosenCategory) {
		return <Navigate to='/' replace />;
	}

	return <>{children}</>;
};
