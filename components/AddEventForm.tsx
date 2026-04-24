import { Event } from "@/types/Event";
import { useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";

type AddEventFormProps = {
    onAddEvent: (event: Omit<Event, "id">) => void;
};

export default function AddEventForm({ onAddEvent }: AddEventFormProps) {
    const [title, setTitle] = useState("");
    const[description, setDescription] = useState("");
    const[location, setLocation] = useState("");
    const[hour, setHour] = useState("");
    const[category, setCategory] = useState("");
    const[speaker, setSpeaker] = useState("");


    const handleAddEvent = () => {
        if (!title || !description || !location || !hour || !category || !speaker) {
            Alert.alert("Błąd", "Wszystkie pola są wymagane");
            return;
        }

        if (title.length < 3) {
            Alert.alert("Błąd", "Tytuł musi mieć co najmniej 3 znaki");
            return;
        }

        onAddEvent({ title, description, location, hour, category, speaker });
        setTitle("");
        setDescription("");
        setLocation("");
        setHour("");
        setCategory("");
        setSpeaker("");
    }

    return (
    <View style={styles.container}>
        <TextInput
            style={styles.input}
            placeholder="Tytuł"
            value={title}
            onChangeText={setTitle}
        />
        <TextInput
            style={styles.input}
            placeholder="Opis"
            value={description}
            onChangeText={setDescription}
        />
        <TextInput
            style={styles.input}
            placeholder="Lokalizacja"
            value={location}
            onChangeText={setLocation}
        />
        <TextInput
            style={styles.input}
            placeholder="Godzina"
            value={hour}
            onChangeText={setHour}
        />
        <TextInput
            style={styles.input}
            placeholder="Kategoria"
            value={category}
            onChangeText={setCategory}
        />
        <TextInput
            style={styles.input}
            placeholder="Prowadzący"
            value={speaker}
            onChangeText={setSpeaker}
        />
        <Button title="Dodaj Wydarzenie" onPress={handleAddEvent} />
    </View>
);
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        marginBottom: 10,
    },
});