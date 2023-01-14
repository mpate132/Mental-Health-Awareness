import { View, Text, SafeAreaView, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
      <Button title="Chat-Screen" onPress={() => navigation.navigate("Chat")} />
    </SafeAreaView>
  );
};

export default HomeScreen;
