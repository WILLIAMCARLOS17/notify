import { View, Text } from 'react-native'
import React from 'react'
import axios from 'axios';

export default function AxiosApi() {
  return (
    

    axios.get('https://dummyjson.com/users')  
      .then(response => {
         
        console.log(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données:', error);
      
    
})
  )}