import * as React from "react";
import { useState } from "react";
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
import { useNavigation, ParamListBase, useRoute, RouteProp} from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

type RouteParams = {
  topHairStyle: string;
  topHairVolume: string;
  sideHairStyle: string;
  backHairStyle: string;
  selectedStylist: string;
};

const BookingAndRatingPage = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [rating, setRating] = useState(4);
  const [selectedTags, setSelectedTags] = useState(["Overall good", "Good service"]);
  const route = useRoute<RouteProp<{ params: RouteParams }, 'params'>>();
  const { topHairStyle, topHairVolume, sideHairStyle, backHairStyle, selectedStylist } = route.params;

  const tags = [
    "Overall good",
    "Good service",
    "Satisfying",
    "Comfortable",
    "Recommended",
    "Cheap",
    "Perfect results",
    "Accurate estimate",
  ];

  const handleStarPress = (value: number) => {
    setRating(value);
  };

  const handleTagPress = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

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
                {[1, 2, 3, 4, 5].map((star) => (
                  <Pressable key={star} onPress={() => handleStarPress(star)}>
                    <Image
                      style={[styles.star2Icon, styles.iconLayout]}
                      contentFit="cover"
                      source={
                        star <= rating
                          ? require("../assets/star-1.png")
                          : require("../assets/star-5.png")
                      }
                    />
                  </Pressable>
                ))}
                <Text style={[styles.text, styles.textTypo]}>({rating}.0)</Text>
              </View>
            </View>
            <View style={styles.textArea}>
              <Text style={[styles.rating, styles.textTypo]}>Review</Text>
              <View style={[styles.textArea1, styles.textArea1Layout]}>
                {selectedTags.map((tag) => (
                  <Pressable
                    key={tag}
                    style={[styles.overallGoodTag, styles.tabFlexBox]}
                    onPress={() => handleTagPress(tag)}
                  >
                    <Text style={[styles.overallGood, styles.satisfyingTypo]}>
                      {tag}
                    </Text>
                    <Image
                      style={styles.materialSymbolsLightcancelIcon}
                      contentFit="cover"
                      source={require("../assets/materialsymbolslightcancel.png")}
                    />
                  </Pressable>
                ))}
              </View>
              <Text style={[styles.hintMessageGoes, styles.satisfyingTypo]}>
                Hint message goes here
              </Text>
            </View>
            <View style={[styles.sectionTab, styles.textArea1Layout]}>
              {tags.map((tag) => (
                <Pressable
                  key={tag}
                  style={[
                    styles.tab,
                    styles.tabSpaceBlock,
                    selectedTags.includes(tag) && styles.tabSelected,
                  ]}
                  onPress={() => handleTagPress(tag)}
                >
                  <Text style={[styles.overallGood, styles.satisfyingTypo]}>
                    {tag}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>
          <TouchableHighlight
            style={styles.buttonbig}
            underlayColor="#fff"
            activeOpacity={0.2}
            onPress={() => navigation.navigate("InvoicePage", {topHairStyle, topHairVolume, sideHairStyle, backHairStyle, selectedStylist})}
          >
            <Text style={[styles.label, styles.backTypo]}>Send</Text>
          </TouchableHighlight>
        </View>
        <View style={[styles.topNavigationBar, styles.topNavigationBarBg]}>
        <Text style={[styles.back, styles.backTypo]}>
                 <Text style={[styles.back, styles.backTypo]}>
                Tell us your experience!
              </Text>
              </Text>
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
    flexWrap: "wrap",
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
  tabSelected: {
    backgroundColor: Color.colorLightseagreen_100,
    borderColor: Color.colorPrimaryBrand500,
    borderWidth: 1,
    borderStyle: "solid",
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
    marginBottom: 8,
    marginRight: 8,
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
    marginTop: 45,
    textAlign: "center",
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
