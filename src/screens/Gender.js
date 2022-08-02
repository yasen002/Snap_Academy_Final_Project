import React, {useRef} from 'react'
import { View, 
  Text,
  Dimensions,
  Image,
  StyleSheet,
  ScrollView,
  Animated} from 'react-native'
import {useFonts} from 'expo-font';
import {BANNER_H} from '../../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CButton from '../../typeButtons';
import MButton from '../../mainButton';
import Ionicons from "react-native-vector-icons/Ionicons";




export default function Gender() {
  const [loaded] = useFonts({
		Avenir: require('../../fonts/AvenirNextLTPro-Bold.otf'),
	  });
    const scrollA = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
    <Animated.ScrollView
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollA}}}],
          {useNativeDriver: true},
        )}
        scrollEventThrottle={16}
      >
        <View style={styles.bannerContainer}>
          <Text style={styles.title}> part 2</Text>
          <Animated.Image
            style={styles.banner(scrollA)}
            source={require('../../assets/bitmoji2.png')}
          />
        </View>
          <View style={styles.bannerContainer2}>
              <View style={styles.parent}>
                  <CButton text={"Sexuality"} />
                  <CButton text={"Gender"} />
                  <CButton text={"Ethnicity"} />
              </View>
            
              <View style={styles.parent}>
                <MButton text={"Woman"}
                sub={"she/her"}
                />
              </View>
              <Text style={styles.miniHeader}> 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
              semper turpis. Ut in fringilla nisl, sit amet aliquet urna. Donec
              sollicitudin libero sapien, ut accumsan justo venenatis et. Proin iaculis
              ac dolor eget malesuada. Cras commodo, diam id semper sodales, tortor leo
              suscipit leo, vitae dignissim velit turpis et diam. 
              </Text>
              <View flexDirection="row" justifyContent='space-evenly'>
                  <TouchableOpacity>
                      <Ionicons
                        name="ios-camera-outline"
                        size={30}
                        color="black"
                      />
                  </TouchableOpacity>
                  <TouchableOpacity >
                      <Ionicons
                        name="ios-pencil-outline"
                        size={30}
                        color="black"
                      />
                  </TouchableOpacity>
                  <TouchableOpacity >
                      <Ionicons
                        name="ios-people-outline"
                        size={30}
                        color="black"
                      />
                  </TouchableOpacity>

              </View>
                  
            
          </View>
      </Animated.ScrollView>
        
    </View>
  )
}
const styles = StyleSheet.create({
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
    justifyContent:'center',
  },
 
  bannerContainer2:{
    justifyContent:'center',
    backgroundColor:'white',
    width: 375,
    borderTopEndRadius: 30,
    borderBottomLeftRadius:30,
    borderRadius:30,
    marginBottom: 130,
    textAlign:'center',
  },
  // bitmoji:{
  //   width: 400,
  //   height: 300,
  //   alignItems: 'center',
  //   overflow: 'hidden',
  //   marginBottom: 40,
  // },
  container: {
    alignItems: 'center',
    backgroundColor: 'yellow',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    fontFamily:'Avenir',
    
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
      paddingBottom:30,
      fontFamily:'Avenir',
      fontSize: 40,
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