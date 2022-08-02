// import React from 'react'
// import { View, Text } from 'react-native'
// export default function IdentityMain() {
//   return (
//     <View><Text>Hi from spot lightsFlkjsf;lsdjf;lasfjs;lfjsflsjf;skj;asfjsa;fHi from spot lightsFlkjsf;lsdjf;lasfjs;lfjsflsjf;skj;asfjsa;fHi from spot lightsFlkjsf;lsdjf;lasfjs;lfjsflsjf;skj;asfjsa;fHi from spot lightsFlkjsf;lsdjf;lasfjs;lfjsflsjf;skj;asfjsa;fHi from spot lightsFlkjsf;lsdjf;lasfjs;lfjsflsjf;skj;asfjsa;fHi from spot lightsFlkjsf;lsdjf;lasfjs;lfjsflsjf;skj;asfjsa;fHi from spot lightsFlkjsf;lsdjf;lasfjs;lfjsflsjf;skj;asfjsa;fHi from spot lightsFlkjsf;lsdjf;lasfjs;lfjsflsjf;skj;asfjsa;f</Text></View>
//   )
// }

import React, {useRef} from 'react'
import { View, 
  Text,
  Dimensions,
  Image,
  StyleSheet,
  Animated,
  Linking
} from 'react-native'
import Swiper from "react-native-web-swiper";
import {useFonts} from 'expo-font';
import {BANNER_H} from '../../../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CButton from '../../../typeButtons';
import SButton from '../../../smallButtons';
import Ionicons from "react-native-vector-icons/Ionicons";

export default function IdentityMain({navigation}) {
  const [loaded] = useFonts({
		Avenir: require('../../../fonts/AvenirNextLTPro-Bold.otf'),
	  });
    const scrollA = useRef(new Animated.Value(0)).current;

  return (
    <Swiper>
    <View style={styles.container}>
    <Animated.ScrollView
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollA}}}],
          {useNativeDriver: true},
        )}
        scrollEventThrottle={16}
      >
        <View style={styles.bannerContainer}>
          <Text style={styles.title}> My Identities</Text>
          <Animated.Image
            style={styles.banner(scrollA)}
            source={require('../../../assets/bitmoji2.png')} 
          />
        </View>
    
          <View style={styles.bannerContainer2}>
       
          <CButton text={"Gender"}  />
          <View position='absolute' top={-30} right={80} bottom={30}>
          <TouchableOpacity position='relative' top={-100}  >
                      <Ionicons 
                        name="information-circle-outline"
                        size={45}
                        color="black"
                        />
                  </TouchableOpacity>
                  </View>

              <View alignItems="center" style={styles.parent}>
                  <SButton text={"Female"}/>
                  {/* <DButton text={"Display to Profile"} /> */}
                  {/* <Button title="Gender" onPress={() => navigation.navigate("Gender")}/> */}
              </View>
              
    
              <View flexDirection="row" justifyContent='center' paddingTop={10} >
                <View marginRight={30}>
                  <TouchableOpacity>
                      <Ionicons
                        name="ios-camera-outline"
                        size={30}
                        color="black"
                      />
                  </TouchableOpacity>
                  </View>

                  <View marginRight={30}>
                  <TouchableOpacity >
                      <Ionicons
                       paddingRight={30}
                        name="ios-pencil-outline"
                        size={30}
                        color="black"
                      />
                  </TouchableOpacity>
                  </View>
                  <TouchableOpacity >
                      <Ionicons
                        name="ios-people-outline"
                        size={30}
                        color="black"
                      />
                  </TouchableOpacity>

              </View>

              <Text style={styles.title}>Identity is up to you</Text>
              
              
              <Image
              source={require('../../../assets/sticker.png')}
              style={styles.templateLeft}>
              </Image>

              <Image
              source={require('../../../assets/sticker.png')}
              style={styles.templateRight}>
              </Image>

              <Image
              source={require('../../../assets/sticker.png')}
              style={styles.templateLeft}>
              </Image>
              <Image
              source={require('../../../assets/sticker.png')}
              style={styles.templateRight}>
              </Image>

              <View paddingTop={300} justifyContent="center" alignItems="center">
              <Text >Learn more about identities</Text>
              <Text style={{color: 'orange'}}
              onPress={() => Linking.openURL('http://google.com')}>
              Google
            </Text>
            <Text style={{color: 'orange'}}
              onPress={() => Linking.openURL('http://google.com')}>
              Google
            </Text>
              </View>
           </View>
       </Animated.ScrollView>
     </View>


    {/* SEXUALITY */}

     <View style={styles.container}>
    <Animated.ScrollView
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollA}}}],
          {useNativeDriver: true},
        )}
        scrollEventThrottle={16}
      >
        <View style={styles.bannerContainer}>
          <Text style={styles.title}> My Identities</Text>
          <Animated.Image
            style={styles.banner(scrollA)}
            source={require('../../../assets/bitmoji2.png')}
          />
        </View>
    
          <View style={styles.bannerContainer2}>
       
          <CButton text={"Sexuality"}  />
          <View position='absolute' top={-30} right={80} bottom={30}>
          <TouchableOpacity position='relative' top={-100}  >
                      <Ionicons 
                        name="information-circle-outline"
                        size={45}
                        color="black"
                        />
                  </TouchableOpacity>
                  </View>

              <View alignItems="center" style={styles.parent}>
                  <SButton text={"She/Her"}/>
                  {/* <DButton text={"Display to Profile"} /> */}
                  {/* <Button title="Gender" onPress={() => navigation.navigate("Gender")}/> */}
              </View>
              
    
              <View flexDirection="row" justifyContent='center' paddingTop={10} >
                <View marginRight={30}>
                  <TouchableOpacity>
                      <Ionicons
                        name="ios-camera-outline"
                        size={30}
                        color="black"
                      />
                  </TouchableOpacity>
                  </View>

                  <View marginRight={30}>
                  <TouchableOpacity >
                      <Ionicons
                       paddingRight={30}
                        name="ios-pencil-outline"
                        size={30}
                        color="black"
                      />
                  </TouchableOpacity>
                  </View>
                  <TouchableOpacity >
                      <Ionicons
                        name="ios-people-outline"
                        size={30}
                        color="black"
                      />
                  </TouchableOpacity>

              </View>

              <Text style={styles.title}>My identity is my super power</Text>
              
              
              <Image
              source={require('../../../assets/sticker.png')}
              style={styles.templateLeft}>
              </Image>

              <Image
              source={require('../../../assets/sticker.png')}
              style={styles.templateRight}>
              </Image>

              <Image
              source={require('../../../assets/sticker.png')}
              style={styles.templateLeft}>
              </Image>
              <Image
              source={require('../../../assets/sticker.png')}
              style={styles.templateRight}>
              </Image>

              <View paddingTop={300} justifyContent="center" alignItems="center">
              <Text >Learn more about identities</Text>
              <Text style={{color: 'orange'}}
              onPress={() => Linking.openURL('http://google.com')}>
              Google
            </Text>
            <Text style={{color: 'orange'}}
              onPress={() => Linking.openURL('http://google.com')}>
              Google
            </Text>
              </View>
           </View>
       </Animated.ScrollView>
     </View>
     
     </Swiper>
     
     
     
  )
}
const styles = StyleSheet.create({

  templateLeft:{
    marginTop:30,
    width:150,
    height:150,
    marginRight:200,

  },
  templateRight:{
    width:150,
    height:150,
    marginRight:-200,

  },
  

  buttonStyle:{
      justifyContent:'center',
  },
  containerw: {
    flex: 1,
  },
  parent: {
    flex: 1,
    flexDirection: "row",
    //justifyContent: "space-around",
    //justifyContent: 'space-evenly',
    justifyContent:'space-around',

  },
  //icons for edit, view friends etc. 
  iconsContainer:{
    justifyContent:'center',
    backgroundColor:'white',
    width: 375,
    borderTopEndRadius: 30,
    borderBottomLeftRadius:30,
    borderRadius:30,
    marginBottom: 130,
   
  },
 
  bannerContainer2:{
    justifyContent:'center',
    backgroundColor:'white', // background color for card
    width: 410, //change size after completed project for iphone
    // borderTopEndRadius: 30,
    borderRadius:30,
    borderBottomLeftRadius:0,
    borderBottomRightRadius:0,
    
    // marginBottom: 130, //caused the yellow space underneath to show fixed!!
    textAlign:'center',
    alignContent: 'center',
    alignItems: 'center',
  },
 
  container: {
    alignItems: 'center',
    backgroundColor: 'yellow',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    fontFamily:'Avenir',
    flex:1,
    
    },
    container2:{
      alignItems: 'center'
    },
    container3:{
      alignItems:'center',
      backgroundColor: 'white',
    },
    title:{
      paddingTop:50,
      paddingRight:90,
      paddingLeft:90,
      paddingBottom:30,
      fontFamily:'Avenir',
      fontSize: 50,
      fontWeight: 'bold',
      justifyContent:'center',
      textAlign:'center',
      borderRadius:100,

    },
   
    pronouns:{
      fontFamily:'Avenir',
      fontSize: 54,
      fontWeight: 'bold',
      //backgroundColor:'white',
      justifyContent:'center',
      textAlign:'center',
      borderRadius:100,
      backgroundColor:'white',
    },
    miniHeader:{
      fontFamily:'Avenir',
      fontSize:20,
      backgroundColor:'white',
      //justifyContent:'center',
      textAlign:'center',
      borderRadius:20,
      paddingTop: 20,
      paddingRight: 30,
      paddingLeft: 30,
      paddingBottom:20,

    


    },
    
    banner: scrollA => ({
      justifyContent: 'center',
      height: 300,
      width: '100%',
 
      transform: [
        {
          translateY: scrollA.interpolate({
            inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
            outputRange: [-BANNER_H / 2, 0, BANNER_H * 0.75, BANNER_H * 0.75],
          }),
        },
        {
          scale: scrollA.interpolate({
            inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
            outputRange: [2, 1, 0.5, 0.5],
          }),
        },
      ],
    }),
  
});