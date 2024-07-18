import { StyleSheet, Text, TextInput, View, Image, FlatList, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Dashboard() {
    const discountOffers = [
        { name: 'Mango Juice', image: '@/assets/images/Juice1.png', discount: '30% off' },
        { name: 'Apple Juice', image: '@/assets/images/appleJuice.png', discount: '20% off' },
        { name: 'Grape Juice', image: '@/assets/images/avacadoJuice.jpg', discount: '25% off' },
    ];
    return (
        <SafeAreaView>
            <ScrollView>
            <Text >Discount Offers</Text>
            <FlatList
                horizontal
                data={discountOffers}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View>
                        <Image source={{uri: item.image}} />
                        <Text >{item.name}</Text>
                        <Text >{item.discount}</Text>
                    </View>
                )}
                contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 16 }}
            />
            </ScrollView>
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