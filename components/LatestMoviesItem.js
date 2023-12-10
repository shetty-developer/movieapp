import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LatestMoviesItem({ navigation,item, key }) {
  return (
    <SafeAreaView styles={styles.listItem} key={key}>
      
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image source={{ uri: item.img }} style={styles.placeImage} />

        </View>

        <View>
          <Button
            title="Details"
            onPress={() => {
              /* 1. Navigate to the Details route with params */
              navigation.navigate("LatestMovieDetails", {
                movieid: "1",
              });
            }}
          />
        </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  listItem: {
    width: "80%",
    padding: 10,
    marginTop: 2,
    color: "#191970",
    backgroundColor: "#eee",
    flex: 1,
  },
  placeImage: {
    height: 120,
    width: 200,
  },
  textval: {
    textAlign: "center",
    fontSize: 30,
  },
});
