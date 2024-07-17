import { Link, router } from "expo-router"
import { Text,View,StyleSheet,Image,TouchableOpacity, TextInput } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import {useState} from "react";
export default function SignUpPage() {
    return (
        <SafeAreaView style={{flex: 1, justifyContent:"flex-start"}}>
            <View style={styles.titleContainer}>
                <TouchableOpacity style={styles.backContainer} onPress={router.back}>
                    <Image style={styles.backIcon} source={require('../assets/images/backIcon.png')}/>
                    <Text style={styles.title}>Sign Up</Text>
                </TouchableOpacity>
                <Text style={styles.subTitle}>Create your account</Text>
            </View>
            <View style={styles.inputContainer} >
                <TextInput style={styles.input} placeholder="Enter your email"/>
                <TextInput style={styles.input} placeholder="Enter your phone number"/>
                <TextInput style={styles.input} placeholder="Enter your password"/>
                <TextInput style={styles.input} placeholder="Confirm your password"/>
                <TouchableOpacity style={styles.button} >
                    <Text style={styles.buttonText} >Sign Up</Text>
                </TouchableOpacity>
                <Text style={styles.text} >If you have an account ? <Link style={styles.textLink} href={'/'}>Sign In</Link> </Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        fontFamily: 'Inria-Sans-Regular',
        marginTop: 80,
    },
    textLink: {
        color: '#3A41EE'
    },
    titleContainer: {
        width: 430,
        height: 129,
        backgroundColor: '#FA6440',
        justifyContent: 'space-around',
        alignItems: 'stretch',
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 32,
        color: "#FFFFFF",
        fontFamily: 'Inria-Sans-Bold',
    },
    subTitle: {
        color: "#FFFFFF",
        fontSize: 19,
        fontFamily: 'Inria-Sans-Regular',
    },
    backContainer: {
        flexDirection: 'row',
    },
    backIcon: {
        width: 40,
        height: 40,
        tintColor: '#FFFFFF',
    },
    inputContainer: {
        marginTop: 60,
        alignItems: 'center',
    },
    input: {
        fontSize: 18,
        fontFamily: 'Inter-Regular',
        borderWidth: 1,
        width: 330,
        height: 40,
        borderRadius: 10,
        marginBottom: 20,
        paddingHorizontal: 16,
        backgroundColor: '#FFFFFF',
    },
    button: {
        backgroundColor: '#FA6440',
        width: 330,
        height: 43,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    buttonText: {
        fontSize: 18,
        color: '#FFFFFF',
        fontFamily: 'Inria-Sans-Bold',
    },
})