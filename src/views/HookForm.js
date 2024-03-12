import React, { useState, useEffect, useRef } from "react";
import { Text, ViewBase, View, TouchableOpacity, StyleSheet, TextInput, Button } from "react-native";
import { useForm, Controller } from "react-hook-form"

let renderCount = 0;

export default function HookForm() {
    const {
        control,
        handleSubmit,
        // formState: {errors}
    } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
        },
    })
    const onSubmit = (data) => console.log(data)

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const handleChangeText = (key, value) => {
        setFormData({ ...formData, [key]: value });
    };
    const normalSub = () => {
        // Handle form submission here
        console.log(formData);
    };


    renderCount++;

    useEffect(() => () => renderCount = 0, [])


    return (
        <View>
            <Text>Render Count: {renderCount}</Text>
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        placeholder="First name"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="firstName"
            />
            {
                // console.log(errors)
            }
            <Controller
                control={control}
                rules={{
                    minLength: 100,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        placeholder="Last name"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="lastName"
            />
            <TextInput
                placeholder="Username"
                value={formData.username}
                onChangeText={text => handleChangeText('username', text)}
            />
            <TextInput
                placeholder="Password"
                value={formData.password}
                onChangeText={text => handleChangeText('password', text)}
                secureTextEntry={true}
            />
            <Button title="Normal Submit" onPress={normalSub} />
            <Button title="Hook Sub" onPress={handleSubmit(onSubmit)}></Button>
        </View >
    )
    // useEffect(() => {
    //     return () => {
    //         renderCount = 0;
    //     }
    // }, [])
}