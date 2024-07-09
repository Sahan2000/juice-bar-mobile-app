import { View, Image, StyleSheet} from "react-native";

export default function LoadingPage () {
    return (
        <View style= {styles.container}>
            <Image source={require('../assets/juiceBarLogo.png')} style = {styles.lgoo}/>
            <Image source={require('../assets/loadingIcon.gif')} style = {styles.loaidngIcon} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    lgoo:{
        width: 250,
        height: 250
    },
    loaidngIcon: {
        position: 'absolute',
        bottom: 0,
        width: 50,
        height: 50,
    }
  });