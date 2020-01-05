import React from 'react'
import {View, Text, StyleSheet, FlatList, ActivityIndicator} from 'react-native'
import { colors } from '../../assets/utility/colors'

export const Jsonpresentational = props => {

    const render_item = ({item}) => (
        <View key={item.id} style={styles.list_container}>
            <Text style={styles.txt_list_title}>
                {item.title}
            </Text>
            <Text style={styles.txt_sub_title}>
                {item.body}
            </Text>
            <View style={styles.divider}/>
        </View>
    )

    let content;

    if (props.loading) {
        content = (
            <ActivityIndicator style={styles.loading} size={30} color={colors.error}/>
        )
    } else {
        content = (
            <View style={styles.container}>
                <Text style={styles.txt_main_title}>
                    Lorem ipsum
                </Text>
                <FlatList
                    data={props.data}
                    renderItem={render_item}
                />
            </View>
        )
    }

    return content;
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10
    },
    loading:{
        flex:1,
        justifyContent:'center',
        alignSelf:'center'
    },
    list_container:{
        margin:5
    },
    txt_main_title:{
        fontWeight:"bold",
        fontSize:20
    },
    txt_list_title:{
        fontWeight:"bold",
        fontSize:14
    },
    txt_sub_title:{
        fontSize:12
    },
    divider:{
        marginTop:5,
        borderBottomWidth:1,
        borderColor:colors.placeholder
    }
})
