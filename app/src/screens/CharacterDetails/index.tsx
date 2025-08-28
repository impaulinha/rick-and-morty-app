import { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { getCharacterById } from '../../services/characters'
import { StackParamList } from '../../routes/stacks.routes'
import { Picture } from '../../components/Picture'
import { Character } from '../../types/character'
import { styles } from './styles'
import { RouteProp, useRoute } from '@react-navigation/native'

type NavigationProp = RouteProp<StackParamList, 'CharacterDetails'>

export function CharacterDetails() {
  const [character, setCharacter] = useState<Character>()
  const route = useRoute<NavigationProp>()
  const { id } = route.params

  useEffect(() => {
    loadCharacter()
  }, [id])

  async function loadCharacter() {
    if (!id) return

    try {
      const response = await getCharacterById(id)
      setCharacter(response)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Picture diameter={0.5} source={{ uri: character?.image }} />
        <Text style={styles.name}>{character?.name}</Text>
        <View style={styles.infos}>
          <View style={styles.line}>
            <Text style={styles.title}>Status</Text>
            <Text style={styles.description}>{character?.status}</Text>
          </View>
          <View style={styles.line}>
            <Text style={styles.title}>Species</Text>
            <Text style={styles.description}>{character?.species}</Text>
          </View>
          <View style={styles.line}>
            <Text style={styles.title}>Gender</Text>
            <Text style={styles.description}>{character?.gender}</Text>
          </View>
          <View style={styles.line}>
            <Text style={styles.title}>Origin</Text>
            <Text style={styles.description}>{character?.origin.name}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}
