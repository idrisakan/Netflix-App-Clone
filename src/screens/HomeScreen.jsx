import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useEffect} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {AppScreens} from '../navigation/types';
import Logo from '../components/Logo';
import {useDispatch, useSelector} from 'react-redux';
import {GetTopRatedMovies, GetUpcomingMovies} from '../app/actions/movieAction';
import {getTopRatedState, getUpcomingState} from '../app/movieSelector';
import TrendingMovies from '../components/TrendingMovies';
import MovieList from './MovieList';


const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetTopRatedMovies());
    dispatch(GetUpcomingMovies());
  }, [dispatch]);

  const topRatedMovies = useSelector(getTopRatedState());
  const upcomingMovies = useSelector(getUpcomingState());

  return (
    <View className="flex-1 bg-neutral-800">
      <SafeAreaView>
        <View className="flex-row justify-between items-center">
          <Icon name="menuunfold" size={30} color="#fff" />
          <Logo />
          <TouchableOpacity
            onPress={() => navigation.navigate(AppScreens.Search)}>
            <Icon name="search1" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <ScrollView>
        {/* trending movies */}
        <TrendingMovies />
        {/* upcoming movies */}
     <MovieList title='Upcoming' data={upcomingMovies}/>
        {/* toprated movies */}
        <MovieList title="Top Rated" data={topRatedMovies} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
