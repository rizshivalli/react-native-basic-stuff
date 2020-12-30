import { Center } from '@src/Components';
import { HomeStackNavProps } from '@srcHomeStack/HomeParamsList';
import React from 'react';
import { Card } from 'react-native-paper';
import faker from 'faker';
import { StyleSheet, FlatList } from 'react-native';

const Feed = ({ navigation }: HomeStackNavProps<'Feed'>) => {
  return (
    <Center>
      <FlatList
        style={styles.flatList}
        renderItem={({ item }) => {
          return (
            <Card
              onPress={() => {
                navigation.navigate('Product', { name: item.product });
              }}
              style={{ margin: 10 }}
            >
              <Card.Title title={item.product} />
              <Card.Cover source={{ uri: item.image }} />
            </Card>
          );
        }}
        keyExtractor={(item, index) => item.product + index}
        data={Array.from(Array(50), () => ({
          product: faker.commerce.product(),
          image: faker.image.image(),
        }))}
      />
    </Center>
  );
};

const styles = StyleSheet.create({
  flatList: { width: '100%', padding: 10 },
});
export default Feed;
