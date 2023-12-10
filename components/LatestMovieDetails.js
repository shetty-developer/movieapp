import React, { Component } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
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
import LatestMovieList from "./LatestMoviesList";
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

export default function LatestMovieDetails({ route, navigation }) {
  const { movieid } = route.params;
  const [inputVal, setInputVal] = useState('');
  const [moviedate, setDate] = useState([]);
  console.log(movieid)
  useEffect(() => {
    axios.get(`http://192.168.0.103:6500/latestmovies/${movieid}`).then((res) => {
      const data = res.data;
      
      
      const { id, mname, category, price, img, releaseddate,rating,duration } = data
      const temp=category.toString()
      setDate(temp)
    
    });
    setInputVal("sss")
    console.log(inputVal)
    console.log(moviedate)
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, [inputVal]);

  
  return (
   
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Latest Movie Details</Text>

      <View>
        <Image
          style={styles.tinyLogo}
          source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        />
      </View>
      <View>
        <Text>Movie Name</Text>
        <Text>Released Date:</Text>
        <Text>Movie Duration:</Text>
        <Text>Ratings:</Text>
      </View>
      <Button
        title="Go to Details"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate("TicketBookingPage", {
            movieid: "1",
          });
        }}
      />
    </View>
  );
}
