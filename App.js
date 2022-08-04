import React from "react";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { store } from './src/app/store'
import { Provider } from 'react-redux'

// Firebase
import "./firebase";

// Importing Root Component
import RootNavigation from "./src/navigation/RootNavigation";
const FONT_NAMES = {
  "Graphik-Semibold": require("./assets/Graphik-Semibold.otf"),
  "GraphikWide-Black": require("./assets/GraphikWide-Black.otf"),
  "Graphik-Thin": require("./assets/Graphik-Thin.otf"),
  "Graphik-Regular": require("./assets/Graphik-Regular.otf"),
};

export default function App() {
  let [fontsLoaded] = useFonts(FONT_NAMES);
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return  <Provider store={store}> 
            <RootNavigation />
          </Provider>;
}
