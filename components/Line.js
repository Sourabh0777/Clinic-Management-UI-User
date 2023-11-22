import { View, Text } from "react-native";
import React from "react";
import Colors from "../App/Shared/Colors";

const Line = () => {
  return (
    <View
      style={{
        width: "100%",
        borderWidth: 1,
        borderColor: Colors.LIGHT_GRAY,
        borderRadius: 50,
        marginVertical: 5,
      }}
    ></View>
  );
};

export default Line;
