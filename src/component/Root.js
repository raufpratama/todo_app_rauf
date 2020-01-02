import React from 'react'
import { Image } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { Todocontainer } from './container/Todo.container'
import { Tododetailcontainer } from './container/Tododetail.container'
import Icon  from 'react-native-vector-icons/Ionicons'
import { Locationcontainer } from './container/Location.container'
import { Jsoncontainer } from './container/Json.container'
import { colors } from '../assets/utility/colors'
const images = 
    {
        list:require('../assets/images/list.png'),
        list_active:require('../assets/images/list_active.png'),
        add:require('../assets/images/add.png'),
        internet:require('../assets/images/internet.png'),
        internet_active:require('../assets/images/internet_active.png'),
    }

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
            headerRight:()=> (<Icon name="ios-cog" size={25}/>),
            headerRightContainerStyle:{
                padding:10,
                paddingHorizontal:15
            }
        }
    },
    TodoDetail:{
        screen:Tododetailcontainer,
        navigationOptions:{
            headerTitle:'',
            gestureDirection:'horizontal',
            headerStyle: {
                elevation:0,
                borderBottomWidth:0,
                backgroundColor:'transparent',
            },
            headerRightContainerStyle:{
                padding:10,
                paddingHorizontal:15
            }
        }
    }
})

const InternetStack = createMaterialTopTabNavigator({
    Json:Jsoncontainer,
    Location:Locationcontainer,
},{
    initialRouteName:'Json',
    tabBarOptions:{
        labelStyle:{
            fontSize:16,
        },
        activeTintColor:colors.error,
        inactiveTintColor:colors.placeholder,
        indicatorStyle:{
            backgroundColor:colors.error  
        },
        style:{
            backgroundColor:colors.white,
        },
        upperCaseLabel:false
    }
})

TodoApp.navigationOptions = ({navigation}) => {
    let tabBarVisible;
    if (navigation.state.routes.length > 1) {
        navigation.state.routes.map(route => {
        if (route.routeName === "TodoDetail") {
            tabBarVisible = false;
        } else {
            tabBarVisible = true;
        }
        });
    }
    return {
        tabBarVisible
    };
}

const AppStack = createBottomTabNavigator({
    Todo:{
        screen:TodoApp,
        navigationOptions: {
            tabBarIcon: ({ focused,tintColor }) => {
                // return <Icon type='material-community' name={focused ? 'home' : 'home-outline'} size={25} color={tintColor} />;
                return <Image source={focused ? images.list_active : images.list } style={{width:25,height:25}} resizeMode='contain'/>
            }
        }
    },
    Add:{
        screen:Tododetailcontainer,
        navigationOptions:({navigation}) => {
            return {
                    tabBarIcon: ({ focused,tintColor }) => {
                        // return <Icon type='material-community' name={focused ? 'home' : 'home-outline'} size={25} color={tintColor} />;
                        return <Image source={images.add} style={{width:25,height:25}} resizeMode='contain'/>
                    },
                    headerTitle:'',
                    gestureDirection:'horizontal',
                    headerStyle: {
                        elevation:0,
                        borderBottomWidth:0,
                        backgroundColor:'transparent',
                    },
                    headerRightContainerStyle:{
                        padding:10,
                        paddingHorizontal:15
                    }
            }
        }
    },
    Internet:{
        screen:InternetStack,
        navigationOptions:({navigation}) => {
            return {
                    tabBarIcon: ({ focused,tintColor }) => {
                        // return <Icon type='material-community' name={focused ? 'home' : 'home-outline'} size={25} color={tintColor} />;
                        return <Image source={focused ? images.internet_active : images.internet } style={{width:25,height:25}} resizeMode='contain'/>
                    },
                    headerTitle:'',
                    gestureDirection:'horizontal',
                    headerStyle: {
                        elevation:0,
                        borderBottomWidth:0,
                        backgroundColor:'transparent',
                    },
                    headerRightContainerStyle:{
                        padding:10,
                        paddingHorizontal:15
                    }
            }
        }
    },
})

// AppStack.navigationOptions = ({navigation}) => {
//     let tabBarVisible;
//     if (navigation.state.routes.length > 1) {
//         navigation.state.routes.map(route => {
//         if (route.routeName === "Add") {
//             tabBarVisible = false;
//         } else {
//             tabBarVisible = true;
//         }
//         });
//     }
//     return {
//         tabBarVisible
//     };
// }

export default createAppContainer(AppStack)