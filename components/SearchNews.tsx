import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

export default function SearchNews() {
  return (
    <View style={styles.headingContainer}>
      <Text style={styles.headingText}>Search Category</Text>
      <TextInput
        style={styles.searchInput}
        placeholderTextColor={'#003049'}
        placeholder="Type here to search!"
      />
      <View style={styles.buttonContainer}>
        <Button
          //   onPress={onPressLearnMore}
          title="Search"
          color="#003049"
          accessibilityLabel="Search news"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingContainer: {
    padding: 8,
    marginHorizontal: 8,
    rowGap: 4,
  },
  headingText: {
    color: '#003049',
    fontWeight: '800',
    fontSize: 24,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    marginTop: 8,
    color: '#003049',
  },
  buttonContainer: {
    marginTop: 8,
    width: 150,
  },
});
