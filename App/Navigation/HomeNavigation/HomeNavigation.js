import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../Screens/HomeScreen";
import ContactUsScreen from "../../Screens/ContactUsScreen";

const Stack = createStackNavigator();

function HomeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ContactUs" component={ContactUsScreen} />
    </Stack.Navigator>
  );
}
export default HomeNavigation;
