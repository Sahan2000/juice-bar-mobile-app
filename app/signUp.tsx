import { Link, router } from "expo-router"
import { Text,View,StyleSheet,Image,TouchableOpacity, TextInput } from "react-native"
export default function SignUpPage() {
    return (
        <View>
            <View style={styles.titleContainer}>
                <TouchableOpacity onPress={router.back} style={styles.backContainer}>
                    <Image style={styles.backIcon} source={require('../assets/images/backIcon.png')}/>
                    <Text style={styles.title}>Sign Up</Text>
                </TouchableOpacity>
                <Text style={styles.subTitle}>Create your account</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="Enter your email"/>
                <TextInput style={styles.input} placeholder="Enter your phone number"/>
                <TextInput style={styles.input} placeholder="Enter your password"/>
                <TextInput style={styles.input} placeholder="Confirm your password"/>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
                <Text style={styles.text}>If you have an account ? <Link style={styles.textLink} href={'/'}>Sign In</Link> </Text>
            </View>
        </View>
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
        height: 169,
        backgroundColor: '#FA6440',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 32,
        color: "#FFFFFF",
        fontFamily: 'Inria-Sans-Bold',
        marginBottom: 16
    },
    subTitle: {
        color: "#FFFFFF",
        fontSize: 19,
        fontFamily: 'Inria-Sans-Regular',
        marginBottom: 16,
        left: 10
    },
    backContainer: {
        flex: 1,
        flexDirection: 'row',
        top: 70,
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
        fontSize: 21,
        fontFamily: 'Inter-Regular',
        borderWidth: 1,
        width: 340,
        height: 60,
        borderRadius: 20,
        marginBottom: 20,
        paddingHorizontal: 16,
    },
    button: {
        backgroundColor: '#FA6440',
        width: 340,
        height: 53,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    buttonText: {
        fontSize: 25,
        color: '#FFFFFF',
        fontFamily: 'Inria-Sans-Bold',
    },
})