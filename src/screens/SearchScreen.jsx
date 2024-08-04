import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {AppScreens} from '../navigation/types';
import {useDispatch, useSelector} from 'react-redux';
import {GetSearchMovies} from '../app/actions/movieAction';
import {getSearchResultsState} from '../app/movieSelector';
import MovieListItem from '../components/MovieListItem';

const SearchScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    dispatch(GetSearchMovies(searchText));
  }, [searchText, dispatch]);

  const searchResults = useSelector(getSearchResultsState());
  console.log(searchResults);
  return (
    <SafeAreaView className="bg-neutral-800 flex-1">
      <View className="mx-4 border border-neutral-500 rounded-full flex-row justify-between mb-3 items-center">
        <TextInput
          onChangeText={setSearchText}
          placeholder="Search Movies"
          placeholderTextColor={'lightgray'}
          className="text-white tracking-wider font-semibold py-2 px-6 "
        />
        <TouchableOpacity
          onPress={() => navigation.navigate(AppScreens.Home)}
          className="bg-neutral-700 rounded-full p-2 m-1 justify-center items-center flex">
          <Icon name="close" color="#fff" size={25} />
        </TouchableOpacity>
      </View>

      {searchResults?.length > 0 && (
        <ScrollView 
        contentContainerStyle={{
          paddingHorizontal:15,
          paddingBottom:30
        }}
        >
          <Text className='text-white font-semibold ml-1 my-2' >Result Length: {searchResults?.length}</Text>
          <View className='flex-row flex-wrap justify-between px-5'>
            {searchResults?.map((movie, index) => (
              <MovieListItem searchPage movie={movie} key={index}/>
            ))}
          </View>
        </ScrollView>
      )}
{searchResults?.length === 0 && (
 <View className="item-center justify-center">
        <Image
          source={require('./../assets/images/movieTime.png')}
          className="w-96 h-96"
        />
      </View>
)}
      
    </SafeAreaView>
  );
};

export default SearchScreen;
