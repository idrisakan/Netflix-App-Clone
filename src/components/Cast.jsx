import {View, Text, FlatList} from 'react-native';
import React from 'react';
import PersonListItem from './PersonListItem';

export default function Cast({data}) {
  return (
    <View>
      <Text className="text-white mx-4 my-5 text-lg">Top Cast</Text>
      <FlatList
        horizontal
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <PersonListItem person={item} />}
        contentContainerStyle={{paddingHorizontal:15}}
        showsHorizontalScrollIndicator={false}
     
      />
    </View>
  );
}
