import { Entypo } from "@expo/vector-icons";
import { StyleSheet, View,TextInput, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Header() {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
            <View style={styles.container}>
                <View style={styles.actionRow}>
                    <TextInput style={styles.searchInput} placeholder="Search Items"/>
                    <TouchableOpacity style={styles.cartButton}>
                        <Image style={styles.cartIcon} source={require('../assets/images/cart.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: 130
    },
    actionRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        paddingBottom: 16
    },
    searchInput: {
        borderWidth: 1, 
        width: 250,
        height: 50,
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 17,
        fontFamily: 'Inter-Regular',
    },
    cartButton: {
        padding: 10,
    },
    cartIcon: {
       width: 45,
       height: 45,
    },
})