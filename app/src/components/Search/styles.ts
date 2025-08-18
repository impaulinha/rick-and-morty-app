import { StyleSheet } from 'react-native'
import { theme } from '../../global/theme'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    borderRadius: theme.sizes.medium,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    margin: 20,
  },
  input: {
    flex: 1,
    marginLeft: 8,
    color: theme.colors.surface,
    fontFamily: theme.fonts.body,
    fontSize: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
