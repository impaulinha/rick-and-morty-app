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
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingBottom: 100,
  },
  title: {
    fontFamily: theme.fonts.title,
    color: theme.colors.onSurface,
    fontSize: theme.sizes.large,
    textAlign: 'center',
  },
  viewImg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
