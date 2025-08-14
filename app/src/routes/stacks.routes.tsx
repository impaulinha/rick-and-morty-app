import { createStackNavigator } from '@react-navigation/stack'
import { TabsRoutes } from './tabs.routes'
import { Start } from '../screens/Start'

export type StackParamList = {
  Start: undefined
  Tabs: undefined
}

const Stack = createStackNavigator<StackParamList>()

export function StacksRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShadowVisible: false }}>
      <Stack.Screen
        name="Start"
        component={Start}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Tabs" component={TabsRoutes} />
    </Stack.Navigator>
  )
}
