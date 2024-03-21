import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Button,
    Platform,
    UIManager,
    LayoutAnimation
} from 'react-native';
import Toast from 'react-native-toast-message';

let rr = 0;
export function ToastControl() {
    rr++;
    const showToast = () => {
        Toast.show({
            type: 'success',
            text1: 'Hello',
            text2: 'This is some something 👋'
        });
    }

    return (
        <View>
            <Text>{"Toast Control RR: " + rr}</Text>
            <Button
                title='show toast'
                onPress={showToast}
            >
            </Button>
        </View>
    );
}



const localStyles = StyleSheet.create({

});