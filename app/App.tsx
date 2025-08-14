import { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_100Thin,
  Poppins_300Light,
} from '@expo-google-fonts/poppins'
import * as SplashScreen from 'expo-splash-screen'
import { Routes } from './src/routes'

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [loaded, error] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_100Thin,
    Poppins_300Light,
  })

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync()
    }
  }, [loaded, error])

  if (!loaded && !error) {
    return null
  }

  return (
    <>
      <StatusBar translucent style="light" />
      <Routes />
    </>
  )
}
