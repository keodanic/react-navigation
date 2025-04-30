import { useAuth } from "../../hooks/auth";
import { Button, StyleSheet, Text, View } from "react-native";

const Products = () => {
  const {getprodutos} = useAuth()

  
  return ( 
    <View style={{height:120,width:130}}>
      <Text>
      {JSON.stringify(getprodutos(),null,3)}
      </Text>
    </View>

   );
}
 
export default Products;