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
