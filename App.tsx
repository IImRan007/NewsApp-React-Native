import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SearchNews from './components/SearchNews';
import TopHeadlines from './components/TopHeadlines';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>News Box</Text>
        <Text style={styles.description}>Grab the latest news on the go.</Text>
      </View>
      <SearchNews />
      <TopHeadlines />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#edf6f9',
  },
  headingContainer: {
    padding: 8,
    marginHorizontal: 8,
    rowGap: 4,
  },
  headingText: {
    color: '#003049',
    fontWeight: '800',
    fontSize: 28,
  },
  description: {
    color: '#003049',
    fontSize: 20,
  },
});
