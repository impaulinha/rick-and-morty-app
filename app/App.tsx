import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import { theme } from './src/global/theme'

export default function App() {
  return (
    <>
      <StatusBar translucent />
      <View>
        <Text>App inicial</Text>
      </View>
    </>
  )
}
