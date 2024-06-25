import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableHighlight,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const Onboard3 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.onboard3}>
      <View style={styles.onboard31}>
        <Image
          style={[styles.pictureIcon, styles.containersPosition]}
          contentFit="cover"
          source={require("../assets/picture2.png")}
        />
        <View style={[styles.containers, styles.containersPosition]}>
          <View style={styles.sectionDesc}>
            <View style={styles.titledesc}>
              <Text style={[styles.getReadyTo, styles.getReadyToFlexBox]}>
                Get ready to be amazed
              </Text>
              <Text style={[styles.afterwardsYouAre, styles.getReadyToFlexBox]}>
                Afterwards, you are able to select the stylist of your choice or
                be assigned accordingly.
              </Text>
            </View>
            <View style={styles.slider}>
              <Image
                style={styles.sliderChild}
                contentFit="cover"
                source={require("../assets/ellipse-2.png")}
              />
              <Image
                style={[styles.sliderItem, styles.sliderSpaceBlock]}
                contentFit="cover"
                source={require("../assets/ellipse-2.png")}
              />
              <View style={[styles.sliderInner, styles.sliderSpaceBlock]} />
            </View>
            <TouchableHighlight
              style={[styles.buttonbig, styles.buttonbigFlexBox]}
              underlayColor="#fff"
              activeOpacity={0.2}
              onPress={() => navigation.navigate("MainLoadingPage")}
            >
              <Text style={styles.label}>Tap to get started</Text>
            </TouchableHighlight>
          </View>
          <View style={[styles.homeIndicator, styles.buttonbigFlexBox]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containersPosition: {
    position: "absolute",
    width: 375,
  },
  getReadyToFlexBox: {
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
  pictureIcon: {
    top: 19,
    left: 2,
    height: 579,
  },
  getReadyTo: {
    fontSize: FontSize.typographyHeadline124_size,
    fontFamily: FontFamily.typographyHeadline416,
    fontWeight: "700",
    textAlign: "left",
  },
  afterwardsYouAre: {
    fontSize: FontSize.typographyBody314_size,
    fontFamily: FontFamily.typographyCaption112,
    display: "flex",
    width: 309,
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
    width: 8,
    marginLeft: 8,
  },
  sliderInner: {
    borderRadius: Border.br_5xl,
    width: 28,
    backgroundColor: Color.colorLightseagreen_200,
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
  },
  onboard31: {
    backgroundColor: Color.colorCoolGray200,
    overflow: "hidden",
    width: 375,
    height: 812,
  },
  onboard3: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    height: 812,
  },
});

export default Onboard3;
