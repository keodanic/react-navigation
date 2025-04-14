import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator, NativeStackNavigationProp} from "@react-navigation/native-stack"
import Home from "../screens/Home";
import Login from "../screens/Login";

type CreateRoutesProps={
  Login:undefined,
  Home:undefined
}

const {Navigator, Screen}= createNativeStackNavigator<CreateRoutesProps>()

export type CreateRoutes=NativeStackNavigationProp<CreateRoutesProps>;

const Routes = () => {
  return ( 
    <NavigationContainer>
      <Navigator
      screenOptions={{
        headerShown: false
      }}>
        <Screen name="Login" component={Login} />
        <Screen name="Home" component={Home} />
      </Navigator>
    </NavigationContainer>
   );
}
 
export default Routes;