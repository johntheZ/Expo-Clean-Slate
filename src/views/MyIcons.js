import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export function MyIcons() {
    return (
        <View style={styles.container}>
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
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});