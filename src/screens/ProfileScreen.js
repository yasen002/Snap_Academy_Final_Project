import * as React from 'react';
import { Text, View, StyleSheet, Button,TouchableOpacity } from 'react-native';

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.screenOne}>
      <Text style={styles.screenOneText}>Profile Screen</Text>
      {/* <Button title="Go to ScreenTwo" onPress={() => navigation.navigate('IdentityChatStack')}/> */}
      <View >
        <TouchableOpacity
        onPress={()=>{
          navigation.navigate("Identity");
        }}
        >
         <Text>Identity</Text>
        </TouchableOpacity>
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  screenOne: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  screenOneText: {
    fontSize: 32,
  },
});