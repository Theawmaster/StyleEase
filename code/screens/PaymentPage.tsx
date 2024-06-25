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
import { Color, FontSize, Padding, FontFamily, Border } from "../GlobalStyles";

const PaymentPage = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <ScrollView
      style={styles.paymentPage}
      horizontal={false}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={true}
      contentContainerStyle={styles.paymentPageScrollViewContent}
    >
      <View style={[styles.payment, styles.paymentBg]}>
        <Image
          style={styles.setIcon}
          contentFit="cover"
          source={require("../assets/set-icon.png")}
        />
        <View style={styles.containers}>
          <View style={styles.containers1}>
            <View style={styles.sectionTimeDate}>
              <View style={styles.title}>
                <Image
                  style={[styles.boldTimeCalendar, styles.moneyLayout]}
                  contentFit="cover"
                  source={require("../assets/bold--time--calendar.png")}
                />
                <Text
                  style={[styles.dateTime, styles.textTypo]}
                >{`Date & time`}</Text>
              </View>
            </View>
            <View style={styles.sectionServiceList}>
              <View style={styles.title}>
                <Image
                  style={styles.moneyLayout}
                  contentFit="cover"
                  source={require("../assets/linear--essentional-ui--scissors.png")}
                />
                <Text style={[styles.dateTime, styles.textTypo]}>
                  Service lits
                </Text>
              </View>
              <View style={[styles.list, styles.listFlexBox]}>
                <View style={styles.photoProfileParent}>
                  <Image
                    style={styles.photoProfileIcon}
                    contentFit="cover"
                    source={require("../assets/photo-profile3.png")}
                  />
                  <View style={styles.adamSteffParent}>
                    <Text style={[styles.adamSteff, styles.text3Typo]}>
                      Hair trimming
                    </Text>
                    <Text style={[styles.hairTrimmingMiddle, styles.text4Typo]}>
                      Hair trimming (Middle part, high and slope)
                    </Text>
                  </View>
                </View>
                <Text style={[styles.text, styles.textTypo]}>$10.00</Text>
              </View>
            </View>
            <View style={styles.sectionServiceList}>
              <Text style={[styles.applyCoupon, styles.textTypo]}>
                Apply Coupon
              </Text>
              <View style={styles.textField}>
                <View style={styles.field}>
                  <View style={styles.inputContent}>
                    <Image
                      style={styles.boldLayout1}
                      contentFit="cover"
                      source={require("../assets/discountshape.png")}
                    />
                  </View>
                  <Image
                    style={[styles.boldEssentionalUiInfo, styles.boldLayout1]}
                    contentFit="cover"
                    source={require("../assets/bold--essentional-ui--info-circle.png")}
                  />
                  <View style={[styles.buttonbig, styles.buttonbigPosition]}>
                    <Text style={[styles.label, styles.labelTypo]}>Apply</Text>
                  </View>
                </View>
                <Text style={styles.couponIsActive}>Coupon is active</Text>
              </View>
            </View>
            <View style={styles.sectionPaymentSummary}>
              <Text
                style={[styles.paymentSummary, styles.textTypo]}
                numberOfLines={1}
              >
                Payment summary
              </Text>
              <View style={styles.sectionList}>
                <View style={styles.list1}>
                  <Text style={[styles.text, styles.textTypo]}>
                    Hair trimming
                  </Text>
                  <Text style={[styles.text, styles.textTypo]}>$10.00</Text>
                </View>
                <View style={[styles.list2, styles.listSpaceBlock]}>
                  <Text style={[styles.text, styles.textTypo]}>
                    Service fee
                  </Text>
                  <Text style={[styles.text, styles.textTypo]}>$0.90</Text>
                </View>
                <View style={[styles.separator, styles.listSpaceBlock]}>
                  <View style={styles.separatorLayout} />
                  <View
                    style={[styles.separatorItem, styles.separatorLayout]}
                  />
                  <View
                    style={[styles.separatorItem, styles.separatorLayout]}
                  />
                  <View
                    style={[styles.separatorItem, styles.separatorLayout]}
                  />
                  <View
                    style={[styles.separatorItem, styles.separatorLayout]}
                  />
                  <View
                    style={[styles.separatorItem, styles.separatorLayout]}
                  />
                  <View
                    style={[styles.separatorItem, styles.separatorLayout]}
                  />
                  <View
                    style={[styles.separatorItem, styles.separatorLayout]}
                  />
                  <View
                    style={[styles.separatorItem, styles.separatorLayout]}
                  />
                  <View
                    style={[styles.separatorItem, styles.separatorLayout]}
                  />
                  <View
                    style={[styles.separatorItem, styles.separatorLayout]}
                  />
                  <View
                    style={[styles.separatorItem, styles.separatorLayout]}
                  />
                  <View
                    style={[styles.separatorItem, styles.separatorLayout]}
                  />
                  <View
                    style={[styles.separatorItem, styles.separatorLayout]}
                  />
                  <View
                    style={[styles.separatorItem, styles.separatorLayout]}
                  />
                  <View
                    style={[styles.separatorItem, styles.separatorLayout]}
                  />
                  <View
                    style={[styles.separatorItem, styles.separatorLayout]}
                  />
                  <View
                    style={[styles.separatorItem, styles.separatorLayout]}
                  />
                  <View
                    style={[styles.separatorItem, styles.separatorLayout]}
                  />
                  <View
                    style={[styles.separatorItem, styles.separatorLayout]}
                  />
                  <View
                    style={[styles.separatorItem, styles.separatorLayout]}
                  />
                </View>
                <View style={[styles.list3, styles.listSpaceBlock]}>
                  <Text style={[styles.text, styles.textTypo]}>
                    Total price
                  </Text>
                  <Text style={[styles.text3, styles.text3Typo]}>$10.90</Text>
                </View>
              </View>
            </View>
          </View>
          <TouchableHighlight
            style={[styles.buttonbig1, styles.cardPosition]}
            underlayColor="#fff"
            activeOpacity={0.2}
            onPress={() => navigation.navigate("BookingAndRatingPage")}
          >
            <>
              <Text style={[styles.printReceiptTo, styles.labelTypo]}>
                Print receipt to pay
              </Text>
              <Image
                style={[styles.outlineMoneyWalletMoney, styles.moneyLayout]}
                contentFit="cover"
                source={require("../assets/outline--money--wallet-money.png")}
              />
            </>
          </TouchableHighlight>
        </View>
        <View style={[styles.card, styles.cardPosition]}>
          <Image
            style={styles.pictIcon}
            contentFit="cover"
            source={require("../assets/pict.png")}
          />
          <View style={styles.titledesc}>
            <Text
              style={[styles.asStudioHair, styles.textClr]}
              numberOfLines={1}
            >
              AS Studio Hair Salon
            </Text>
            <View style={styles.location}>
              <Image
                style={styles.boldLayout}
                contentFit="cover"
                source={require("../assets/bold--map--location--map-point1.png")}
              />
              <Text style={[styles.bWoodlandsAve, styles.textClr]}>
                570B Woodlands Ave 1, Singapore 732570
              </Text>
            </View>
            <View style={styles.rating}>
              <Image
                style={[styles.boldLikeStar, styles.boldLayout]}
                contentFit="cover"
                source={require("../assets/bold--like--star2.png")}
              />
              <Text style={[styles.text4, styles.textClr]}>4.2</Text>
              <Text style={[styles.text4, styles.textClr]}>(41)</Text>
            </View>
          </View>
        </View>
        <View style={[styles.topNavigationBar, styles.buttonbigPosition]}>
          <View style={styles.statusBar}>
            <Text style={[styles.text6, styles.textClr]}>19:27</Text>
            <View style={styles.signalParent}>
              <View style={styles.signal}>
                <View style={[styles.rectangle, styles.rectangleBorder]} />
                <View style={[styles.rectangle1, styles.rectanglePosition]} />
                <View style={[styles.rectangle2, styles.rectangleBorder]} />
                <View style={[styles.rectangle3, styles.rectangleBorder]} />
              </View>
              <View style={styles.battry}>
                <View style={[styles.rectangle4, styles.rectanglePosition]} />
                <View style={styles.rectangle5} />
                <View style={[styles.rectangle6, styles.rectangleBorder]} />
              </View>
            </View>
          </View>
          <View style={styles.content}>
            <View style={styles.label1}>
              <Pressable
                style={styles.boldLayout1}
                onPress={() => navigation.goBack()}
              >
                <Image
                  style={styles.icon}
                  contentFit="cover"
                  source={require("../assets/linear--arrows--arrow-left1.png")}
                />
              </Pressable>
              <Text style={[styles.label2, styles.textClr]}>Back</Text>
            </View>
            <View style={styles.actionsRight}>
              <Image
                style={[styles.boldEssentionalUiShare, styles.boldLayout1]}
                contentFit="cover"
                source={require("../assets/bold--essentional-ui--share1.png")}
              />
              <Image
                style={[styles.boldEssentionalUiMenu, styles.boldLayout1]}
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
  paymentPageScrollViewContent: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  paymentBg: {
    backgroundColor: Color.colorLightseagreen_100,
    overflow: "hidden",
  },
  moneyLayout: {
    height: 18,
    width: 18,
    overflow: "hidden",
  },
  textTypo: {
    color: Color.colorCoolGray900,
    textAlign: "left",
    fontSize: FontSize.typographyHeadline416_size,
  },
  listFlexBox: {
    paddingVertical: Padding.p_5xs,
    alignItems: "center",
    flexDirection: "row",
  },
  text3Typo: {
    fontSize: FontSize.typographyHeadline318_size,
    textAlign: "left",
    color: Color.colorCoolGray900,
  },
  text4Typo: {
    fontSize: FontSize.typographyBody314_size,
    fontFamily: FontFamily.typographyCaption112,
  },
  boldLayout1: {
    height: 24,
    width: 24,
  },
  buttonbigPosition: {
    top: 0,
    position: "absolute",
    backgroundColor: Color.colorLightseagreen_100,
  },
  labelTypo: {
    textAlign: "center",
    color: Color.colorWhite900,
    fontFamily: FontFamily.typographyHeadline416,
    fontWeight: "700",
  },
  listSpaceBlock: {
    marginTop: 18,
    flexDirection: "row",
  },
  separatorLayout: {
    height: 1,
    backgroundColor: Color.colorPrimaryBrand200,
    width: 12,
    borderRadius: Border.br_8xs,
  },
  cardPosition: {
    left: "50%",
    borderRadius: Border.br_5xs,
    flexDirection: "row",
    width: 339,
    position: "absolute",
  },
  textClr: {
    color: Color.colorWhite900,
    textAlign: "left",
  },
  boldLayout: {
    height: 16,
    width: 16,
    overflow: "hidden",
  },
  rectangleBorder: {
    borderColor: Color.colorWhite900,
    borderWidth: 1,
    borderStyle: "solid",
  },
  rectanglePosition: {
    left: "0%",
    bottom: "0%",
    backgroundColor: Color.colorWhite900,
    position: "absolute",
  },
  setIcon: {
    height: "46.28%",
    width: "101.08%",
    bottom: "53.72%",
    left: "-1.08%",
    maxHeight: "100%",
    right: "0%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
    maxWidth: "100%",
  },
  boldTimeCalendar: {
    borderRadius: Border.br_8xs,
  },
  dateTime: {
    marginLeft: 4,
    textAlign: "left",
    fontFamily: FontFamily.typographyHeadline416,
    fontWeight: "700",
  },
  title: {
    alignItems: "center",
    flexDirection: "row",
  },
  sectionTimeDate: {
    alignSelf: "stretch",
  },
  photoProfileIcon: {
    width: 44,
    height: 44,
  },
  adamSteff: {
    fontWeight: "600",
    fontFamily: FontFamily.plusJakartaSansSemiBold,
  },
  hairTrimmingMiddle: {
    color: Color.colorCoolGray500,
    width: 224,
    marginTop: 2,
    fontFamily: FontFamily.typographyCaption112,
    textAlign: "left",
  },
  adamSteffParent: {
    marginLeft: 8,
  },
  photoProfileParent: {
    width: 237,
    flexDirection: "row",
  },
  text: {
    fontFamily: FontFamily.typographySubHeadline216,
    fontWeight: "500",
    textAlign: "left",
  },
  list: {
    paddingHorizontal: 0,
    marginTop: 8,
    justifyContent: "space-between",
    borderRadius: Border.br_5xs,
    alignSelf: "stretch",
  },
  sectionServiceList: {
    marginTop: 24,
    alignSelf: "stretch",
  },
  applyCoupon: {
    textAlign: "left",
    fontFamily: FontFamily.typographyHeadline416,
    fontWeight: "700",
  },
  inputContent: {
    zIndex: 0,
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  boldEssentionalUiInfo: {
    zIndex: 1,
    display: "none",
    overflow: "hidden",
  },
  label: {
    fontSize: FontSize.typographyCaption112_size,
  },
  buttonbig: {
    left: 267,
    borderTopRightRadius: Border.br_5xs,
    borderBottomRightRadius: Border.br_5xs,
    width: 72,
    height: 48,
    paddingHorizontal: Padding.p_base,
    zIndex: 2,
    justifyContent: "center",
    paddingVertical: Padding.p_5xs,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  field: {
    borderColor: Color.colorLightgray,
    padding: Padding.p_xs,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  couponIsActive: {
    color: Color.colorCoolGray400,
    fontSize: FontSize.typographyCaption112_size,
    fontFamily: FontFamily.typographyCaption112,
    marginTop: 8,
    textAlign: "left",
  },
  textField: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  paymentSummary: {
    textAlign: "left",
    fontFamily: FontFamily.typographyHeadline416,
    fontWeight: "700",
    width: 339,
    overflow: "hidden",
  },
  list1: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: 339,
  },
  list2: {
    justifyContent: "space-between",
    alignItems: "center",
    width: 339,
  },
  separatorItem: {
    marginLeft: 4,
  },
  separator: {
    justifyContent: "center",
  },
  text3: {
    fontFamily: FontFamily.typographyHeadline416,
    fontWeight: "700",
  },
  list3: {
    height: 30,
    justifyContent: "space-between",
    width: 339,
  },
  sectionList: {
    marginTop: 12,
    alignItems: "center",
  },
  sectionPaymentSummary: {
    marginTop: 24,
  },
  containers1: {
    top: 20,
    left: 20,
    width: 339,
    position: "absolute",
  },
  printReceiptTo: {
    fontSize: FontSize.typographyHeadline416_size,
  },
  outlineMoneyWalletMoney: {
    marginLeft: 10,
  },
  buttonbig1: {
    marginLeft: -173,
    bottom: 68,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_mid,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.colorLightseagreen_100,
  },
  containers: {
    top: 244,
    borderTopLeftRadius: Border.br_9xl,
    borderTopRightRadius: Border.br_9xl,
    width: 392,
    height: 614,
    backgroundColor: Color.colorWhite900,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  pictIcon: {
    width: 78,
    height: 78,
    borderRadius: Border.br_5xs,
  },
  asStudioHair: {
    width: 214,
    fontFamily: FontFamily.typographyHeadline416,
    fontWeight: "700",
    fontSize: FontSize.typographyHeadline416_size,
    overflow: "hidden",
  },
  bWoodlandsAve: {
    width: 218,
    fontFamily: FontFamily.typographyCaption112,
    fontSize: FontSize.typographyBody314_size,
    marginLeft: 8,
  },
  location: {
    marginTop: 8,
    alignItems: "center",
    flexDirection: "row",
  },
  boldLikeStar: {
    borderRadius: Border.br_8xs,
  },
  text4: {
    fontFamily: FontFamily.typographyCaption112,
    fontSize: FontSize.typographyBody314_size,
    marginLeft: 8,
  },
  rating: {
    marginTop: 8,
    flexDirection: "row",
  },
  titledesc: {
    marginLeft: 12,
  },
  card: {
    marginLeft: -170,
    top: 123,
    shadowColor: "rgba(28, 39, 49, 0.08)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    backgroundColor: Color.colorDarkslateblue_100,
    padding: Padding.p_5xs,
  },
  text6: {
    fontFamily: FontFamily.quicksandMedium,
    fontSize: FontSize.typographyCaption112_size,
    fontWeight: "500",
  },
  rectangle: {
    height: "48%",
    top: "52%",
    right: "60%",
    left: "26.67%",
    borderRadius: Border.br_9xs,
    bottom: "0%",
    borderColor: Color.colorWhite900,
    position: "absolute",
    width: "13.33%",
    backgroundColor: Color.colorWhite900,
  },
  rectangle1: {
    height: "32%",
    top: "68%",
    right: "86.67%",
    borderColor: Color.colorWhite900,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_9xs,
    width: "13.33%",
  },
  rectangle2: {
    height: "76%",
    top: "24%",
    right: "30%",
    left: "56.67%",
    borderRadius: Border.br_9xs,
    bottom: "0%",
    borderColor: Color.colorWhite900,
    position: "absolute",
    width: "13.33%",
    backgroundColor: Color.colorWhite900,
  },
  rectangle3: {
    left: "86.67%",
    height: "100%",
    borderRadius: Border.br_9xs,
    bottom: "0%",
    borderColor: Color.colorWhite900,
    position: "absolute",
    width: "13.33%",
    backgroundColor: Color.colorWhite900,
    right: "0%",
    top: "0%",
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
    height: "100%",
    top: "0%",
  },
  rectangle5: {
    height: "33.33%",
    width: "9.52%",
    top: "33.33%",
    bottom: "33.33%",
    left: "90.48%",
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorWhite900,
    right: "0%",
    position: "absolute",
  },
  rectangle6: {
    width: "26.67%",
    right: "4.76%",
    left: "68.57%",
    borderTopRightRadius: Border.br_10xs_5,
    borderBottomRightRadius: Border.br_10xs_5,
    height: "100%",
    bottom: "0%",
    borderColor: Color.colorWhite900,
    position: "absolute",
    top: "0%",
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
    width: 375,
    paddingHorizontal: Padding.p_7xl,
    paddingVertical: Padding.p_xs,
    display: "none",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  label2: {
    marginLeft: 24,
    fontFamily: FontFamily.typographyHeadline416,
    fontWeight: "700",
    fontSize: FontSize.typographyHeadline416_size,
  },
  label1: {
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
    marginTop: 8,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    flex: 1,
  },
  topNavigationBar: {
    height: 91,
    paddingBottom: Padding.p_base,
    left: 0,
    width: 390,
  },
  payment: {
    height: 812,
    overflow: "hidden",
    width: 390,
  },
  paymentPage: {
    maxWidth: "100%",
    width: "100%",
    flex: 1,
  },
});

export default PaymentPage;
