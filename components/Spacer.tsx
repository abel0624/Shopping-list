import { View, Text, StyleProp, ViewStyle, DimensionValue } from "react-native";
import React from "react";

type SpacerProps = {
  width: DimensionValue | undefined;
  heigth: DimensionValue | undefined;
};

const Spacer = ({ width = "100%", heigth = 40 }: SpacerProps) => {
  return <View style={{ width, height: heigth }} />;
};

export default Spacer;
