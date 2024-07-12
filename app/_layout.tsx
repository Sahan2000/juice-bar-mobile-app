import { Stack } from "expo-router";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'Inria-Sans-Bold': require('../assets/fonts/InriaSans-Bold.ttf'),
    'Inria-Sans-Regular': require('../assets/fonts/InriaSans-Regular.ttf')
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
    <Stack>
      <Stack.Screen name="index" options={{headerShown: false}} />
      <Stack.Screen name="login" options={{headerShown: false}} />
      <Stack.Screen name="signUp" options={{headerShown: false}} />
    </Stack>
  );
}
