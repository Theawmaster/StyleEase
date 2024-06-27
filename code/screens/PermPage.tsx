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
import { Color, Padding, FontFamily, FontSize, Border } from "../GlobalStyles";

const PermPage = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <ScrollView
      style={styles.permPage}
      horizontal={false}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={true}
      contentContainerStyle={styles.permPageScrollViewContent}
    >
      <View style={styles.perm}>
        <View style={[styles.hairPerm, styles.hairPermBg]}>
          <View style={[styles.containers, styles.containersFlexBox]}>
            <View style={styles.card}>
              <Image
                style={styles.backgroundIcon}
                contentFit="cover"
                source={require("../assets/background.png")}
              />
              <View style={[styles.button, styles.buttonFlexBox]}>
                <Text style={[styles.styleease, styles.labelTypo]}>
                  StyleEase
                </Text>
                <Image
                  style={styles.logoGobarVertical1}
                  contentFit="cover"
                  source={require("../assets/logo-gobar-vertical-1.png")}
                />
              </View>
              <View style={styles.titledesc}>
                <Text style={[styles.asStudioHair, styles.label2Typo]}>
                  AS Studio Hair Salon
                </Text>
                <View style={[styles.location, styles.ratingFlexBox]}>
                  <Image
                    style={[styles.boldMapLocationMapPo, styles.boldLayout1]}
                    contentFit="cover"
                    source={require("../assets/bold--map--location--map-point.png")}
                  />
                  <Text style={[styles.bWoodlandsAve, styles.longTypo]}>
                    570B Woodlands Ave 1, Singapore 732570
                  </Text>
                </View>
                <View style={styles.ratingFlexBox}>
                  <Image
                    style={[styles.boldLikeStar, styles.boldLayout1]}
                    contentFit="cover"
                    source={require("../assets/bold--like--star.png")}
                  />
                  <Text style={[styles.bWoodlandsAve, styles.longTypo]}>
                    4.2
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.slider} />
            <View style={styles.sliderFilter}>
              <View style={[styles.tag, styles.tagFlexBox]}>
                <Text style={[styles.topHair, styles.thickTypo]}>Top hair</Text>
              </View>
              <View style={[styles.tag1, styles.tagFlexBox]}>
                <Text style={[styles.sideHair, styles.longTypo]}>
                  Side hair
                </Text>
              </View>
              <View style={[styles.tag1, styles.tagFlexBox]}>
                <Text style={[styles.sideHair, styles.longTypo]}>
                  Back hair
                </Text>
              </View>
              <View style={[styles.tag3, styles.tagLayout]} />
              <View style={[styles.tag4, styles.tagLayout]} />
            </View>
            <View style={styles.list}>
              <Image
                style={styles.image1Icon}
                contentFit="cover"
                source={require("../assets/image-1.png")}
              />
            </View>
            <Text style={[styles.style, styles.styleTypo]}>Style:</Text>
            <View style={styles.list1}>
              <Image
                style={styles.listChild}
                contentFit="cover"
                source={require("../assets/rectangle-1547.png")}
              />
              <View style={styles.listInner}>
                <View style={styles.buzzCutParent}>
                  <Text style={styles.buzzCut}>Buzz cut</Text>
                  <Image
                    style={styles.frameChild}
                    contentFit="cover"
                    source={require("../assets/ellipse-260.png")}
                  />
                  <View style={[styles.locatoin, styles.boldLayout1]} />
                </View>
              </View>
            </View>
            <View style={styles.list1}>
              <Image
                style={styles.listChild}
                contentFit="cover"
                source={require("../assets/slickback.png")}
              />
              <View style={styles.combBackParent}>
                <Text style={styles.buzzCut}>Comb back</Text>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-260.png")}
                />
                <View style={[styles.locatoin, styles.boldLayout1]} />
              </View>
            </View>
            <View style={styles.list1}>
              <Image
                style={styles.listChild}
                contentFit="cover"
                source={require("../assets/rectangle-15471.png")}
              />
              <View style={styles.listInner}>
                <View style={styles.buzzCutParent}>
                  <Text style={styles.buzzCut}>Crew cut</Text>
                  <Image
                    style={styles.frameChild}
                    contentFit="cover"
                    source={require("../assets/ellipse-260.png")}
                  />
                  <View style={[styles.locatoin, styles.boldLayout1]} />
                </View>
              </View>
            </View>
            <View style={styles.list1}>
              <Image
                style={styles.listChild}
                contentFit="cover"
                source={require("../assets/rectangle-15472.png")}
              />
              <View style={styles.listInner}>
                <View style={styles.buzzCutParent}>
                  <Text style={styles.buzzCut}>Fringe</Text>
                  <Image
                    style={styles.frameChild}
                    contentFit="cover"
                    source={require("../assets/ellipse-260.png")}
                  />
                  <View style={[styles.locatoin, styles.boldLayout1]} />
                </View>
              </View>
            </View>
            <View style={styles.list1}>
              <Image
                style={styles.listChild}
                contentFit="cover"
                source={require("../assets/rectangle-15473.png")}
              />
              <View style={styles.combBackParent}>
                <Text style={styles.buzzCut}>Middle part</Text>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-2601.png")}
                />
                <View style={[styles.locatoin, styles.boldLayout1]} />
              </View>
            </View>
            <View style={styles.list1}>
              <Image
                style={styles.listChild}
                contentFit="cover"
                source={require("../assets/rectangle-15474.png")}
              />
              <View style={styles.listInner}>
                <View style={styles.buzzCutParent}>
                  <Text style={styles.buzzCut}>Side part</Text>
                  <Image
                    style={styles.frameChild}
                    contentFit="cover"
                    source={require("../assets/ellipse-260.png")}
                  />
                  <View style={[styles.locatoin, styles.boldLayout1]} />
                </View>
              </View>
            </View>
            <Text style={[styles.volume, styles.styleTypo]}>Volume:</Text>
            <View style={styles.sliderFilter}>
              <View style={styles.listFlexBox}>
                <View style={styles.tag5} />
                <View style={[styles.tag6, styles.tagFlexBox]}>
                  <Text style={[styles.thick, styles.thickTypo]}>Thick</Text>
                </View>
                <View style={[styles.tag1, styles.tagFlexBox]}>
                  <Text style={styles.thin}>Thin</Text>
                </View>
                <View style={[styles.buttonbig, styles.buttonbigFlexBox]}>
                  <Text style={[styles.label, styles.labelTypo]}>Proceed</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.topNavigationBar, styles.hairPermBg]}>
            <View style={[styles.statusBar, styles.buttonFlexBox]}>
              <Text style={styles.text1}>19:27</Text>
              <View style={styles.signalParent}>
                <View style={styles.signal}>
                  <View style={[styles.rectangle, styles.rectangleBorder]} />
                  <View style={[styles.rectangle1, styles.rectangleBorder]} />
                  <View style={[styles.rectangle2, styles.rectangleBorder]} />
                  <View style={[styles.rectangle3, styles.rectangleBorder]} />
                </View>
                <View style={styles.battry}>
                  <View style={[styles.rectangle4, styles.hairPermPosition]} />
                  <View style={[styles.rectangle5, styles.rectangleLayout]} />
                  <View style={[styles.rectangle6, styles.rectangleBorder]} />
                </View>
              </View>
            </View>
            <View style={[styles.content, styles.ratingFlexBox]}>
              <View style={styles.label1}>
                <TouchableHighlight
                  style={[styles.boldLayout, { marginTop: 50 }]}
                  underlayColor="#fff"
                  activeOpacity={0.2}
                  onPress={() => navigation.navigate("MainLoadingPage")}
                >
                  <Image
                    style={styles.icon}
                    contentFit="cover"
                    source={require("../assets/linear--arrows--arrow-left.png")}
                  />
                </TouchableHighlight>
                <Text style={[styles.label2, styles.label2Typo, { marginTop: 50 }]}>Back</Text>
              </View>
              <View style={styles.actionsRight}>
                <Image
                  style={[styles.boldEssentionalUiShare, styles.boldLayout]}
                  contentFit="cover"
                  source={require("../assets/bold--essentional-ui--share.png")}
                />
                <Image
                  style={[styles.boldEssentionalUiMenu, styles.boldLayout]}
                  contentFit="cover"
                  source={require("../assets/bold--essentional-ui--menu-dots.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.permContent, styles.containersFlexBox]}>
          <View style={styles.card}>
            <Image
              style={styles.backgroundIcon}
              contentFit="cover"
              source={require("../assets/background.png")}
            />
            <View style={[styles.button, styles.buttonFlexBox]}>
              <Text style={[styles.styleease, styles.labelTypo]}>
                StyleEase
              </Text>
              <Image
                style={styles.logoGobarVertical1}
                contentFit="cover"
                source={require("../assets/logo-gobar-vertical-1.png")}
              />
            </View>
            <View style={styles.titledesc}>
              <Text style={[styles.asStudioHair, styles.label2Typo]}>
                AS Studio Hair Salon
              </Text>
              <View style={[styles.location, styles.ratingFlexBox]}>
                <Image
                  style={[styles.boldMapLocationMapPo, styles.boldLayout1]}
                  contentFit="cover"
                  source={require("../assets/bold--map--location--map-point.png")}
                />
                <Text style={[styles.bWoodlandsAve, styles.longTypo]}>
                  570B Woodlands Ave 1, Singapore 732570
                </Text>
              </View>
              <View style={styles.ratingFlexBox}>
                <Image
                  style={[styles.boldLikeStar, styles.boldLayout1]}
                  contentFit="cover"
                  source={require("../assets/bold--like--star.png")}
                />
                <Text style={[styles.bWoodlandsAve, styles.longTypo]}>4.2</Text>
              </View>
            </View>
          </View>
          <View style={styles.slider} />
          <Text style={[styles.style, styles.styleTypo]}>Hair length:</Text>
          <View style={[styles.listOption1, styles.listFlexBox]}>
            <View style={styles.tag5} />
            <View style={[styles.tag9, styles.tagFlexBox]}>
              <Text style={[styles.thick, styles.thickTypo]}>Short</Text>
            </View>
            <View style={[styles.tag1, styles.tagFlexBox]}>
              <Text style={[styles.long, styles.longTypo]}>Long</Text>
            </View>
          </View>
          <Text style={[styles.style, styles.styleTypo]}>Mode of perm:</Text>
          <View style={[styles.listOption1, styles.listFlexBox]}>
            <View style={styles.tag5} />
            <View style={[styles.tag9, styles.tagFlexBox]}>
              <Text style={[styles.thick, styles.thickTypo]}>Cold</Text>
            </View>
            <View style={[styles.tag1, styles.tagFlexBox]}>
              <Text style={[styles.long, styles.longTypo]}>Hot</Text>
            </View>
          </View>
          <Text style={[styles.style, styles.styleTypo]}>Style:</Text>
          <View style={styles.list1}>
            <Image
              style={styles.listChild}
              contentFit="cover"
              source={require("../assets/rectangle-154719.png")}
            />
            <View style={styles.listInner}>
              <View style={styles.buzzCutParent}>
                <Text style={styles.buzzCut}>Short hair perm</Text>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-260.png")}
                />
                <View style={[styles.locatoin, styles.boldLayout1]} />
              </View>
            </View>
          </View>
          <View style={styles.list1}>
            <Image
              style={styles.listChild}
              contentFit="cover"
              source={require("../assets/rectangle-154720.png")}
            />
            <View style={styles.listInner}>
              <View style={styles.buzzCutParent}>
                <Text style={styles.buzzCut}>
                  Comb over curly hair with fade
                </Text>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-260.png")}
                />
                <View style={[styles.locatoin, styles.boldLayout1]} />
              </View>
            </View>
          </View>
          <View style={styles.list1}>
            <Image
              style={styles.listChild}
              contentFit="cover"
              source={require("../assets/slickback6.png")}
            />
            <View style={styles.combBackParent}>
              <Text style={styles.buzzCut}>Curly undercut</Text>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/ellipse-260.png")}
              />
              <View style={[styles.locatoin, styles.boldLayout1]} />
            </View>
          </View>
          <View style={styles.list1}>
            <Image
              style={styles.listChild}
              contentFit="cover"
              source={require("../assets/rectangle-154721.png")}
            />
            <View style={styles.combBackParent}>
              <Text style={styles.buzzCut}>Curly hair with fringe</Text>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/ellipse-2601.png")}
              />
              <View style={[styles.locatoin, styles.boldLayout1]} />
            </View>
          </View>
          <View style={styles.list1}>
            <Image
              style={styles.listChild}
              contentFit="cover"
              source={require("../assets/rectangle-154722.png")}
            />
            <View style={styles.listInner}>
              <View style={styles.buzzCutParent}>
                <Text style={styles.buzzCut}>Korean wave perm</Text>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-260.png")}
                />
                <View style={[styles.locatoin, styles.boldLayout1]} />
              </View>
            </View>
          </View>
          <View style={styles.list1}>
            <Image
              style={styles.listChild}
              contentFit="cover"
              source={require("../assets/rectangle-154723.png")}
            />
            <View style={styles.listInner}>
              <View style={styles.buzzCutParent}>
                <Text style={styles.buzzCut}>Curly pompadour</Text>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-260.png")}
                />
                <View style={[styles.locatoin, styles.boldLayout1]} />
              </View>
            </View>
          </View>
          <View style={styles.list1}>
            <Image
              style={styles.listChild}
              contentFit="cover"
              source={require("../assets/rectangle-154724.png")}
            />
            <View style={styles.listInner}>
              <View style={styles.buzzCutParent}>
                <Text style={styles.buzzCut}>Wavy side part</Text>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-260.png")}
                />
                <View style={[styles.locatoin, styles.boldLayout1]} />
              </View>
            </View>
          </View>
          <View style={styles.list1}>
            <Image
              style={styles.listChild}
              contentFit="cover"
              source={require("../assets/rectangle-154725.png")}
            />
            <View style={styles.listInner}>
              <View style={styles.buzzCutParent}>
                <Text style={styles.buzzCut}>Curly bob</Text>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-260.png")}
                />
                <View style={[styles.locatoin, styles.boldLayout1]} />
              </View>
            </View>
          </View>
          <TouchableHighlight
            style={[styles.buttonbig1, styles.buttonbigFlexBox]}
            underlayColor="#fff"
            activeOpacity={0.2}
            onPress={() => navigation.navigate("PermAddOns")}
          >
            <Text style={[styles.label, styles.labelTypo]}>Confirm</Text>
          </TouchableHighlight>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  permPageScrollViewContent: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  hairPermBg: {
    backgroundColor: Color.colorWhite900,
    position: "absolute",
  },
  containersFlexBox: {
    justifyContent: "flex-end",
    alignItems: "center",
    position: "absolute",
  },
  buttonFlexBox: {
    paddingVertical: Padding.p_xs,
    flexDirection: "row",
    alignItems: "center",
  },
  labelTypo: {
    color: Color.colorWhite900,
    fontFamily: FontFamily.typographyHeadline416,
    fontWeight: "700",
  },
  label2Typo: {
    fontFamily: FontFamily.typographyHeadline416,
    fontWeight: "700",
    color: Color.colorCoolGray900,
    fontSize: FontSize.typographyHeadline416_size,
    textAlign: "left",
  },
  ratingFlexBox: {
    marginTop: 8,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  boldLayout1: {
    height: 16,
    width: 16,
  },
  longTypo: {
    color: Color.colorLightseagreen_100,
    fontFamily: FontFamily.typographyCaption112,
    textAlign: "left",
  },
  tagFlexBox: {
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_5xs,
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  thickTypo: {
    color: Color.colorPrimaryBrand900,
    fontFamily: FontFamily.typographyCaption112,
    textAlign: "left",
  },
  tagLayout: {
    height: 26,
    marginLeft: 12,
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    alignItems: "center",
  },
  styleTypo: {
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    marginTop: 16,
    textAlign: "left",
    fontFamily: FontFamily.typographyHeadline416,
    fontWeight: "700",
  },
  buttonbigFlexBox: {
    paddingVertical: Padding.p_mid,
    paddingHorizontal: Padding.p_3xs,
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: Color.colorLightseagreen_100,
    width: 339,
    alignItems: "center",
    overflow: "hidden",
  },
  rectangleBorder: {
    borderColor: Color.colorCoolGray900,
    borderWidth: 1,
    borderStyle: "solid",
    bottom: "0%",
    position: "absolute",
  },
  hairPermPosition: {
    bottom: "0%",
    left: "0%",
    top: "0%",
    height: "100%",
  },
  rectangleLayout: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorCoolGray900,
  },
  boldLayout: {
    height: 24,
    width: 24,
  },
  listFlexBox: {
    flexWrap: "wrap",
    flexDirection: "row",
    width: 339,
  },
  backgroundIcon: {
    borderRadius: Border.br_smi,
    width: 351,
    height: 216,
    zIndex: 0,
  },
  styleease: {
    textAlign: "left",
    fontSize: FontSize.typographyBody314_size,
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
    justifyContent: "center",
    backgroundColor: Color.colorLightseagreen_100,
    paddingVertical: Padding.p_xs,
    overflow: "hidden",
    position: "absolute",
  },
  asStudioHair: {
    color: Color.colorCoolGray900,
    fontSize: FontSize.typographyHeadline416_size,
    textAlign: "left",
    width: 339,
  },
  boldMapLocationMapPo: {
    overflow: "hidden",
  },
  bWoodlandsAve: {
    marginLeft: 8,
    fontSize: FontSize.typographyBody314_size,
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
    alignItems: "center",
  },
  topHair: {
    fontSize: FontSize.typographyBody314_size,
  },
  tag: {
    borderWidth: 1,
    borderStyle: "solid",
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_5xs,
    borderColor: Color.colorLightseagreen_100,
    backgroundColor: Color.colorLightseagreen_100,
  },
  sideHair: {
    fontSize: FontSize.typographyBody314_size,
  },
  tag1: {
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
    flexDirection: "row",
    width: 339,
  },
  image1Icon: {
    borderRadius: Border.br_28xl,
    width: 105,
    height: 105,
  },
  list: {
    width: 100,
    marginTop: 16,
    flexDirection: "row",
  },
  style: {
    width: 317,
    height: 22,
  },
  listChild: {
    height: 100,
    width: 100,
    borderRadius: Border.br_5xs,
  },
  buzzCut: {
    textAlign: "center",
    fontFamily: FontFamily.typographyCaption112,
    color: Color.colorCoolGray900,
    fontSize: FontSize.typographyBody314_size,
  },
  frameChild: {
    height: 11,
    width: 12,
    marginLeft: 8,
  },
  locatoin: {
    marginLeft: 8,
    alignItems: "center",
  },
  buzzCutParent: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  listInner: {
    marginLeft: 12,
  },
  list1: {
    marginTop: 16,
    flexDirection: "row",
    width: 339,
    alignItems: "center",
  },
  combBackParent: {
    marginLeft: 12,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  volume: {
    width: 322,
    height: 32,
  },
  tag5: {
    width: 94,
    height: 28,
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    alignItems: "center",
  },
  thick: {
    fontSize: FontSize.typographyHeadline416_size,
  },
  tag6: {
    backgroundColor: Color.colorPrimaryBrand50,
    borderColor: Color.colorPrimaryBrand900,
    marginLeft: 12,
    borderWidth: 1,
    borderStyle: "solid",
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_5xs,
  },
  thin: {
    color: Color.colorPrimaryBrand500,
    fontFamily: FontFamily.typographyCaption112,
    fontSize: FontSize.typographyHeadline416_size,
    textAlign: "left",
  },
  label: {
    textAlign: "center",
    fontSize: FontSize.typographyHeadline416_size,
  },
  buttonbig: {
    marginLeft: 12,
  },
  containers: {
    marginTop: -653,
    top: "50%",
    left: 18,
    display: "none",
  },
  text1: {
    fontSize: FontSize.typographyCaption112_size,
    fontWeight: "500",
    fontFamily: FontFamily.quicksandMedium,
    color: Color.colorCoolGray900,
    textAlign: "left",
  },
  rectangle: {
    height: "48%",
    top: "52%",
    right: "60%",
    left: "26.67%",
    backgroundColor: Color.colorCoolGray900,
    borderRadius: Border.br_9xs,
    width: "13.33%",
    borderColor: Color.colorCoolGray900,
  },
  rectangle1: {
    height: "32%",
    top: "68%",
    right: "86.67%",
    backgroundColor: Color.colorCoolGray900,
    borderRadius: Border.br_9xs,
    width: "13.33%",
    borderColor: Color.colorCoolGray900,
    left: "0%",
  },
  rectangle2: {
    height: "76%",
    top: "24%",
    right: "30%",
    left: "56.67%",
    backgroundColor: Color.colorCoolGray900,
    borderRadius: Border.br_9xs,
    width: "13.33%",
    borderColor: Color.colorCoolGray900,
  },
  rectangle3: {
    left: "86.67%",
    backgroundColor: Color.colorCoolGray900,
    borderRadius: Border.br_9xs,
    width: "13.33%",
    borderColor: Color.colorCoolGray900,
    right: "0%",
    top: "0%",
    height: "100%",
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
    backgroundColor: Color.colorCoolGray900,
    left: "0%",
    position: "absolute",
  },
  rectangle5: {
    height: "33.33%",
    width: "9.52%",
    top: "33.33%",
    bottom: "33.33%",
    left: "90.48%",
    backgroundColor: Color.colorCoolGray900,
    right: "0%",
    position: "absolute",
  },
  rectangle6: {
    width: "26.67%",
    right: "4.76%",
    left: "68.57%",
    borderTopRightRadius: Border.br_10xs_5,
    borderBottomRightRadius: Border.br_10xs_5,
    backgroundColor: Color.colorSilver_100,
    top: "0%",
    height: "100%",
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
    width: 375,
  },
  icon: {
    overflow: "hidden",
    height: "100%",
    width: "100%",
  },
  label2: {
    marginLeft: 24,
    color: Color.colorCoolGray900,
    fontSize: FontSize.typographyHeadline416_size,
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
    flexDirection: "row",
    display: "none",
  },
  content: {
    paddingHorizontal: Padding.p_lg,
    paddingVertical: 0,
    alignItems: "center",
    flex: 1,
  },
  topNavigationBar: {
    top: 0,
    left: 0,
    height: 91,
    paddingBottom: Padding.p_base,
    width: 375,
  },
  hairPerm: {
    overflow: "hidden",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    right: "0%",
    width: "100%",
  },
  tag9: {
    marginLeft: 12,
    borderWidth: 1,
    borderStyle: "solid",
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_5xs,
    borderColor: Color.colorLightseagreen_100,
    backgroundColor: Color.colorLightseagreen_100,
  },
  long: {
    fontSize: FontSize.typographyHeadline416_size,
  },
  listOption1: {
    marginTop: 16,
  },
  buttonbig1: {
    marginTop: 16,
  },
  permContent: {
    height: "92.9%",
    width: "90.4%",
    top: "6.3%",
    right: "4.8%",
    bottom: "0.8%",
    left: "4.8%",
  },
  perm: {
    height: 1620,
    width: 375,
  },
  permPage: {
    maxWidth: "100%",
    width: "100%",
    flex: 1,
  },
});

export default PermPage;
