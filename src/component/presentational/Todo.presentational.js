import React from 'react'
import { 
    View, 
    Text, 
    StyleSheet,
    Dimensions
} from 'react-native'
import { ScrollView, FlatList } from 'react-native-gesture-handler'
import { colors } from '../../assets/utility/colors'

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const Todopresentational = () => {
    const dummy_data = [
        {
            id:"1",
            nama:""
        },
        {
            id:"2",
            nama:""
        },
        {
            id:"3",
            nama:""
        },
        {
            id:"4",
            nama:""
        },
    ]

    function render_item({item}) {
        return (
            <View style={styles.card_container}>
            </View>
        )
    }

    function day() {
        const date = new Date()
        const date_hours = date.getHours()
        if(date_hours < 4) {
            return "malam"
        } else if (date_hours < 11) {
            return "pagi"
        } else if (date_hours < 16) {
            return "siang"
        } else if(date_hours < 20) {
            return "sore"
        }
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.container}>
                <View style={styles.title_container}>
                    <Text style={styles.txt_subtitle}>
                        Halo, selamat {day()}{' '}
                        <Text style={styles.nested_txt_subtitle}>
                            Rauf
                        </Text>
                    </Text>
                    <Text style={styles.txt_title}>
                        Apa yang akan kamu lakukan hari ini ?
                    </Text>
                </View>
                <FlatList
                    data={dummy_data}
                    renderItem={render_item}
                    numColumns={2}
                    style={{margin:5}}
                    contentContainerStyle={{alignItems:'center'}}
                />
            </View>
        </ScrollView>
    )
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
    }
})

export default Todopresentational
