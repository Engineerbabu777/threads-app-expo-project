import {
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView,
    TextInput,
    Button,
  } from "react-native";
  import React, { useState, useContext } from "react";
  import { UserType } from "../UserContext";
  import axios from "axios";
  
  const ThreadsScreen = () => {
    const { userId, setUserId } = useContext<any>(UserType);
    const [content, setContent] = useState("");
    const handlePostSubmit = () => {
      const postData:any = {
        userId,
      };
  
      if (content) {
        postData.content = content;
      }
  
      axios
        .post(`http://${HOST_IP}:3000/create-post`, postData)
        .then((response) => {
          setContent("");
        })
        .catch((error) => {
          console.log("error creating post", error);
        });
    };
    return (
      <SafeAreaView style={{ padding: 10 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            padding: 10,
          }}
        >
          <Image
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              resizeMode: "contain",
            }}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/149/149071.png",
            }}
          />
  
          <Text>Create a New Thread</Text>
        </View>
  
        <View style={{ flexDirection: "row", marginLeft: 10 }}>
          <TextInput
            value={content}
            onChangeText={(text) => setContent(text)}
            placeholderTextColor={"black"}
            placeholder="Type your message..."
            multiline
          />
        </View>
  
        <View style={{ marginTop: 20 }} />
  
        <Button onPress={handlePostSubmit} title="Share Post" />
      </SafeAreaView>
    );
  };
  
  export default ThreadsScreen;
  
  const styles = StyleSheet.create({});