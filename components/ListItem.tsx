import { ListItemProps } from '@/types/List';
import { StyleSheet, Text, View } from 'react-native';

import { TouchableOpacity } from "react-native";

export default function ListItem({ title, onPress }: ListItemProps) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#7a99d3ff',
        alignItems: 'center',
        borderRadius: 10,
        width: '90%',
        alignSelf: 'center',
        marginVertical: 5,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
    }
})