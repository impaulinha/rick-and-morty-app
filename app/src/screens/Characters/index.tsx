import { View, FlatList, Text } from 'react-native'
import { styles } from './styles'
import { Search } from '../../components/Search'
import { Picture } from '../../components/Picture'
import { Dot } from '../../components/Dot'

export function Characters() {
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
  ]

  return (
    <View style={styles.container}>
      <Search />
      <FlatList
        data={data}
        style={styles.list}
        contentContainerStyle={{ flexGrow: 1 }}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Picture diameter={0.2} />
            <View style={styles.infos}>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.description}>
                {item.status} <Dot /> {item.tipo}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  )
}
