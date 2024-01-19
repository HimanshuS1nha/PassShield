import React, { useContext } from "react";
import { ScrollView, View } from "react-native";
import AddPasswordModal from "../components/AddPasswordModal";
import Passwords from "../components/Passwords";
import { PasswordContext } from "../context";
import tw from "twrnc";

const HomeScreen = () => {
  const { passwords } = useContext(PasswordContext);

  return (
    <View style={tw`bg-white flex-1`}>
      <AddPasswordModal />
      <ScrollView>
        {passwords &&
          passwords?.map((password, i) => {
            return <Passwords key={i} password={password} />;
          })}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
