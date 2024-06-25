const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import ONBOARD from "./screens/ONBOARD";
import TrimAddOns from "./screens/TrimAddOns";
import ColourAddOns from "./screens/ColourAddOns";
import PermAddOns from "./screens/PermAddOns";
import Confirmation from "./screens/Confirmation";
import TopHairPage from "./screens/TopHairPage";
import SideHairPage from "./screens/SideHairPage";
import BackHairPage from "./screens/BackHairPage";
import DyePage from "./screens/DyePage";
import BleachPage from "./screens/BleachPage";
import HighlightPage from "./screens/HighlightPage";
import PermPage from "./screens/PermPage";
import PaymentPage from "./screens/PaymentPage";
import BookingAndRatingPage from "./screens/BookingAndRatingPage";
import InvoicePage from "./screens/InvoicePage";
import Onboard1 from "./screens/Onboard1";
import Onboard2 from "./screens/Onboard2";
import Onboard3 from "./screens/Onboard3";
import MainLoadingPageTrim from "./screens/MainLoadingPageTrim";
import ONBOARD4 from "./screens/ONBOARD4";
import ONBOARD5 from "./screens/ONBOARD5";
import ONBOARD6 from "./screens/ONBOARD6";
import MainLoadingPage from "./screens/MainLoadingPage";
import Payment from "./screens/Payment";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "PlusJakartaSans-Regular": require("./assets/fonts/PlusJakartaSans-Regular.ttf"),
    "PlusJakartaSans-Medium": require("./assets/fonts/PlusJakartaSans-Medium.ttf"),
    "PlusJakartaSans-SemiBold": require("./assets/fonts/PlusJakartaSans-SemiBold.ttf"),
    "PlusJakartaSans-Bold": require("./assets/fonts/PlusJakartaSans-Bold.ttf"),
    "Quicksand-Medium": require("./assets/fonts/Quicksand-Medium.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="ONBOARD"
              component={ONBOARD}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TrimAddOns"
              component={TrimAddOns}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ColourAddOns"
              component={ColourAddOns}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PermAddOns"
              component={PermAddOns}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Confirmation"
              component={Confirmation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TopHairPage"
              component={TopHairPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SideHairPage"
              component={SideHairPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BackHairPage"
              component={BackHairPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DyePage"
              component={DyePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BleachPage"
              component={BleachPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HighlightPage"
              component={HighlightPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PermPage"
              component={PermPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PaymentPage"
              component={PaymentPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BookingAndRatingPage"
              component={BookingAndRatingPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="InvoicePage"
              component={InvoicePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboard1"
              component={Onboard1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboard2"
              component={Onboard2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboard3"
              component={Onboard3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MainLoadingPageTrim"
              component={MainLoadingPageTrim}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ONBOARD4"
              component={ONBOARD4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ONBOARD5"
              component={ONBOARD5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ONBOARD6"
              component={ONBOARD6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MainLoadingPage"
              component={MainLoadingPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Payment"
              component={Payment}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
