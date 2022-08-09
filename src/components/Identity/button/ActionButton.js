import React from "react";
import { View, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useDispatch } from "react-redux";
import { activateIdentity } from "../../../features/identity/identitySlice";



export default function ActionButton({icon , navHandler}) {
  const dispatch = useDispatch();
  const actionTypes = {
    CAMERA: "camera",
    EDIT: "pencil",
    FRIEND: "people",
  }
  const acitonHandler = ()=>{
    if(icon.includes(actionTypes.CAMERA)){
      cameraAction();
    }else if(icon.includes(actionTypes.EDIT)){
      editAction();
    }else if(icon.includes(actionTypes.FRIEND)){
      friendAction();
    }
  }

  const cameraAction = ()=>{

  }
  const editAction = ()=>{
    dispatch(activateIdentity())
  }
  const friendAction = ()=>{
    navHandler("Friend")
  }



  return (
    <View marginRight={30}>
      <TouchableOpacity onPress={acitonHandler}>
        <Ionicons name={icon} size={30} color="black" />
      </TouchableOpacity>
    </View>
  );
}

