import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
  Button
} from 'react-native';

export default class WriteStoryScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Story Hub</Text>
        <View>
         <TextInput style={styles.inputBox} placeholder="Story Title"/>
         </View>
         <View>
                  <TextInput style={styles.inputBox} placeholder="Author"/>
                  </View> <View style={styles.inputView}>
               
               <TextInput 
     style={styles.textArea}
     placeholder="Write a Story..."
     numberOfLines={10}
     multiline={true}
   />
   <View>
      <TouchableOpacity
         style={styles.submitButton}>
         <Text style={styles.submitButtonText}>Submit</Text>
       </TouchableOpacity>

</View>
</View>
     </View>
   );
 }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'top',
        alignItems: 'center',
        alignSelf:"center",
        textAlign:"center",
        margin:10
      },
      text:{
        textAlign:'center',
        fontSize:30, 
        fontWeight: "bold",
        fontFamily:"cursive"
      },
      submitButton:{
        backgroundColor:"orange",
        borderRadius:15,
        borderWidth:0.5,
        width:80,
        height:40,
        textAlign:"center",
        justifyContent:"center",
        alignSelf:"center",
      },
      inputBox:{
        borderWidth:1,
        marginTop:10,
        marginBottom:10,
        width:250,
        height:30
      },
      textArea:{
        marginTop:10,
        marginBottom:20,
        borderWidth:1,
        height:200,
        width:300
      },
      submitButtonText:{
        color:"white"
      }
  });