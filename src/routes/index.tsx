import { NavigationContainer } from '@react-navigation/native';
import PublicRoutes from './publicRoutes';
import PrivateRoutes from './privateRoutes';
import { useAuth } from '../hooks/auth';


const Routes = () => {
  const {user} = useAuth()
  return (
    <NavigationContainer>
      {user?.accessToken ? <PrivateRoutes /> : <PublicRoutes />}
    </NavigationContainer>
  );
};

export default Routes;