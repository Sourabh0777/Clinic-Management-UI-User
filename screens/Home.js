import React, { useState } from "react";
import { StyleSheet, Dimensions, ScrollView } from "react-native";
import { Button, Block, Text, Input, theme } from "galio-framework";
import { Fontisto } from "@expo/vector-icons";
import { Icon, Product } from "../components/";

const { width } = Dimensions.get("screen");
import products from "../constants/products";
import { FontAwesome5 } from "@expo/vector-icons";
import AppointmentCard from "../components/HomeComponent/AppointmentCard";

//Dummy Data
const Dummy_Data = {
  message: "Success",
  appointments: [
    {
      _id: "654357405458ac4ba7513fc4",
      user: {
        _id: "653b770e2ce070c1a41201d4",
        firstName: "John",
        lastName: "Doe",
      },
      doctor: {
        _id: "65347711be24439e4208a294",
        firstName: "doctor1",
        lastName: "Doc1",
        mobileNumber: 12345678,
      },
      prescription: "654357405458ac4ba7513fc3",
      appointmentDate: "2023-11-02T14:00:00.000Z",
      timeSlot: "654356455458ac4ba7513fa0",
      appointmentType: "OPD",
      status: "canceled",
      consultationFee: 50,
      paymentStatus: "Paid",
      paymentMethod: "Card",
      totalAmount: 50,
      appointmentNotes: "This is a regular checkup appointment",
      createdAt: "2023-11-02T08:01:04.211Z",
      updatedAt: "2023-11-03T04:00:10.756Z",
      __v: 0,
    },
  ],
};

const Home = ({ navigation }) => {
  const [ActiveIndex, setActiveIndex] = useState(0);
  const renderSearch = () => {
    const iconCamera = (
      <Icon
        size={16}
        color={theme.COLORS.MUTED}
        name="zoom-in"
        family="material"
      />
    );
    return (
      <Input
        right
        color="black"
        style={styles.search}
        iconContent={iconCamera}
        placeholder="What are you looking for?"
        onFocus={() => navigation.navigate("Pro")}
      />
    );
  };
  const ChangeToAppointment = () => {
    setActiveIndex(0);
  };
  const ChangeToUpcomingAppointment = () => {
    setActiveIndex(1);
  };

  const renderTabs = () => {
    return (
      <Block row style={styles.tabs}>
        <Button
          shadowless
          style={[styles.tab, styles.divider]}
          onPress={ChangeToAppointment}
        >
          <Block row middle>
            <Fontisto
              name="doctor"
              size={20}
              color="black"
              style={{ paddingRight: 8 }}
            />
            <Text size={16} style={styles.tabTitle}>
              Appointments
            </Text>
          </Block>
        </Button>
        <Button
          shadowless
          style={styles.tab}
          onPress={ChangeToUpcomingAppointment}
        >
          <Block row middle>
            <FontAwesome5
              name="hospital-user"
              size={20}
              color="black"
              style={{ paddingRight: 8 }}
            />
            <Text size={16} style={styles.tabTitle}>
              Upcoming
            </Text>
          </Block>
        </Button>
      </Block>
    );
  };
  const renderProducts = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.products}
      >
        <Block flex>
          {ActiveIndex ? (
            <AppointmentCard
              appointment={Dummy_Data.appointments[0]}
              horizontal
            />
          ) : (
            <AppointmentCard
              appointment={Dummy_Data.appointments[0]}
              horizontal
            />
          )}
        </Block>
      </ScrollView>
    );
  };

  return (
    <Block flex center style={styles.home}>
      {renderSearch()}
      {renderTabs()}
      {renderProducts()}
    </Block>
  );
};

const styles = StyleSheet.create({
  home: {
    width: width,
  },
  search: {
    height: 48,
    width: width - 32,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 3,
  },
  header: {
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    elevation: 4,
    zIndex: 2,
  },
  tabs: {
    marginBottom: 24,
    marginTop: 10,
    elevation: 4,
  },
  tab: {
    backgroundColor: theme.COLORS.TRANSPARENT,
    width: width * 0.5,
    borderRadius: 0,
    borderWidth: 0,
    height: 24,
    elevation: 0,
  },
  tabTitle: {
    lineHeight: 19,
    fontWeight: "300",
  },
  divider: {
    borderRightWidth: 0.3,
    borderRightColor: theme.COLORS.MUTED,
  },
  products: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 2,
  },
});

export default Home;

{
  /* <Block flex>
<Product product={products[0]} horizontal />
<Block flex row>
  <Product
    product={products[1]}
    style={{ marginRight: theme.SIZES.BASE }}
  />
  <Product product={products[2]} />
</Block>
<Product product={products[3]} horizontal />
<Product product={products[4]} full />
</Block>
</ScrollView> */
}
