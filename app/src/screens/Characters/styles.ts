import { StyleSheet } from 'react-native'
import { theme } from '../../global/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
  },
  list: {
    marginTop: theme.sizes.small,
    borderTopLeftRadius: theme.sizes.large,
    borderTopRightRadius: theme.sizes.large,
  },
  card: {
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    flexDirection: 'row',
    padding: theme.sizes.small,
  },
  infos: {
    marginLeft: theme.sizes.small,
  },
  title: {
    fontFamily: theme.fonts.title,
    color: theme.colors.surface,
    fontSize: theme.sizes.small,
  },
  description: {
    color: theme.colors.surface,
    fontFamily: theme.fonts.subtitle,
    fontSize: theme.sizes.small - 1,
  },
})
