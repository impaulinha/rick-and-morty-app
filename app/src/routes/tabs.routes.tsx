import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Characters } from '../screens/Characters'

const Tab = createBottomTabNavigator()

export function TabsRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Characters" component={Characters} />
    </Tab.Navigator>
  )
}
