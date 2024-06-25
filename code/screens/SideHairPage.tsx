import * as React from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  Pressable,
  TouchableHighlight,
} from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Padding, Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const SideHairPage = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <ScrollView
      style={styles.sideHairPage}
      horizontal={false}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={true}
      contentContainerStyle={styles.sideHairPageContent}
    >
      <ScrollView
        style={styles.sideHair}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.sideHairScrollViewContent}
      >
        <View style={styles.topNavigationBar}>
          <View style={[styles.statusBar, styles.buttonSpaceBlock]}>
            <Text style={styles.text}>19:27</Text>
            <View style={styles.signalParent}>
              <View style={styles.signal}>
                <View style={[styles.rectangle, styles.tagBorder]} />
                <View style={[styles.rectangle1, styles.rectanglePosition2]} />
                <View style={[styles.rectangle2, styles.tagBorder]} />
                <View style={[styles.rectangle3, styles.rectanglePosition]} />
              </View>
              <View style={styles.battry}>
                <View style={[styles.rectangle4, styles.rectanglePosition1]} />
                <View style={[styles.rectangle5, styles.rectanglePosition]} />
                <View style={[styles.rectangle6, styles.rectanglePosition1]} />
              </View>
            </View>
          </View>
          <View style={[styles.content, styles.ratingFlexBox]}>
            <View style={styles.label}>
              <TouchableHighlight
                style={styles.boldLayout1}
                underlayColor="#fff"
                activeOpacity={0.2}
                onPress={() => navigation.navigate("TopHairPage")}
              >
                <Image
                  style={styles.icon}
                  contentFit="cover"
                  source={require("../assets/linear--arrows--arrow-left.png")}
                />
              </TouchableHighlight>
              <Text style={[styles.label1, styles.styleTypo]}>Back</Text>
            </View>
            <View style={styles.actionsRight}>
              <Image
                style={[styles.boldEssentionalUiShare, styles.boldLayout1]}
                contentFit="cover"
                source={require("../assets/bold--essentional-ui--share.png")}
              />
              <Image
                style={[styles.boldEssentionalUiMenu, styles.boldLayout1]}
                contentFit="cover"
                source={require("../assets/bold--essentional-ui--menu-dots.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.sliderFlexBox}>
          <View style={styles.card}>
            <Image
              style={styles.backgroundIcon}
              contentFit="cover"
              source={require("../assets/background.png")}
            />
            <View style={[styles.button, styles.parentFlexBox]}>
              <Text style={[styles.styleease, styles.label2Typo]}>
                StyleEase
              </Text>
              <Image
                style={styles.logoGobarVertical1}
                contentFit="cover"
                source={require("../assets/logo-gobar-vertical-1.png")}
              />
            </View>
            <View style={styles.titledesc}>
              <Text style={[styles.asStudioHair, styles.styleTypo]}>
                AS Studio Hair Salon
              </Text>
              <View style={[styles.location, styles.ratingFlexBox]}>
                <Image
                  style={[styles.boldMapLocationMapPo, styles.boldLayout]}
                  contentFit="cover"
                  source={require("../assets/bold--map--location--map-point.png")}
                />
                <Text style={[styles.bWoodlandsAve, styles.topHairTypo]}>
                  570B Woodlands Ave 1, Singapore 732570
                </Text>
              </View>
              <View style={styles.ratingFlexBox}>
                <Image
                  style={[styles.boldLikeStar, styles.boldLayout]}
                  contentFit="cover"
                  source={require("../assets/bold--like--star.png")}
                />
                <Text style={[styles.bWoodlandsAve, styles.topHairTypo]}>
                  4.2
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.slider, styles.sliderFlexBox]} />
          <View style={styles.sliderFilter}>
            <View style={[styles.tag, styles.tagFlexBox]}>
              <Text style={styles.topHairTypo}>Top hair</Text>
            </View>
            <View style={[styles.tag1, styles.tagFlexBox]}>
              <Text style={[styles.sideHair1, styles.lowTypo]}>Side hair</Text>
            </View>
            <View style={[styles.tag2, styles.tagFlexBox]}>
              <Text style={styles.topHairTypo}>Back hair</Text>
            </View>
            <View style={[styles.tag3, styles.tagLayout]} />
            <View style={[styles.tag4, styles.tagLayout]} />
          </View>
          <View style={styles.list}>
            <Image
              style={styles.image1Icon}
              contentFit="cover"
              source={require("../assets/image-11.png")}
            />
          </View>
          <Text style={[styles.style, styles.styleTypo]}>Style:</Text>
          <View style={styles.list1}>
            <Image
              style={styles.slickbackLayout}
              contentFit="cover"
              source={require("../assets/slickback1.png")}
            />
            <View style={[styles.fadeParent, styles.parentFlexBox]}>
              <Text style={[styles.fade, styles.lowTypo]}>Fade</Text>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/ellipse-260.png")}
              />
              <View style={[styles.locatoin, styles.boldLayout]} />
            </View>
            <View style={[styles.slickback, styles.slickbackLayout]} />
          </View>
          <View style={styles.list1}>
            <Image
              style={styles.slickbackLayout}
              contentFit="cover"
              source={require("../assets/rectangle-1548.png")}
            />
            <View style={[styles.fadeParent, styles.parentFlexBox]}>
              <Text style={[styles.fade, styles.lowTypo]}>High</Text>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/ellipse-2601.png")}
              />
              <View style={[styles.locatoin, styles.boldLayout]} />
            </View>
            <View style={[styles.slickback, styles.slickbackLayout]} />
          </View>
          <View style={styles.list1}>
            <Image
              style={styles.slickbackLayout}
              contentFit="cover"
              source={require("../assets/rectangle-15481.png")}
            />
            <View style={styles.frameView}>
              <View style={[styles.midParent, styles.parentFlexBox]}>
                <Text style={[styles.fade, styles.lowTypo]}>Mid</Text>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-260.png")}
                />
                <View style={[styles.locatoin, styles.boldLayout]} />
              </View>
            </View>
            <View style={[styles.slickback, styles.slickbackLayout]} />
          </View>
          <View style={styles.list1}>
            <Image
              style={styles.slickbackLayout}
              contentFit="cover"
              source={require("../assets/rectangle-15482.png")}
            />
            <View style={styles.frameView}>
              <View style={[styles.midParent, styles.parentFlexBox]}>
                <Text style={[styles.low, styles.lowTypo]}>Low</Text>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-260.png")}
                />
                <View style={[styles.locatoin, styles.boldLayout]} />
              </View>
            </View>
            <View style={[styles.slickback, styles.slickbackLayout]} />
          </View>
          <View style={styles.list1}>
            <Image
              style={styles.slickbackLayout}
              contentFit="cover"
              source={require("../assets/rectangle-15483.png")}
            />
            <View style={styles.frameView}>
              <View style={[styles.midParent, styles.parentFlexBox]}>
                <Text style={[styles.fade, styles.lowTypo]}>Burst</Text>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-260.png")}
                />
                <View style={[styles.locatoin, styles.boldLayout]} />
              </View>
            </View>
            <View style={[styles.slickback, styles.slickbackLayout]} />
          </View>
          <View style={styles.list1}>
            <Image
              style={styles.slickbackLayout}
              contentFit="cover"
              source={require("../assets/rectangle-15484.png")}
            />
            <View style={styles.frameView}>
              <View style={[styles.midParent, styles.parentFlexBox]}>
                <Text style={[styles.fade, styles.lowTypo]}>Taper</Text>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-260.png")}
                />
                <View style={[styles.locatoin, styles.boldLayout]} />
              </View>
            </View>
            <View style={[styles.slickback, styles.slickbackLayout]} />
          </View>
          <View style={styles.list1}>
            <Image
              style={styles.slickbackLayout}
              contentFit="cover"
              source={require("../assets/rectangle-15485.png")}
            />
            <View style={styles.frameView}>
              <View style={[styles.midParent, styles.parentFlexBox]}>
                <Text style={[styles.fade, styles.lowTypo]}>Trim (Long)</Text>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-260.png")}
                />
                <View style={[styles.locatoin, styles.boldLayout]} />
              </View>
            </View>
            <View style={[styles.slickback, styles.slickbackLayout]} />
          </View>
          <View style={styles.list1}>
            <Image
              style={styles.slickbackLayout}
              contentFit="cover"
              source={require("../assets/rectangle-15486.png")}
            />
            <View style={styles.frameView}>
              <View style={[styles.midParent, styles.parentFlexBox]}>
                <Text style={[styles.fade, styles.lowTypo]}>Flat shave</Text>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-260.png")}
                />
                <View style={[styles.locatoin, styles.boldLayout]} />
              </View>
            </View>
            <View style={[styles.slickback, styles.slickbackLayout]} />
          </View>
          <View style={styles.list1}>
            <Image
              style={styles.slickbackLayout}
              contentFit="cover"
              source={require("../assets/rectangle-15487.png")}
            />
            <View style={styles.frameView}>
              <View style={[styles.midParent, styles.parentFlexBox]}>
                <Text style={[styles.fade, styles.lowTypo]}>Number 1</Text>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-260.png")}
                />
                <View style={[styles.locatoin, styles.boldLayout]} />
              </View>
            </View>
            <View style={[styles.slickback, styles.slickbackLayout]} />
          </View>
          <View style={styles.list1}>
            <Image
              style={styles.slickbackLayout}
              contentFit="cover"
              source={require("../assets/rectangle-15488.png")}
            />
            <View style={styles.frameView}>
              <View style={[styles.midParent, styles.parentFlexBox]}>
                <Text style={[styles.fade, styles.lowTypo]}>Number 2</Text>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-260.png")}
                />
                <View style={[styles.locatoin, styles.boldLayout]} />
              </View>
            </View>
            <View style={[styles.slickback, styles.slickbackLayout]} />
          </View>
          <View style={styles.list1}>
            <Image
              style={styles.slickbackLayout}
              contentFit="cover"
              source={require("../assets/rectangle-15489.png")}
            />
            <View style={styles.frameView}>
              <View style={[styles.midParent, styles.parentFlexBox]}>
                <Text style={[styles.fade, styles.lowTypo]}>Number 3</Text>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-260.png")}
                />
                <View style={[styles.locatoin, styles.boldLayout]} />
              </View>
            </View>
            <View style={[styles.slickback, styles.slickbackLayout]} />
          </View>
          <TouchableHighlight
            style={styles.sliderFilter}
            underlayColor="#fff"
            activeOpacity={0.2}
            onPress={() => navigation.navigate("BackHairPage")}
          >
            <View style={styles.listOption}>
              <View style={[styles.tag5, styles.parentFlexBox]} />
              <View style={[styles.buttonbig, styles.parentFlexBox]}>
                <Text style={[styles.label2, styles.label2Typo]}>Proceed</Text>
              </View>
            </View>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  sideHairScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  sideHairPageContent: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  buttonSpaceBlock: {
    paddingVertical: Padding.p_xs,
    flexDirection: "row",
  },
  tagBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  rectanglePosition2: {
    left: "0%",
    backgroundColor: Color.colorCoolGray900,
    position: "absolute",
  },
  rectanglePosition: {
    right: "0%",
    backgroundColor: Color.colorCoolGray900,
    borderRadius: Border.br_9xs,
    position: "absolute",
  },
  rectanglePosition1: {
    top: "0%",
    height: "100%",
    bottom: "0%",
  },
  ratingFlexBox: {
    marginTop: 8,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  styleTypo: {
    fontFamily: FontFamily.typographyHeadline416,
    fontWeight: "700",
    textAlign: "left",
  },
  boldLayout1: {
    height: 24,
    width: 24,
  },
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  label2Typo: {
    color: Color.colorWhite900,
    fontFamily: FontFamily.typographyHeadline416,
    fontWeight: "700",
  },
  boldLayout: {
    height: 16,
    width: 16,
  },
  topHairTypo: {
    color: Color.colorLightseagreen_100,
    fontFamily: FontFamily.typographyCaption112,
    fontSize: FontSize.typographyBody314_size,
    textAlign: "left",
  },
  sliderFlexBox: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  tagFlexBox: {
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_5xs,
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  lowTypo: {
    fontFamily: FontFamily.typographyCaption112,
    fontSize: FontSize.typographyBody314_size,
  },
  tagLayout: {
    height: 26,
    marginLeft: 12,
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    alignItems: "center",
  },
  slickbackLayout: {
    height: 100,
    width: 100,
  },
  text: {
    fontSize: FontSize.typographyCaption112_size,
    fontWeight: "500",
    fontFamily: FontFamily.quicksandMedium,
    textAlign: "left",
    color: Color.colorCoolGray900,
  },
  rectangle: {
    height: "48%",
    top: "52%",
    right: "60%",
    left: "26.67%",
    borderColor: Color.colorCoolGray900,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorCoolGray900,
    borderRadius: Border.br_9xs,
    bottom: "0%",
    width: "13.33%",
    position: "absolute",
  },
  rectangle1: {
    height: "32%",
    top: "68%",
    right: "86.67%",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Color.colorCoolGray900,
    borderRadius: Border.br_9xs,
    bottom: "0%",
    left: "0%",
    width: "13.33%",
  },
  rectangle2: {
    height: "76%",
    top: "24%",
    right: "30%",
    left: "56.67%",
    borderColor: Color.colorCoolGray900,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorCoolGray900,
    borderRadius: Border.br_9xs,
    bottom: "0%",
    width: "13.33%",
    position: "absolute",
  },
  rectangle3: {
    left: "86.67%",
    top: "0%",
    height: "100%",
    bottom: "0%",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Color.colorCoolGray900,
    width: "13.33%",
    right: "0%",
  },
  signal: {
    height: 10,
    width: 12,
  },
  rectangle4: {
    width: "68.57%",
    right: "31.43%",
    borderTopLeftRadius: Border.br_10xs_5,
    borderBottomLeftRadius: Border.br_10xs_5,
    left: "0%",
    backgroundColor: Color.colorCoolGray900,
    position: "absolute",
  },
  rectangle5: {
    height: "33.33%",
    width: "9.52%",
    top: "33.33%",
    bottom: "33.33%",
    left: "90.48%",
  },
  rectangle6: {
    width: "26.67%",
    right: "4.76%",
    left: "68.57%",
    borderTopRightRadius: Border.br_10xs_5,
    borderBottomRightRadius: Border.br_10xs_5,
    backgroundColor: Color.colorSilver_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Color.colorCoolGray900,
    position: "absolute",
  },
  battry: {
    width: 21,
    height: 9,
    marginLeft: 11,
  },
  signalParent: {
    alignItems: "flex-end",
    flexDirection: "row",
  },
  statusBar: {
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_7xl,
    display: "none",
    alignItems: "center",
    width: 375,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  label1: {
    marginLeft: 24,
    fontSize: FontSize.typographyHeadline416_size,
    color: Color.colorCoolGray900,
  },
  label: {
    alignItems: "center",
    flexDirection: "row",
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
    alignItems: "center",
    flex: 1,
  },
  topNavigationBar: {
    paddingBottom: Padding.p_base,
    height: 91,
    width: 375,
    backgroundColor: Color.colorWhite900,
  },
  backgroundIcon: {
    borderRadius: Border.br_smi,
    width: 351,
    height: 216,
    zIndex: 0,
  },
  styleease: {
    fontSize: FontSize.typographyBody314_size,
    color: Color.colorWhite900,
    textAlign: "left",
  },
  logoGobarVertical1: {
    width: 36,
    height: 34,
    marginLeft: 8,
    overflow: "hidden",
  },
  button: {
    top: 158,
    left: 191,
    borderTopLeftRadius: Border.br_5xs,
    borderBottomRightRadius: Border.br_5xs,
    paddingHorizontal: Padding.p_5xl,
    zIndex: 1,
    backgroundColor: Color.colorLightseagreen_100,
    position: "absolute",
    paddingVertical: Padding.p_xs,
    flexDirection: "row",
    overflow: "hidden",
  },
  asStudioHair: {
    width: 339,
    fontSize: FontSize.typographyHeadline416_size,
    color: Color.colorCoolGray900,
  },
  boldMapLocationMapPo: {
    overflow: "hidden",
  },
  bWoodlandsAve: {
    marginLeft: 8,
  },
  location: {
    alignItems: "center",
  },
  boldLikeStar: {
    borderRadius: Border.br_8xs,
    overflow: "hidden",
  },
  titledesc: {
    zIndex: 2,
    marginTop: 12,
    width: 339,
  },
  card: {
    height: 281,
    width: 339,
  },
  slider: {
    height: 8,
    marginTop: 16,
    alignSelf: "stretch",
    justifyContent: "flex-end",
  },
  tag: {
    borderColor: Color.colorWhite900,
    borderWidth: 1,
    borderStyle: "solid",
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_5xs,
    backgroundColor: Color.colorWhite900,
  },
  sideHair1: {
    color: Color.colorPrimaryBrand900,
    textAlign: "left",
  },
  tag1: {
    borderColor: Color.colorLightseagreen_100,
    marginLeft: 12,
    backgroundColor: Color.colorLightseagreen_100,
    borderWidth: 1,
    borderStyle: "solid",
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_5xs,
  },
  tag2: {
    marginLeft: 12,
  },
  tag3: {
    width: 76,
  },
  tag4: {
    width: 84,
  },
  sliderFilter: {
    marginTop: 16,
    width: 339,
    flexDirection: "row",
  },
  image1Icon: {
    borderRadius: 53,
    width: 80,
    height: 91,
  },
  list: {
    width: 100,
    marginTop: 16,
    flexDirection: "row",
  },
  style: {
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    width: 317,
    height: 22,
    marginTop: 16,
  },
  fade: {
    textAlign: "center",
    color: Color.colorCoolGray900,
  },
  frameChild: {
    height: 11,
    marginLeft: 8,
    width: 12,
  },
  locatoin: {
    marginLeft: 8,
    alignItems: "center",
  },
  fadeParent: {
    marginLeft: 12,
    flexDirection: "row",
  },
  slickback: {
    marginLeft: 12,
    borderRadius: Border.br_5xs,
  },
  list1: {
    marginTop: 16,
    width: 339,
    alignItems: "center",
    flexDirection: "row",
  },
  midParent: {
    flexDirection: "row",
  },
  frameView: {
    marginLeft: 12,
  },
  low: {
    width: 43,
    textAlign: "center",
    color: Color.colorCoolGray900,
  },
  tag5: {
    width: 47,
    height: 28,
    borderRadius: Border.br_5xs,
    display: "none",
  },
  label2: {
    textAlign: "center",
    fontSize: FontSize.typographyHeadline416_size,
  },
  buttonbig: {
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_mid,
    marginLeft: 12,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorLightseagreen_100,
    width: 339,
    flexDirection: "row",
    overflow: "hidden",
  },
  listOption: {
    flexWrap: "wrap",
    width: 339,
    flexDirection: "row",
  },
  sideHair: {
    overflow: "hidden",
    backgroundColor: Color.colorWhite900,
    flex: 1,
  },
  sideHairPage: {
    maxWidth: "100%",
    width: "100%",
    flex: 1,
  },
});

export default SideHairPage;
