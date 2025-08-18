import { StyleSheet, Dimensions } from 'react-native'
import { theme } from '../../global/theme'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.secondary,
    width: Dimensions.get('window').width * 0.02,
    height: Dimensions.get('window').width * 0.02,
    borderRadius: (Dimensions.get('window').width * 0.02) / 2,
    elevation: 2,
    marginLeft: '30%',
  },
})
