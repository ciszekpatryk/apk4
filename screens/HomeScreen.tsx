import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import AddEventForm from "../../components/AddEventForm";
import ListItem from "../../components/ListItem";
import { events as initialEvents } from "../../data/events";
import { Event } from "../../types/Event";
import { HomeScreenProps } from "../../types/Home";
import { RootStackParamList } from "../../types/Navigation";

type HomeScreen = {
    navigation: NativeStackNavigationProp<RootStackParamList, "Home">;
};

export default function HomeScreen({ navigation }: HomeScreenProps) {
    const [events, setEvents] = useState<Event[]>(initialEvents);
    const addEvent = (newEvent: Omit<Event, "id">) => {
        const eventToAdd: Event = {
            id: Date.now(),
            ...newEvent,
        };

        setEvents((prevEvents) => [eventToAdd, ...prevEvents]);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Wydarzenia</Text>
            <AddEventForm onAddEvent={addEvent} />
            <FlatList
                data={events}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }: {item: Event }) => (
                    <ListItem
                    title={item.title}
                    description={item.description}
                    location={item.location}
                    hour={item.hour}
                    category={item.category}
                    speaker={item.speaker}
                    onPress={() =>
                        navigation.navigate("Details", {
                            id: item.id,
                            title: item.title,
                            description: item.description,
                            location: item.location,
                            hour: item.hour,
                            category: item.category,
                            speaker: item.speaker,
                        })
                    }
                    />
            ) } />
        </View>

        // <ScrollView>
        //     <Button title="Wróć" onPress={() => setShowEvents(false)} />

        //     {events.map((event) => (
        //         <ListItem
        //             key={event.id}
        //             title={event.title}
        //             description={event.description}
        //             location={event.location}
        //             onPress={() =>
        //                 navigation.navigate("Details", {
        //                     title: event.title,
        //                     description: event.description,
        //                     location: event.location,
        //                 })
        //             }
        //         />
        //     ))}
        // </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#7a99d3ff',
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    }
})