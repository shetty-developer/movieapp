import React, { Component } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import {
  Text,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
} from "react-native";
import LatestMovieDetails from "./LatestMovieDetails";
import TicketBookingPage from "./TicketBookingPage";
import LatestMoviesItem from "./LatestMoviesItem";
import LatestMoviesList from "./LatestMoviesList";
import LatestMoviesPage from "./LatestMoviesPage";
import FinalBookingPage from "./FinalBookingPage";
import LatestMovies from "./LatestMovies";

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

class HomePage extends Component {
  render() {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="LatestMoviesPage">
            <Stack.Screen name="LatestMoviesPage" component={LatestMoviesPage} />

            <Stack.Screen name="LatestMovieDetails" component={LatestMovieDetails} />

            <Stack.Screen
              name="TicketBookingPage"
              component={TicketBookingPage}
            />
            <Stack.Screen
              name="FinalBookingPage"
              component={FinalBookingPage}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}

export default HomePage;
