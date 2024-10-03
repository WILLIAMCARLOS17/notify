import { View, Text, StyleSheet, ScrollView, Image, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { getUserData } from '../../StorageUsers';
import Entypo from '@expo/vector-icons/Entypo';
import { Dropdown } from 'react-native-element-dropdown';



const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
];




const NotificationIntem = ({ navigation }) => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [search, setsearch] = useState()
    const [companyId, setCompanyId] = useState()
    const [subjects, setSubjects] = useState([])
    const [classes, setClasses] = useState([])
    const [label, setlabel] = useState(null)

    const getUser = async () => {
        const user = await getUserData();
        console.log(user?.data?.company_ids[0].id)
        setCompanyId(user?.data?.company_ids[0]?.id)

    }
    const company_id = 1;
    const apiKey = 'apikey';
    const token = 'token';

    const getSubjects = (id) => {


        axios.get(`https://soft.metuaa.com/api/op.subject/search?domain=[('company_id', '=', ${id} )]`, {
            headers: {
                'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6ImFkbWluQHNvZnRlZHVjYXQub3JnIiwidWlkIjoyfQ.4xzNf2eP5zZE5kCq-V65N5wJQZTPJEUtGljXCvOapsE',
                'api-key': 'Y5998ZQH6V40G1AM48EJP329SN6DMUR1'
            }
        })
            .then(response => {
                const result = response?.data
                setSubjects(result?.data)
                console.log(response?.data)


            })

    }

    const getClasse= (id) => {


        axios.get(`https://soft.metuaa.com/api/op.course/search?domain=[('company_id', '=', ${id} )]`, {
            headers: {
                'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6ImFkbWluQHNvZnRlZHVjYXQub3JnIiwidWlkIjoyfQ.4xzNf2eP5zZE5kCq-V65N5wJQZTPJEUtGljXCvOapsE',
                'api-key': 'Y5998ZQH6V40G1AM48EJP329SN6DMUR1'
            }
        })
            .then(response => {
                const result = response?.data
                const data =[]
                result?.data.forEach(element => {
                    data.push({label:element.name,value: element.code,subjects:element.subject_ids})
                    
                });
                console.log (data)
                setClasses(data)
                setSubjects(result.data[0].subject_ids)
              // console.log(response?.data)


            })

    }

    useEffect(() => {
        getUser()
        if (companyId !== null || companyId !== undefined) {
            console.log(companyId)
           // getSubjects(companyId)
            getClasse(companyId)
            
        }

    }, [companyId])

    return (
        <View style={styles.contenair}>


            <View style={{ marginTop: 10, height: 60 }}>

                <Dropdown
                    style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={classes}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'listes des classes' : '...'}
                    searchPlaceholder="recherchez..."
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        setValue(item.value);
                        setIsFocus(false);
                        setSubjects(item.subjects)

                    }}
                />

            </View>

            <ScrollView>


                <View style={{ flexDirection: 'column' }}>

                    {subjects && subjects?.map((item) => (

                        <TouchableOpacity onPress={() => { navigation.navigate("Details") }}>
                            <View style={styles.card}>

                                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                    <Image style={styles.logo} source={require("../../assets/cahier.png")} />
                                    <View style={{ flexDirection: "column", marginLeft: 8 }}>
                                        <Text style={{ fontWeight: 'bold' }}>{item?.name}</Text>
                                        <Text style={{ color: "gray", marginTop: 8 }}>{item?.name}</Text>

                                    </View>

                                </View>
                                <View>
                                    <Text style={{ marginHorizontal: 10 }}>{item?.name}</Text>
                                </View>

                            </View>
                        </TouchableOpacity>

                    ))}




                    {/*                     <TouchableOpacity>
                        <View style={styles.card}>

                            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                <Image style={styles.logo} source={require("../../assets/chimie.jpeg")} />
                                <View style={{ flexDirection: "column", marginLeft: 8 }}>
                                    <Text style={{ fontWeight: 'bold' }}>Chimie</Text>
                                    <Text style={{ color: "gray", marginTop: 8 }}>Description du cours de Chimie</Text>

                                </View>

                            </View>
                            <View>
                                <Text style={{ marginHorizontal: 10 }}>heures</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.card}>

                            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                <Image style={styles.logo} source={require("../../assets/geogra.jpeg")} />
                                <View style={{ flexDirection: "column", marginLeft: 8 }}>
                                    <Text style={{ fontWeight: 'bold' }}>Géographie</Text>
                                    <Text style={{ color: "gray", marginTop: 8 }}>Description du cours de Geographie</Text>

                                </View>

                            </View>
                            <View>
                                <Text style={{ marginHorizontal: 10 }}>heures</Text>
                            </View>


                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>

                        <View style={styles.card}>

                            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                <Image style={styles.logo} source={require("../../assets/art.jpeg")} />
                                <View style={{ flexDirection: "column", marginLeft: 8 }}>
                                    <Text style={{ fontWeight: 'bold' }}>Art</Text>
                                    <Text style={{ color: "gray", marginTop: 8 }}>Description du cours d'Art</Text>

                                </View>

                            </View>
                            <View>
                                <Text style={{ marginHorizontal: 10 }}>heures</Text>
                            </View>



                        </View>
                    </TouchableOpacity> */}
                </View>

            </ScrollView>


        </View>



    )
}

export default NotificationIntem


export const styles = StyleSheet.create({
    contenair: {
        justifyContent: 'center',
        alignItems: 'center',
        top: 20,
        flex: 1



    },
    card: {

        height: 90,
        flex: 1,
        borderWidth: 0,
        borderRadius: 8,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        paddingHorizontal: 4,
        elevation: 2,
        width: 350,
        position: "relative",






    },

    logo: {
        height: 60,
        width: 60,
        borderRadius: 300,
        marginHorizontal: 5,
    },



    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },

    placeholderStyle: {
        fontSize: 16,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 8,
        width: 350,
        backgroundColor: 'white',
        zIndex: 1000,
        top: 0,
        position: 'sticky',
        position: "static"

    },
    selectedTextStyle: {
        fontSize: 16,
        fontWeight: "bold"
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },



});
