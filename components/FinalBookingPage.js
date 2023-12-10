import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
} from "react-native";

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

class FinalBookingPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>Navbar</Text>
          <TextInput placeholder="Search" />
        </View>

        <View>
          <View>
            <Image
              style={styles.logo}
              source={{
                uri: "https://images.indianexpress.com/2021/09/Bheemla-Nayak-Pawan-Kalyan-1200by667.jpeg",
              }}
            />
          </View>
          <View>
            <Text>Details</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default FinalBookingPage;
