import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import PinScreen from "../screens/PinScreen";
import ConfirmPinScreen from "../screens/ConfirmPinScreen";
import LoadingScreen from "../screens/LoadingScreen";
import { PasswordContext } from "../context";
import { useNavigation } from "@react-navigation/native";
import ChangePinScreen from "../screens/ChangePinScreen";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const navigation = useNavigation();
  const { setShowAddPasswordModal } = useContext(PasswordContext);
  return (
    <Stack.Navigator screenOptions={{ headerBackVisible: false }}>
      <Stack.Screen
        name="Loading"
        component={LoadingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SetPin"
        component={PinScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ConfirmPin"
        component={ConfirmPinScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChangePin"
        component={ChangePinScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        options={{
          headerTitle: (props) => (
            <View style={tw`flex-row items-center gap-x-1`} {...props}>
              <Image
                source={require("../assets/logo.png")}
                style={tw`w-12 h-12 rounded-full`}
              />
              <Text style={tw`text-xl text-white font-semibold mb-1`}>
                PassShield
              </Text>
            </View>
          ),
          headerRight: (props) => (
            <View style={tw`flex-row gap-x-2 items-center`} {...props}>
              <TouchableOpacity
                style={tw`bg-blue-800 py-1 px-3 rounded-full`}
                onPress={() => {
                  navigation.navigate("ChangePin");
                }}
              >
                <Text style={tw`text-sm text-white font-semibold`}>
                  Change Pin
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setShowAddPasswordModal(true);
                }}
              >
                <Ionicons name="add-circle-outline" size={26} color="white" />
              </TouchableOpacity>
            </View>
          ),
          headerStyle: tw`bg-blue-500`,
        }}
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
