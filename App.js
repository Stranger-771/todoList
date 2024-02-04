import React, {useState} from 'react';
import { Platform , TouchableOpacity, Keyboard,  KeyboardAvoidingView, StyleSheet, Text, View, TextInput } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask]= useState('');
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask =() =>{
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask('');
  }

  const completeTask =(index) =>{
    let itemsCopy =[...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }
  return (
    <View style={styles.container}>
      {/*Today's tasks*/}
      <View style={styles.tasksWrapper}>
        <Text style= {styles.sectionTitle}>Today's Task</Text>
        <View style= {styles.items}>
        {/*this is where the tasks will go*/}
        {
          taskItems.map((item, index) =>{
            return (
              <TouchableOpacity key={index} onPress={() =>completeTask(index)}> 
              <Task  text={item}/>

              </TouchableOpacity>
            )
            
          })
        }
        

        </View>
      </View>

      {/*Write a task*/}
      <KeyboardAvoidingView behavior={Platform.OS ==="ios"? "padding": "height"}
      style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={'write a task'} value={task} onChangeText={text =>setTask(text)}/>
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style ={styles.addWrapper}>
            <Text style= {styles.addText}>+</Text>

          </View>
        </TouchableOpacity>

      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,  
  },
  writeTaskWrapper:{
    position: 'absolute',
    bottom: 60,
    width: '90%',  
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',

  },
  input:{
    paddingVertical: 15,
    paddingHorizontal: 35,  
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
    
    
  },
  addWrapper:{
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText:{},

  
});
