import { StyleSheet, Text, View } from "react-native";
import { DetailsScreenProps } from "../../types/Details";

export default function DetailsScreen({ route }: DetailsScreenProps) {
    const { title, description, location, hour, category, speaker } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text>{description}</Text>
            <Text>{location}</Text>
            <Text>{hour}</Text>
            <Text>{category}</Text>
            <Text>{speaker}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#a0e796ff',
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
    }
})