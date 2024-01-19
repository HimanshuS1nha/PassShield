import {
  ActivityIndicator,
  StatusBar,
  Platform,
  SafeAreaView,
  Image,
} from "react-native";
import React, { useEffect } from "react";
import tw from "twrnc";
import * as SecureStore from "expo-secure-store";
import { useNavigation } from "@react-navigation/native";

const LoadingScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const getPin = async () => {
      const pin = await SecureStore.getItemAsync("pin");
      if (pin) {
        navigation.replace("ConfirmPin");
      } else {
        navigation.replace("SetPin");
      }
    };
    getPin();
  }, []);
  return (
    <SafeAreaView
      style={[
        tw`flex-1 items-center justify-center bg-blue-500 gap-y-4`,
        { paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 },
      ]}
    >
      <Image
        source={require("../assets/logo.png")}
        style={tw`w-28 h-28 rounded-full`}
      />
      <ActivityIndicator size={70} />
    </SafeAreaView>
  );
};

export default LoadingScreen;
