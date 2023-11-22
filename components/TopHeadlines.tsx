import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, RefreshControl} from 'react-native';
import NewsCardItem from './NewsCardItem';

export default function TopHeadlines() {
  const [newsData, setNewsData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const URL =
    'https://newsapi.org/v2/top-headlines?country=in&apiKey=431b48bf7cab49968f0a035d89e796fe';

  const getTopHeadlines = async () => {
    try {
      setRefreshing(true); // Set refreshing to true when pull-to-refresh is triggered
      const response = await fetch(URL);
      const json = await response.json();
      setNewsData(json.articles);
    } catch (error) {
      console.error(error);
    } finally {
      setRefreshing(false); // Set refreshing to false when data is loaded or an error occurs
      setLoading(false);
    }
  };

  useEffect(() => {
    getTopHeadlines();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Top Headlines</Text>
      {!loading && (
        <FlatList
          data={newsData}
          renderItem={({item, index}) => (
            <NewsCardItem key={index} data={item} />
          )}
          keyExtractor={(item, index) => index.toString()}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={getTopHeadlines}
            />
          }
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 8,
    padding: 8,
    rowGap: 4,
  },
  headingText: {
    color: '#003049',
    fontWeight: '800',
    fontSize: 24,
    marginBottom: 8,
  },
});
