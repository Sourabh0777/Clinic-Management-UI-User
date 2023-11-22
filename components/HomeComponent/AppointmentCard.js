import React from "react";
import {
  StyleSheet,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Block, Text, theme } from "galio-framework";
import Colors from "../../App/Shared/Colors";
import Line from "../Line";
//Icon
import { Fontisto } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
//
import { dateConverter } from "../../Helpers/dateConverter";

const { width } = Dimensions.get("screen");

const AppointmentCard = (props) => {
  const {
    navigation,
    appointment,
    horizontal,
    full,
    style,
    priceColor,
    imageStyle,
  } = props;
  const DoctorName =
    appointment.doctor.firstName + " " + appointment.doctor.lastName;
  const userName = appointment.user.firstName + " " + appointment.user.lastName;

  const appointmentDate = dateConverter(appointment.appointmentDate);
  return (
    <Block
      row={horizontal}
      card
      flex
      style={[styles.Card, styles.shadow, style]}
    >
      <TouchableWithoutFeedback>
        <Block flex style={styles.CardDescription}>
          <Block row right style={{ alignItems: "center" }}>
            <Fontisto name="doctor" size={14} color={Colors.PRIMARY} />
            <Text size={14} style={styles.CardTitle}>
              {DoctorName}
            </Text>
          </Block>
          <Line />
          <Text size={12} style={styles.CardTitle2}>
            {userName}
          </Text>
          <Line />
          <Block row right style={{ alignItems: "center" }}>
            <MaterialIcons
              name="local-hospital"
              size={14}
              color={theme.COLORS.MUTED}
            />

            <Text size={12} muted={!priceColor} color={priceColor}>
              Appointment Details
            </Text>
          </Block>
          {/* From this  */}
          <Block row right style={{ alignItems: "center" }}>
            <MaterialCommunityIcons
              name="calendar"
              size={14}
              color={theme.COLORS.MUTED}
            />
            <Text size={12} muted={!priceColor} color={priceColor}>
              Date: {appointmentDate}
            </Text>
          </Block>
          <Block row right style={{ alignItems: "center" }}>
            <MaterialCommunityIcons
              name="timer-outline"
              size={14}
              color={theme.COLORS.MUTED}
            />
            <Text size={12} muted={!priceColor} color={priceColor}>
              Time: 12:00 Am
            </Text>
          </Block>
          <Block row right style={{ alignItems: "center" }}>
            <MaterialCommunityIcons
              name="format-list-bulleted-type"
              size={14}
              color={theme.COLORS.MUTED}
            />
            <Text size={12} muted={!priceColor} color={priceColor}>
              Type: {appointment.appointmentType}
            </Text>
          </Block>
          <Block row right style={{ alignItems: "center" }}>
            <FontAwesome5
              name="calendar-check"
              size={14}
              color={theme.COLORS.MUTED}
            />
            <Text size={12} muted={!priceColor} color={priceColor}>
              Status: {appointment.status}
            </Text>
          </Block>
          <Block row right style={{ alignItems: "center" }}>
            <MaterialCommunityIcons
              name="currency-inr"
              size={14}
              color={theme.COLORS.MUTED}
            />
            <Text size={12} muted={!priceColor} color={priceColor}>
              Fees: {appointment.consultationFee}
            </Text>
          </Block>
          <Block row right style={{ alignItems: "center" }}>
            <Entypo name="cross" size={14} color={Colors.WARNING} />
            <AntDesign name="check" size={14} color={Colors.OKAY} />
            <Text size={12} muted={!priceColor} color={priceColor}>
              Payment Status: {appointment.paymentStatus}
            </Text>
          </Block>
          {/* TIll Here */}
        </Block>
      </TouchableWithoutFeedback>
    </Block>
  );
};

export default AppointmentCard;

const styles = StyleSheet.create({
  Card: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE,
    borderWidth: 0,
    minHeight: 114,
  },
  CardTitle: { marginHorizontal: 15, marginVertical: 2 },
  CardTitle2: {},
  CardDescription: {
    padding: theme.SIZES.BASE / 2,
  },

  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },
});
