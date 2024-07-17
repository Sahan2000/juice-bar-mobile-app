import { Link, router } from "expo-router";
import { Text, View, Image, StyleSheet,TextInput,TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {useState} from "react";
import {Entypo, AntDesign} from "@expo/vector-icons";

export default function Index() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const togglePassword = () => {
    setShowPassword(!showPassword);
};

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subTitle} >If you have account login first and Don’t you have account create an account.</Text>
        <TextInput style={styles.input}  value={email} autoCapitalize="none" onChangeText={(text) => setEmail(text)} placeholder="Enter your email"/>
        <View style={{flexDirection:"row", justifyContent: "center", alignItems: "center",}}>
          <TextInput style={styles.input}  value={password} onChangeText={(text) => setPassword(text)} secureTextEntry={showPassword} placeholder="Enter your password" />
          <TouchableOpacity style={{right: 40, top:15}} onPress={togglePassword}>
                          {showPassword ? (
                              <Entypo name="eye" size={24} color="#b2afaf" />
                          ) : (
                              <Entypo name="eye-with-line" size={24} color="#b2afaf" />
                          )}
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={()=>{router.push('/welcomePage')}}>
          <Text style={styles.buttonText} >Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.googleButton}>
          <Image style={styles.image} source={require('../assets/images/google.png')} />
          <Text style={styles.googleButtonText}>Continue with google</Text>
        </TouchableOpacity>
        <Text style={styles.text} >Don’t you have an account ? <Link style={styles.textLink} href={'/signUp'}>Sign Up</Link></Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 20,
    paddingLeft: 20
  },
  card: {
    width: 359,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 24,
    color: '#FA6440',
    fontFamily: "Inria-Sans-Bold",
  },
  subTitle: {
    width: 359,
    fontSize: 15,
    fontFamily: "Inria-Sans-Regular",
    opacity: 0.6,
    color: '#000',
    marginBottom: 24
  },
  input: {
    width: 330,
    height: 40,
    marginTop: 26,
    paddingHorizontal: 16,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 0,
    fontFamily: "Inria-Sans-Regular",
    fontSize: 18,
    backgroundColor: '#ffffff',
  },
  button: {
    backgroundColor: '#FA6440',
    marginTop: 40,
    width: 330,
    height: 43.,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: "Inria-Sans-Bold",
  },
  image: {
    width: 25,
    height: 25,
    marginRight: 20
  },
  googleButton: {
    borderWidth: 1,
    marginTop: 30,
    width: 330,
    height: 40,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 16,
  },
  googleButtonText: {
    fontSize: 16,
    fontFamily: "Inria-Sans-Regular",
    color: '#000',
    opacity: 0.6
  },
  text: {
    marginTop: 50,
    textAlign: 'center',
    fontSize: 15,
    fontFamily: "Inria-Sans-Regular",
  },
  textLink: {
    color: '#3A41EE',
  }
});
