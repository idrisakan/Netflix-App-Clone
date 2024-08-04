import {View, Text, SafeAreaView, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {selectedFavorites} from '../app/slices/favoriteSlice';
import FavoriteCrad from '../components/FavoriteCrad';

const FavoritesScreen = () => {
  const favorites = useSelector(selectedFavorites);

  return (
    <SafeAreaView className="flex-1 bg-neutral-800">
      <Text className="text-[20px] text-white text-center my-2">
        Favorites Movies
      </Text>
      <FlatList
        data={favorites}
        renderItem={({item}) => <FavoriteCrad item={item} />}
        keyExtractor={item => item.id.toString()}
        ListEmptyComponent={() => (
          <View>
            <Text className='text-neutral-300 text-center font-semibold my-5 text-2xl'>
              Filmi Beğenmedim
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default FavoritesScreen;
