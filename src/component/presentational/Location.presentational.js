import React, { useEffect } from 'react'
import { View, Text, ActivityIndicator, StyleSheet, Dimensions } from 'react-native'
import { WebView } from 'react-native-webview'
import { colors } from '../../assets/utility/colors'

const screenWidth = Dimensions.get('window').width

export const Locationpresentational = props => {
    const location_url = `https://www.google.com/maps/@${props.location.lng},${props.location.lat},17z`

    useEffect(() => {
        props.loadlocation()
        return () => {
            props.loadlocation();
        };
    }, [])

    let content = (
        <ActivityIndicator 
            style={styles.loading} 
            size={30} 
            color={colors.error}
        />
    )

    if(!props.loading) {
        content = (
            <View style={styles.container}>
                <WebView
                    source={{uri:location_url}}
                    style={styles.webview_container}
                />
                <View style={styles.contet_container}>
                    <Text style={styles.txt_title}>
                        Your Location
                    </Text>
                    <Text style={styles.txt_subtitle}>
                        latitude : {props.location.lat}{'\n'}
                        longitude : {props.location.lng}
                    </Text>
                </View>
            </View>
        )
    }

    return content;
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    loading:{
        flex:1,
        justifyContent:'center',
        alignSelf:'center'
    },
    webview_container:{
        width:screenWidth,
        height:180,
        backgroundColor:colors.placeholder
    },
    contet_container:{
        padding:16
    },
    txt_title:{
        fontSize:20,
        fontWeight:"bold"
    },
    txt_subtitle:{

    }
})
