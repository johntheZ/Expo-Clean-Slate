import React, { useLayoutEffect, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { MyAnimated } from './views/MyAnimated';
import { MyIcons } from './views/MyIcons';
import ReactAnimated from './views/ReactAnimated';
import { LayoutAnimationed } from './views/LayoutAnimationed';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
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
      <FlatList
        style={{}}
        data={screenNames}
        keyExtractor={(item) => item}
        renderItem={renderEachOption}
      />
    </View>
  );
}


export function MyStacks() {
  return (
    <Stack.Navigator
      initialRouteName={"HomeScreen"}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="MyAnimated" component={MyAnimated} />
      <Stack.Screen name="ReactAnimated" component={ReactAnimated} />
      <Stack.Screen name="LayoutAnimationed" component={LayoutAnimationed} />
      <Stack.Screen name="MyIcons" component={MyIcons} />
    </Stack.Navigator>
  );
}