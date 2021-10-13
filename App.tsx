import "intl";
import "intl/locale-data/jsonp/pt-BR";

import React from "react";
import AppLoading from "expo-app-loading";
import { ThemeProvider } from "styled-components";

import theme from "./src/global/styles/theme";

import { Routes } from "./src/routes/index";
import { AuthProvider, useAuth } from "./src/hooks/auth";

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

  const { loading: authLoading } = useAuth();

  if (!fonstLoaded || authLoading) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
}
