import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function SearchItem({data}) {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }

  return (
    <>
      <View style={styles.cardContainer}>
        <Text style={[styles.commonText, styles.sourceName]}>
          {data.source.name}
        </Text>
        <Text style={[styles.commonText]}>{data.title}</Text>
        {data.urlToImage && (
          <Image source={{uri: data.urlToImage}} style={styles.imageStyle} />
        )}
        <Text style={[styles.commonText]}>{data.description}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.socialLinks]}
            onPress={() => openWebsite(data.url)}>
            <Text style={[styles.commonText, styles.socialLinksText]}>
              Read More
            </Text>
          </TouchableOpacity>
          {data.author && (
            <Text style={[styles.commonText, styles.author]}>
              Author: <Text style={styles.boldText}>{data.author}</Text>
            </Text>
          )}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 4,
    gap: 8,
  },
  commonText: {
    color: '#003049',
    padding: 4,
  },
  imageStyle: {
    height: 200,
    width: 380,
  },
  sourceName: {
    marginTop: 6,
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  socialLinks: {
    fontSize: 16,
    color: '#FFF',
    backgroundColor: '#003049',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
  },
  socialLinksText: {
    color: '#FFF',
  },
  boldText: {
    fontWeight: 'bold',
  },
  author: {
    marginRight: 6,
  },
});
