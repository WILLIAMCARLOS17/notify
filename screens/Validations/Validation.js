import { View, Text, StyleSheet, TextInput, TouchableOpacity, onPageChange,position, activePosition,getStepsData,setActivePosition } from 'react-native'
import React from 'react'
import StepIndicator from 'react-native-step-indicator';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';


const Validation = () => {
  return (
    <View style={style.contenair}>

      <ProgressSteps>
        <ProgressStep label="Step 1" nextBtnText="Prochain"
        
        nextBtnTextStyle={{
          color: 'green',
        }}>
          <View style={{width:'100%'}}>
            <View style={{ marginBottom: 10 }}>
              <Text style={{ fontWeight: 'bold' }}>NOTIFICATIONS</Text>
            </View>
            <TextInput style={style.TextInput} />
            <View style={style.globalButton}>
              <TouchableOpacity style={style.buttonValider}>
                <Text style={style.buttonText}>Rejeter</Text>
              </TouchableOpacity>
              <TouchableOpacity style={style.buttonRejeter}>
                <Text style={style.buttonText}>Valider</Text>
              </TouchableOpacity>
            </View>
            </View>
          </ProgressStep>
        <ProgressStep label="Step 2">
          <View style={{width:'100%'}}>
            <Text>Etape 2</Text>
          </View>
        </ProgressStep>
        <ProgressStep label="Step 3">
          <View  style={{width:'100%'}}>
            <Text>Etape 3</Text>
          </View>
        </ProgressStep>
      </ProgressSteps>

    </View>
    
  )
}

export default Validation



export const style = StyleSheet.create({
  contenair: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,

  },


  TextInput: {
    borderWidth: 1,
   // width: 380,
    height: 300,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    

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

  
  

})


