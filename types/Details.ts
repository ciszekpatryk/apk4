import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "./Navigation";

export type DetailsScreenRouteProp = RouteProp<RootStackParamList, "Details">;

export type DetailsScreenProps = {
    route: DetailsScreenRouteProp;
};
