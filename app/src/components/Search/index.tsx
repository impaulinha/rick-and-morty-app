import { TextInput, View } from 'react-native'
import { Ionicons } from '@react-native-vector-icons/ionicons'
import { styles } from './styles'
import { theme } from '../../global/theme'

type SearchProps = {
  onSearchChange: (text: string) => void
}

export function Search({ onSearchChange }: SearchProps) {
  function handleSearchChange(text: string) {
    onSearchChange(text)
  }

  return (
    <View style={styles.container}>
      <Ionicons name="search" size={24} color={theme.colors.surface} />
      <TextInput
        placeholder="Pesquisar personagem"
        placeholderTextColor={theme.colors.surface}
        style={styles.input}
        autoCapitalize="none"
        maxLength={80}
        onChangeText={handleSearchChange}
      />
    </View>
  )
}
