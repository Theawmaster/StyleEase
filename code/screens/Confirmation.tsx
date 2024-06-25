import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  TouchableHighlight,
} from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Border, Color, FontSize, Padding } from "../GlobalStyles";

const Confirmation = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.confirmation}>
      <View style={styles.containers}>
        <View style={styles.sectionChooseService}>
          <Text style={[styles.chooseStylist, styles.text4Typo]}>
            Choose Stylist
          </Text>
          <View style={styles.horizontalOption}>
            <View style={styles.option}>
              <Image
                style={[styles.photoProfileIcon, styles.photoIconLayout]}
                contentFit="cover"
                source={require("../assets/photo-profile.png")}
              />
              <View style={styles.rating}>
                <Image
                  style={[styles.boldLikeStar, styles.boldLikeStarLayout]}
                  contentFit="cover"
                  source={require("../assets/bold--like--star.png")}
                />
                <Text style={styles.text}>5.0</Text>
              </View>
              <Text style={[styles.tommyTan, styles.tommyTanTypo]}>
                Tommy Tan
              </Text>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector.png")}
              />
            </View>
            <View style={styles.option1}>
              <Image
                style={styles.photoIconLayout}
                contentFit="cover"
                source={require("../assets/photo-profile1.png")}
              />
              <View style={styles.rating1}>
                <Image
                  style={[styles.boldLikeStar, styles.boldLikeStarLayout]}
                  contentFit="cover"
                  source={require("../assets/bold--like--star.png")}
                />
                <Text style={styles.text}>4.8</Text>
              </View>
              <Text style={[styles.krisChan, styles.tommyTanTypo]}>
                Kris Chan
              </Text>
            </View>
            <View style={styles.option1}>
              <Image
                style={styles.photoIconLayout}
                contentFit="cover"
                source={require("../assets/photo-profile2.png")}
              />
              <View style={styles.rating1}>
                <Image
                  style={[styles.boldLikeStar, styles.boldLikeStarLayout]}
                  contentFit="cover"
                  source={require("../assets/bold--like--star1.png")}
                />
                <Text style={styles.text}>4.9</Text>
              </View>
              <Text style={[styles.krisChan, styles.tommyTanTypo]}>
                Mabel Lee
              </Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={[styles.timeToWait, styles.text4Typo]} numberOfLines={1}>
            Time to wait
          </Text>
          <View style={styles.listTime}>
            <View style={styles.tab}>
              <Text style={[styles.minutesServing1, styles.tommyTanTypo]}>
                ~ 10 minutes (serving 1 customer)
              </Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={[styles.timeToWait, styles.text4Typo]} numberOfLines={1}>
            Payment summary
          </Text>
          <View style={styles.sectionList}>
            <View style={styles.list}>
              <Text
                style={[styles.hairTrimmingMiddle, styles.tommyTanTypo]}
              >{`Hair trimming (Middle part, high and 
slope)`}</Text>
              <Text style={[styles.hairTrimmingMiddle, styles.tommyTanTypo]}>
                $10.00
              </Text>
            </View>
            <View style={[styles.sparator, styles.list1SpaceBlock]}>
              <View style={styles.sparatorLayout} />
              <View style={[styles.sparatorItem, styles.sparatorLayout]} />
              <View style={[styles.sparatorItem, styles.sparatorLayout]} />
              <View style={[styles.sparatorItem, styles.sparatorLayout]} />
              <View style={[styles.sparatorItem, styles.sparatorLayout]} />
              <View style={[styles.sparatorItem, styles.sparatorLayout]} />
              <View style={[styles.sparatorItem, styles.sparatorLayout]} />
              <View style={[styles.sparatorItem, styles.sparatorLayout]} />
              <View style={[styles.sparatorItem, styles.sparatorLayout]} />
              <View style={[styles.sparatorItem, styles.sparatorLayout]} />
              <View style={[styles.sparatorItem, styles.sparatorLayout]} />
              <View style={[styles.sparatorItem, styles.sparatorLayout]} />
              <View style={[styles.sparatorItem, styles.sparatorLayout]} />
              <View style={[styles.sparatorItem, styles.sparatorLayout]} />
              <View style={[styles.sparatorItem, styles.sparatorLayout]} />
              <View style={[styles.sparatorItem, styles.sparatorLayout]} />
              <View style={[styles.sparatorItem, styles.sparatorLayout]} />
              <View style={[styles.sparatorItem, styles.sparatorLayout]} />
              <View style={[styles.sparatorItem, styles.sparatorLayout]} />
              <View style={[styles.sparatorItem, styles.sparatorLayout]} />
              <View style={[styles.sparatorItem, styles.sparatorLayout]} />
            </View>
            <View style={[styles.list1, styles.list1SpaceBlock]}>
              <Text style={[styles.hairTrimmingMiddle, styles.tommyTanTypo]}>
                Service fee
              </Text>
              <Text style={[styles.text4, styles.text4Typo]}>$0.90</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.topNavigationBar}>
        <View style={[styles.statusBar, styles.statusBarFlexBox]}>
          <Text style={styles.text5}>19:27</Text>
          <View style={styles.signalParent}>
            <View style={styles.signal}>
              <View style={[styles.rectangle, styles.rectangleBorder]} />
              <View style={[styles.rectangle1, styles.rectanglePosition2]} />
              <View style={[styles.rectangle2, styles.rectangleBorder]} />
              <View style={[styles.rectangle3, styles.rectanglePosition]} />
            </View>
            <View style={styles.battry}>
              <View style={[styles.rectangle4, styles.rectanglePosition1]} />
              <View style={[styles.rectangle5, styles.rectanglePosition]} />
              <View style={[styles.rectangle6, styles.rectanglePosition1]} />
            </View>
          </View>
        </View>
        <View style={[styles.content, styles.labelFlexBox]}>
          <View style={[styles.label, styles.labelFlexBox]}>
            <Pressable
              style={styles.boldLayout}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/linear--arrows--arrow-left.png")}
              />
            </Pressable>
            <Text style={[styles.label1, styles.text4Typo]}>Back</Text>
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
      <TouchableHighlight
        style={styles.buttonbig}
        underlayColor="#fff"
        activeOpacity={0.2}
        onPress={() => navigation.navigate("Payment")}
      >
        <>
          <Text style={[styles.confirmBooking, styles.text4Typo]}>
            Confirm booking
          </Text>
          <Image
            style={[styles.linearTimeCalendarMark, styles.boldLikeStarLayout]}
            contentFit="cover"
            source={require("../assets/linear--time--calendar-mark.png")}
          />
        </>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  text4Typo: {
    fontFamily: FontFamily.typographyHeadline416,
    fontWeight: "700",
  },
  photoIconLayout: {
    height: 60,
    width: 60,
  },
  boldLikeStarLayout: {
    borderRadius: Border.br_8xs,
    overflow: "hidden",
  },
  tommyTanTypo: {
    fontFamily: FontFamily.typographySubHeadline216,
    fontWeight: "500",
    textAlign: "left",
  },
  list1SpaceBlock: {
    marginTop: 18,
    flexDirection: "row",
  },
  sparatorLayout: {
    height: 1,
    backgroundColor: Color.colorPrimaryBrand200,
    width: 12,
    borderRadius: Border.br_8xs,
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
  labelFlexBox: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  boldLayout: {
    height: 24,
    width: 24,
  },
  chooseStylist: {
    textAlign: "left",
    color: Color.colorCoolGray900,
    fontSize: FontSize.typographyHeadline416_size,
  },
  photoProfileIcon: {
    zIndex: 0,
  },
  boldLikeStar: {
    width: 16,
    height: 16,
  },
  text: {
    fontFamily: FontFamily.typographyCaption112,
    color: Color.colorLightseagreen_100,
    marginLeft: 8,
    fontSize: FontSize.typographyBody314_size,
    textAlign: "left",
  },
  rating: {
    zIndex: 1,
    marginTop: 4,
    flexDirection: "row",
  },
  tommyTan: {
    zIndex: 2,
    marginTop: 4,
    color: Color.colorCoolGray900,
    fontSize: FontSize.typographyHeadline416_size,
  },
  vectorIcon: {
    top: 21,
    left: 33,
    width: 23,
    zIndex: 3,
    height: 18,
    position: "absolute",
  },
  option: {
    alignItems: "center",
  },
  rating1: {
    marginTop: 4,
    flexDirection: "row",
  },
  krisChan: {
    marginTop: 4,
    color: Color.colorCoolGray900,
    fontSize: FontSize.typographyHeadline416_size,
  },
  option1: {
    marginLeft: 18,
    alignItems: "center",
  },
  horizontalOption: {
    marginTop: 12,
    flexDirection: "row",
    width: 357,
  },
  sectionChooseService: {
    width: 357,
  },
  timeToWait: {
    width: 339,
    textAlign: "left",
    color: Color.colorCoolGray900,
    fontSize: FontSize.typographyHeadline416_size,
    overflow: "hidden",
  },
  minutesServing1: {
    color: Color.colorWhite900,
    fontSize: FontSize.typographyBody314_size,
  },
  tab: {
    borderColor: Color.colorLightseagreen_100,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: 6,
    justifyContent: "center",
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorLightseagreen_100,
    borderRadius: Border.br_5xs,
    alignItems: "center",
    flexDirection: "row",
  },
  listTime: {
    flexWrap: "wrap",
    width: 339,
    marginTop: 12,
    flexDirection: "row",
  },
  hairTrimmingMiddle: {
    color: Color.colorCoolGray900,
    fontSize: FontSize.typographyHeadline416_size,
  },
  list: {
    width: 339,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sparatorItem: {
    marginLeft: 4,
  },
  sparator: {
    justifyContent: "center",
  },
  text4: {
    fontSize: FontSize.typographyHeadline318_size,
    textAlign: "left",
    color: Color.colorCoolGray900,
  },
  list1: {
    height: 30,
    width: 339,
    justifyContent: "space-between",
  },
  sectionList: {
    alignItems: "center",
    marginTop: 12,
  },
  containers: {
    top: 109,
    left: 18,
    height: 467,
    justifyContent: "space-between",
    position: "absolute",
  },
  text5: {
    fontSize: FontSize.typographyCaption112_size,
    fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorCoolGray900,
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
    paddingHorizontal: Padding.p_7xl,
    paddingVertical: Padding.p_xs,
    width: 375,
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  label1: {
    marginLeft: 24,
    textAlign: "left",
    color: Color.colorCoolGray900,
    fontSize: FontSize.typographyHeadline416_size,
  },
  label: {
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
  content: {
    alignSelf: "stretch",
    paddingHorizontal: Padding.p_lg,
    paddingVertical: 0,
    marginTop: 8,
    alignItems: "center",
    flexDirection: "row",
  },
  topNavigationBar: {
    top: 0,
    left: 0,
    height: 91,
    paddingBottom: Padding.p_base,
    width: 375,
    position: "absolute",
    backgroundColor: Color.colorWhite900,
  },
  confirmBooking: {
    textAlign: "center",
    color: Color.colorWhite900,
    fontSize: FontSize.typographyHeadline416_size,
  },
  linearTimeCalendarMark: {
    width: 18,
    marginLeft: 10,
    height: 18,
  },
  buttonbig: {
    marginLeft: -169.5,
    bottom: 24,
    left: "50%",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_mid,
    justifyContent: "center",
    backgroundColor: Color.colorLightseagreen_100,
    borderRadius: Border.br_5xs,
    width: 339,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    overflow: "hidden",
  },
  confirmation: {
    height: 692,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorWhite900,
  },
});

export default Confirmation;
