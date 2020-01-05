import React, { useEffect, useState, useContext } from 'react'
import { 
    View, 
    Text, 
    StyleSheet,
    Dimensions,
    Image,
    ActivityIndicator,
    TouchableWithoutFeedback,
    FlatList
} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import App, { AppContext } from '../../../App'
import placeholder from '../../assets/images/place_holder.png'
import Icon  from 'react-native-vector-icons/Ionicons'
Icon.loadFont();

import { colors } from '../../assets/utility/colors'

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export const Todopresentational = props => {
    const [state,changeState] = useContext(AppContext)

    function render_item_tasks({item}) {
        return (
            <Text key={item.id} style={[styles.txt_todo,{textDecorationLine:item.done ? 'line-through' : null}]}>
                {item.todo}
            </Text>
        )
    }

    function render_item({item}) {
        return (
            <TouchableWithoutFeedback key={item.id} onPress={()=> props.navigation.navigate('TodoDetail', {id:item.id})}>
                <View key={item.id} style={[styles.card_container,{backgroundColor:item.bg_color}]}>
                    <Text style={styles.txt_card_title}>
                        {item.title}
                    </Text>
                    <FlatList
                        data={item.tasks}
                        renderItem={render_item_tasks}
                    />
                </View>
            </TouchableWithoutFeedback>
        )
    }

    let add_button = (
        <TouchableOpacity>
            <View style={styles.btn_add}>
                <Icon name="ios-add" color={colors.placeholder} size={20}/>
            </View>
        </TouchableOpacity>
    )

    let main_content = (
        <View 
            style={[styles.container]}
        >
            {state.data.length > 0 ? (
                <FlatList
                    data={state.data}
                    renderItem={render_item}
                    numColumns={2}
                    style={{margin:5}}
                    contentContainerStyle={{alignItems:state > 1 ? 'center' : 'flex-start'}}
                />
            ) : (
                <>
                    <Image 
                        source={placeholder} 
                        style={styles.img_placeholder}
                    />
                        <Text 
                            style={styles.txt_description} 
                            numberOfLines={2}
                        >
                        You still don't have todo, let's add one !
                    </Text>
                    {add_button}
                </>
            )}  
        </View>
    )

    let content = <ActivityIndicator color={colors.error}/>

    if(!props.loading) {
        content = (
            <ScrollView style={styles.container} contentContainerStyle={{flexGrow:1}}>
                <View style={styles.container}>
                    <View style={styles.title_container}>
    
                        {/* Header subtitle */}
                            <Text style={styles.txt_subtitle}>
                                Hello, good {props.day()}{' '}
                                <Text style={styles.nested_txt_subtitle}>
                                    Rauf
                                </Text>
                            </Text>
                        {/* End of header subtitle */}
    
                        {/* Header title */}
                            <Text style={styles.txt_title}>
                                What will you do today ?
                            </Text>
                        {/* End of Header title */}
                        
                        {/* subtitle */}
                        <Text style={{marginHorizontal:5}}>
                            {props.time()}
                        </Text>
                        {/* end of subtitle */}

                    </View>

                    {main_content}
                </View>
            </ScrollView>
        )
    }

    return content
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:colors.white
    },
    title_container : {
        padding:16
    },
    txt_title : {
        fontSize:25,
        fontWeight:"bold"
    },
    txt_subtitle : {
        fontSize:14,
        marginVertical:10
        
    },
    nested_txt_subtitle : {
        fontWeight:"bold"
    },
    card_container: {
        padding:10,
        backgroundColor:colors.placeholder,
        width:screenWidth * 45/100,
        margin:7.5,
        borderRadius:5,
        height:screenHeight * 35/100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    flatlist_container: {
        margin:5
    },
    flatlist_content_container:{
        alignItems:'center'
    },
    img_placeholder : {
        width:150,
        height:150
    },
    txt_description:{
        fontSize:12,
        marginVertical:10,
        color:colors.placeholder,
        maxWidth:120
    },
    btn_add : {
        borderRadius:20,
        borderWidth:1,
        width:30,
        height:30,
        borderColor:colors.placeholder,
        justifyContent:'center',
        alignItems:'center'
    },
    txt_btn_add : {
        fontSize:20,
        color:colors.placeholder
    },
    txt_card_title : {
        fontWeight:"bold",
        fontSize:16,
        color:colors.white,
        margin:5,
        marginBottom:10
    },
    txt_todo: {
        margin:2.5,
        marginHorizontal:5,
        fontSize:12
    }
})