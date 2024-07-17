import { AntDesign, Entypo } from "@expo/vector-icons";
import { useRef, useState } from "react";
import { StyleSheet, View,TextInput, TouchableOpacity, Image, ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Header() {
    const itemRef = useRef<Array<TouchableOpacity | null>>([]);
    const [activeIndex, setActiveIndex] = useState(0);

    const selectCategory = (index : number) => {
        setActiveIndex(index);
    }

    const categories = [
        {name: 'All Types'},
        {name: 'Juice'},
        {name: 'Smoothie'},
        {name: 'Milk Shake'},
        {name: 'Fruit Salad'}, 
        {name: 'Mix Juices'},
    ];

    return (
        <SafeAreaView style={{ backgroundColor: '#fff'}}>
            <View style={styles.container}>
                <View style={styles.actionRow}>
                    <View style={{flexDirection: 'row'}}>
                        <TextInput style={styles.searchInput} placeholder="Search Items"/>
                        <TouchableOpacity style={styles.searchButton}>
                            <AntDesign name="search1" size={20} style={{opacity:0.5}} color="#000" />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.cartButton}>
                        <Image style={styles.cartIcon} source={require('../assets/images/cart.png')}/>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.sroll} contentContainerStyle={{flexGrow: 1,alignItems: 'center', gap: 20,justifyContent: 'space-around'}}>
                    {categories.map((item,index)=>(
                        <TouchableOpacity onPress={() => selectCategory(index)} key={index} ref={(el) => itemRef.current[index]= el} style={activeIndex === index ? styles.categoryButtonActive : styles.categoryBtn}>
                            <Text style={activeIndex === index ? styles.categoryActiveText : styles.categoryText}>{item.name}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
    },
    actionRow: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 10,
        
    },
    searchInput: {
        width: 200,
        height: 40,
        borderWidth: 1,
        borderRightWidth: 0,
        paddingHorizontal: 15,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        backgroundColor: '#fff',
        fontFamily: "Inter-Regular",
        fontSize: 17,
        color: '#000',
    },
    searchButton: {
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',

    },
    cartButton: {
    
    },
    cartIcon: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
    sroll: {
        
    },
    categoryText: {
        fontSize: 14,
        fontFamily: "Inter-Regular",
        color: '#000000',
    },
    categoryActiveText: {
        fontSize: 14,
        fontFamily: "Inter-Regular",
        color: '#fff',
    },
    categoryBtn: {
        width: 80,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: '#fff',
        color: '#000'
    },
    categoryButtonActive: {
        width: 80,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: '#FA6440',
    },
})