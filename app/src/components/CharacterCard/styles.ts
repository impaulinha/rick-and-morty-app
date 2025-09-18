import { StyleSheet } from 'react-native'
import { theme } from '../../global/theme'

export const styles = StyleSheet.create({
  infos: {
    marginLeft: theme.sizes.small,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  card: {
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    flexDirection: 'row',
    padding: theme.sizes.small,
  },
  title: {
    fontFamily: theme.fonts.title,
    color: theme.colors.surface,
    fontSize: 18,
    textTransform: 'capitalize',
  },
  description: {
    color: theme.colors.surface,
    fontFamily: theme.fonts.subtitle,
    fontSize: theme.sizes.small - 1,
    textTransform: 'capitalize',
  },
  viewInfos: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
