import { StyleSheet } from 'react-native'
import { theme } from '../../global/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewTop: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    padding: theme.sizes.large,
    paddingTop: 70,
  },
  viewBotton: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.sizes.large,
  },
  title: {
    fontFamily: theme.fonts.title,
    color: theme.colors.background,
    fontSize: theme.sizes.large,
    textAlign: 'center',
  },
})
