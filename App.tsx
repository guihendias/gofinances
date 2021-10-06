import "intl";
import "intl/locale-data/jsonp/pt-BR";

import React from "react";
import AppLoading from "expo-app-loading";
import { ThemeProvider } from "styled-components";
import { NavigationContainer } from "@react-navigation/native";

import theme from "./src/global/styles/theme";

import { AppRoutes } from "./src/routes/app.routes";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from "@expo-google-fonts/poppins";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [fonstLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if (!fonstLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" />
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
