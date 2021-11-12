import React, { useEffect, useState } from "react";
import { View, Button, Image } from "react-native";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import ViewImageScreen from "./src/screens/ViewImageScreen";
import { NativeBaseProvider } from "native-base";
import ListingDetailsScreen from "./src/screens/ListingDetailsScreen";
import AccountScreen from "./src/screens/AccountScreen";
import ListingsScreen from "./src/screens/ListingsScreen";
import MessagesScreen from "./src/screens/MessagesScreen";
import Screen from "./src/components/Screen";
import AppPicker from "./src/components/Picker";
import AppTextInput from "./src/components/TextInput";
import LoginScreen from "./src/screens/LoginScreen";
import ListingEditScreen from "./src/screens/ListingEditScreen";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { Camera } from "expo-camera";
import { Loaction } from "expo-location";
import ImageInput from "./src/components/ImageInput";

export default function App() {
  // const [category, setCategory] = useState(categories[0]);
  const [hasPermission, setHasPermission] = useState(null);
  const [imageUri, setImageUri] = useState();

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!granted) {
      alert("You need to enable permission to access the library.");
    }
  };

  // useEffect's second parameter defines how many times it will be executed
  // [] means it will only be executed once
  // However, useEffect function cannot accept a function that returns a promise
  // When the fn is about cleaning up, fn is about to be unmounted, it can be
  // used in useEffect
  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) {
        setImageUri(result.uri);
      }
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };

  return (
    <NativeBaseProvider>
      {/* <ListingDetailsScreen /> */}
      {/* <ListingEditScreen /> */}
      {/* <MessagesScreen /> */}
      {/* <ListingsScreen /> */}
      {/* <AccountScreen /> */}
      {/* <Screen>
        <AppPicker
          selectedItem={category}
          onSelectItem={(item) => setCategory(item)}
          items={categories}
          icon="apps"
          placeholder="Category"
        />
        <AppTextInput icon="email" placeholder="Email" />
      </Screen> */}
      {/* <WelcomeScreen /> */}
      {/* <LoginScreen /> */}
      <Screen>
        <ImageInput imageUri={imageUri} onChangeImage={(uri) => setImageUri(uri)} />
        {/* <Button title="Select Image" onPress={selectImage}></Button> */}
        {/* <Image source={{ uri: imageUri}} style={{ width:200, height:200}}/> */}
      </Screen>
    </NativeBaseProvider>
  );
}
