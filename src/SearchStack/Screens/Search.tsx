import React from 'react';
import { SearchStackNavProps } from '@src/SearchStack/SearchParamsList';
import { Center } from '@src/Components';
import { Button } from 'react-native-paper';
import faker from 'faker';
import { FlatList } from 'react-native';

const Search = ({ navigation }: SearchStackNavProps<'Search'>) => {
  return (
    <Center>
      <FlatList
        style={{ width: '100%' }}
        renderItem={({ item }) => {
          return (
            <Button
              onPress={() => {
                navigation.navigate('Product', { name: item });
              }}
            >
              {item}
            </Button>
          );
        }}
        keyExtractor={(product, index) => product + index}
        data={Array.from(Array(50), () => faker.commerce.product())}
      />
    </Center>
  );
};

export default Search;
