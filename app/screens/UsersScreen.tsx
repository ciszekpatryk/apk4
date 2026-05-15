import UserItem from "@/components/UserItem";
import { useFetch } from "@/hooks/useFetch";
import { User } from "@/types/User";
import {
    ActivityIndicator,
    FlatList,
    StyleSheet,
    Text,
    View,
} from "react-native";
export default function UsersScreen() {
const {
data: users,
isLoading,
error,
} = useFetch<User[]>("https://jsonplaceholder.typicode.com/users");
if (isLoading) {
return (
<View style={styles.centered}>
<ActivityIndicator size="large" />
<Text style={styles.infoText}>Ładowanie użytkowników...</Text>
</View>
);
}
if (error) {
return (
<View style={styles.centered}>
<Text style={styles.errorText}>{error}</Text>
</View>
);
}
return (
<View style={styles.container}>
<Text style={styles.header}>Użytkownicy</Text>
<FlatList
data={users ?? []}
keyExtractor={(item) => item.id.toString()}
renderItem={({ item }) => (
<UserItem
name={item.name}
username={item.username}
email={item.email}
onPress={() => console.log("Kliknięto użytkownika:", item.id)}
/>
)}
/>
</View>
);
}
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: "#f2f2f2",
paddingTop: 20,
},
header: {
fontSize: 24,
fontWeight: "bold",
marginHorizontal: 12,
marginBottom: 12,
},
centered: {
flex: 1,
justifyContent: "center",
alignItems: "center",
},
infoText: {
marginTop: 12,
fontSize: 16,
},
errorText: {
fontSize: 16,
color: "red",
textAlign: "center",
marginHorizontal: 20,
},
});