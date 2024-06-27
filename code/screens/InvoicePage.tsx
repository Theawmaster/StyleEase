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
import { useNavigation, ParamListBase, useRoute, RouteProp } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize, Padding } from "../GlobalStyles";

type RouteParams = {
  topHairStyle: string;
  topHairVolume: string;
  sideHairStyle: string;
  backHairStyle: string;
  selectedStylist: string;
};

const InvoicePage = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const route = useRoute<RouteProp<{ params: RouteParams }, 'params'>>();
  const { topHairStyle, topHairVolume, sideHairStyle, backHairStyle, selectedStylist } = route.params;

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString(undefined, { weekday: 'short', day: 'numeric', month: 'short' });


  return (
    <ScrollView
      style={styles.invoicePage}
      horizontal={false}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={true}
      contentContainerStyle={styles.invoicePageScrollViewContent}
    >
      <View style={[styles.invoice, styles.invoiceBg]}>
        <Image
          style={styles.setIcon}
          contentFit="cover"
          source={require("../assets/set-icon2.png")}
        />
        <View style={[styles.containers, styles.rectangleBg]}>
          <View style={styles.containers1}>
          <View style={[styles.sectionDetail, styles.contentFlexBox]}>
                <View style={styles.detail}>
                  <Text
                    style={[styles.asHairStudio, styles.text2Typo]}
                    numberOfLines={1}
                  >
                    AS Hair Studio
                  </Text>
                  <View style={styles.hairTrimmingMiddlePartHiWrapper}>
                    <Text style={styles.hairTrimmingMiddle}>
                      {`Trimming: ${topHairStyle}, volume: ${topHairVolume}, 
${sideHairStyle}, ${backHairStyle}

Stylist: ${selectedStylist}`}
                    </Text>
                  </View>
                </View>
                <Text style={[styles.sun15Jan, styles.sun15JanTypo]}>
                  {formattedDate}
                </Text>
              </View>
            <View style={styles.sectionPaymentSummary}>
              <Text
                style={[styles.paymentSummary, styles.text2Typo]}
                numberOfLines={1}
              >
                Payment summary
              </Text>
              <View style={styles.sectionList}>
                <View style={styles.list}>
                  <Text style={[styles.hairTrimming, styles.sun15JanTypo]}>
                    Hair trimming
                  </Text>
                  <Text style={[styles.hairTrimming, styles.sun15JanTypo]}>
                    $10.00
                  </Text>
                </View>
                <View style={styles.list1}>
                  <Text style={[styles.hairTrimming, styles.sun15JanTypo]}>
                    Service fee
                  </Text>
                  <Text style={[styles.hairTrimming, styles.sun15JanTypo]}>
                    $0.90
                  </Text>
                </View>
                <View style={styles.list2} />
                <View style={styles.list3}>
                  <View style={styles.listLayout} />
                  <View style={[styles.listItem, styles.listLayout]} />
                  <View style={[styles.listItem, styles.listLayout]} />
                  <View style={[styles.listItem, styles.listLayout]} />
                  <View style={[styles.listItem, styles.listLayout]} />
                  <View style={[styles.listItem, styles.listLayout]} />
                  <View style={[styles.listItem, styles.listLayout]} />
                  <View style={[styles.listItem, styles.listLayout]} />
                  <View style={[styles.listItem, styles.listLayout]} />
                  <View style={[styles.listItem, styles.listLayout]} />
                  <View style={[styles.listItem, styles.listLayout]} />
                  <View style={[styles.listItem, styles.listLayout]} />
                  <View style={[styles.listItem, styles.listLayout]} />
                  <View style={[styles.listItem, styles.listLayout]} />
                  <View style={[styles.listItem, styles.listLayout]} />
                  <View style={[styles.listItem, styles.listLayout]} />
                  <View style={[styles.listItem, styles.listLayout]} />
                  <View style={[styles.listItem, styles.listLayout]} />
                  <View style={[styles.listItem, styles.listLayout]} />
                  <View style={[styles.listItem, styles.listLayout]} />
                  <View style={[styles.listItem, styles.listLayout]} />
                </View>
                <View style={styles.list4}>
                  <Text style={[styles.hairTrimming, styles.sun15JanTypo]}>
                    Total price
                  </Text>
                  <Text style={[styles.text2, styles.text2Typo]}>$10.90</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.sectionButton}>
            <TouchableHighlight
              style={styles.buttonbig}
              underlayColor="#fff"
              activeOpacity={0.2}
              onPress={() => navigation.navigate("MainLoadingPage")}
            >
              <Text style={[styles.restart, styles.restartTypo]}>Restart</Text>
            </TouchableHighlight>
            <View style={styles.buttonbig1}>
              <Text style={[styles.tapToPrint, styles.restartTypo]}>
                Tap to print
              </Text>
              <Image
                style={[styles.outlineWeatherCloudDown, styles.boldLayout]}
                contentFit="cover"
                source={require("../assets/outline--weather--cloud-download.png")}
              />
            </View>
          </View>
        </View>
        <View>
          <View style={[styles.content, styles.contentFlexBox]}>
            <View style={styles.statusBarFlexBox}>
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
  invoicePageScrollViewContent: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  invoiceBg: {
    backgroundColor: Color.colorLightseagreen_100,
    width: 390,
  },
  rectangleBg: {
    backgroundColor: Color.colorWhite900,
    position: "absolute",
  },
  contentFlexBox: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  text2Typo: {
    fontFamily: FontFamily.typographyHeadline416,
    fontWeight: "700",
    textAlign: "left",
  },
  sun15JanTypo: {
    fontFamily: FontFamily.typographySubHeadline216,
    fontWeight: "500",
    textAlign: "left",
  },
  listLayout: {
    height: 1,
    backgroundColor: Color.colorPrimaryBrand200,
    borderRadius: Border.br_8xs,
    width: 12,
  },
  restartTypo: {
    textAlign: "center",
    fontFamily: FontFamily.typographyHeadline416,
    fontWeight: "700",
    fontSize: FontSize.typographyHeadline416_size,
  },
  boldLayout: {
    height: 24,
    width: 24,
  },
  statusBarFlexBox: {
    display: "none",
    flexDirection: "row",
  },
  rectangleBorder: {
    borderWidth: 1,
    borderColor: Color.colorWhite900,
    borderStyle: "solid",
  },
  rectanglePosition1: {
    left: "0%",
    bottom: "0%",
    backgroundColor: Color.colorWhite900,
    position: "absolute",
  },
  rectanglePosition: {
    right: "0%",
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorWhite900,
    position: "absolute",
  },
  setIcon: {
    height: "54.68%",
    width: "106.13%",
    right: "-3.21%",
    bottom: "45.32%",
    left: "-2.92%",
    maxHeight: "100%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
    maxWidth: "100%",
  },
  asHairStudio: {
    width: 210,
    textAlign: "left",
    color: Color.colorCoolGray900,
    fontSize: FontSize.typographyHeadline416_size,
    overflow: "hidden",
  },
  hairTrimmingMiddle: {
    fontFamily: FontFamily.typographyCaption112,
    color: Color.colorCoolGray500,
    textAlign: "left",
    fontSize: FontSize.typographyHeadline416_size,
  },
  hairTrimmingMiddlePartHiWrapper: {
    marginTop: 8,
  },
  detail: {
    justifyContent: "center",
  },
  sun15Jan: {
    fontSize: FontSize.typographyBody314_size,
    color: Color.colorCoolGray500,
  },
  sectionDetail: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  paymentSummary: {
    width: 339,
    textAlign: "left",
    color: Color.colorCoolGray900,
    fontSize: FontSize.typographyHeadline416_size,
    overflow: "hidden",
  },
  hairTrimming: {
    color: Color.colorCoolGray900,
    fontSize: FontSize.typographyHeadline416_size,
  },
  list: {
    width: 339,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  list1: {
    width: 339,
    marginTop: 18,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  list2: {
    height: 20,
    width: 339,
    marginTop: 18,
    justifyContent: "space-between",
    alignItems: "center",
  },
  listItem: {
    marginLeft: 4,
  },
  list3: {
    marginTop: 18,
    flexDirection: "row",
  },
  text2: {
    fontSize: FontSize.typographyHeadline318_size,
    textAlign: "left",
    color: Color.colorCoolGray900,
  },
  list4: {
    height: 30,
    width: 339,
    marginTop: 18,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  sectionList: {
    height: 163,
    marginTop: 12,
    alignItems: "center",
  },
  sectionPaymentSummary: {
    marginTop: 18,
  },
  containers1: {
    height: 293,
  },
  restart: {
    color: Color.colorWhite900,
  },
  buttonbig: {
    width: 128,
    paddingVertical: Padding.p_mid,
    paddingHorizontal: Padding.p_3xs,
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.colorLightseagreen_100,
    height: 60,
  },
  tapToPrint: {
    color: Color.colorPrimaryBrand900,
    height:21,
  },
  outlineWeatherCloudDown: {
    marginLeft: 10,
  },
  buttonbig1: {
    borderColor: Color.colorPrimaryBrand900,
    borderWidth: 2,
    width: 168,
    height: 60,
    marginLeft: 25,
    borderStyle: "solid",
    paddingVertical: Padding.p_mid,
    paddingHorizontal: Padding.p_3xs,
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  sectionButton: {
    height: 66,
    marginTop: 24,
    flexDirection: "row",
  },
  containers: {
    marginLeft: -195,
    bottom: 0,
    left: "50%",
    borderTopLeftRadius: Border.br_9xl,
    borderTopRightRadius: Border.br_9xl,
    height: 408,
    justifyContent: "flex-end",
    paddingTop: Padding.p_5xl,
    alignItems: "center",
    width: 390,
  },
  text3: {
    fontSize: FontSize.typographyCaption112_size,
    fontFamily: FontFamily.quicksandMedium,
    color: Color.colorWhite900,
    fontWeight: "500",
    textAlign: "left",
  },
  rectangle: {
    height: "48%",
    top: "52%",
    right: "60%",
    left: "26.67%",
    borderRadius: Border.br_9xs,
    borderWidth: 1,
    borderColor: Color.colorWhite900,
    width: "13.33%",
    bottom: "0%",
    backgroundColor: Color.colorWhite900,
    position: "absolute",
  },
  rectangle1: {
    height: "32%",
    top: "68%",
    right: "86.67%",
    borderWidth: 1,
    borderColor: Color.colorWhite900,
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
    borderWidth: 1,
    borderColor: Color.colorWhite900,
    width: "13.33%",
    bottom: "0%",
    backgroundColor: Color.colorWhite900,
    position: "absolute",
  },
  rectangle3: {
    left: "86.67%",
    height: "100%",
    borderWidth: 1,
    borderColor: Color.colorWhite900,
    borderStyle: "solid",
    bottom: "0%",
    width: "13.33%",
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
  },
  rectangle6: {
    width: "26.67%",
    right: "4.76%",
    left: "68.57%",
    borderTopRightRadius: Border.br_10xs_5,
    borderBottomRightRadius: Border.br_10xs_5,
    height: "100%",
    bottom: "0%",
    top: "0%",
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
    width: 375,
    paddingHorizontal: Padding.p_7xl,
    paddingVertical: Padding.p_xs,
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  label1: {
    marginLeft: 24,
    color: Color.colorWhite900,
    textAlign: "left",
    fontSize: FontSize.typographyHeadline416_size,
  },
  label: {
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
  content: {
    paddingHorizontal: Padding.p_lg,
    paddingVertical: 0,
    marginTop: 8,
    flexDirection: "row",
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
  invoice: {
    height: 812,
    overflow: "hidden",
    width: 390,
  },
  invoicePage: {
    maxWidth: "100%",
    width: "100%",
    flex: 1,
  },
});

export default InvoicePage;
