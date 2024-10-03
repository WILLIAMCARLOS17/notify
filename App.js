import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeScreenNavigationContainer } from 'react-native-screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Validation from './screens/Validations/Validation';
import NotificationIntem from './screens/NotificationList/NotificationIntem';
import Details from './screens/Details/Details';
import Navigation from './Navigations/Navigation';
import { BrowserRouter } from 'react-router-dom';



const Stack = createNativeStackNavigator();


  


  export default function App() {
    
  

  return <Navigation />
    
  
}

