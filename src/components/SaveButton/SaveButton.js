import React, {useState} from "react";
import { TouchableOpacity, View, Text, StyleSheet, TextInput } from "react-native";

const SaveButton = (props) => {

  const [task, setTask] = useState(0);
  const [taskItems, setTaskItems] = useState([]);
  const handleAddTask = () => {
    setTaskItems([...taskItems, task])
  }

  return (
  <View style={styles.container}>
    <TextInput style={styles.textInput} placeholder="Yapılacak..." value={task} onChangeText={text => setTask(text)}/>
    <TouchableOpacity onPress={() => handleAddTask()} style={styles.touchable}>
      <Text style={styles.kaydet}>Kaydet</Text>
    </TouchableOpacity>
  </View>
  );
};


const styles = StyleSheet.create({
  container: {
    marginBottom : 10,
    backgroundColor: 'yellow',
    padding: 15,
    borderRadius: 10
  },
  textInput: {
    marginBottom: 10,
    fontSize: 17,
    borderBottomWidth: 1,
    borderColor: '#666677'
  },
  touchable: {
    backgroundColor: '#A1A1AB',
    padding: 10,
    borderRadius: 13,
    marginLeft: 10,
    marginRight: 10
  },
  kaydet: {
    color :'#fff',
    alignSelf: 'center',
    fontSize: 18,
  }
});


export default SaveButton;
