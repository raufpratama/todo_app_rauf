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
                    id:10,
                    todo:'Ambil tiket',
                    done:false,
                },
                {
                    id:24213,
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
                    id:214,
                    todo:'Ambil tiket',
                    done:true,
                },
                {
                    id:2134445,
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
