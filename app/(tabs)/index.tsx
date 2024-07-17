import { StyleSheet, Text, TextInput, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Dashboard() {
    const offerItems = [
        
    ];
    return (
        <SafeAreaView>
            <View>
                <View>
                    <Image source={require('@/assets/images/Juice1.png')}/>
                    <View>

                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    

});