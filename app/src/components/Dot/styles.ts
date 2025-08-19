import { StyleSheet, Dimensions } from 'react-native'
import { theme } from '../../global/theme'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.detail,
    width: Dimensions.get('window').width * 0.015,
    height: Dimensions.get('window').width * 0.015,
    borderRadius: (Dimensions.get('window').width * 0.015) / 2,
    elevation: 2,
  },
})
