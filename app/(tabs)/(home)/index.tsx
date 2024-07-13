import { StyleSheet, Text, View } from "react-native";

export default function Dashboard() {
    return (
        <View style={style.container}>
            <Text style={style.text}>DashBoard</Text>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
    },
});