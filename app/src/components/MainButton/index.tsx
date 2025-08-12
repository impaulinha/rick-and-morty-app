import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native'
import { styles } from './styles'

type MainsButtonProps = TouchableOpacityProps & {
  text: string
  action: () => void
}

export function MainButton({ text, action }: MainsButtonProps) {
  return (
    <TouchableOpacity onPress={action} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}
