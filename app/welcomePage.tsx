import { router } from "expo-router";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
export default function WelcomePage() {
    return (
        <View style={style.container}>
            <Image style={style.image} source={require('../assets/images/welcomePageImg.png')}/>
            <Text style={style.title}>Juice World</Text>
            <Text style= {style.subtitle}>Welcome to Juice World</Text>
            <Text style={style.text}>Fresh, organic juices and smoothies. Customize your drink and enjoy wellness in every sip!</Text>
            <TouchableOpacity onPress={() => {router.push('/(tabs)/(home)')}} style={style.button}>
                <Text style={style.buttonText}>Get Started</Text>
            </TouchableOpacity>
        </View>
    );
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    image: {
        width: 235,
        height: 335,
    },
    title: {
        fontSize: 46,
        fontFamily: "Inknut-Antiqua-semi-bold",
    },
    subtitle: {
        fontSize: 25,
        fontFamily: 'Inter-Bold',
        width: 290,
        textAlign: 'center',
        marginBottom: 10
    },
    text: {
        fontSize: 15,
        fontFamily: 'Inria-Sans-Regular',
        width: 290,
        textAlign: 'center',
        marginBottom: 80
    },
    button: {
        width: 235,
        height: 53,
        backgroundColor: '#FA6440',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 25,
        fontFamily: 'Inria-Sans-Bold',
    }
});