import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <StatusBar style='auto'
        hidden={false}
        translucent={false}
        backgroundColor='gray'
        />
        <Text>How about icons</Text>
        <ScrollView
          horizontal={true}
          style={{ width: '100%', height: 30, backgroundColor: 'red' }}>
          <FontAwesome name="microchip" size={100} color="black" />
          <FontAwesome name="microchip" size={100} color="black" />
          <FontAwesome name="microchip" size={100} color="black" />
          <FontAwesome name="glass" size={100} color="black" />
          <FontAwesome name="film" size={100} color="black" />
          <FontAwesome name="road" size={100} color="black" />
        </ScrollView>
        <FontAwesome name="microchip" size={100} color="black" />
        <FontAwesome name="glass" size={100} color="black" />
        <FontAwesome name="film" size={100} color="black" />
        <FontAwesome name="road" size={100} color="black" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
