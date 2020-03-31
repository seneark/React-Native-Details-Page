import React, {useState} from "react";
import * as Font from "expo-font";
import {AppLoading} from "expo";
import HomeStack from './routes/homeStack'

const getFonts = () => {
  return Font.loadAsync({
      ComicNeuReg: require("./components/Fonts/ComicNeue-Regular.ttf"),
      ComicNeuRegBold: require("./components/Fonts/ComicNeue-Bold.ttf"),
      ComicNeuRegLight: require("./components/Fonts/ComicNeue-LightItalic.ttf")
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if (fontsLoaded) {
      return <HomeStack/>;
  } else {
      return (
          <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)}/>
      );
  }
}