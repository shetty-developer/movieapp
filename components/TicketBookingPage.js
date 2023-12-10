import React, { useState , Component} from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  Button,
  Piker
} from "react-native";
import LatestMovieDetails from "./LatestMovieDetails";
import LatestMoviesList from "./LatestMoviesList";

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

class TicketBookingPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>Navbar</Text>
          <TextInput placeholder="Search" />
        </View>
  <LatestMoviesList></LatestMoviesList>
        <View>

          <View>
            <Text>Details</Text>
           
          </View>
          <View>

          </View>
          <Button
        title="Submit"
        color="#f194ff"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
        </View>
      </View>
    );
  }
}

export default TicketBookingPage;
