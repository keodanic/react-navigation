import { Button, StyleSheet, Text, View } from "react-native";
import {useNavigation} from "@react-navigation/native"
import { CreateRoutes } from "../../routes";

const Login = () => {
  const {navigate}=useNavigation<CreateRoutes>()
  return ( 
    <View style={styles.container}>
      <Text>
        Login
      </Text>
      <Button title="Entrar"
      onPress={()=> navigate("Home")}/>
    </View>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b9b9b9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


 
export default Login;