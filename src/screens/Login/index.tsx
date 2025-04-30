import { Button, StyleSheet, Text, View,TextInput } from "react-native";
import {NavigationProp, useNavigation} from "@react-navigation/native"
import { useState } from "react";
import { useAuth } from "../../hooks/auth";

const Login = () => {
  const {login} = useAuth()
  const {navigate}=useNavigation<NavigationProp<any>>()
  const [user,setUser]= useState("")
  const [password,setPassword]= useState("")
  return ( 
    <View style={styles.container}>
      <View style={{gap:20}}>
      <View>
        <Text>Usuario:</Text>
        <TextInput
        style={styles.textInput}
        onChangeText={setUser}
        value={user}
        placeholder={'Digite seu email aqui'}/>
      </View>

      <View>
        <Text>Senha:</Text>
        <TextInput
        style={styles.textInput}
        onChangeText={setPassword}
        value={password}
        placeholder={'Digite sua senha aqui'}/>
      </View>
      </View>
      
     <Button title="Entrar" color={"#d9d9d9"} onPress={() => login(user,password)}/> 
    </View>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b9b9b9',
    alignItems: 'center',
    justifyContent: 'center',
    gap:20
  },
  textInput: {
    padding: 16,
    borderColor: 'black',
    borderWidth: 1,
  },
});


 
export default Login;