import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import { Todocontainer } from './container/Todo.container'
import Icon  from 'react-native-vector-icons/Ionicons'
Icon.loadFont();

const TodoApp = createStackNavigator({
    TodoMain:{
        screen:Todocontainer,
        navigationOptions:{
            headerTitle:'',
            gestureDirection:'horizontal',
            headerStyle: {
                elevation:0,
                borderBottomWidth:0,
                backgroundColor:'transparent',
            },
            headerRight:<Icon name="ios-cog" size={25}/>,
            headerRightContainerStyle:{
                padding:10,
                paddingHorizontal:15
            }
        }
    }
})

export const MainApp = createAppContainer(TodoApp)