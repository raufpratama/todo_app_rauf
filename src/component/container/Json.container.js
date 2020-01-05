import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { Jsonpresentational } from '../presentational/Json.presentational';
import { urls, header } from '../../assets/utility/url.header';

export const Jsoncontainer = () => {
    const [fetchedData,setData] = useState('')
    const [loading,setLoading] = useState(true)
    const url = `${urls.json_placeholder}/posts`

    useEffect(() => {
        getData();
    }, [])

    function getData() {
        fetch(url,{
            headers:header,
            method:'GET'
        })
        .then(response => response.json())
        .then(json => {
            setData(json)
            setLoading(false)
        })
    }

    let presentational = (
        <Jsonpresentational
            data={fetchedData}
            loading={loading}
        />
    )

    return presentational
}
