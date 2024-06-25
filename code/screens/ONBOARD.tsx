import * as React from "react";
import {
  Pressable,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, FontFamily, Color } from "../GlobalStyles";

const ONBOARD = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <TouchableHighlight
      style={styles.onboard}
      underlayColor="#fff"
      activeOpacity={0.2}
      onPress={() => navigation.navigate("ONBOARD4")}
    >
      <>
        <View style={styles.logoGobarVertical1}>
          <Image
            style={styles.styleeaseLogo1}
            contentFit="cover"
            source={require("../assets/styleease-logo-1.png")}
          />
        </View>
        <Text style={styles.styleease}>StyleEase</Text>
      </>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  styleeaseLogo1: {
    top: 25,
    left: 13,
    borderRadius: Border.br_5xl,
    width: 210,
    height: 201,
    position: "absolute",
  },
  logoGobarVertical1: {
    marginTop: -149,
    marginLeft: -116.5,
    top: "50%",
    left: "50%",
    width: 248,
    height: 251,
    position: "absolute",
    overflow: "hidden",
  },
  styleease: {
    height: "2.59%",
    width: "50.13%",
    top: "59.98%",
    left: "26.13%",
    fontSize: 32,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorWhite900,
    textAlign: "center",
    position: "absolute",
  },
  onboard: {
    backgroundColor: Color.colorLightseagreen_100,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default ONBOARD;
