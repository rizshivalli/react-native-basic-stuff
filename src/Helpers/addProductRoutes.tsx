import Center from "../Components/Center";
import { Text } from "react-native";
import React from "react";
import { HomeStackNavProps } from "../HomeStack/HomeParamsList";

function Product({ route }: HomeStackNavProps<"Product">) {
  return (
    <Center>
      <Text>{route.params.name}</Text>
    </Center>
  );
}

export const addProductRoutes = (Stack: any) => {
  return (
    <Stack.Screen
      options={({ route }: any) => ({
        headerTitle: `Product: ${route.params.name}`,
      })}
      name="Product"
      component={Product}
    />
  );
};
