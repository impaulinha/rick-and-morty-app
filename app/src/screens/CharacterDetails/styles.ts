import { StyleSheet } from 'react-native'
import { theme } from '../../global/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
  },
  card: {
    flex: 1,
    backgroundColor: theme.colors.background,
    marginTop: theme.sizes.small,
    paddingTop: theme.sizes.medium,
    borderTopLeftRadius: theme.sizes.large,
    borderTopRightRadius: theme.sizes.large,
    alignItems: 'center',
  },
  name: {
    color: theme.colors.onBackground,
    fontFamily: theme.fonts.body,
    fontSize: theme.sizes.medium,
    marginTop: theme.sizes.small,
  },
  infos: {
    width: '85%',
    backgroundColor: theme.colors.surface,
    marginTop: theme.sizes.medium,
    borderRadius: theme.sizes.medium,
    padding: theme.sizes.medium,
  },
  line: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  title: {
    fontFamily: theme.fonts.details,
    color: theme.colors.onSurface,
    fontSize: theme.sizes.small,
  },
  description: {
    color: theme.colors.onSurface,
    fontFamily: theme.fonts.subtitle,
    fontSize: theme.sizes.small,
    textTransform: 'capitalize',
    flexShrink: 1,
    textAlign: 'right',
  },
  episodes: {
    backgroundColor: theme.colors.primary,
    width: '100%',
    marginTop: theme.sizes.medium,
    borderTopLeftRadius: theme.sizes.small,
    borderTopRightRadius: theme.sizes.small,
    padding: theme.sizes.medium,
  },
  titleEp: {
    color: theme.colors.onSurface,
    fontFamily: theme.fonts.title,
    fontSize: 25,
  },
  cardEp: {
    backgroundColor: theme.colors.background,
    padding: 25,
  },
  titleCard: {
    color: theme.colors.onBackground,
    fontSize: 18,
    fontFamily: theme.fonts.subtitle,
  },
  date: {
    color: theme.colors.surface,
    fontFamily: theme.fonts.body,
    fontSize: 13,
  },
})
