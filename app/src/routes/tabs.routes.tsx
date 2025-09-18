import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Characters } from '../screens/Characters'
import { Favorites } from '../screens/Favorites'

export type TabsParamList = {
  Characters: undefined
  Favorites: undefined
}

const Tab = createBottomTabNavigator()

export function TabsRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Characters"
        component={Characters}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  )
}
