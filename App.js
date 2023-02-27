import React, { useState } from 'react';
import uuid from 'react-uuid';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, FlatList, Button } from 'react-native';
import InputComponent from './components/InputComponent';
import GoalItem from './components/GoalItem';

export default function App() {

  const [ enteredGoal, setenteredGoal ] = useState({
    key: '',
    text: '',
  });
  const [ courseGoals, setCourseGoals ] = useState([]);
  const [ modalVisible, setModalVisible ] = useState(false);

  const onChangeGoalInput = (enteredText) => {
    setenteredGoal({
      key: uuid(),
      text: enteredText,
    });
  };

  const onClickAddButton = () => {
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
  };

  const onClickRow = (goalKey) => {
    console.log('delete!');
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => {
        return goalKey !== goal.key
      });
    });
  };

  const openModal = () => {
    setModalVisible(true);
  };
  
  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Button onPress={openModal} title="Add new goal" />
      <InputComponent 
        enteredGoal={enteredGoal}
        modalVisible={modalVisible}
        closeModal={closeModal}
        onChangeGoalInput={onChangeGoalInput}
        onClickAddButton={onClickAddButton}
      />
      <ScrollView>
        <FlatList data={courseGoals} renderItem={
            (data) => <GoalItem text={data.item.text} onClickRow={onClickRow.bind(this, data.item.key)} />
          }
        />
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  },
});
