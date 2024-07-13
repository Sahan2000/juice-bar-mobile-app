import { Link, router } from "expo-router";
import { Text, View, Image, StyleSheet,TextInput,TouchableOpacity } from "react-native";

export default function Index() {

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subTitle}>If you have account login first and Don’t you have account create an account.</Text>
        <TextInput style={styles.input} placeholder="Enter your email"/>
        <TextInput style={styles.input} placeholder="Enter your password" />
        <TouchableOpacity onPress={()=>{router.push('/welcomePage')}} style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.googleButton}>
          <Image source={require('../assets/images/google.png')} style={styles.image}/>
          <Text style={styles.googleButtonText}>Continue with google</Text>
        </TouchableOpacity>
        <Text style={styles.text}>Don’t you have an account ? <Link style={styles.textLink} href={'/signUp'}>Sign Up</Link></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
    fontSize: 15,
    fontFamily: "Inria-Sans-Regular",
    opacity: 0.6,
    color: '#000',
    marginBottom: 24
  },
  input: {
    width: 340,
    height: 60,
    marginTop: 26,
    paddingHorizontal: 16,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 0,
    fontFamily: "Inria-Sans-Regular",
    fontSize: 21
  },
  button: {
    backgroundColor: '#FA6440',
    marginTop: 40,
    width: 340,
    height: 53.,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: '#fff',
    fontSize: 25,
    fontFamily: "Inria-Sans-Bold",
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 20
  },
  googleButton: {
    borderWidth: 1,
    marginTop: 30,
    width: 340,
    height: 55,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 16,
  },
  googleButtonText: {
    fontSize: 18,
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
