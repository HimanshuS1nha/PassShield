import { View, Text, Modal, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import tw from "twrnc";
import { PasswordContext } from "../context";
import { Entypo } from "@expo/vector-icons";
import * as SecureStore from "expo-secure-store";
import * as Clipboard from "expo-clipboard";

const ShowPasswordModal = ({
  id,
  username,
  title,
  password,
  showPassword,
  setShowPassword,
}) => {
  const { passwords, setPasswords } = useContext(PasswordContext);

  const handleDeletePassword = async () => {
    const newPasswords = passwords.filter((password) => password.id !== id);
    setPasswords(newPasswords);
    await SecureStore.setItemAsync("passwords", JSON.stringify(newPasswords));
    setShowPassword(false);
  };

  const handleCopy = async (text) => {
    await Clipboard.setStringAsync(text);
  };
  return (
    <Modal visible={showPassword} animationType="fade" transparent={true}>
      <View style={tw`flex-1 justify-center items-center`}>
        <View style={tw`bg-white px-10 py-4 gap-y-3 relative shadow-xl border`}>
          <TouchableOpacity
            style={tw`absolute top-2 right-2`}
            onPress={() => setShowPassword(false)}
          >
            <Entypo name="cross" size={24} color="black" />
          </TouchableOpacity>
          <Text style={tw`text-xl font-bold text-center mt-6`}>
            {title}&apos;s Password
          </Text>
          <View style={tw`gap-y-4 items-center mt-4`}>
            <View style={tw`flex-row gap-x-4 items-center`}>
              <Text style={tw`font-semibold`}>Title : </Text>
              <Text style={tw`font-bold`}>{title}</Text>
              <TouchableOpacity
                style={tw`border-2 border-blue-600 p-2 rounded-full`}
                onPress={() => handleCopy(title)}
              >
                <Entypo name="clipboard" size={16} color="black" />
              </TouchableOpacity>
            </View>
            <View style={tw`flex-row gap-x-4 items-center`}>
              <Text style={tw`font-semibold`}>Username : </Text>
              <Text style={tw`font-bold`}>{username}</Text>
              <TouchableOpacity
                style={tw`border-2 border-blue-600 p-2 rounded-full`}
                onPress={() => handleCopy(username)}
              >
                <Entypo name="clipboard" size={16} color="black" />
              </TouchableOpacity>
            </View>
            <View style={tw`flex-row gap-x-4 items-center`}>
              <Text style={tw`font-semibold`}>Password : </Text>
              <Text style={tw`font-bold`}>{password}</Text>
              <TouchableOpacity
                style={tw`border-2 border-blue-600 p-2 rounded-full`}
                onPress={() => handleCopy(password)}
              >
                <Entypo name="clipboard" size={16} color="black" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={tw`items-center mt-4 w-full bg-blue-600 py-2 rounded-full`}
              onPress={handleDeletePassword}
            >
              <Text style={tw`text-white text-lg font-extrabold`}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ShowPasswordModal;
