import React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  ImageBackground,
  Platform,
  View,
  TouchableOpacity,
} from "react-native";
import { Block, Text, theme } from "galio-framework";
import { LinearGradient } from "expo-linear-gradient";

import { Icon } from "../components";
import { Images, materialTheme } from "../constants";
import { HeaderHeight } from "../constants/utils";

import Colors from "../App/Shared/Colors";
//Icon
import { Feather } from "@expo/vector-icons";
import { Zocial } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

//
const { width, height } = Dimensions.get("screen");
const thumbMeasure = (width - 48 - 32) / 3;

const DummyData = {
  _id: "653b770e2ce070c1a41201d4",
  mobileNumber: 7042987761,
  prescriptions: [],
  createdAt: "2023-10-27T08:38:38.894Z",
  updatedAt: "2023-11-08T11:04:38.270Z",
  __v: 0,
  address: "339 pooth Kalan New Delhi",
  dateOfBirth: "1990-01-15T00:00:00.000Z",
  firstName: "John",
  gender: "Male",
  otherContactNo: "987-654-3210",
  state: "California",
  profile: "url",
  lastName: "Doe",
};

const Profile = () => {
  const dob = DummyData.dateOfBirth;
  const formattedDate = new Date(dob).toLocaleString("default", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Block flex style={styles.profile}>
      <Block flex>
        <ImageBackground
          source={{ uri: Images.Profile }}
          style={styles.profileContainer}
          imageStyle={styles.profileImage}
        >
          <Block flex style={styles.profileDetails}>
            <Block style={styles.profileTexts}>
              <Text color="white" size={28} style={{ paddingBottom: 8 }}>
                Rachel Brown
              </Text>
              <Block row space="between">
                <Block>
                  <Text color={theme.COLORS.MUTED} size={16}>
                    <Zocial name="call" size={16} color={theme.COLORS.MUTED} />{" "}
                    +91 {DummyData.mobileNumber}
                  </Text>
                </Block>
              </Block>
            </Block>
            <LinearGradient
              colors={["rgba(0,0,0,0)", "rgba(0,0,0,1)"]}
              style={styles.gradient}
            />
          </Block>
        </ImageBackground>
      </Block>
      <Block flex style={styles.options}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Block row space="between" style={{ padding: theme.SIZES.BASE }}>
            <Block middle>
              <Text bold size={12} style={{ marginBottom: 8 }}>
                {formattedDate}
              </Text>
              <Text muted size={12}>
                DOB
              </Text>
            </Block>
            <Block middle>
              <Block row space="evenly">
                <FontAwesome name="male" size={16} color="black" />
                <Text bold size={12} style={{ marginHorizontal:5, marginBottom:8}}>
                  {DummyData.gender}
                </Text>
              </Block>

              <Text muted size={12}>
                Gender
              </Text>
            </Block>
            <Block middle>
              <Feather name="edit" size={24} color="black" />
              <Text muted size={12}>
                Edit
              </Text>
            </Block>
          </Block>
          <Block
            row
            space="between"
            style={{ paddingVertical: 5, alignItems: "baseline" }}
          >
            <Text size={16}>Profile Details</Text>
          </Block>
          <View
            style={{
              width: "100%",
              borderWidth: 1.5,
              borderColor: Colors.LIGHT_GRAY,
              borderRadius: 50,
              marginVertical: 5,
            }}
          ></View>
          <Block style={{ paddingBottom: -HeaderHeight * 2 }}>
            <Block style={{ marginVertical: 2 }}>
              <Text color={"black"} size={16}>
                <Icon
                  name="map-marker"
                  family="font-awesome"
                  color={"black"}
                  size={16}
                />
                {"    "}
                {DummyData.address}
              </Text>
            </Block>
            <Block style={{ marginVertical: 2 }}>
              <Text color={"black"} size={16}>
                <Zocial name="call" size={16} color={"black"} />
                {"   "}
                +91 {DummyData.mobileNumber}
              </Text>
            </Block>
            <View
              style={{
                width: "100%",
                borderWidth: 1.5,
                borderColor: Colors.LIGHT_GRAY,
                borderRadius: 50,
                marginVertical: 5,
              }}
            ></View>
            <Block>
              <Text color={theme.COLORS.MUTED}>Id</Text>
              <TouchableOpacity>
                <Block row space="between">
                  <Text color={"black"} size={16}>
                    {DummyData._id}
                  </Text>
                  <Feather name="copy" size={24} color={theme.COLORS.MUTED} />
                </Block>
              </TouchableOpacity>
            </Block>
            <View
              style={{
                width: "100%",
                borderWidth: 1.5,
                borderColor: Colors.LIGHT_GRAY,
                borderRadius: 50,
                marginVertical: 5,
              }}
            ></View>
            <Block>
              <Text color={theme.COLORS.MUTED}>State</Text>
              <Text color={"black"} size={16}>
                {DummyData.state}
              </Text>
            </Block>
          </Block>
        </ScrollView>
      </Block>
    </Block>
  );
};

const styles = StyleSheet.create({
  profile: {
    marginTop: Platform.OS === "android" ? -HeaderHeight : 0,
    marginBottom: -HeaderHeight * 2,
  },
  profileImage: {
    width: width * 1.1,
    height: "auto",
  },
  profileContainer: {
    width: width,
    height: height / 2,
  },
  profileDetails: {
    paddingTop: theme.SIZES.BASE * 4,
    justifyContent: "flex-end",
    position: "relative",
  },
  profileTexts: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 2,
    zIndex: 2,
  },
  pro: {
    backgroundColor: materialTheme.COLORS.LABEL,
    paddingHorizontal: 6,
    marginRight: theme.SIZES.BASE / 2,
    borderRadius: 4,
    height: 19,
    width: 38,
  },
  seller: {
    marginRight: theme.SIZES.BASE / 2,
  },
  options: {
    position: "relative",
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: -theme.SIZES.BASE * 7,
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2,
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: "center",
    width: thumbMeasure,
    height: thumbMeasure,
  },
  gradient: {
    zIndex: 1,
    left: 0,
    right: 0,
    bottom: 0,
    height: "30%",
    position: "absolute",
  },
});
export default Profile;
