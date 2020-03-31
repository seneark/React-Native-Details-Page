import React from "react";
import { StyleSheet, TouchableOpacity, Text, View, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function TodoItem({ item , navigate }) {
  return (
    <View>
      <View style={styles.item}>
        <Image source={item.img} style={styles.LogoImg} />
        <View style={styles.DetText}>
          <Text style={styles.Heading}>{item.Category}</Text>
          <Text style={styles.subHeading}>{item.Subcategory}</Text>
          <Text style={styles.Quantity}>Quantity : {item.Quantity}</Text>
          <TouchableOpacity style={styles.TouchBtn} onPress={navigate}>
            <Text style={styles.TouchBtnText}>Details</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f7f8fa",
    padding: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 1,
    alignItems:'center',
    borderRadius: 10,
    margin:2,
    width:'99%'
  },
  LogoImg: {
    width: 100,
    height: 100,
    alignItems:'center'
  },
  DetText:{
    alignItems:'center'
  },
  Heading: {
    fontFamily: "notoserif",
    letterSpacing:5,
    fontSize:20,
    textAlign:'center',
  },
  subHeading: {
    fontFamily: "notoserif",
    letterSpacing:2,
    fontSize:15,
    textAlign:'center'
  },
  Quantity: {
    fontFamily: "notoserif",
    letterSpacing:0.5,
    fontSize:15,
    textAlign:'center'
  },
  TouchBtn:{
      padding:10
  },
  TouchBtnText:{
      padding:10,
      textAlign:"center",
      backgroundColor:'#5cc2f2',
      borderRadius:10,
      paddingLeft:20,
      paddingRight:20,
      color:'#333',
      letterSpacing:4
  }


});
