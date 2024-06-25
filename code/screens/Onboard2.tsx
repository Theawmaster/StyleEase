import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableHighlight,
} from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const Onboard2 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.onboard2}>
      <View style={styles.onboard21}>
        <View style={styles.appLogo} />
        <Image
          style={[styles.pictureIcon, styles.pictureIconPosition]}
          contentFit="cover"
          source={require("../assets/picture1.png")}
        />
        <View
          style={[
            styles.pleasedYoungCaucasianMaleB,
            styles.pictureIconPosition,
          ]}
        />
        <View style={styles.containers}>
          <View style={styles.sectionDesc}>
            <View style={styles.titledesc}>
              <Text style={[styles.everythingInYour, styles.fretNotYouFlexBox]}>
                Everything in your hands
              </Text>
              <Text style={[styles.fretNotYou, styles.fretNotYouFlexBox]}>
                Fret not! You will be guided with every step of the way. Choose
                what you want to do with your hair with our variety of choices
                and detailed customizations.
              </Text>
            </View>
            <View style={styles.slider}>
              <Image
                style={styles.sliderChild}
                contentFit="cover"
                source={require("../assets/ellipse-2.png")}
              />
              <View style={[styles.sliderItem, styles.sliderSpaceBlock]} />
              <Image
                style={[styles.sliderInner, styles.sliderSpaceBlock]}
                contentFit="cover"
                source={require("../assets/ellipse-2.png")}
              />
            </View>
            <TouchableHighlight
              style={[styles.buttonbig, styles.buttonbigFlexBox]}
              underlayColor="#fff"
              activeOpacity={0.2}
              onPress={() => navigation.navigate("ONBOARD6")}
            >
              <Text style={styles.label}>Tap to go next page</Text>
            </TouchableHighlight>
          </View>
          <View style={[styles.homeIndicator, styles.buttonbigFlexBox]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pictureIconPosition: {
    left: 0,
    top: 0,
    position: "absolute",
    width: 375,
  },
  fretNotYouFlexBox: {
    textAlign: "left",
    color: Color.colorWhite900,
  },
  sliderSpaceBlock: {
    marginLeft: 8,
    height: 8,
  },
  buttonbigFlexBox: {
    justifyContent: "center",
    marginTop: 18,
    alignItems: "center",
  },
  appLogo: {
    top: 309,
    left: -844,
    width: 232,
    height: 129,
    position: "absolute",
  },
  pictureIcon: {
    height: 573,
  },
  pleasedYoungCaucasianMaleB: {
    height: 522,
  },
  everythingInYour: {
    fontSize: FontSize.typographyHeadline124_size,
    fontFamily: FontFamily.typographyHeadline416,
    fontWeight: "700",
    textAlign: "left",
  },
  fretNotYou: {
    fontSize: FontSize.typographyBody314_size,
    fontFamily: FontFamily.typographyCaption112,
    display: "flex",
    width: 309,
    height: 54,
    marginTop: 8,
    alignItems: "center",
  },
  titledesc: {
    alignSelf: "stretch",
  },
  sliderChild: {
    height: 8,
    width: 8,
  },
  sliderItem: {
    borderRadius: Border.br_5xl,
    width: 28,
    backgroundColor: Color.colorLightseagreen_200,
  },
  sliderInner: {
    width: 8,
    marginLeft: 8,
  },
  slider: {
    marginTop: 18,
    flexDirection: "row",
  },
  label: {
    fontSize: FontSize.typographyHeadline416_size,
    textAlign: "center",
    color: Color.colorWhite900,
    fontFamily: FontFamily.typographyHeadline416,
    fontWeight: "700",
  },
  buttonbig: {
    borderRadius: Border.br_5xs,
    width: 339,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_mid,
    backgroundColor: Color.colorLightseagreen_200,
    overflow: "hidden",
    flexDirection: "row",
  },
  sectionDesc: {
    alignItems: "center",
  },
  homeIndicator: {
    height: 21,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    alignSelf: "stretch",
  },
  containers: {
    marginLeft: -187.5,
    bottom: 0,
    left: "50%",
    borderTopLeftRadius: Border.br_9xl,
    borderTopRightRadius: Border.br_9xl,
    backgroundColor: Color.colorBlack,
    justifyContent: "flex-end",
    paddingTop: Padding.p_5xl,
    alignItems: "center",
    position: "absolute",
    width: 375,
  },
  onboard21: {
    backgroundColor: Color.colorCoolGray200,
    overflow: "hidden",
    width: 375,
    height: 812,
  },
  onboard2: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    height: 812,
  },
});

export default Onboard2;
