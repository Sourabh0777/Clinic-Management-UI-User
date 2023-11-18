import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//Screen
import HomeScreen from "../../Screens/HomeScreen";
import AboutUsScreen from "../../Screens/AboutUsScreen";
import ContactUsScreen from "../../Screens/ContactUsScreen";
import ProfileScreen from "../../Screens/ProfileScreen";

//Icon
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
//Color
import Colors from "../../Shared/Colors";

const Tab = createBottomTabNavigator();

function BottomTabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={30} color={Colors.PRIMARY} />
          ),
        }}
      />
      <Tab.Screen
        name="Contact Us"
        component={ContactUsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="call" size={30} color={Colors.PRIMARY} />
          ),
        }}
      />
      <Tab.Screen
        name="About Us"
        component={AboutUsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="group" size={26} color={Colors.PRIMARY} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={30} color={Colors.PRIMARY} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default BottomTabNavigation;

{
  /* <Tab.Screen
        name="TestScreen"
        component={Test2}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="alert" size={24} color={Colors.PRIMARY} />
          ),
        }}
      /> */
}
