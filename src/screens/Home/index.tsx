import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text, View } from "react-native";
import { useAuth } from "../../hooks/auth";
import Products from "../../components/products";
const Home = () => {
  const {goBack}=useNavigation()
  const {logout} = useAuth()
  return ( 
    <View style={styles.container}> 
      <Products/>
      <Button title="LogOut" color={"#252525"} onPress={() => logout()} />
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
 
export default Home;