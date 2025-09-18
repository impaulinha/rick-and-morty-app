import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from '@react-native-vector-icons/ionicons'
import { Characters } from '../screens/Characters'
import { Favorites } from '../screens/Favorites'
import { View, Text } from 'react-native'
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
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerTitleAlign: 'center',
      }}
    >
      <Tab.Screen
        name="Characters"
        component={Characters}
        options={{
          headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
          headerTitle: () => (
            <Text
              style={{
                fontFamily: theme.fonts.title,
                fontSize: 30,
                textAlign: 'center',
                color: theme.colors.onSurface,
              }}
            >
              The Rick and {'\n'}Morty App
            </Text>
          ),
          headerStyle: {
            backgroundColor: theme.colors.primary,
            height: 170,
          },
          headerShadowVisible: false,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-sharp" color={color} size={size} />
          ),
          headerTitleStyle: {
            fontSize: 25,
            color: theme.colors.onSurface,
            fontFamily: theme.fonts.title,
          },
        }}
      />
    </Tab.Navigator>
  )
}
