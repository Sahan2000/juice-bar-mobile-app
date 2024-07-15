import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { View, } from "react-native";
import Header from "@/components/Header";

export default function TabLayout() {
    const orange = "#FA6440";
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: orange,
        }}
        >
            <Tabs.Screen name="index" options={{
                header: () => <Header/>,
                title: "Home",
                tabBarIcon:({color}) => <FontAwesome size={35} name="home" color={'#FA6440'} />
            }}/>
        </Tabs>
    );
}