import AsyncStorage from '@react-native-async-storage/async-storage'

export class StorageHelper {
  static async setItem(key: string, value: any) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value))
    } catch (e) {}
  }

  static async getItem(key: string) {
    try {
      const jsonValue = await AsyncStorage.getItem(key)
      return jsonValue ? JSON.parse(jsonValue) : null
    } catch (e) {}
  }
}
