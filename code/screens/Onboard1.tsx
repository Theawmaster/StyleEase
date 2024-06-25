import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableHighlight,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const Onboard1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.onboard1}>
      <View style={styles.onboard11}>
        <Image
          style={[styles.pictureIcon, styles.picturePosition]}
          contentFit="cover"
          source={require("../assets/picture.png")}
        />
        <View style={[styles.picture, styles.picturePosition]} />
        <View style={styles.containers}>
          <View style={styles.sectionDesc}>
            <View style={styles.titledesc}>
              <Text
                style={[
                  styles.welcomeToStyleease,
                  styles.welcomeToStyleeaseFlexBox,
                ]}
              >
                Welcome to StyleEase
              </Text>
              <Text
                style={[
                  styles.enhanceYourExperience,
                  styles.welcomeToStyleeaseFlexBox,
                ]}
              >
                Enhance your experience in grooming your hair with tailored hair
                styling at your fingertips!
              </Text>
            </View>
            <View style={styles.slider}>
              <View style={styles.sliderChild} />
              <Image
                style={styles.sliderItem}
                contentFit="cover"
                source={require("../assets/ellipse-2.png")}
              />
              <Image
                style={styles.sliderItem}
                contentFit="cover"
                source={require("../assets/ellipse-2.png")}
              />
            </View>
            <TouchableHighlight
              style={[styles.buttonbig, styles.buttonbigFlexBox]}
              underlayColor="#fff"
              activeOpacity={0.2}
              onPress={() => navigation.navigate("ONBOARD5")}
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
  picturePosition: {
    left: 0,
    position: "absolute",
    width: 375,
  },
  welcomeToStyleeaseFlexBox: {
    textAlign: "left",
    color: Color.colorWhite900,
  },
  buttonbigFlexBox: {
    justifyContent: "center",
    marginTop: 18,
    alignItems: "center",
  },
  pictureIcon: {
    top: 57,
    height: 553,
  },
  picture: {
    top: 0,
    height: 579,
  },
  welcomeToStyleease: {
    fontSize: FontSize.typographyHeadline124_size,
    fontFamily: FontFamily.typographyHeadline416,
    fontWeight: "700",
    textAlign: "left",
  },
  enhanceYourExperience: {
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
    borderRadius: Border.br_5xl,
    width: 28,
    height: 8,
    backgroundColor: Color.colorLightseagreen_200,
  },
  sliderItem: {
    width: 8,
    marginLeft: 8,
    height: 8,
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
  onboard11: {
    backgroundColor: Color.colorCoolGray200,
    overflow: "hidden",
    width: 375,
    height: 812,
  },
  onboard1: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    height: 812,
  },
});

export default Onboard1;
