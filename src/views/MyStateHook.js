import React, { useState, useEffect, useRef } from "react";
import { Text, ViewBase, View, TouchableOpacity, StyleSheet } from "react-native";

let renderCount = 0;

const useFetch = ({
}) => {
    const [state, setState] = useState(0)
    const [loading, setLoading] = useState(true)
    const [loading2, setLoading2] = useState(true)
    const [error, setError] = useState(0)
    // const [state, setState] = useState(0)
    const options = {}
    const refetch = async () => {
        // const res = (new Promise()).then(() => { })
        setTimeout(()=>{
            setLoading(false)
        }, 3000)
        setTimeout(()=>{
            setError("something wrong")
        }, 3000)
    }
    useEffect(()=>{
        console.log("useFetch loaded")
        refetch()
    }, [])
    return { state, loading, loading2, error}
}

export const MyStateHook = ({
    ...props
}) => {
    renderCount++;
    const { state, loading2 } = useFetch({})

    // useEffect(()=>{
    //     return ()=>{
    //         renderCount = 0;
    //     }
    // }, [])
    
    useEffect(_=>_=>renderCount=0, [])
    
    return (
        <View style={{padding: 30, backgroundColor: 'lightgreen'}}>
            <Text style={{margin: 5, padding: 12, backgroundColor: 'lightblue'}}>Render Count: {renderCount}</Text>
            <Text>State: {state}</Text>
            <Text>loading2: {loading2 ? 'true' : 'false'}</Text>
        </View>
    )
}

const localStyles = StyleSheet.create({
    addressContainer: {
        padding: 15,
        borderRadius: 15,
        marginHorizontal: 5,
        backgroundColor: 'lightgreen',
        overflow: 'hidden',
    },
})