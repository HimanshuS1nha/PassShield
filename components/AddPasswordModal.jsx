import { View, Text, Modal, TouchableOpacity, TextInput } from "react-native";
import React, { useContext, useState, useRef } from "react";
import tw from "twrnc";
import { PasswordContext } from "../context";
import { Entypo } from "@expo/vector-icons";
import * as SecureStore from "expo-secure-store";
import "react-native-get-random-values";
import { v4 } from "uuid";

const AddPasswordModal = () => {
  const {
    showAddPasswordModal,
    setShowAddPasswordModal,
    passwords,
    setPasswords,
  } = useContext(PasswordContext);

  const [title, setTitle] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let usernameRef = useRef();
  let passwordRef = useRef();

  const handleAddPassword = async () => {
    const id = v4();
    const data = { id, title, username, password };
    let newPasswords;
    if (passwords) {
      newPasswords = [...passwords, data];
    } else {
      newPasswords = [data];
    }
    setPasswords(newPasswords);
    await SecureStore.setItemAsync("passwords", JSON.stringify(newPasswords));

    setTitle("");
    setUsername("");
    setPassword("");
    setShowAddPasswordModal(false);
  };
  return (
    <Modal
      visible={showAddPasswordModal}
      animationType="fade"
      transparent={true}
    >
      <View style={tw`flex-1 justify-center items-center`}>
        <View style={tw`bg-white px-6 py-4 gap-y-3 relative shadow-xl border`}>
          <TouchableOpacity
            style={tw`absolute top-2 right-2`}
            onPress={() => {
              setTitle("");
              setUsername("");
              setPassword("");
              setShowAddPasswordModal(false);
            }}
          >
            <Entypo name="cross" size={24} color="black" />
          </TouchableOpacity>
          <Text style={tw`text-xl font-bold text-center mt-6`}>
            Add Password
          </Text>
          <View style={tw`gap-y-4`}>
            <TextInput
              placeholder="Enter Title"
              style={tw`border-b border-black py-2 w-60`}
              autoFocus
              value={title}
              onChangeText={(text) => setTitle(text)}
              returnKeyType={"next"}
              onSubmitEditing={() => {
                usernameRef.focus();
              }}
            />
            <TextInput
              placeholder="Enter Username"
              style={tw`border-b border-black py-2 w-60`}
              value={username}
              onChangeText={(text) => setUsername(text)}
              returnKeyType={"next"}
              ref={(input) => {
                usernameRef = input;
              }}
              onSubmitEditing={() => {
                passwordRef.focus();
              }}
            />
            <TextInput
              placeholder="Enter Password"
              style={tw`border-b border-black py-2 w-60`}
              secureTextEntry
              value={password}
              onChangeText={(text) => setPassword(text)}
              onSubmitEditing={handleAddPassword}
              ref={(input) => {
                passwordRef = input;
              }}
            />
            <TouchableOpacity
              style={tw`items-center mt-4 w-full bg-blue-600 py-2 rounded-full`}
              onPress={handleAddPassword}
            >
              <Text style={tw`text-white text-lg font-extrabold`}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddPasswordModal;
