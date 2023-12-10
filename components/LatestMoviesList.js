import React, { useEffect } from "react";
import { ScrollView, Text } from "react-native";
import { connect } from "react-redux";
import { fetchMovies } from "../actions/LatestMovieAction";
import LatestMoviesItem from "./LatestMoviesItem";

function LatestMoviesList({ productsData, fetchMovies, navigation }) {
  useEffect(() => {
    fetchMovies();
  }, []);

  return productsData.loading ? (
    <Text>Loading...</Text>
  ) : productsData.error ? (
    <Text>Error...</Text>
  ) : (
    <ScrollView>
      {productsData &&
        productsData.lreducer &&
        productsData.lreducer.items &&
        productsData.lreducer.items.map((item, key) => {
          return <LatestMoviesItem item={item} key={key} navigation={navigation}></LatestMoviesItem>;
        })}
    </ScrollView>
  );
}

const mapStateToProps = (state) => ({
  productsData: state,
});

const mapDispatchToProps = (disptach) => {
  return {
    fetchMovies: () => disptach(fetchMovies()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LatestMoviesList);
