import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Characters } from '../screens/Characters'
import { Favorites } from '../screens/Favorites'
import Ionicons from '@react-native-vector-icons/ionicons'
import { theme } from '../global/theme'

export type TabsParamList = {
  Characters: undefined
  Favorites: undefined
}

const Tab = createBottomTabNavigator()

export function TabsRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.onSurface,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: theme.colors.secondary,
          height: 60,
          marginHorizontal: 20,
          marginBottom: 45,
          borderRadius: 50,
          elevation: 5,
          paddingTop: 0,
          paddingBottom: 0,
        },
        tabBarItemStyle: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 0,
        },
        tabBarLabelStyle: {
          margin: 0,
          padding: 0,
          fontSize: 12,
        },
      }}
    >
      <Tab.Screen
        name="Characters"
        component={Characters}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-sharp" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
