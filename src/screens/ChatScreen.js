import React, { useState, useEffect } from "react";
import { Text, View, ImageBackground, StyleSheet } from "react-native";
import db from "../../firebase";
import Ionicons from "react-native-vector-icons/Ionicons";
import StatBar from "../components/StatBar";
import IdentityMain from "../components/Identity/IdentityMain"
//just to test out redux
import { useSelector } from 'react-redux'

export default function ChatScreen({ navigation }) {
  
  //just to test out redux
  const gender = useSelector((state) => state.identity.gender)
  const sexuality = useSelector((state) => state.identity.sexuality)
  const ethnicity = useSelector((state) => state.identity.ethnicity)
  const pronoun = useSelector((state) => state.identity.pronoun)




  const [users, setUsers] = useState([]);
  async function getUsers() {
    const querySnapshot = await getDocs(collection(db, "Chats"));
    querySnapshot.forEach((doc) => {
      setUsers((users) => [...users, doc.id]);
    }); 
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
     <View style={styles.container}>
      <View style={{ height: 93 }}>
        <StatBar screen="map" navigation={navigation} />
      </View>
      <ImageBackground source={require("../../assets/chatBackground.png")} resizeMode="cover" style={styles.backGroundImage}>
      </ImageBackground>     
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  userButton: {
    padding: 25,
    display: "flex",
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
  },
  userIcon: {
    position: "absolute",
    left: 5,
    top: 5,
  },
  userName: {
    position: "absolute",
    left: 50,
    top: 14,
    fontSize: 18,
  },
  userCamera: {
    position: "absolute",
    right: 15,
    top: 10,
  },
  backGroundImage:{
    width:"100%",
    height:"100%"
  }
});
