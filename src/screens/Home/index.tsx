import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text, View } from "react-native";

const Home = () => {
  const {goBack}=useNavigation()
  return ( 
    <View style={styles.container}> 
      <Text>
        Home
      </Text>
      <Button title="Go Back" onPress={() => goBack()} />
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