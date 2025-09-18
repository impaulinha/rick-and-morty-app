import { StyleSheet } from 'react-native'
import { theme } from '../../global/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
  },
  viewList: {
    marginTop: theme.sizes.small,
    backgroundColor: theme.colors.background,
    flex: 1,
    borderTopLeftRadius: theme.sizes.large,
    borderTopRightRadius: theme.sizes.large,
  },
  list: {
    borderTopLeftRadius: theme.sizes.large,
    borderTopRightRadius: theme.sizes.large,
  },
  empty: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    flex: 1,
  },
  txtEmpty: {
    fontSize: 20,
    fontFamily: theme.fonts.title,
    color: '#808080',
    textAlign: 'center',
  },
})
