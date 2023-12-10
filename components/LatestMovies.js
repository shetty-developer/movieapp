import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  Button,
  Alert,
} from "react-native";
import LatestMovieList from "./LatestMoviesList"
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

export default function LatestMovies({ }) {
  
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <LatestMovieList></LatestMovieList>
      <Text>s</Text>
    </View>
  );
}
