import AsyncStorage from '@react-native-async-storage/async-storage'
import { Character } from '../types/Character'

const FAVORITES_KEY = 'favorites'

export async function getFavorites(): Promise<Character[]> {
  const json = await AsyncStorage.getItem(FAVORITES_KEY)
  return json ? JSON.parse(json) : []
}

export async function addFavorite(character: Character) {
  const favorites = await getFavorites()
  const exists = favorites.find((c) => c.id === character.id)
  if (!exists) {
    favorites.push(character)
    await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))
  }
}

export async function removeFavorite(id: number) {
  const favorites = await getFavorites()
  const newFavorites = favorites.filter((c) => c.id !== id)
  await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites))
}

export async function isFavorite(id: number): Promise<boolean> {
  const favorites = await getFavorites()
  return favorites.some((c) => c.id === id)
}
