import AsyncStorage from '@react-native-async-storage/async-storage';

// Stocker les données
export const storeUserData = async (data) => {
  try {
    await AsyncStorage.setItem('userData', JSON.stringify(data));
  } catch (error) {
    console.error('Error storing user data:', error);
  }
};

// Récupérer les données
export const getUserData = async () => {
  try {
    const userData = await AsyncStorage.getItem('userData');
    return userData ? JSON.parse(userData) : null;
  } catch (error) {
    console.error('Error retrieving user data:', error);
  }
};