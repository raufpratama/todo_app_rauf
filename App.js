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
import { MainApp } from './src/component/Root'

const AppContext = createContext();

const App = () => {
    const states = []
    const [state, changeState] = useState(states)

    return (
        // <>   <StatusBar barStyle="dark-content" />   <SafeAreaView>     <ScrollView
        // contentInsetAdjustmentBehavior="automatic"       style={styles.scrollView}>
        // <Header />       {global.HermesInternal == null ? null : (         <View
        // style={styles.engine}>           <Text style={styles.footer}>Engine:
        // Hermes</Text>         </View>       )}       <View style={styles.body}>
        // <View style={styles.sectionContainer}>           <Text
        // style={styles.sectionTitle}>Step One</Text>           <Text
        // style={styles.sectionDescription}>             Edit <Text
        // style={styles.highlight}>App.js</Text> to change this             screen and
        // then come back to see your edits.           </Text>         </View>
        // <View style={styles.sectionContainer}>           <Text
        // style={styles.sectionTitle}>See Your Changes</Text>           <Text
        // style={styles.sectionDescription}>             <ReloadInstructions />
        // </Text>         </View>         <View style={styles.sectionContainer}>
        // <Text style={styles.sectionTitle}>Debug</Text>           <Text
        // style={styles.sectionDescription}>             <DebugInstructions />
        // </Text>         </View>         <View style={styles.sectionContainer}>
        // <Text style={styles.sectionTitle}>Learn More</Text>           <Text
        // style={styles.sectionDescription}>             Read the docs to discover what
        // to do next:           </Text>         </View>         <LearnMoreLinks />
        // </View>     </ScrollView>   </SafeAreaView> </>
        <AppContext.Provider>
            <MainApp/>
        </AppContext.Provider>
    );
};

export default App;
