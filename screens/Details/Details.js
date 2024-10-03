import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, count, setCount, ScrollView, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import Feather from '@expo/vector-icons/Feather';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { Rating } from 'react-native-ratings';
import * as LocalAuthentication from 'expo-local-authentication';
import { useRoute } from '@react-navigation/native';
import moment from 'moment';
import 'moment/locale/fr';
import axios from 'axios';


const Details = () => {
  const route = useRoute();

  // Access the params sent during navigation
  const {id} = route.params;
  const [ assignment,setAssignment]=useState()
console.log(route.params)
const checkPasscode = async () => {
  console.log("hello")
  try {
    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: "Authenticate",
    });
    if (result.success) {
      //le code si le code pin est correct
  
      //navigation.navigate ("Action")
    } else {
      // User authentication failed
      Alert.alert('Authentication failed');
    }
  } catch (error) {
    // Handle errors, such as device not supporting biometric authentication
    Alert.alert('Authentication error:', error.message);
  }
}
const getDevoir = (id) => {

  axios.get(`https://soft.metuaa.com/api/assignment/${id}`, {
      headers: {
          'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6ImFkbWluQHNvZnRlZHVjYXQub3JnIiwidWlkIjoyfQ.4xzNf2eP5zZE5kCq-V65N5wJQZTPJEUtGljXCvOapsE',
          'api-key': 'Y5998ZQH6V40G1AM48EJP329SN6DMUR1'
      }
  })
      .then(response => {
          setAssignment(response?.data?.data)
          console.log("==========",response?.data?.data)


      })
    }

  const [activeStep, setActiveStep] = useState(1);
  const changeValue=(value)=>{
    console.log(value)
 
    if (value ==='draft'){

      axios.put(`https://soft.metuaa.com/api/op.assignment/${id}`,{
        state:value
      },
        {
        headers: {
            'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6ImFkbWluQHNvZnRlZHVjYXQub3JnIiwidWlkIjoyfQ.4xzNf2eP5zZE5kCq-V65N5wJQZTPJEUtGljXCvOapsE',
            'api-key': 'Y5998ZQH6V40G1AM48EJP329SN6DMUR1'
        }})
    .then(response =>getDevoir(id) )
    .catch(error => {
        console.error('There was an error!', error);
    });
    
  }


    if (value ==='teacher'){

      axios.put(`https://soft.metuaa.com/api/op.assignment/${id}`,{
        state:value
      },
        {
        headers: {
            'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6ImFkbWluQHNvZnRlZHVjYXQub3JnIiwidWlkIjoyfQ.4xzNf2eP5zZE5kCq-V65N5wJQZTPJEUtGljXCvOapsE',
            'api-key': 'Y5998ZQH6V40G1AM48EJP329SN6DMUR1'
        }})
    .then(response =>getDevoir(id) )
    .catch(error => {
        console.error('There was an error!', error);
    });
    }
    if (value ==='leadTeacher'){

      axios.put(`https://soft.metuaa.com/api/op.assignment/${id}`,{
        state:value
      },
        {
        headers: {
            'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6ImFkbWluQHNvZnRlZHVjYXQub3JnIiwidWlkIjoyfQ.4xzNf2eP5zZE5kCq-V65N5wJQZTPJEUtGljXCvOapsE',
            'api-key': 'Y5998ZQH6V40G1AM48EJP329SN6DMUR1'
        }})
    .then(response =>getDevoir(id) )
    .catch(error => {
        console.error('There was an error!', error);
    });
    }
    if (value ==='publish'){

      axios.put(`https://soft.metuaa.com/api/op.assignment/${id}`,{
        state:value
      },
        {
        headers: {
            'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6ImFkbWluQHNvZnRlZHVjYXQub3JnIiwidWlkIjoyfQ.4xzNf2eP5zZE5kCq-V65N5wJQZTPJEUtGljXCvOapsE',
            'api-key': 'Y5998ZQH6V40G1AM48EJP329SN6DMUR1'
        }})
    .then(response =>getDevoir(id) )
    .catch(error => {
        console.error('There was an error!', error);
    });
    }
    if (value ==='finish'){

      axios.put(`https://soft.metuaa.com/api/op.assignment/${id}`,{
        state:value
      },
        {
        headers: {
            'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6ImFkbWluQHNvZnRlZHVjYXQub3JnIiwidWlkIjoyfQ.4xzNf2eP5zZE5kCq-V65N5wJQZTPJEUtGljXCvOapsE',
            'api-key': 'Y5998ZQH6V40G1AM48EJP329SN6DMUR1'
        }})
    .then(response =>getDevoir(id) )
    .catch(error => {
        console.error('There was an error!', error);
    });
    }
  }
  
  

  // Function to handle validation and rejection of the notification
  const handleNotification = async (status) => {
    try {
      if (status === 'valider') {
        const result = await LocalAuthentication.authenticateAsync({
          promptMessage: "Authentifier",
        });
        if (result.success) {
          // Si l'authentification réussit, approuvez la notification et passez à l'étape suivante
          console.log("Notification validée");
          Alert.alert('Notification validée avec succès');
          setActiveStep(2);  // Réglez sur l'étape 5 (ou quelle que soit l'étape finale))
        } else {
          Alert.alert('L/authentification a échoué');
        }
      } else if (status === 'reject') {
        // Rejeter directement la notification
        console.log("Notification rejetée");
        Alert.alert('Notification rejetée');
        setActiveStep(0);  // Réinitialiser les étapes en cas de rejet
      }
    } catch (error) {
      Alert.alert('Erreur:', message.erreur);
    }
  };

  useEffect(() => {
   // console.log(route.params.id);  // This will log the actual value of route.params.id
    if (route.params.id) {
      getDevoir(route.params.id);
    }
  }, [route.params.id]);

  return (
    <View style={style.contenair}>
    <View style={style.stepsContainer}>
        {/* Step 1 */}
        <View style={style.stepWrapper}>
          <View style={assignment?.state==="draft"?[style.circle, style.activeCircle]:[style.circle]}>
            <TouchableOpacity onPress={()=> changeValue ("draft")}>
            <Text style={style.stepNumber}>1</Text>
            </TouchableOpacity>
          </View>
          
          <View style={style.line} />
        </View>

        {/* Step 2 */}
        <View style={style.stepWrapper}>
          <View style={assignment?.state==="teacher"?[style.circle, style.activeCircle]:[style.circle]}>
          <TouchableOpacity onPress={()=> changeValue ("teacher")}>
            <Text style={style.stepNumber}>2</Text>
            </TouchableOpacity>
          </View>
          
          <View style={style.line} />
        </View>

        {/* Step 3 */}
        <View style={style.stepWrapper}>
          <View style={assignment?.state==="leadTeacher"?[style.circle, style.activeCircle]:[style.circle]}>
          <TouchableOpacity onPress={()=> changeValue ("leadTeacher")}>
            <Text style={style.stepNumber}>3</Text>
            </TouchableOpacity>
          </View>
          <View style={style.line} />

          <View style={style.stepWrapper}>
          <View style={assignment?.state==="publish"?[style.circle, style.activeCircle]:[style.circle]}>
          <TouchableOpacity onPress={()=> changeValue ("publish")}>
            <Text style={style.stepNumber}>4</Text>
            </TouchableOpacity>
            </View>
          </View>
          <View style={style.line} />
          <View style={style.stepWrapper}>
          <View style={assignment?.state==="finish"?[style.circle, style.activeCircle]:[style.circle]}>
          <TouchableOpacity onPress={()=> changeValue ("finish")}>
            <Text style={style.stepNumber}>5</Text>
            </TouchableOpacity>
            </View>
          </View>



          
        </View>
      </View>

          <ScrollView>
      <View style={{ marginBottom:20,alignSelf:'flex-start',marginHorizontal:15 }}>
        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          
        }}>{assignment?.subject_id?.name } - {assignment?.name}</Text>
      </View>

      <View style={{alignSelf:'flex-start', marginHorizontal: 15,marginBottom:5}}>
        <Text> <Text style={style.concertDate}>{moment(assignment?.create_date).format('LLLL')}</Text></Text>
      </View>
      <View style={style.ticketInfo}>
        <Text style={style.price}>{assignment?.assignment_type?.name}</Text>

      {/*   <Text style={style.quantity}> Quantité:5</Text> */}
      </View>

      <View style={style.cart}>
        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
        <Image style={style.logo} source={{ uri: assignment?.teacher?.image.replace("http://soft/", "https://soft.metuaa.com/") }} />

          <View style={{ flexDirection: "column", }}>
            <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>{assignment?.teacher?.name}</Text>
            <Rating
              type='custom'
              ratingCount={5}
              imageSize={15}
              startingValue={count}
              onFinishRating={(rating) => setCount(rating)}
              style={style.rating}
            />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' ,marginBottom: 20 }}>
              <Feather name="phone" size={15} color='#6200ee' />
              <Text style={{ marginHorizontal: 5, color: 'gray' }}>{assignment?.teacher?.phone}</Text>
              
            </View>


          </View>

        </View>

      </View>

      <View style={{ flexDirection: 'row', marginBottom: 20 ,width:"100%", justifyContent:'space-between',}}>
        <View >
          <Text style={{marginHorizontal:15,fontWeight:"bold"}}>Date d’émission:</Text>
          <Text style={{ color: '#6200ee',marginHorizontal:10}}>{moment(assignment?.issuedDate).format('lll')}</Text>
        </View>
        <View >
          <Text style={{marginHorizontal:20,fontWeight:"bold"}}>Date d'envoie:</Text>
          <Text style={{ color: '#6200ee',marginHorizontal:5}}>{moment(assignment?.submissionDate).format('lll')}</Text>
        </View>
      </View>



      <View style={{ marginBottom: 20, marginHorizontal: 15 }}>
        <Text>
          {assignment?.description}
        </Text>
      </View>

      <View style={style.globalButton}>
              <TouchableOpacity style={style.buttonValider} onPress={() => handleNotification('reject')}>
                <Text style={style.buttonText}>Rejeter</Text>
              </TouchableOpacity>
              <TouchableOpacity style={style.buttonRejeter}  onPress={() => handleNotification('validate')}>
                <Text style={style.buttonText}>Valider</Text >
              </TouchableOpacity>
            </View>
            
      </ScrollView>


      
    </View>
  )
}

export default Details


export const style = StyleSheet.create({
  contenair: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: "#fff",
    
  },




  cart: {
    height: 90,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    width: 370,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    marginBottom: 30,
    borderColor: '#dcdcdc'
  },


  globalButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,

  },

  buttonRejeter: {
    backgroundColor: '#4CAF50',
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 3,
    width: 150
  },
  buttonValider: {
    backgroundColor: '#f44336',
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 3,
    width: 150
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  },



  


  logo: {
    height: 80,
    width: 80,
    borderRadius: 300,
    marginHorizontal: 30,
  },
 
  rating: {
    flex: 1,
    alignItems: '',
   },
  ticketInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    alignSelf: 'flex-start'
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 15
  },

  quantity: {

    fontSize: 20,
  },
  sellerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  concertDate: {
    color: 'gray',
    marginBottom: 10,



  },
  stepsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex:1,
    marginTop:20,
    marginBottom:20
  },
  stepWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#bbb',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  activeCircle: {
    backgroundColor: '#6200ee', // Active step color
    borderColor: '#6200ee',
  },
  stepNumber: {
    color: '#000',
  },
  stepLabel: {
    marginHorizontal: 8,
    color: '#000',
  },
  line: {
    width: 10,
    height: 2,
    backgroundColor: '#bbb',
    marginHorizontal: 8,
  },


})  