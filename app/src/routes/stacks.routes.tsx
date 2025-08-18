import { createStackNavigator } from '@react-navigation/stack'
import { TabsRoutes } from './tabs.routes'
import { Start } from '../screens/Start'
import { theme } from '../global/theme'

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
      <Stack.Screen
        name="Tabs"
        component={TabsRoutes}
        options={{
          title: '',
          headerStyle: { backgroundColor: theme.colors.primary },
        }}
      />
    </Stack.Navigator>
  )
}
