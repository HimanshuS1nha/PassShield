import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import { Entypo } from "@expo/vector-icons";

const Pin = ({ pin, setPin }) => {
  const numbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["X", 0, "C"],
  ];

  const handlePress = (num) => {
    if (num === "X") {
      if (pin.length === 1 || 0) {
        setPin("");
        return;
      }
      setPin((prev) => Math.floor(parseInt(prev) / 10).toString());
      return;
    } else if (num === "C") {
      setPin("");
      return;
    }
    setPin((prev) => (prev = prev + num));
  };
  return (
    <View style={tw`items-center`}>
      <TextInput
        style={tw`border-b border-black w-60 text-white text-center text-xl`}
        secureTextEntry
        editable={false}
        showSoftInputOnFocus={false}
        value={pin}
        maxLength={6}
      />

      <View style={tw`gap-y-7 items-center mt-8`}>
        {numbers.map((number, i) => {
          return (
            <View style={tw`flex-row gap-x-8`} key={i}>
              {number.map((num) => {
                return (
                  // <>
                  <TouchableOpacity
                    style={tw`bg-white self-start w-16 h-16 justify-center items-center rounded-full`}
                    onPress={() => handlePress(num)}
                    key={num}
                  >
                    <Text style={tw`text-xl font-bold`}>{num}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default Pin;
