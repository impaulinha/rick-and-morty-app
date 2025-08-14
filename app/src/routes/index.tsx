import { NavigationContainer } from '@react-navigation/native'
import { StacksRoutes } from './stacks.routes'

export function Routes() {
  return (
    <NavigationContainer>
      <StacksRoutes />
    </NavigationContainer>
  )
}
