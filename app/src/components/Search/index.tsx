import { TextInput, View } from 'react-native'
import { Ionicons } from '@react-native-vector-icons/ionicons'
import { styles } from './styles'
import { theme } from '../../global/theme'

export function Search() {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={24} color={theme.colors.surface} />
      <TextInput
        placeholder="Pesquisar personagem"
        placeholderTextColor={theme.colors.surface}
        style={styles.input}
        autoCapitalize="none"
        maxLength={80}
      />
    </View>
  )
}
