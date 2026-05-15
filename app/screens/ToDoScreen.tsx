// screens/TodosScreen.tsx

import React from "react";
import {
    ActivityIndicator,
    FlatList,
    StyleSheet,
    Text,
    View,
} from "react-native";

import { useFetch } from "@/hooks/useFetch";
import { Todo } from "@/types/Todo";

export const TodosScreen = () => {
  const {
    data: todos,
    isLoading: loading,
    error,
  } = useFetch<Todo[]>("https://jsonplaceholder.typicode.com/todos");

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text>Błąd pobierania danych</Text>
      </View>
    );
  }

  if (!loading && !error && todos?.length === 0) {
    return (
    <View style={styles.center}>
    <Text>Brak danych do wyświetlenia.</Text>
    </View>
    );
}
  
  return (
    <FlatList
      data={todos?.slice(0, 20)}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.title}>{item.title}</Text>

          <Text style={styles.status}>
            Status: {item.completed ? "wykonane" : "niewykonane"}
          </Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  list: {
    padding: 16,
  },

  card: {
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    backgroundColor: "#f2f2f2",
  },

  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },

  status: {
    fontSize: 14,
  },
});