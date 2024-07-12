import { Text,View,StyleSheet } from "react-native"
export default function SignUpPage() {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}></View>
            <View>
                <Text>Sign Up</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        
    },
    titleContainer: {
        width: 430,
        height: 249,
        backgroundColor: '#FA6440',

    }
})