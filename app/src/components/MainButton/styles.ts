import { StyleSheet } from 'react-native'
import { theme } from '../../global/theme'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    padding: theme.sizes.small,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.sizes.medium,
  },
  text: {
    color: theme.colors.background,
    fontFamily: theme.fonts.title,
    fontSize: 20,
  },
})
