import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "./Navigation";

export type HomeScreenProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, "Home">;
};