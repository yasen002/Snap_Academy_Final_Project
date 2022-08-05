import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import db from "../../firebase";
import Ionicons from "react-native-vector-icons/Ionicons";
import StatBar from "../components/StatBar";
import GenderCategory from "../components/Identity/GenderCategory"
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
    <>
    <GenderCategory/>
    </>
    // <View style={styles.container}>
    //   <View style={{ height: 93 }}>
    //     <StatBar screen="map" navigation={navigation} />
    //   </View>
    //   <Text>Hi from chat</Text>
    //   <Text>Gender: {gender}</Text>
    //   <Text>ethnicity: {ethnicity}</Text>
    //   <Text>pronoun: {pronoun}</Text>
    //   <Text>sexuality: {sexuality}</Text>
    //   {users?.map((user) => {
    //     return (
    //       <TouchableOpacity
    //         style={styles.userButton}
    //         onPress={() => {
    //           navigation.navigate("Conversation", {
    //             userId: user,
    //           });
    //         }}
    //         key={user}
    //       >
    //         <Ionicons
    //           style={styles.userIcon}
    //           name="ios-person-outline"
    //           size={36}
    //           color="lightgrey"
    //         />
    //         <Text style={styles.userName}> {user} </Text>
    //         <Ionicons
    //           style={styles.userCamera}
    //           name="ios-camera-outline"
    //           size={24}
    //           color="lightgrey"
    //         />
    //       </TouchableOpacity>
    //     );
    //   })}
    // </View>
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
});
