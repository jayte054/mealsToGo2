import React from "react";
import { StatusBar as ExpoStatusBar} from 'expo-status-bar';
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { ThemeProvider } from "styled-components/native";
import { useFonts as useOswald, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { theme } from "./src/infrastructure/theme";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular
  })

  const [latoLoaded] = useLato({
    Lato_400Regular
  })

  if(!oswaldLoaded || !latoLoaded) return null

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
      <ExpoStatusBar />
    </React.Fragment>
    
  );
}


