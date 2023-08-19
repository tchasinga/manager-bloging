import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../Screens/Home";
import ReviewDetail from "../Screens/ReviewDetails";
import About from "../Screens/About";
// Get all screen as an object and display them.. and the cool thing is that it can autoDisplay a targer name
const screens = {
 Home: {
  screen : Home
 },

 ReviewDetail : {
    screen : ReviewDetail
   },
   // Add more here...
   About : {
    screen : About
   }
}

const HomeStack = createStackNavigator(screens);
export default createAppContainer (HomeStack) ;  // Create App Container for navigation stack.