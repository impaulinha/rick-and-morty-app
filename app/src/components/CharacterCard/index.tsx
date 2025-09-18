import { View, TouchableOpacity, Text } from 'react-native'
import { styles } from './styles'
import { Picture } from '../Picture'
import { Dot } from '../Dot'
import { Character } from '../../types/Character'

type Props = {
  character: Character
  onPress: () => void
}

export function CharacterCard({ character, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.7} onPress={onPress}>
      <Picture diameter={0.2} source={{ uri: character.image }} />
      <View style={styles.infos}>
        <Text style={styles.title}>{character.name}</Text>
        <View style={styles.viewInfos}>
          <Text style={{ ...styles.description, marginRight: 5 }}>
            {character.status}
          </Text>
          <Dot />
          <Text style={{ ...styles.description, marginLeft: 5 }}>
            {character.species}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
