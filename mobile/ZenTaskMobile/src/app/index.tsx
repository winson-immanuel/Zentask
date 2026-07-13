import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const response = await fetch("http://172.20.10.3:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert("Success", "Login Successful");
        console.log(data);
      } else {
        Alert.alert("Error", data.message);
      }
    } catch (err) {
      Alert.alert("Server Error");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ZenTask</Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={login}>
        <Text style={styles.btnText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    padding:20,
    backgroundColor:"#F4F6F9"
  },

  title:{
    fontSize:35,
    fontWeight:"bold",
    textAlign:"center",
    color:"#6C63FF",
    marginBottom:40
  },

  input:{
    borderWidth:1,
    borderColor:"#ddd",
    borderRadius:12,
    padding:15,
    marginBottom:15,
    backgroundColor:"#fff"
  },

  button:{
    backgroundColor:"#6C63FF",
    padding:16,
    borderRadius:12
  },

  btnText:{
    color:"#fff",
    textAlign:"center",
    fontSize:18,
    fontWeight:"bold"
  }
});