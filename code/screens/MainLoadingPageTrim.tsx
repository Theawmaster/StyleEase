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
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const MainLoadingPageTrim = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.mainLoadingPageTrim}>
      <View style={styles.mainLoadingPage}>
        <View style={styles.option}>
          <View style={styles.modalHeader}>
            <View style={styles.content}>
              <Image
                style={styles.featuredIcon}
                contentFit="cover"
                source={require("../assets/featured-icon1.png")}
              />
              <Text style={[styles.chooseYourService, styles.chooseFlexBox]}>
                Choose your service
              </Text>
            </View>
            <Pressable
              style={styles.boldEssentionalUiClose}
              onPress={() => navigation.navigate("ONBOARD6")}
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/bold--essentional-ui--close-square1.png")}
              />
            </Pressable>
          </View>
          <View style={styles.buttonbigSpaceBlock}>
            <Text style={[styles.chooseService, styles.labelTypo]}>
              Choose service
            </Text>
            <View style={styles.listOption}>
              <View style={[styles.tag, styles.tagSpaceBlock]}>
                <Text style={[styles.basicHaircut, styles.coloringTypo]}>
                  Basic haircut
                </Text>
              </View>
              <View style={[styles.tag1, styles.tagFlexBox]}>
                <Text style={[styles.coloring, styles.coloringTypo]}>
                  Coloring
                </Text>
              </View>
              <View style={[styles.tag2, styles.tagFlexBox]}>
                <Text style={[styles.coloring, styles.coloringTypo]}>
                  Perming
                </Text>
              </View>
              <View style={[styles.tag3, styles.tagFlexBox]} />
            </View>
          </View>
          <View style={styles.buttonbigSpaceBlock}>
            <Text style={[styles.chooseService, styles.labelTypo]}>
              Additional details
            </Text>
            <View style={[styles.textArea, styles.tagBorder]} />
          </View>
          <TouchableHighlight
            style={[styles.buttonbig, styles.tagFlexBox1]}
            underlayColor="#fff"
            activeOpacity={0.2}
            onPress={() => navigation.navigate("TopHairPage")}
          >
            <Text style={[styles.label, styles.labelTypo]}>Apply</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chooseFlexBox: {
    textAlign: "left",
    color: Color.colorCoolGray900,
  },
  labelTypo: {
    fontSize: FontSize.typographyHeadline416_size,
    fontFamily: FontFamily.typographyHeadline416,
    fontWeight: "700",
  },
  tagSpaceBlock: {
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_5xs,
    flexDirection: "row",
  },
  coloringTypo: {
    fontFamily: FontFamily.typographyCaption112,
    fontSize: FontSize.typographyHeadline416_size,
    textAlign: "left",
  },
  tagFlexBox: {
    marginLeft: 12,
    justifyContent: "center",
    borderRadius: Border.br_5xs,
    alignItems: "center",
  },
  tagBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  tagFlexBox1: {
    justifyContent: "center",
    backgroundColor: Color.colorLightseagreen_100,
    borderRadius: Border.br_5xs,
    alignItems: "center",
  },
  featuredIcon: {
    borderRadius: Border.br_xs,
    width: 48,
    height: 48,
  },
  chooseYourService: {
    fontSize: FontSize.typographyHeadline318_size,
    marginLeft: 24,
    fontFamily: FontFamily.typographyHeadline416,
    fontWeight: "700",
    color: Color.colorCoolGray900,
  },
  content: {
    alignItems: "center",
    flexDirection: "row",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  boldEssentionalUiClose: {
    width: 24,
    height: 24,
  },
  modalHeader: {
    borderTopLeftRadius: Border.br_5xl,
    borderTopRightRadius: Border.br_5xl,
    backgroundColor: Color.colorPrimaryBrand50,
    width: 401,
    height: 78,
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_lg,
    paddingVertical: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
  },
  chooseService: {
    textAlign: "left",
    color: Color.colorCoolGray900,
  },
  basicHaircut: {
    color: Color.colorPrimaryBrand900,
  },
  tag: {
    borderColor: Color.colorLightseagreen_100,
    justifyContent: "center",
    backgroundColor: Color.colorLightseagreen_100,
    borderRadius: Border.br_5xs,
    alignItems: "center",
    borderWidth: 1,
    borderStyle: "solid",
  },
  coloring: {
    color: Color.colorLightseagreen_100,
  },
  tag1: {
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_5xs,
    flexDirection: "row",
  },
  tag2: {
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_5xs,
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: 12,
  },
  tag3: {
    width: 105,
    height: 28,
  },
  listOption: {
    marginTop: 18,
    flexWrap: "wrap",
    width: 339,
    flexDirection: "row",
  },
  buttonbigSpaceBlock: {
    marginTop: 24,
    width: 339,
  },
  textArea: {
    borderColor: Color.colorLightgray,
    height: 172,
    borderRadius: Border.br_5xs,
    borderWidth: 1,
    borderStyle: "solid",
    marginTop: 18,
    width: 339,
  },
  label: {
    color: Color.colorWhite900,
    textAlign: "center",
  },
  buttonbig: {
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_mid,
    marginTop: 24,
    width: 339,
    overflow: "hidden",
    flexDirection: "row",
  },
  option: {
    position: "absolute",
    marginLeft: -203.5,
    bottom: 0,
    left: "50%",
    borderTopLeftRadius: Border.br_9xl,
    borderTopRightRadius: Border.br_9xl,
    backgroundColor: Color.colorWhite900,
    width: 406,
    height: 775,
    alignItems: "center",
  },
  mainLoadingPage: {
    backgroundColor: Color.colorLightseagreen_200,
    width: 375,
    overflow: "hidden",
    height: 812,
  },
  mainLoadingPageTrim: {
    flex: 1,
    flexDirection: "row",
    height: 812,
    width: "100%",
  },
});

export default MainLoadingPageTrim;
