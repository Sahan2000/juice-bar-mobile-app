import { StyleSheet, Text, TextInput, View, Image } from "react-native";

export default function Dashboard() {
    return (
        <View style={style.container}>
            
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchBar: {
        borderWidth: 1,
        width: 315,
        height: 55,
        borderRadius: 25,
        paddingHorizontal: 20,
        fontSize: 17,
        fontFamily: "Inter-Regular"
    }

});