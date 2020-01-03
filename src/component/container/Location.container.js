import React, { useState, useEffect } from 'react'
import { View, Text, Platform } from 'react-native'
import Geolocation from '@react-native-community/geolocation'
import { Locationpresentational } from '../presentational/Location.presentational'

export const Locationcontainer = () => {
    const [location,setLocation] = useState({})
    const [loading,setLoading] = useState(true)

    async function loadLocation() {
        try {
            if(Platform.OS == "ios") {
                Geolocation.requestAuthorization()
                Geolocation.getCurrentPosition(async(info,error)=>{
                    if(error){
                        setLocation({...location,lat:'0',long:'0'})
                        setLoading(false)
                    } else {
                        let temp = location
                        const location_data = {
                            lat:info.coords.latitude.toString(),
                            lng:info.coords.longitude.toString(),
                        }
                        console.log(location_data)
                        await setLocation(location_data)
                        setLoading(false)
                        console.log(location)
                    }
                })
            } else {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                    {
                        title:'Location permission',
                        message:'Todo app rauf mau tau lokasi kamu, kasi tau dong',
                        buttonPositive:'Izinkan',
                        buttonNegative:'Tidak'
                    }
                )
                if(granted == PermissionsAndroid.RESULTS.GRANTED) {
                    Geolocation.getCurrentPosition(async(info,error)=>{
                        if(error){
                            setLocation({...location,lat:'0',long:'0'})
                            setLoading(false)
                        } else {
                            let temp = location
                            const location_data = {
                                lat:info.coords.latitude,
                                lng:info.coords.longitude,
                            }
                            temp = location_data
                            await setLocation(location_data)
                            setLoading(false)
                        }
                    })
                } else {
                    setLocation({...location,lat:'0',long:'0'})
                    setLoading(false)
                }
            }
        } catch(e) {
            console.warn(`terjadi error saat permission ${e}`)
        }
    }

    const presentational = (
        <Locationpresentational
            loading={loading}
            location={location}
            loadlocation={loadLocation}
        />
    )

    return presentational
}
