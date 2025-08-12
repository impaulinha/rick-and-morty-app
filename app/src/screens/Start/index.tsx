import { View, Text, SafeAreaView } from 'react-native'
import { styles } from './styles'
import { MainButton } from '../../components/MainButton'

export function Start() {
  function handleAcess() {
    console.log('ok')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewTop}>
        <Text style={styles.title}>The Rick and Morty App</Text>
      </View>
      <View style={styles.viewBotton}>
        <MainButton text="Acessar" action={handleAcess} />
      </View>
    </SafeAreaView>
  )
}
