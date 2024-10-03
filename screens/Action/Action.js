import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import { TouchableOpacity } from 'react-native-gesture-handler';






const Action = ({navigation}) => {
    
  return (
    <View style={styles.contenair}>

 



       <View style={{ flexDirection: 'row', display: 'flex',justifyContent: 'space-between',width:"100%", padding:20}}>
          <TouchableOpacity onPress={() => { navigation.navigate("NotificationIntem") }}>
          <View style={styles.card}>
            <Image style={styles.logo} source={require("../../assets/ecole.png")} />
            <Text style={{fontSize:20,fontWeight:'bold'}}>Cours</Text>
          </View>
          </TouchableOpacity>

         
      

          <TouchableOpacity onPress={() => { navigation.navigate("Devoir") }}>
        <View style={styles.card}>
          <Image style={styles.logo} source={require("../../assets/exo.png")} />
          <Text style={{fontSize:20,fontWeight:'bold'}}>Devoirs</Text>
        </View>
        </TouchableOpacity>
      
        


      </View>
      <TouchableOpacity onPress={() => { navigation.navigate("Devoir") }}>
        <View style={{ backgroundColor: 'white',
        height: 160,
        width: 160,
        borderWidth: 0.5,
        borderRadius: 10,
        marginVertical: 20,
        justifyContent: "center",
        alignItems: "center",
        borderColor:'gray',
        elevation:4,
        marginHorizontal:20,
        marginTop:0}}>
          <Image style={styles.logo} source={require("../../assets/permission.png")} />
          <Text style={{fontSize:20,fontWeight:'bold'}}>Permissions</Text>
        </View>
        </TouchableOpacity>
    </View>
  )
}

export default Action


export const styles = StyleSheet.create({
    contenair: {
      alignItems: "flex-start",
      justifyContent: "flex-start",
      flex: 1,
      backgroundColor: "#fff",
      
    },
    card: {
        backgroundColor: 'white',
        height: 160,
        width: 160,
        borderWidth: 0.5,
        borderRadius: 10,
        marginVertical: 20,
        justifyContent: "center",
        alignItems: "center",
        borderColor:'gray',
        elevation:4,
        
        
        
    
    
      },
    
      logo: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        width: 100,
        
      }
        
    
    
    
})