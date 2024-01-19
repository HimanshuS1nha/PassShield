import {
  Text,
  SafeAreaView,
  StatusBar,
  Platform,
  TouchableOpacity,
  Image,
  View,
} from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import Pin from "../components/Pin";
import * as SecureStore from "expo-secure-store";
import { useNavigation } from "@react-navigation/native";

const PinScreen = () => {
  const navigation = useNavigation();

  const [pin, setPin] = useState("");

  const handleSetPin = async () => {
    if (pin.length !== 6) {
      alert("Please enter a 6 digit pin");
      return;
    }
    await SecureStore.setItemAsync("pin", pin);
    navigation.replace("Home");
  };
  return (
    <SafeAreaView
      style={[
        tw`flex-1 items-center justify-center bg-blue-500`,
        { paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 },
      ]}
    >
      <View style={tw`mb-4 gap-y-2 items-center`}>
        <Image
          source={require("../assets/logo.png")}
          style={tw`w-28 h-28 rounded-full`}
        />
        <Text style={tw`text-3xl text-white font-extrabold`}>Set Pin</Text>
      </View>

      <Pin pin={pin} setPin={setPin} />

      <TouchableOpacity
        disabled={pin.length === 0}
        style={tw`mt-8 text-lg font-semibold bg-white px-5 py-2 rounded-full w-64 items-center`}
        onPress={handleSetPin}
      >
        <Text style={tw`text-lg font-semibold`}>Set Pin</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default PinScreen;
