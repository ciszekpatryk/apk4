// import Header from "@/components/Header";
// import ListItem from "@/components/ListItem";
// import { useState } from "react";
// import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   const events = [
//     { id: 1, title: "Wykład React", description: "Sala A1. 10:00", location: "Gmach Główny"},
//     { id: 2, title: "Warsztaty AI", description: "Sala B2. 12:00", location: "Gmach Mechaniki"},
//     { id: 3, title: "Spotkanie koła", description: "Sala C3. 15:00", location: "Gmach Mechaniki"},
//     { id: 4, title: "Zajęcia uzupełniające", description: "Sala D4. 16:00", location: "Gmach Główny"},
//     { id: 5, title: "Godzina rektorska", description: "Cały kampus. 13:00", location: "Gmach Główny"},
//   ]
//   const [count, setCount] = useState<number>(0);
//   return (
//     <View style={styles.container}>
//       <Header title="Smart Campus" />
//       <ScrollView>
//         {events.map((event) => (
//           <ListItem
//             key={event.id}
//             title={event.title}
//             description={event.description}
//             location={event.location}
//           />
//         ))}
//       </ScrollView>
//       <Text style={styles.title}>Licznik</Text>
//       <Text style={styles.counter}>{count}</Text>
//       <Button title="Zwiększ" onPress={() => setCount(count + 1)} />
//       <Button title="Zmniejsz" onPress={() => setCount(count - 1)} />
//     </View>
//   );
  
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#84d37aff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     title: {
//         fontSize: 28,
//         fontWeight: 'bold',
//     },
//     subtitle: {
//         fontSize: 16,
//         marginTop: 10,
//     },
//     counter: {
//         fontSize: 40,
//     },
// });


import { createNativeStackNavigator } from "@react-navigation/native-stack";


import { RootStackParamList } from "../../types/Navigation";
import DetailsScreen from "../screens/DetailScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ title: "Strona główna" }}
      />
      <Stack.Screen 
        name="Details" 
        component={DetailsScreen} 
        options={{ title: "Szczegóły wydarzenia" }}
      />
    </Stack.Navigator>
  );
}