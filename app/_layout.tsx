import { Stack } from "expo-router";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import { SafeAreaProvider } from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'Inria-Sans-Bold': require('../assets/fonts/InriaSans-Bold.ttf'),
    'Inria-Sans-Regular': require('../assets/fonts/InriaSans-Regular.ttf'),
    'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
    'Inknut-Antiqua-semi-bold': require('../assets/fonts/InknutAntiqua-SemiBold.ttf'),
    'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf')
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <Stack initialRouteName="index">
        <Stack.Screen name="index" options={{headerShown: false}} />
        <Stack.Screen name="signUp" options={{headerShown: false}} />
        <Stack.Screen name="welcomePage" options={{headerShown: false}} />
        <Stack.Screen name="(tabs)" options={{headerShown: false}} />
      </Stack>
    </SafeAreaProvider>
  );
}
