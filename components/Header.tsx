import { StyleSheet, Text, View } from "react-native";
type HeaderProps = {
    title: string;
};

export default function Header({ title }: HeaderProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#7a99d3ff',
        alignItems: 'center',
        marginTop: 67,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
    }
})