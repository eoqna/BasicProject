import React from "react";
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';

const InputComponent = ({
    enteredGoal,
    onChangeGoalInput,
    onClickAddButton,
    modalVisible,
    closeModal,
  }) => {

  return (
    <Modal animationType="slide" visible={modalVisible}>
      <View style={styles.textInputContainer}>
        <TextInput style={styles.textInput} onChangeText={onChangeGoalInput} value={enteredGoal.text} placeholder="Course goal!" />
        <Button title="ADD" onPress={onClickAddButton} />
        <View style={styles.closeBtnStyle}>
          <Button onPress={closeModal} title="CLOSE" color="red" />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: '#4267B2',
    color: 'white',
    width: '80%',
    paddingVertical: 10,
    paddingHorizontal: 7,
    borderRadius: 7,
  },
  textInputContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    flex: 1,
  },
  closeBtnStyle: {
    position: 'absolute',
    top: 60,
  }
});

export default InputComponent;