import React from 'react';

import {View, Pressable, Text, StyleSheet} from 'react-native';
const ListItem = ({text, id, onRemove}) => {
  const deleteHandler = () => {
    onRemove(id);
  };
  return (
    <Pressable onPress={deleteHandler} key={id}>
      <View>
        <Text style={styles.listings}>{text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  listings: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#e4e4e4',
    borderRadius: 5,
    padding: 8,
    color: 'black',
  },
});

export default ListItem;
