import { View, FlatList, Image, Text } from 'react-native'
import { styles } from './styles'
import { useCallback, useState } from 'react'
import { Character } from '../../types/Character'
import { getFavorites } from '../../services/favorites'
import { CharacterCard } from '../../components/CharacterCard'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { StackParamList } from '../../routes/stacks.routes'
import { Divider } from '../../components/Divider'

type NavigationProp = NativeStackNavigationProp<
  StackParamList,
  'CharacterDetails'
>

export function Favorites() {
  const [favorites, setFavorites] = useState<Character[]>([])
  const navigation = useNavigation<NavigationProp>()

  useFocusEffect(
    useCallback(() => {
      loadFavorites()
    }, []),
  )

  async function loadFavorites() {
    try {
      const data = await getFavorites()
      setFavorites(data)
    } catch (error) {
      console.error('Erro ao carregar favoritos:', error)
    }
  }

  return (
    <FlatList
      data={favorites}
      keyExtractor={(item) => item.id.toString()}
      ItemSeparatorComponent={Divider}
      renderItem={({ item }) => (
        <CharacterCard
          character={item}
          onPress={() =>
            navigation.navigate('CharacterDetails', {
              id: item.id.toString(),
            })
          }
        />
      )}
      ListEmptyComponent={
        <View style={styles.empty}>
          <Image
            source={require('../../assets/morty-smith.png')}
            resizeMode="contain"
            style={{ width: 200, height: 200 }}
          />
          <Text style={styles.txtEmpty}>
            Nenhum personagem {'\n'}favoritado.
          </Text>
        </View>
      }
      contentContainerStyle={{ flexGrow: 1, paddingBottom: 130 }}
    />
  )
}
