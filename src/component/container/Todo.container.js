import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'

import { colors } from '../../assets/utility/colors'
import Todopresentational from '../presentational/Todo.presentational'

export const Todocontainer = () => {
    const [jabatan,setJabatan] = useState()
    const [nama,setNama] = useState()
    const [anggota,setAnggota] = useState([])
    const [formStatus,setFormStatus] = useState(true)

    const changeJabatan = (e) => {
        setJabatan(e)
    }

    const changeNama = (e) => {
        setNama(e)
    }

    const submitAnggota = () => {
        if(jabatan && nama) {
            const new_data = {
                nama:nama,
                jabatan:jabatan,
            }
            const submit_data = [...anggota,new_data]
            setAnggota(submit_data)
        } else {
            setFormStatus(false)
        }
    }

    const content = (
        // <View style={styles.container}>
        //     <Text>Nama</Text>
        //     <TextInput style={styles.txt_input} onChangeText={changeNama}></TextInput>
        //     <Text>Jabatan</Text>
        //     <TextInput style={[styles.txt_input,{borderBottomColor:formStatus ? 'black' : colors.error}]} onChangeText={changeJabatan}></TextInput>
        //     <Button onPress={submitAnggota} title='submit'/>
        //     {anggota ? anggota.map(anggotas => (
        //         <>
        //             <Text>{anggotas.nama}</Text>
        //             <Text>{anggotas.jabatan}</Text>
        //         </>
        //     )) : null}
        // </View>
        <Todopresentational/>
    )

    return content
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        backgroundColor:colors.white
    },
    txt_input : {
        minWidth:100,
        maxWidth:150,
        borderBottomWidth:1,
        borderBottomColor:'black'
    }
})
