import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity, Image, StyleSheet } from 'react-native';
import MapTopIcon from '../components/profile/MapTopIcon';
import ProfileBadge from '../components/profile/ProfileBadge';
import ProfileCard from '../components/profile/ProfileCard';



export default function ProfileScreen({ navigation, route }) {
  const userName="Kayla"
  const SnapAccount= "Kayla369"



  return (
    <ImageBackground source={require("../../assets/profile_background_bitmoji.jpg")} resizeMode="cover" style={styles.backgroundImage}>
      <View style={ styles.container }>

        {/* ----------Top stat bars---------- */}
        <View style={ styles.profileModalTopContainer }>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <View style={ styles.profileModalTopLeft }>
              <MapTopIcon imageUrl={require("../../assets/left-arroww.png")} smallest={true} />
            </View>
          </TouchableOpacity>
          <View style={ styles.profileModalTopRight }>
            <MapTopIcon imageUrl={require("../../assets/uploadw.png")} smaller={true} />
            <MapTopIcon imageUrl={require("../../assets/gearw.png")} smaller={true} />
          </View>
        </View>

        
        <View style={ styles.profileContainer }>
          <View style={ styles.profileContent }>

            {/*------------QR Code and user account info------------ */}
            <View style={ styles.profileTopContainer }>
              <View style={ styles.profileTopLeft }>
                <View style={ styles.profileQRCodeContainer}>
                  <Image style={ styles.profileQRCode } source={require("../../assets/QRCodeProfilePageIcon.png")} />
                </View>
              </View>
              {/* user account info */}
              <View style={ styles.profileTopRight }>
                <Text style={ styles.profileTopRightTextHeader }>{userName}</Text>
                <Text style={ styles.profileTopRightText }>{SnapAccount}</Text>
              </View>
            </View>

            {/* ------------Profile Badges------------ */}
            <View style={ styles.profileBadges }>

              <ProfileBadge imageUrl={require("../../assets/SnapFriendsProfilePageIcon.png")} text={369} />
              <ProfileBadge imageUrl={require("../../assets/ZodiacSignProfilePageIcon.png")} text={"Scorpio"} containerStyle={styles.profileBadgeContainerStyle} textStyle={styles.profileBadgeZodiacText} />
              
              {/* Identity button should be here */}
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  navigation.navigate("Identity");
                }}
              >
                <ProfileBadge imageUrl={require("../../assets/badgeIcon.png")} text={"Identity"} containerStyle={styles.profileBadgeContainerStyle} textStyle={styles.profileBadgeIconText} />
              </TouchableOpacity>
            </View>
            
            <View style={ [styles.profilefindFriends, styles.shadowProp ] }>
            </View>

            <ProfileCard text={"My Stories"} />
            <ProfileCard text={"Friends"} style={ styles.profileCardContainerStyle }/>

            <View style={ [styles.profilemyFriends, styles.shadowProp ] }>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    flexDirection: "column",
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
  },
  profileModalTopContainer: {
    width: "100%",
    height: 70,
    position: "absolute",
    top: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10
  },
  profileModalTopLeft: {
  },
  profileModalTopRight: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: 108,
  },
  profileContainer: {
    height: "70%",
    width: "100%",
    backgroundColor: "#f7f8f8",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  profileContent: {
    marginTop: 25,
    marginLeft: 20,
    marginRight: 20,
  },
  profileTopContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  profileTopLeft: {
    marginRight: 20
  },
  profileQRCode: {
    width: 60,
    height: 60,
  },
  profileTopRightTextHeader: {
    fontWeight: "700",
    fontSize: 18,
    marginBottom: 12,
  },
  profileTopRightText: {
    color: "#666d77",
    fontWeight: "700",
  },
  profileBadges: {
    flexDirection: "row",
    marginRight: 20,
  },
  profileBadgeContainerStyle: {
    marginLeft: 5,
  },
  profileBadgeZodiacText: {
    color: "#3E1184",
  },
  profileBadgeIconText: {
    color: "#2C50FA",
  },
  profilefindFriends: {
    backgroundColor: "#fff",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 30,
    paddingBottom: 30,
    marginTop: 30,
    marginBottom: 30,
    borderRadius: 10,
  },
  profilemyFriends: {
    backgroundColor: "#fff",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 50,
    paddingBottom: 60,
    marginTop: 10,
    borderRadius: 10,
  },
  profileCardContainerStyle: {
    marginTop: 20,
    marginBottom: 2,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 1},
    shadowOpacity: 0.02,
    shadowRadius: 10,
  },
});










// import * as React from 'react';
// import { Text, View, StyleSheet, Button,TouchableOpacity } from 'react-native';

// export default function ProfileScreen({ navigation }) {
//   return (
//     <View style={styles.screenOne}>
//       <Text style={styles.screenOneText}>Profile Screen</Text>
//       {/* <Button title="Go to ScreenTwo" onPress={() => navigation.navigate('IdentityChatStack')}/> */}
//       <View >
//         <TouchableOpacity
//         onPress={()=>{
//           navigation.navigate("Identity");
//         }}
//         >
//          <Text>Identity</Text>
//         </TouchableOpacity>
//       </View>
     
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   screenOne: {
//     flex: 1, 
//     alignItems: 'center', 
//     justifyContent: 'center',
//   },
//   screenOneText: {
//     fontSize: 32,
//   },
// });