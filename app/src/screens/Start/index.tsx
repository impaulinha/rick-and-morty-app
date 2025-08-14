import { View, Text, SafeAreaView } from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackParamList } from '../../routes/stacks.routes'
import { MainButton } from '../../components/MainButton'
import { useNavigation } from '@react-navigation/native'
import { Picture } from '../../components/Picture'
import { styles } from './styles'

type NavigationProp = NativeStackNavigationProp<StackParamList, 'Start'>

export function Start() {
  const navigation = useNavigation<NavigationProp>()

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewTop}>
        <Text style={styles.title}>The Rick and Morty App</Text>
      </View>
      <View style={styles.viewBotton}>
        <MainButton text="Acessar" action={() => navigation.navigate('Tabs')} />
      </View>
      <View style={styles.viewImg}>
        <Picture
          diameter={0.8}
          source={require('../../assets/rickandmorty.png')}
        />
      </View>
    </SafeAreaView>
  )
}
