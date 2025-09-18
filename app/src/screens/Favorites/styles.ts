import { StyleSheet } from 'react-native'
import { theme } from '../../global/theme'

export const styles = StyleSheet.create({
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
