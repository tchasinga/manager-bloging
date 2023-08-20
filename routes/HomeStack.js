import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../Screens/Home";
import ReviewDetail from "../Screens/ReviewDetails";
import About from "../Screens/About";
import Header from "../Shared/Header";
import React from "react";
// Get all screen as an object and display them.. and the cool thing is that it can autoDisplay a targer name
const screens = {
 Home: {
  screen : Home,
  navigationOptions : {
   headerTitle: () => <Header/>,
  headerStyle : {
  backgroundColor : '#f4511e'
  }
  } 
 },

 ReviewDetail : {
    screen : ReviewDetail,
    navigationOptions : {
    title : 'Review'
    } 
   },
   // Add more here...
   About : {
    screen : About,
    navigationOptions : {
      headerTitle: () => <Header/>,
      headerStyle : {
      backgroundColor : '#f4511e'
      }
    }
   }
}

const HomeStack = createStackNavigator(screens);
export default createAppContainer (HomeStack) ;  // Create App Container for navigation stack.