import * as React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableHighlight,
} from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const BookingAndRatingPage = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <ScrollView
      style={styles.bookingAndRatingPage}
      horizontal={false}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={true}
      contentContainerStyle={styles.bookingAndRatingPageContent}
    >
      <View style={[styles.bookingRatingReview, styles.topNavigationBarBg]}>
        <Image
          style={styles.setIcon}
          contentFit="cover"
          source={require("../assets/set-icon1.png")}
        />
        <View style={styles.containers}>
          <View>
            <View style={styles.sectionRating}>
              <Text style={[styles.rating, styles.textTypo]}>Rating</Text>
              <View style={styles.rating1}>
                <Image
                  style={styles.iconLayout}
                  contentFit="cover"
                  source={require("../assets/star-1.png")}
                />
                <Image
                  style={[styles.star2Icon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/star-1.png")}
                />
                <Image
                  style={[styles.star2Icon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/star-1.png")}
                />
                <Image
                  style={[styles.star2Icon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/star-1.png")}
                />
                <Image
                  style={[styles.star2Icon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/star-5.png")}
                />
                <Text style={[styles.text, styles.textTypo]}>(4.0)</Text>
              </View>
            </View>
            <View style={styles.textArea}>
              <Text style={[styles.rating, styles.textTypo]}>Review</Text>
              <View style={[styles.textArea1, styles.textArea1Layout]}>
                <View style={[styles.overallGoodTag, styles.tabFlexBox]}>
                  <Text style={[styles.overallGood, styles.satisfyingTypo]}>
                    Overall good
                  </Text>
                  <Image
                    style={styles.materialSymbolsLightcancelIcon}
                    contentFit="cover"
                    source={require("../assets/materialsymbolslightcancel.png")}
                  />
                </View>
                <View style={[styles.overallGoodTag, styles.tabFlexBox]}>
                  <Text style={[styles.overallGood, styles.satisfyingTypo]}>
                    Good service
                  </Text>
                  <Image
                    style={styles.materialSymbolsLightcancelIcon}
                    contentFit="cover"
                    source={require("../assets/materialsymbolslightcancel.png")}
                  />
                </View>
              </View>
              <Text style={[styles.hintMessageGoes, styles.satisfyingTypo]}>
                Hint message goes here
              </Text>
            </View>
            <View style={[styles.sectionTab, styles.textArea1Layout]}>
              <View style={[styles.tab, styles.tabBorder]}>
                <Text style={[styles.overallGood, styles.satisfyingTypo]}>
                  Overall good
                </Text>
              </View>
              <View style={[styles.tab1, styles.tabSpaceBlock]}>
                <Text style={[styles.overallGood, styles.satisfyingTypo]}>
                  Good service
                </Text>
              </View>
              <View style={[styles.tab2, styles.tabSpaceBlock]}>
                <Text style={[styles.satisfying, styles.satisfyingTypo]}>
                  Satisfying
                </Text>
              </View>
              <View style={[styles.tab2, styles.tabSpaceBlock]}>
                <Text style={[styles.satisfying, styles.satisfyingTypo]}>
                  Comfortable
                </Text>
              </View>
              <View style={[styles.tab2, styles.tabSpaceBlock]}>
                <Text style={[styles.satisfying, styles.satisfyingTypo]}>
                  Recommended
                </Text>
              </View>
              <View style={[styles.tab5, styles.tabSpaceBlock]}>
                <Text style={[styles.satisfying, styles.satisfyingTypo]}>
                  Cheap
                </Text>
              </View>
              <View style={[styles.tab5, styles.tabSpaceBlock]}>
                <Text style={[styles.satisfying, styles.satisfyingTypo]}>
                  Perfect results
                </Text>
              </View>
              <View style={[styles.tab2, styles.tabSpaceBlock]}>
                <Text style={[styles.satisfying, styles.satisfyingTypo]}>
                  Accurate estimate
                </Text>
              </View>
            </View>
          </View>
          <TouchableHighlight
            style={styles.buttonbig}
            underlayColor="#fff"
            activeOpacity={0.2}
            onPress={() => navigation.navigate("InvoicePage")}
          >
            <Text style={[styles.label, styles.backTypo]}>Send</Text>
          </TouchableHighlight>
        </View>
        <View style={[styles.topNavigationBar, styles.topNavigationBarBg]}>
          <View style={styles.content}>
            <View style={styles.label1}>
              <Pressable
                style={styles.boldLayout}
                onPress={() => navigation.goBack()}
              >
                <Image
                  style={styles.icon}
                  contentFit="cover"
                  source={require("../assets/linear--arrows--arrow-left1.png")}
                />
              </Pressable>
              <Text style={[styles.back, styles.backTypo]}>Back</Text>
            </View>
            <View style={styles.actionsRight}>
              <Image
                style={[styles.boldEssentionalUiShare, styles.boldLayout]}
                contentFit="cover"
                source={require("../assets/bold--essentional-ui--share1.png")}
              />
              <Image
                style={[styles.boldEssentionalUiMenu, styles.boldLayout]}
                contentFit="cover"
                source={require("../assets/bold--essentional-ui--menu-dots1.png")}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bookingAndRatingPageContent: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  topNavigationBarBg: {
    backgroundColor: Color.colorLightseagreen_100,
    width: 390,
  },
  textTypo: {
    color: Color.colorCoolGray900,
    fontFamily: FontFamily.typographySubHeadline216,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.typographyBody314_size,
  },
  iconLayout: {
    height: 36,
    width: 36,
  },
  textArea1Layout: {
    width: 339,
    flexDirection: "row",
  },
  tabFlexBox: {
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_5xs,
    justifyContent: "center",
    borderRadius: Border.br_5xs,
    flexDirection: "row",
    alignItems: "center",
  },
  satisfyingTypo: {
    fontFamily: FontFamily.typographyCaption112,
    textAlign: "left",
  },
  tabBorder: {
    borderColor: Color.colorLightseagreen_100,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorLightseagreen_100,
  },
  tabSpaceBlock: {
    marginLeft: 12,
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_5xs,
    justifyContent: "center",
    borderRadius: Border.br_5xs,
    flexDirection: "row",
    alignItems: "center",
  },
  backTypo: {
    color: Color.colorWhite900,
    fontFamily: FontFamily.typographyHeadline416,
    fontWeight: "700",
    fontSize: FontSize.typographyHeadline416_size,
  },
  boldLayout: {
    height: 24,
    width: 24,
  },
  setIcon: {
    height: "53.74%",
    width: "101.08%",
    top: "0%",
    right: "0%",
    bottom: "46.26%",
    left: "-1.08%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
    maxWidth: "100%",
  },
  rating: {
    textAlign: "left",
  },
  star2Icon: {
    marginLeft: 16,
  },
  text: {
    marginLeft: 16,
    textAlign: "left",
  },
  rating1: {
    alignItems: "flex-end",
    marginTop: 12,
    flexDirection: "row",
  },
  sectionRating: {
    alignSelf: "stretch",
  },
  overallGood: {
    color: Color.colorPrimaryBrand900,
    fontSize: FontSize.typographyBody314_size,
    fontFamily: FontFamily.typographyCaption112,
  },
  materialSymbolsLightcancelIcon: {
    width: 18,
    height: 18,
    marginLeft: 4,
    overflow: "hidden",
  },
  overallGoodTag: {
    borderColor: Color.colorPrimaryBrand500,
    height: 26,
    borderWidth: 1,
    borderStyle: "solid",
  },
  textArea1: {
    borderColor: Color.colorLightgray,
    height: 172,
    padding: Padding.p_xs,
    marginTop: 8,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    width: 339,
  },
  hintMessageGoes: {
    fontSize: FontSize.typographyCaption112_size,
    color: Color.colorCoolGray400,
    display: "none",
    marginTop: 8,
  },
  textArea: {
    marginTop: 24,
  },
  tab: {
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_5xs,
    justifyContent: "center",
    borderRadius: Border.br_5xs,
    flexDirection: "row",
    alignItems: "center",
  },
  tab1: {
    borderColor: Color.colorLightseagreen_100,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorLightseagreen_100,
  },
  satisfying: {
    color: Color.colorLightseagreen_100,
    fontSize: FontSize.typographyBody314_size,
    fontFamily: FontFamily.typographyCaption112,
  },
  tab2: {
    backgroundColor: Color.colorWhite900,
  },
  tab5: {
    flexWrap: "wrap",
    backgroundColor: Color.colorWhite900,
  },
  sectionTab: {
    flexWrap: "wrap",
    marginTop: 24,
  },
  label: {
    textAlign: "center",
  },
  buttonbig: {
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_mid,
    marginTop: 47,
    justifyContent: "center",
    width: 339,
    borderRadius: Border.br_5xs,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.colorLightseagreen_100,
  },
  containers: {
    marginLeft: -195,
    bottom: 0,
    left: "50%",
    borderTopLeftRadius: Border.br_9xl,
    borderTopRightRadius: Border.br_9xl,
    height: 563,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xl,
    alignItems: "center",
    backgroundColor: Color.colorWhite900,
    position: "absolute",
    width: 390,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  back: {
    marginLeft: 24,
    textAlign: "left",
  },
  label1: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  boldEssentionalUiShare: {
    overflow: "hidden",
  },
  boldEssentionalUiMenu: {
    marginLeft: 24,
    overflow: "hidden",
  },
  actionsRight: {
    display: "none",
    flexDirection: "row",
  },
  content: {
    paddingHorizontal: Padding.p_lg,
    paddingVertical: 0,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  topNavigationBar: {
    top: 0,
    left: 0,
    height: 91,
    paddingBottom: Padding.p_base,
    position: "absolute",
    width: 390,
  },
  bookingRatingReview: {
    height: 812,
    overflow: "hidden",
    width: 390,
  },
  bookingAndRatingPage: {
    maxWidth: "100%",
    width: "100%",
    flex: 1,
  },
});

export default BookingAndRatingPage;
