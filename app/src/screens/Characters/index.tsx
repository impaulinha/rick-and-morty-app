import { useState, useEffect } from 'react'
import { View, FlatList, Text, Image } from 'react-native'
import { getCharacters } from '../../services/characters'
import { Picture } from '../../components/Picture'
import { Divider } from '../../components/Divider'
import { Character } from '../../types/character'
import { Search } from '../../components/Search'
import { Dot } from '../../components/Dot'
import { styles } from './styles'

export function Characters() {
  const [search, setSearch] = useState('')
  const [characters, setCharacters] = useState<Character[]>([])

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
          contentContainerStyle={{ flexGrow: 1 }}
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
            <View style={styles.card}>
              <Picture diameter={0.2} source={{ uri: item.image }} />
              <View style={styles.infos}>
                <Text style={styles.title}>{item.name}</Text>
                <View style={styles.viewInfos}>
                  <Text style={{ ...styles.description, marginRight: 5 }}>
                    {item.status}
                  </Text>
                  <Dot />
                  <Text style={{ ...styles.description, marginLeft: 5 }}>
                    {item.species}
                  </Text>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  )
}
