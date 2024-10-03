import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ScrollView } from 'react-native-gesture-handler'

const Contenus = () => {
    const [comments,setcomments]=useState()

    const commentsuser=()=>{
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(response =>{
            console.log(response.data);
            const data=response.data
            const comments=data         
           
            setcomments(comments)
            
    
         } )
        
    }
    useEffect(()=>{
        commentsuser()

    },[])



  return (
    <View style={style.contenair}>
        <ScrollView>
        {
         comments && comments.map((item)=>(
           <>
        
      <View style={style.card}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    
                    <View style={{ flexDirection: "column", marginLeft: 10,marginBottom:5}}>
                        <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
                        <Text style={{ color: "gray", marginTop: 8 }}>{item.email}</Text>
                        <Text>{item.body}</Text>
                        
                        </View>
                        </View>
                      
                        </View>
                        </>
         ))}
         </ScrollView>
    </View>
  )
}

export default Contenus

export const style= StyleSheet.create({
contenair:{
    justifyContent:'center',
    alignItems:'center',
    flex:1
    
},

card:{
    
    height: 200,
    width: 350,
    borderWidth: 1,
    borderRadius: 8,


    alignItems: 'center',
    backgroundColor: '#ffffff',
    elevation: 2,
    marginBottom:20,
    marginHorizontal:10,
    


}

})