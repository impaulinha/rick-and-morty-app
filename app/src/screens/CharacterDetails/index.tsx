import { useEffect, useState } from 'react'
import { View, Text, FlatList, ScrollView } from 'react-native'
import { RouteProp, useRoute } from '@react-navigation/native'
import { getCharacterById } from '../../services/characters'
import { StackParamList } from '../../routes/stacks.routes'
import { getEpisodes } from '../../services/episodes'
import { Picture } from '../../components/Picture'
import { Character } from '../../types/Character'
import { Episode } from '../../types/Episode'
import { styles } from './styles'
import { theme } from '../../global/theme'

type NavigationProp = RouteProp<StackParamList, 'CharacterDetails'>

export function CharacterDetails() {
  const [character, setCharacter] = useState<Character>()
  const route = useRoute<NavigationProp>()
  const { id } = route.params
  const [episodes, setEpisodes] = useState<Episode[]>([])

  useEffect(() => {
    loadCharacter()
  }, [id])

  async function loadCharacter() {
    if (!id) return

    try {
      const response = await getCharacterById(id)
      setCharacter(response)

      if (response.episode && response.episode.length > 0) {
        loadEpisode(response.episode)
      }
    } catch (error) {
      console.log(error)
    }
  }

  async function loadEpisode(urls: string[]) {
    try {
      const response = await getEpisodes(urls)

      const episodesArray = Array.isArray(response) ? response : [response]
      setEpisodes(episodesArray)
    } catch (error) {
      console.error()
    }
  }

  return (
    <FlatList
      data={episodes}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.cardEp}>
          <Text style={styles.titleCard}>{item.name}</Text>
          <Text style={styles.date}>{item.air_date}</Text>
        </View>
      )}
      ItemSeparatorComponent={() => (
        <View style={{ height: 1, backgroundColor: theme.colors.secondary }} />
      )}
      contentContainerStyle={{ paddingBottom: 20 }}
      ListHeaderComponent={
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
            <View style={styles.episodes}>
              <Text style={styles.titleEp}>Episodes:</Text>
            </View>
          </View>
        </View>
      }
    />
  )
}
