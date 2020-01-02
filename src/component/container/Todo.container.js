import React, { useState, useContext, useEffect } from 'react'
import { View, Text, TextInput, StyleSheet, Button, AsyncStorage } from 'react-native'

import { colors } from '../../assets/utility/colors'
import { times } from '../../assets/utility/time'
import { Todopresentational } from '../presentational/Todo.presentational'
import { AppContext } from '../../../App'
import { token } from '../../assets/utility/tokens'

export const Todocontainer = props => {
    const [state,changeState] = useContext(AppContext)
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        getData()
        return () => {
            cleanup
        };
    }, [input])

    const getData = async() => {
        let res = await AsyncStorage.getItem(token.STATE_TOKEN)
        if(res) {
            let parse_res = JSON.parse(res)
            changeState({...state,parse_res})
            setLoading(false)
        } else {
            setLoading(false)
        }
    }

    function day () {
        const date = new Date()
        const date_hours = date.getHours()
        if(date_hours < 4) {
            return "evening"
        } else if (date_hours < 11) {
            return "morning"
        } else if (date_hours < 16) {
            return "day"
        } else if(date_hours < 20) {
            return "afternoon"
        }
    }

    function time_rn () {
        const date = new Date()
        return `${times.month[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
    }

    let content = (
        <Todopresentational
            day={day}
            time={time_rn}
            navigation={props.navigation}
        />
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
