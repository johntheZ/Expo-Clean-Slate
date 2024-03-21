import React, { useLayoutEffect, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { MyAnimated } from './views/MyAnimated';
import { MyIcons } from './views/MyIcons';
import ReactAnimated from './views/ReactAnimated';
import { LayoutAnimationed } from './views/LayoutAnimationed';
import { MyStateHook } from './views/MyStateHook';
import HookForm from './views/HookForm';

const Stack = createNativeStackNavigator();
let hr = 0;
function HomeScreen({ navigation }) {
  hr++;
  const state = useNavigation().getState();
  const screenNames = state.routeNames

  useLayoutEffect(() => {
    // navigation.setOptions({ title: 'My Helper App', });
    // return () => {
    //     navigation.setOptions({
    //         title: 'Home'
    //     });
    // };
  }, [navigation]);
  useEffect(() => {
    // Reset the title when the component unmounts (back button pressed)
    return () => {
      navigation.setOptions({
        title: 'Home'
      });
    };
  }, [navigation]);

  function renderEachOption({ item }) {
    return (
      <TouchableOpacity onPress={() => { navigation.push(item) }}>
        <Text style={{ padding: 20, backgroundColor: "white" }}>{item}</Text>
      </TouchableOpacity>
    )
  }
  return (
    <View style={{ padding: 10, flex: 1 }}>
      <Text> {"HomeScreen rr: " + rr} </Text>
      <FlatList
        style={{}}
        data={screenNames}
        keyExtractor={(item) => item}
        renderItem={renderEachOption}
      />
    </View>
  );
}

let rr = 0;
export function MyStacks() {
  rr++;
  return (
    <>
      <Text> {"MyStacks rr: " + rr} </Text>
      <Stack.Navigator initialRouteName={"HomeScreen"} >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        {/* hook related */}
        <Stack.Screen name="MyStateHook" component={MyStateHook} />
        <Stack.Screen name="HookForm" component={HookForm} />
        {/* animation related */}
        <Stack.Screen name="MyAnimated" component={MyAnimated} />
        <Stack.Screen name="LayoutAnimationed" component={LayoutAnimationed} />
        <Stack.Screen name="ReactAnimated" component={ReactAnimated} />
        {/* icons related */}
        <Stack.Screen name="MyIcons" component={MyIcons} />
      </Stack.Navigator>
    </>
  );
}