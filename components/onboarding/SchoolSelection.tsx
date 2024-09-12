import tw from "twrnc";
import React from "react";
import { SafeAreaView, View, Text } from "react-native";

export default function SchoolSelection() {
  return (
    <SafeAreaView>
      <View style={tw`items-center`}>
        <Text style={tw`text-2xl text-center font-bold pb-164`}>School Selection</Text>
      </View>
    </SafeAreaView>
  );
}
