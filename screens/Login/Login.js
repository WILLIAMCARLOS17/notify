import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import axios from 'axios';
import { storeUserData } from '../../StorageUsers';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const authenticateUser = async () => {
    const requestBody = {
      db: "openeducat_erp", // Nom de la base de données
      login: email,            // Email récupéré
      password: password,      // Mot de passe saisi
    };

    console.log("Request body: ", JSON.stringify(requestBody)); // Vérifiez la structure

    try {
      setLoading(true);
      const response = await axios.post('https://soft.metuaa.com/api/login', requestBody, {
        headers: {
          'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6ImFkbWluQHNvZnRlZHVjYXQub3JnIiwidWlkIjoyfQ.4xzNf2eP5zZE5kCq-V65N5wJQZTPJEUtGljXCvOapsE',
          'api-key': 'Y5998ZQH6V40G1AM48EJP329SN6DMUR1'
        },
      });

      if (response?.data && response.data?.data?.email) {
        // Sauvegarder le token d'authentification si nécessaire
        console.log('Authentication successful:', response.data);
       // storeUserData(response.data);
        //console.log(getUserData());
        storeUserData(response.data)
        navigation.navigate("Action");
      } else {
        console.log('Authentication failed:', response.data, response.status);
        Alert.alert('Échec de l\'authentification. Veuillez vérifier vos identifiants.');
      }
    } catch (error) {
      console.error('Authentication error:', error.message); // Affiche l'erreur
      Alert.alert('Une erreur est survenue lors de l\'authentification.')
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.blocimg}>
        <Image style={styles.Logo} source={require("../../assets/remove.png")} />
      </View>

      <View style={styles.global}>
        <Text>WELCOME!</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text>to</Text>
          <Text style={{ color: '#45aadf', fontWeight: 'bold', marginLeft: 5 }}>SCHOOL</Text>
        </View>
      </View>

      <View>
        <TextInput
          placeholder='email'
          style={styles.TextInput}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      <View>
      <MaterialCommunityIcons name="email" size={24} color="black" style={styles.MaterialIcons} />
      </View>

      <View>
        <TextInput
          placeholder='password'
          style={styles.TextInput}
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <View>
        <MaterialIcons name="visibility-off" size={24} color="black" style={styles.MaterialIcons} />
      </View>

      <View style={styles.buton}>
        <TouchableOpacity style={styles.button} onPress={authenticateUser} disabled={loading}>
          <Text style={styles.Login}>{loading ? "Loading..." : "Login"}</Text>
        </TouchableOpacity>
      </View>

      {errorMessage ? (
        <View>
          <Text style={styles.error}>{errorMessage}</Text>
        </View>
      ) : null}

      <View>
        <TouchableOpacity style={styles.forgot}>
          <Text style={styles.forgot}>mot de passe oublié?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login 

const styles = StyleSheet.create({

    contenair:{
        flex:1,
        flexDirection:"column",
        justifyContent:"center",
        paddingTop:'right',
        padding:15,


        
    },
    
    TextInput: {
     borderColor: 'gray',
      borderWidth: 1,
      marginBottom:20,
      borderRadius:16,
       paddingHorizontal:20,
      borderColor:'#45aadf',
        height: 70,
        marginHorizontal:10
     
    },
    AntDesign:{
        alignSelf:'flex-end',
        position:'absolute',
        top:-70,
        paddingVertical: 5, 
        paddingHorizontal: 15,
        color:'#7d4efc',
    },


        
   MaterialIcons:{
    alignSelf:'flex-end',
    position:'absolute',
    top:-70,
    paddingVertical: 5, 
        paddingHorizontal: 15,
        color:'#45aadf',
   


   },

   buton: {
    marginTop: 20,
  },

  button: {
    backgroundColor: '#45aadf',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal:10,
    height:50
  },




  forgot: {
    marginTop: 10,
    textAlign: 'center',
    color: '#45aadf',
  },
  

   Login:{
    color:'white',
    fontWeight:'bold',
    fontSize:20
    

   },

   Logo:{
    
    width:250,
    height:250,
    marginBottom:10,
    
    
    
   },

   blocimg:{
    justifyContent:'center',
    alignItems:'center',
    

   },
   global: {
    alignItems: 'center',
    marginBottom: 20,
  },

   

   
   

   
        
    
        
    
    })
    