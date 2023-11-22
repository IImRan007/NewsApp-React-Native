import {
  Alert,
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import SearchItem from './SearchItem';

export default function SearchNews() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchData, setSearchData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const URL = `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=431b48bf7cab49968f0a035d89e796fe&page=${page}`;

  const getSearchNews = async () => {
    try {
      const response = await fetch(URL);
      const json = await response.json();
      // If it's the first page, set the data, otherwise concatenate the new data
      setPage(prevPage => (prevPage === 1 ? 2 : prevPage + 1));
      setSearchData(prevData =>
        page === 1 ? json.articles : [...prevData, ...json.articles],
      );
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchQuery === '' || searchQuery === null) {
      setSearchData(null);
    }
  }, [searchQuery]);

  const onPressSearch = () => {
    if (!searchQuery || searchQuery === '') {
      return Alert.alert('Please enter a search query.');
    }
    // Reset page to 1 when performing a new search
    setPage(1);
    getSearchNews();
  };

  const onEndReached = () => {
    // Fetch more data when the user reaches the end of the list
    if (!loading) {
      getSearchNews();
    }
  };

  return (
    <View style={styles.headingContainer}>
      <Text style={styles.headingText}>Search Category</Text>
      <TextInput
        style={styles.searchInput}
        placeholderTextColor={'#003049'}
        placeholder="Type here to search!"
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
      />
      <View style={styles.buttonContainer}>
        <Button
          onPress={onPressSearch}
          title="Search"
          color="#003049"
          accessibilityLabel="Search news"
        />
      </View>
      {!loading && (
        <>
          <View>
            <Text>Search Results for: ${searchQuery}</Text>
          </View>
          <FlatList
            data={searchData}
            renderItem={({item, index}) => (
              <SearchItem key={index} data={item} />
            )}
            keyExtractor={(item, index) => index.toString()}
            initialNumToRender={10}
            maxToRenderPerBatch={5}
            windowSize={10}
            onEndReached={onEndReached}
            onEndReachedThreshold={0.1}
          />
        </>
      )}
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
