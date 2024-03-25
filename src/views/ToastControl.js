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
    LayoutAnimation,
    Modal
} from 'react-native';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';

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
    const showToast2 = () => {
        Toast.show({
            type: 'error',
            text1: 'something went wrong',
            text2: 'This is some something 👋'
        });
    }
    const showToast3 = () => {
        Toast.show({
            type: 'info',
            text1: 'something wakls dlaks jlkajd laksj dlaks dj a lasdasdot of info ent wrong',
            text2: 'This is somasd asj dhajs a long long long long long long long long long long long long long long long long long e something 👋',
            position: 'bottom',
            visibilityTime: 1400,
            swipeable: false,
            text1NumberOfLines: 4,
            activeOpacity: 0.5,
            onPress: () => console.log(" YOO ")
        });
    }
    const showToast4 = () => {
        Toast.show({
            type: 'tomatoToast',
            text1: 'custome toast',
            text2: 'This is some something 👋'
        });
    }
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const toggleVis = () => {
        setIsModalVisible(!isModalVisible)
    }

    return (
        <View>
            <Text>{"Toast Control RR: " + rr}</Text>
            <Button title='show toast' onPress={showToast} />
            <Button title='show error' onPress={showToast2} />
            <Button title='show info' onPress={showToast3} />
            <Button title='Show cust' onPress={showToast4} />
            <Button title='toggle vis' onPress={toggleVis} />

            <Modal
                visible={isModalVisible}
                animationType='slide'
                transparent={true}
            >
                <View style={localStyles.fixedCenter}>
                    <Button title='toggle vis' onPress={toggleVis} />
                    <Button title='show info' onPress={showToast3} />
                    <Button title='show toast' onPress={showToast} />
                </View>
                <Toast text1NumberOfLines={3} activeOpacity={0.5}/>
            </Modal>
            <Toast config={toastConfig} />
        </View>
    );
}

const toastConfig = {
    success: (props) => (
        <BaseToast
            {...props}
            style={{ borderLeftColor: 'pink' }}
            contentContainerStyle={{ paddingHorizontal: 15 }}
            text1Style={{
                fontSize: 15,
                fontWeight: '400'
            }}
        />
    ),
    info: (props) => (
        <BaseToast
            {...props}
            style={{ borderLeftColor: 'pink' }}
            contentContainerStyle={{ paddingHorizontal: 15 }}
            text1Style={{
                fontSize: 15,
                fontWeight: '400'
            }}
            text1NumberOfLines={5}
            text2NumberOfLines={5}
        />
    ),
    error: (props) => (
        <ErrorToast
            {...props}
            text1Style={{
                fontSize: 17
            }}
            text2Style={{
                fontSize: 15
            }}
        />
    ),
    /*
      I can consume any custom `props` I want.
      They will be passed when calling the `show` method (see below)
    */
    tomatoToast: ({ text1, props }) => (
        <View style={{ height: 60, width: '100%', backgroundColor: 'tomato', margin: 30 }}>
            <Text>{text1}</Text>
            <Text>{props.uuid}</Text>
        </View>
    )
};



const localStyles = StyleSheet.create({
    fixedCenter: {
        // justifyContent: 'center',
        // alignItems: 'center',
        // flex: 1,
        height: 300,
        backgroundColor: 'lightblue',
        borderWidth: 1,
        borderRadius: 15,
        marginTop: 80,
        overflow: 'hidden'

        // position: 'absolute',
        // top: 0, left: 0, bottom: 0, right: 0
    }
});