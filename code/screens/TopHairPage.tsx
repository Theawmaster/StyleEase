import React, { useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, TouchableHighlight, ScrollView, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Padding, FontFamily, FontSize, Border } from "../GlobalStyles";

const TopHairPage = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const [selectedVolume, setSelectedVolume] = useState<string | null>(null);
  const [warning, setWarning] = useState<string>("");

  const handleStyleSelection = (style: string) => {
    setSelectedStyle(style);
    setWarning(""); // Clear warning when a selection is made
  };

  const handleVolumeSelection = (volume: string) => {
    setSelectedVolume(volume);
    setWarning(""); // Clear warning when a selection is made
  };

  const handleProceed = () => {
    if (!selectedStyle || !selectedVolume) {
      setWarning("Please select both a style and volume.");
    } else {
      setWarning(""); // Clear the warning when proceeding successfully
      navigation.navigate("SideHairPage", { topHairStyle: selectedStyle, topHairVolume: selectedVolume });
    }
  };  

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.topHairPage}>
          <View style={styles.topHair}>
            <View style={[styles.topHair1, styles.topBg]}>
              <View style={styles.content}>
                <View style={styles.card}>
                  <Image
                    style={styles.backgroundIcon}
                    contentFit="cover"
                    source={require("../assets/background.png")}
                  />
                  <View style={[styles.button, styles.buttonSpaceBlock]}>
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
                    <View style={[styles.location, styles.viewFlexBox]}>
                      <Image
                        style={[styles.boldMapLocationMapPo, styles.boldLayout1]}
                        contentFit="cover"
                        source={require("../assets/bold--map--location--map-point.png")}
                      />
                      <Text style={[styles.bWoodlandsAve, styles.sideHairTypo]}>
                        570B Woodlands Ave 1, Singapore 732570
                      </Text>
                    </View>
                    <View style={styles.viewFlexBox}>
                      <Image
                        style={[styles.boldLikeStar, styles.boldLayout1]}
                        contentFit="cover"
                        source={require("../assets/bold--like--star.png")}
                      />
                      <Text style={[styles.bWoodlandsAve, styles.sideHairTypo]}>
                        4.2
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.slider} />
                <View style={styles.sliderFilter}>
                  <View style={[styles.tag, styles.tagFlexBox]}>
                    <Text style={[styles.topHair2, styles.thickTypo]}>
                      Top hair
                    </Text>
                  </View>
                  <View style={[styles.tag1, styles.tagFlexBox]}>
                    <Text style={styles.sideHairTypo}>Side hair</Text>
                  </View>
                  <View style={[styles.tag1, styles.tagFlexBox]}>
                    <Text style={styles.sideHairTypo}>Back hair</Text>
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
                
                {/* Repeat TouchableOpacity for other styles */}
                <TouchableOpacity onPress={() => handleStyleSelection("Fringe")}>
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
                          source={selectedStyle === "Fringe" ? require("../assets/ellipse-2601.png") : require("../assets/ellipse-260.png")}
                        />
                        <View style={[styles.locatoin, styles.boldLayout1]} />
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleStyleSelection("Middle part")}>
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
                        source={selectedStyle === "Middle part" ? require("../assets/ellipse-2601.png") : require("../assets/ellipse-260.png")}
                      />
                      <View style={[styles.locatoin, styles.boldLayout1]} />
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleStyleSelection("Side part")}>
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
                          source={selectedStyle === "Side part" ? require("../assets/ellipse-2601.png") : require("../assets/ellipse-260.png")}
                        />
                        <View style={[styles.locatoin, styles.boldLayout1]} />
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleStyleSelection("Buzz cut")}>
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
                          source={selectedStyle === "Buzz cut" ? require("../assets/ellipse-2601.png") : require("../assets/ellipse-260.png")}
                        />
                        <View style={[styles.locatoin, styles.boldLayout1]} />
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleStyleSelection("Comb back")}>
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
                        source={selectedStyle === "Comb back" ? require("../assets/ellipse-2601.png") : require("../assets/ellipse-260.png")}
                      />
                      <View style={[styles.locatoin, styles.boldLayout1]} />
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleStyleSelection("Crew cut")}>
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
                          source={selectedStyle === "Crew cut" ? require("../assets/ellipse-2601.png") : require("../assets/ellipse-260.png")}
                        />
                        <View style={[styles.locatoin, styles.boldLayout1]} />
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
                {/* Add other styles similarly */}
                <Text style={[styles.volume, styles.styleTypo]}>Volume:</Text>
                <View style={styles.sliderFilter}>
                  <View style={styles.listOption}>
                  <TouchableOpacity onPress={() => handleVolumeSelection("Thick")}>
                        <View style={selectedVolume === "Thick" ? styles.tag6 : styles.tag5}>
                          <Text style={[styles.thick, selectedVolume === "Thick" ? styles.selectedVolumeText : styles.thickTypo]}>Thick</Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => handleVolumeSelection("Thin")}>
                        <View style={selectedVolume === "Thin" ? styles.tag6 : styles.tag5}>
                          <Text style={[styles.thin, selectedVolume === "Thin" ? styles.selectedVolumeText : styles.thinTypo]}>Thin</Text>
                        </View>
                      </TouchableOpacity>
                    <TouchableHighlight
                      style={styles.buttonbig}
                      underlayColor="#fff"
                      activeOpacity={0.2}
                      onPress={handleProceed}
                    >
                      <Text style={[styles.label, styles.labelTypo]}>Proceed</Text>
                    </TouchableHighlight>
                    {warning ? (
                      <Text style={styles.warningText}>{warning}</Text>
                    ) : null}
                  </View>
                </View>
              </View>
              <View style={[styles.topNavigationBar, styles.topBg]}>
                <View style={[styles.statusBar, styles.statusBarFlexBox]}>
                  <Text style={styles.text1}>19:27</Text>
                  <View style={styles.signalParent}>
                    <View style={styles.signal}>
                      <View
                        style={[styles.rectangle, styles.rectangleBorder]}
                      />
                      <View
                        style={[styles.rectangle1, styles.rectanglePosition2]}
                      />
                      <View
                        style={[styles.rectangle2, styles.rectangleBorder]}
                      />
                      <View
                        style={[styles.rectangle3, styles.rectanglePosition]}
                      />
                    </View>
                    <View style={styles.battry}>
                      <View
                        style={[styles.rectangle4, styles.rectanglePosition1]}
                      />
                      <View
                        style={[styles.rectangle5, styles.rectanglePosition]}
                      />
                      <View
                        style={[styles.rectangle6, styles.rectanglePosition1]}
                      />
                    </View>
                  </View>
                </View>
                <View style={[styles.view, styles.viewFlexBox]}>
                  <View style={[styles.label1, styles.viewFlexBox1]}>
                    <Pressable
                      style={[styles.boldLayout, { marginTop: 50 }]}
                      onPress={() => navigation.navigate("MainLoadingPage")}
                    >
                      <Image
                        style={styles.icon}
                        contentFit="cover"
                        source={require("../assets/linear--arrows--arrow-left.png")}
                      />
                    </Pressable>
                    <Text style={[styles.label2, styles.label2Typo, { marginTop: 50 }]}>Back</Text>
                  </View>
                  <View style={styles.statusBarFlexBox}>
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
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  warningText: {
    color: "red",
    marginTop: 20,
    textAlign: "center",
  },  
  container: {
    flex: 1,
  },
  topBg: {
    backgroundColor: Color.colorWhite900,
    width: 375,
  },
  scrollContent: {
    flexGrow: 1,
  },
  buttonSpaceBlock: {
    paddingVertical: Padding.p_xs,
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
  viewFlexBox: {
    marginTop: 8,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  boldLayout1: {
    height: 16,
    width: 16,
  },
  sideHairTypo: {
    color: Color.colorLightseagreen_100,
    fontFamily: FontFamily.typographyCaption112,
    textAlign: "left",
    fontSize: FontSize.typographyBody314_size,
  },
  tagFlexBox: {
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_5xs,
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
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
  statusBarFlexBox: {
    display: "none",
    flexDirection: "row",
  },
  rectangleBorder: {
    borderColor: Color.colorCoolGray900,
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
  viewFlexBox1: {
    flex: 1,
    alignItems: "center",
  },
  boldLayout: {
    height: 24,
    width: 24,
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
    position: "absolute",
    overflow: "hidden",
    flexDirection: "row",
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
  topHair2: {
    fontSize: FontSize.typographyBody314_size,
  },
  tag: {
    borderColor: Color.colorLightseagreen_100,
    borderWidth: 1,
    borderStyle: "solid",
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_5xs,
    backgroundColor: Color.colorLightseagreen_100,
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
    width: 339,
    flexDirection: "row",
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
    height: 27,
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
    alignItems: "center",
    flexDirection: "row",
  },
  listInner: {
    marginLeft: 12,
  },
  list1: {
    marginTop: 16,
    width: 339,
    alignItems: "center",
    flexDirection: "row",
  },
  combBackParent: {
    marginLeft: 12,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
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
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_mid,
    marginLeft: 12,
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    backgroundColor: Color.colorLightseagreen_100,
    width: 339,
    alignItems: "center",
    overflow: "hidden",
    flexDirection: "row",
  },
  listOption: {
    flexWrap: "wrap",
    width: 339,
    flexDirection: "row",
    marginBottom: 20, // Added margin bottom for spacing
  },
  content: {
    marginTop: -652.5,
    top: "50%",
    left: 18,
    justifyContent: "flex-end",
    alignItems: "center",
    position: "absolute",
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
    borderColor: Color.colorCoolGray900,
    borderRadius: Border.br_9xs,
    bottom: "0%",
    width: "13.33%",
    position: "absolute",
  },
  rectangle1: {
    height: "32%",
    top: "68%",
    right: "86.67%",
    borderColor: Color.colorCoolGray900,
    borderWidth: 1,
    borderStyle: "solid",
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
    backgroundColor: Color.colorCoolGray900,
    borderColor: Color.colorCoolGray900,
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
    borderColor: Color.colorCoolGray900,
    borderWidth: 1,
    borderStyle: "solid",
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
    borderColor: Color.colorCoolGray900,
    borderWidth: 1,
    borderStyle: "solid",
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
    paddingVertical: Padding.p_xs,
    alignItems: "center",
    width: 375,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  label2: {
    marginLeft: 24,
    color: Color.colorCoolGray900,
    fontSize: FontSize.typographyHeadline416_size,
    textAlign: "left",
  },
  label1: {
    alignItems: "center",
    flexDirection: "row",
  },
  boldEssentionalUiShare: {
    overflow: "hidden",
  },
  boldEssentionalUiMenu: {
    marginLeft: 24,
    overflow: "hidden",
  },
  view: {
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
    position: "absolute",
    width: 375,
  },
  topHair1: {
    height: 1505,
    overflow: "hidden",
    width: 375,
  },
  topHair: {
    flexDirection: "row",
  },
  topHairPage: {
    flexDirection: "row",
    width: "100%",
    flex: 1,
  },
  selectedVolumeText: {
    color: "#000",
  },
  thinTypo: {
    color: "#000",
  }
});

export default TopHairPage;
