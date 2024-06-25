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

const TrimAddOns = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.trimAddOns, styles.iconLayout]}>
      <View style={styles.option}>
        <View style={styles.modalHeader}>
          <View style={styles.content}>
            <Image
              style={styles.featuredIcon}
              contentFit="cover"
              source={require("../assets/featured-icon.png")}
            />
            <Text style={[styles.addOns, styles.addOnsFlexBox]}>Add-ons</Text>
          </View>
          <TouchableHighlight
            style={styles.boldEssentionalUiClose}
            underlayColor="#fff"
            activeOpacity={0.2}
            onPress={() => navigation.navigate("BackHairPage")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/bold--essentional-ui--close-square.png")}
            />
          </TouchableHighlight>
        </View>
        <View style={styles.sectionCategory}>
          <Text style={[styles.currentSpending, styles.labelTypo]}>
            Current spending
          </Text>
          <View style={[styles.listOption, styles.textAreaSpaceBlock]}>
            <View style={[styles.tag, styles.tagSpaceBlock]}>
              <Text style={[styles.text, styles.textTypo]}>$12.00</Text>
            </View>
            <View style={[styles.tag1, styles.tagFlexBox]} />
          </View>
        </View>
        <View style={styles.sectionCategory}>
          <Text style={[styles.currentSpending, styles.labelTypo]}>
            Choose service
          </Text>
          <View style={[styles.listOption, styles.textAreaSpaceBlock]}>
            <View style={[styles.tag2, styles.tag2Border]}>
              <Text style={[styles.none, styles.textTypo]}>None</Text>
            </View>
            <View style={[styles.tag3, styles.tagFlexBox]}>
              <Text style={[styles.text, styles.textTypo]}>Coloring</Text>
            </View>
            <View style={[styles.tag4, styles.tagFlexBox]}>
              <Text style={[styles.text, styles.textTypo]}>Perming</Text>
            </View>
            <View style={[styles.tag5, styles.tagFlexBox]} />
          </View>
        </View>
        <View style={styles.sectionCategory}>
          <Text style={[styles.currentSpending, styles.labelTypo]}>
            Additional details
          </Text>
          <View style={[styles.textArea, styles.tag2Border]} />
        </View>
        <TouchableHighlight
          style={[styles.buttonbig, styles.tag2FlexBox]}
          underlayColor="#fff"
          activeOpacity={0.2}
          onPress={() => navigation.navigate("Confirmation")}
        >
          <Text style={[styles.label, styles.labelTypo]}>Apply</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  addOnsFlexBox: {
    textAlign: "left",
    color: Color.colorCoolGray900,
  },
  labelTypo: {
    fontSize: FontSize.typographyHeadline416_size,
    fontFamily: FontFamily.typographyHeadline416,
    fontWeight: "700",
  },
  textAreaSpaceBlock: {
    marginTop: 18,
    width: 339,
  },
  tagSpaceBlock: {
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_5xs,
  },
  textTypo: {
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
  tag2Border: {
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
  },
  tag2FlexBox: {
    backgroundColor: Color.colorLightseagreen_100,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  featuredIcon: {
    borderRadius: Border.br_xs,
    width: 48,
    height: 48,
  },
  addOns: {
    fontSize: FontSize.typographyHeadline318_size,
    marginLeft: 24,
    fontFamily: FontFamily.typographyHeadline416,
    fontWeight: "700",
    textAlign: "left",
    color: Color.colorCoolGray900,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    height: "100%",
  },
  boldEssentionalUiClose: {
    width: 24,
    height: 24,
  },
  modalHeader: {
    borderTopLeftRadius: Border.br_5xl,
    borderTopRightRadius: Border.br_5xl,
    backgroundColor: Color.colorPrimaryBrand50,
    width: 403,
    height: 78,
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_lg,
    paddingVertical: Padding.p_base,
    flexDirection: "row",
    alignItems: "center",
  },
  currentSpending: {
    textAlign: "left",
    color: Color.colorCoolGray900,
  },
  text: {
    color: Color.colorLightseagreen_100,
  },
  tag: {
    justifyContent: "center",
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_5xs,
    borderRadius: Border.br_5xs,
    flexDirection: "row",
    alignItems: "center",
  },
  tag1: {
    width: 94,
    height: 28,
    marginLeft: 12,
  },
  listOption: {
    flexWrap: "wrap",
    flexDirection: "row",
  },
  sectionCategory: {
    marginTop: 24,
    width: 339,
  },
  none: {
    color: Color.colorPrimaryBrand900,
  },
  tag2: {
    borderColor: Color.colorLightseagreen_100,
    backgroundColor: Color.colorLightseagreen_100,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_5xs,
  },
  tag3: {
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_5xs,
    flexDirection: "row",
  },
  tag4: {
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_5xs,
    flexWrap: "wrap",
    flexDirection: "row",
  },
  tag5: {
    width: 105,
    height: 28,
    marginLeft: 12,
  },
  textArea: {
    borderColor: Color.colorLightgray,
    height: 172,
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
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorLightseagreen_100,
    marginTop: 24,
    width: 339,
    overflow: "hidden",
  },
  option: {
    position: "absolute",
    marginLeft: -200.5,
    bottom: 0,
    left: "50%",
    borderTopLeftRadius: Border.br_9xl,
    borderTopRightRadius: Border.br_9xl,
    backgroundColor: Color.colorWhite900,
    width: 405,
    height: 775,
    alignItems: "center",
  },
  trimAddOns: {
    backgroundColor: Color.colorLightseagreen_200,
    flex: 1,
    height: 812,
  },
});

export default TrimAddOns;
