import { Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import ShowPasswordModal from "./ShowPasswordModal";

const Passwords = ({ password }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <ShowPasswordModal
        id={password.id}
        username={password.username}
        title={password.title}
        password={password.password}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />
      <TouchableOpacity
        style={tw`my-3 mx-2 bg-white py-3 px-2 rounded-md shadow-xl`}
        onPress={() => setShowPassword(true)}
      >
        <Text style={tw`text-xl font-bold`}>{password?.title}</Text>
        <Text style={tw`text-gray-500 text-sm`}>{password?.username}</Text>
      </TouchableOpacity>
    </>
  );
};

export default Passwords;
