import React, {useRef} from 'react'
import { View, 
  Text,
  Dimensions,
  Image,
  StyleSheet,
  ScrollView,
  Button,
  Animated} from 'react-native'
import {useFonts} from 'expo-font';
import {BANNER_H} from '../../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CButton from '../../typeButtons';
import SButton from '../../smallButtons';
import DButton from '../../displayProfile';

import MButton from '../../mainButton';
import Ionicons from "react-native-vector-icons/Ionicons";
import StatBar from '../components/StatBar';




export default function SpotlightScreen({navigation}) {
  const [loaded] = useFonts({
		Avenir: require('../../fonts/AvenirNextLTPro-Bold.otf'),
	  });
    const scrollA = useRef(new Animated.Value(0)).current;

  return (
<<<<<<< HEAD
    <View style={styles.container}>
    <Animated.ScrollView
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollA}}}],
          {useNativeDriver: true},
        )}
        scrollEventThrottle={16}
      >
        <View style={styles.bannerContainer}>
          <Text style={styles.title}> Identity</Text>
          <Animated.Image
            style={styles.banner(scrollA)}
            source={require('../../assets/bitmoji2.png')}
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
                  <SButton text={"Sexuality"}/>
                  <DButton text={"Display to Profile"} />
                  {/* <Button title="Gender" onPress={() => navigation.navigate("Gender")}/> */}
              </View>
              
              
            
              {/* <View style={styles.parent}>
                <MButton text={"Woman"}
                sub={"she/her"}
                />
              </View> */}
              {/* <Text style={styles.miniHeader}> 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
              semper turpis. Ut in fringilla nisl, sit amet aliquet urna. Donec
              sollicitudin libero sapien, ut accumsan justo venenatis et. Proin iaculis
              ac dolor eget malesuada. Cras commodo, diam id semper sodales, tortor leo
              suscipit leo, vitae dignissim velit turpis et diam. 
              </Text> */}
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

              <Text style={styles.title}>Identity is...</Text>
=======
    <View>
      <StatBar screen='spotlight' box='true' />
      <Text>Hello form Stories</Text>
    </View>
    // <View style={styles.container}>
    // <Animated.ScrollView
    //     onScroll={Animated.event(
    //       [{nativeEvent: {contentOffset: {y: scrollA}}}],
    //       {useNativeDriver: true},
    //     )}
    //     scrollEventThrottle={16}
    //   >
    //     <View style={styles.bannerContainer}>
    //       <Text style={styles.title}> My Identity</Text>
    //       <Animated.Image
    //         style={styles.banner(scrollA)}
    //         source={require('../../assets/bitmoji2.png')}
    //       />
    //     </View>
    //       <View style={styles.bannerContainer2}>
    //           <View style={styles.parent}>
    //               <CButton text={"Sexuality"}/>
    //               <CButton text={"Gender"} />
    //               {/* <Button title="Gender" onPress={() => navigation.navigate("Gender")}/> */}
    //               <CButton text={"Ethnicity"} />
    //           </View>
              
              
            
    //           <View style={styles.parent}>
    //             <MButton text={"Woman"}
    //             sub={"she/her"}
    //             />
    //           </View>
    //           <Text style={styles.miniHeader}> 
    //           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
    //           semper turpis. Ut in fringilla nisl, sit amet aliquet urna. Donec
    //           sollicitudin libero sapien, ut accumsan justo venenatis et. Proin iaculis
    //           ac dolor eget malesuada. Cras commodo, diam id semper sodales, tortor leo
    //           suscipit leo, vitae dignissim velit turpis et diam. 
    //           </Text>
    //           <View flexDirection="row" justifyContent='space-evenly'>
    //               <TouchableOpacity>
    //                   <Ionicons
    //                     name="ios-camera-outline"
    //                     size={30}
    //                     color="black"
    //                   />
    //               </TouchableOpacity>
    //               <TouchableOpacity >
    //                   <Ionicons
    //                     name="ios-pencil-outline"
    //                     size={30}
    //                     color="black"
    //                   />
    //               </TouchableOpacity>
    //               <TouchableOpacity >
    //                   <Ionicons
    //                     name="ios-people-outline"
    //                     size={30}
    //                     color="black"
    //                   />
    //               </TouchableOpacity>

    //           </View>
>>>>>>> 961d2f0c6ef609fea19f6a9a72d3e38fd04db2d6
                  
            
    //       </View>
    //   </Animated.ScrollView>
        
    // </View>
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
    backgroundColor:'white',
    width: 375,
    borderTopEndRadius: 30,
    borderBottomLeftRadius:30,
    borderRadius:30,
    marginBottom: 130,
    textAlign:'center',
    alignContent: 'center',
    alignItems: 'center',
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