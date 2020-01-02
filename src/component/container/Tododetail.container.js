import React, { useContext, useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, AsyncStorage } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
Icon.loadFont()

import { AppContext } from '../../../App'
import { Tododetailpresentational } from '../presentational/Tododetail.presentational'
import { randomize_id, randomize_color } from '../../assets/functions/randomize'
import { times } from '../../assets/utility/time'
import { token } from '../../assets/utility/tokens'

export const Tododetailcontainer = props => {
    const [state,changeState] = useContext(AppContext)
    const date = new Date();
    let card_date = `${date.getDate()} ${times.month[date.getMonth()]}`
    const [loading,setLoading] = useState(true)
    const new_state = 
        {
            id:randomize_id(),
            title:'Todo ' + card_date,
            created_on:date,
            bg_color:randomize_color(),
            tasks:[]
        }
    const id_todo = props.navigation.getParam('id',false)
    const [new_todo,addTodo] = useState('')
    const [detail_todo,changeDetailTodo] = useState(id_todo ? state.data[state.data.findIndex(contexts => contexts.id == id_todo)] : new_state)
    const [title,changeTitle] = useState(id_todo ? detail_todo.title : new_state.title)
    const stt_index = state.data.findIndex(contexts => contexts.id == id_todo)

    const onChangeTodo = (e) => {
        addTodo(e)
    }

    useEffect(() => {
        addNewCard()
        return () => {
            
        };
    }, [])

    const addNewCard = async() => {
        if(!id_todo) {
            let temp = await state.data.push(new_state)
            await changeDetailTodo({...detail_todo,new_state})
            await changeState({...state,temp})
            await AsyncStorage.setItem(token,JSON.stringify(state))
            setLoading(false)
        } else {
            setLoading(false)
        }
    }

    const addNewTodo = async() => {
        if(new_todo.length > 0) {
            let temp_state = state.data
            let new_todo_data = {
                id:randomize_id(),
                todo:new_todo,
                done:false
            }
            const newest = detail_todo.tasks.push(new_todo_data)
            changeDetailTodo({...detail_todo,newest})
            await changeState({...state,temp_state})
            await AsyncStorage.setItem(token,JSON.stringify(state))
            addTodo('')
        }
    }
    
    const onChangeTitle = (e) => {
        changeTitle(e)
    }

    const updateTitle = async() => {
        if(title.length > 0) {
            let temp_state = state.data
            detail_todo.title = title
            temp_state[stt_index] = detail_todo
            await changeDetailTodo({...detail_todo,detail_todo})
            await changeState({...state,temp_state})
            await AsyncStorage.setItem(token,JSON.stringify(state))
        }
    }

    const removeTodo = async(id) => {
        let temp_state = state.data
        let temp = detail_todo.tasks.filter(tasks => tasks.id !== id)
        detail_todo.tasks = temp
        temp_state[stt_index] = detail_todo
        await changeDetailTodo({...detail_todo,temp})
        await changeState({...state,temp_state})
        await AsyncStorage.setItem(token,JSON.stringify(state))
    }

    const onPressTodo = async(id) => {
        let temp_state = state.data
        let temp = detail_todo.tasks.findIndex(tasks => tasks.id == id)
        detail_todo.tasks[temp].done = !detail_todo.tasks[temp].done
        temp_state[stt_index] = detail_todo
        await changeDetailTodo({...detail_todo,detail_todo})
        await changeState({...state,temp_state})
        await AsyncStorage.setItem(token,JSON.stringify(state))
    }

    const presentational = (
        <Tododetailpresentational
            onpresstodo={onPressTodo}
            detail_todo={detail_todo}
            new_todo={new_todo}
            onchangetodo={onChangeTodo}
            addnewtodo={addNewTodo}
            removetodo={removeTodo}
            updatetitle={updateTitle}
            onchangetitle={onChangeTitle}
            title={title}
            loading={loading}
        />
    )

    return presentational
}
