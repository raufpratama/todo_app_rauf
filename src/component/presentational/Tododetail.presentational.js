import React, { useContext, useEffect, useState } from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput, 
    FlatList, 
    TouchableOpacity, 
    Image, 
    Button,
    SafeAreaView,
    ActivityIndicator
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import { colors } from '../../assets/utility/colors'
import unchecked from '../../assets/images/uncheck.png'
import check from '../../assets/images/checked.png'
import { AppContext } from '../../../App'
import { ScrollView } from 'react-native-gesture-handler'

export const Tododetailpresentational = props => {
    const [state,changeState] = useContext(AppContext)

    function render_item({item}) {
        return (
                <View style={styles.todo_container}>
                    <TouchableOpacity onPress={()=>props.onpresstodo(item.task_id)}>
                        <View style={styles.todo_container_child}>
                        <Image 
                            source={item.done ? check : unchecked} 
                            style={styles.list_check_img}
                        />
                        <Text 
                            style={styles.txt_todo}
                        >
                                {item.todo}
                        </Text>
                        </View>
                    </TouchableOpacity>
                    <Icon name="ios-close" size={25} color={colors.placeholder} onPress={()=>props.removetodo(item.task_id)}/>
                </View>
        )
    }

    let content;

    if(props.loading) {
        content = (
            <ActivityIndicator 
                style={styles.loading} 
                size={30} 
                color={colors.error}
            />
        )
    } else {
        content = (
            <ScrollView style={styles.container}>
                <SafeAreaView>
                    <View>
                    {/* Header title */}
                        <TextInput 
                            style={styles.txt_header_title} 
                            value={props.title}
                            onChangeText={props.onchangetitle}
                            onEndEditing={props.updatetitle}
                            onSubmitEditing={props.updatetitle}
                            placeholder="Todo title"
                        />
                    {/* End Of Header title */}

                    {/* list todo / tasks */}
                        <FlatList
                            data={props.detail_todo.tasks}
                            extraData={props.detail_todo}
                            renderItem={render_item}
                            style={styles.list_todo_container}
                            keyExtractor={(item,index)=>item.task_id.toString()}
                        />
                    {/* end of list todo / tasks */}

                    {/* add todo */}
                        <TextInput 
                            style={styles.todo_container} 
                            value={props.new_todo}
                            onChangeText={props.onchangetodo}
                            placeholder="Add todo"
                        />
                    {/* end of add todo */}

                    {/*  */}
                        <TouchableOpacity onPress={props.addnewtodo}>
                            <View style={styles.btn_add}>
                                <Icon name="ios-add" color={colors.placeholder} size={20}/>
                            </View>
                        </TouchableOpacity>
                    {/*  */}
                    </View>
                </SafeAreaView>
            </ScrollView>
            )
        }

    return content;
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:colors.white,
        padding:16,
    },
    txt_header_title : {
        fontWeight:"bold",
        fontSize:25
    },
    list_todo_container:{
        marginTop:10,
        flexGrow:0
    },
    todo_container:{
        padding:10,
        borderBottomWidth:1,
        borderBottomColor:colors.placeholder,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    todo_container_child:{
        flexDirection:'row'
    },
    list_check_img:{
        width:20,
        height:20,
    },
    txt_todo : {
        marginHorizontal:10
    },
    btn_add : {
        borderRadius:20,
        borderWidth:1,
        width:30,
        height:30,
        borderColor:colors.placeholder,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        marginTop:50
    },
    loading:{
        flex:1,
        justifyContent:'center',
        alignSelf:'center'
    }
})
