import { useState } from 'react'
import { View, FlatList, Text, Image } from 'react-native'
import { Picture } from '../../components/Picture'
import { Divider } from '../../components/Divider'
import { Search } from '../../components/Search'
import { Dot } from '../../components/Dot'
import { styles } from './styles'

export function Characters() {
  const [search, setSearch] = useState('')

  const data = [
    {
      id: 1,
      name: 'Teste Jose',
      status: 'Alive',
      tipo: 'humano',
    },
    {
      id: 2,
      name: 'Maria',
      status: 'Alive',
      tipo: 'humano',
    },
    {
      id: 3,
      name: 'Hermes',
      status: 'Alive',
      tipo: 'alien',
    },
    {
      id: 4,
      name: 'Hermes',
      status: 'Alive',
      tipo: 'alien',
    },
  ]

  function filterCharacter() {
    return data.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase()),
    )
  }

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
              <Picture diameter={0.2} />
              <View style={styles.infos}>
                <Text style={styles.title}>{item.name}</Text>
                <View style={styles.viewInfos}>
                  <Text style={{ ...styles.description, marginRight: 5 }}>
                    {item.status}
                  </Text>
                  <Dot />
                  <Text style={{ ...styles.description, marginLeft: 5 }}>
                    {item.tipo}
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
