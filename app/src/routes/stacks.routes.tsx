import { createStackNavigator } from '@react-navigation/stack'
import { CharacterDetails } from '../screens/CharacterDetails'
import Ionicons from '@react-native-vector-icons/ionicons'
import { TabsRoutes } from './tabs.routes'
import { Start } from '../screens/Start'
import { theme } from '../global/theme'

export type StackParamList = {
  Start: undefined
  CharacterDetails: { id: string }
  Tabs: undefined
}

const Stack = createStackNavigator<StackParamList>()

export function StacksRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerTintColor: theme.colors.onSurface,
        headerBackImage: () => (
          <Ionicons
            name="chevron-back"
            color={theme.colors.onSurface}
            size={24}
          />
        ),
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontFamily: theme.fonts.title,
          fontSize: 20,
        },
      }}
    >
      <Stack.Screen
        name="Start"
        component={Start}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CharacterDetails"
        component={CharacterDetails}
        options={{
          title: 'Character Details',
        }}
      />
      <Stack.Screen
        name="Tabs"
        component={TabsRoutes}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
