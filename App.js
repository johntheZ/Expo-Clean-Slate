import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MyStacks } from './src/Stacks';
import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

let rr = 0;
export default function App() {
  rr++;
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto'
        hidden={false}
        translucent={false}
        backgroundColor='gray'
      />
      <Text> {"Root SafeAreaView rr: " + rr} </Text>
      <NavigationContainer>
        <MyStacks />
        <Toast />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
