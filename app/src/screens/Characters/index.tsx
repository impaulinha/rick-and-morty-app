import { useState, useEffect } from 'react'
import { View, FlatList, Text, Image } from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { CharacterCard } from '../../components/CharacterCard'
import { StackParamList } from '../../routes/stacks.routes'
import { getCharacters } from '../../services/characters'
import { useNavigation } from '@react-navigation/native'
import { Divider } from '../../components/Divider'
import { Character } from '../../types/Character'
import { Search } from '../../components/Search'
import { styles } from './styles'

type NavigationProp = NativeStackNavigationProp<
  StackParamList,
  'CharacterDetails'
>

export function Characters() {
  const [search, setSearch] = useState('')
  const [characters, setCharacters] = useState<Character[]>([])
  const navigation = useNavigation<NavigationProp>()

  function filterCharacter() {
    return characters.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase()),
    )
  }

  async function loadData() {
    try {
      const data = await getCharacters()
      setCharacters(data.results)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <View style={styles.container}>
      <Search onSearchChange={setSearch} />
      <View style={styles.viewList}>
        <FlatList
          data={filterCharacter()}
          keyExtractor={(item) => item.id.toString()}
          style={styles.list}
          ItemSeparatorComponent={Divider}
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 130 }}
          ListEmptyComponent={
            <View style={styles.empty}>
              <Image
                source={require('../../assets/morty-smith.png')}
                resizeMode="contain"
                style={{ width: 200, height: 200 }}
              />
              <Text style={styles.txtEmpty}>
                Nenhum personagem {'\n'}encontrado.
              </Text>
            </View>
          }
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
        />
      </View>
    </View>
  )
}
