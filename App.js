/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState, useContext, createContext} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar
} from 'react-native';
import {Todocontainer} from './src/component/container/Todo.container';
import MainApp from './src/component/Root'

export const AppContext = createContext();

const App = () => {
    const states = {
        data :[
        {
            id:213421,
            title:'Trip To Paris',
            created_on:'7 Nov 2019',
            bg_color:"#FFA000",
            tasks: [
                {
                    task_id:10,
                    todo:'Ambil tiket',
                    done:false,
                },
                {
                    task_id:24213,
                    todo:'Booking kamar',
                    done:true
                },
            ]
        },
        {
            id:21243,
            title:'Pergi Umroh',
            created_on:'7 Nov 2019',
            bg_color:"#7B20A1",
            tasks: [
                {
                    task_id:214,
                    todo:'Ambil tiket',
                    done:true,
                },
                {
                    task_id:2134445,
                    todo:'Booking kamar',
                    done:false
                },
            ]
        }
    ]}
    const [state, changeState] = useState(states)

    return (
        <AppContext.Provider
            value={[state,changeState]}
        >
            <MainApp/>
        </AppContext.Provider>
    );
};

export default App;
