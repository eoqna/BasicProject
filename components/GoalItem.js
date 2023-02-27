import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const GoalItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onClickRow}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: 'grey',
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 7,
    borderRadius: 7,
  },
  goalText: {
    color: 'white',
  }
});

export default GoalItem;