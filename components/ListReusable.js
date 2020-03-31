import React, { useState } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import ListText from "./ListText";
import img1 from '../assets/marshmallow.png'
import img2 from '../assets/opener.png'
import img3 from '../assets/hypnosis.png'

export default function Details({navigation}) {
    const [todos, setTodos] = useState([
        { Category: "Plastic",Subcategory: "LDPE",Quantity: "1Kg",img: img1, key: "1" },
        { Category: "Plastic",Subcategory: "LDPE",Quantity: "77Kg",img: img2, key: "2" },
        { Category: "Plastic",Subcategory: "LDPE",Quantity: "100Kg",img: img3, key: "3" },
        { Category: "Plastic",Subcategory: "LDPE",Quantity: "1Kg",img: img1, key: "4" },
        { Category: "Plastic",Subcategory: "LDPE",Quantity: "77Kg",img: img2, key: "5" },
        { Category: "Plastic",Subcategory: "LDPE",Quantity: "100Kg",img: img3, key: "6" },
        { Category: "Plastic",Subcategory: "LDPE",Quantity: "1Kg",img: img1, key: "7" },
        { Category: "Plastic",Subcategory: "LDPE",Quantity: "77Kg",img: img2, key: "8" },
        { Category: "Plastic",Subcategory: "LDPE",Quantity: "100Kg",img: img3, key: "9"},
        { Category: "Plastic",Subcategory: "LDPE",Quantity: "1Kg",img: img1, key: "10" },
        { Category: "Plastic",Subcategory: "LDPE",Quantity: "77Kg",img: img2, key: "11" },
        { Category: "Plastic",Subcategory: "LDPE",Quantity: "100Kg",img: img3, key: "12" },
        { Category: "Plastic",Subcategory: "LDPE",Quantity: "1Kg",img: img1, key: "13" },
        { Category: "Plastic",Subcategory: "LDPE",Quantity: "77Kg",img: img2, key: "14" },
        { Category: "Plastic",Subcategory: "LDPE",Quantity: "100Kg",img: img3, key: "15" },
        { Category: "Plastic",Subcategory: "LDPE",Quantity: "1Kg",img: img1, key: "16" },
        { Category: "Plastic",Subcategory: "LDPE",Quantity: "77Kg",img: img2, key: "17" },
        { Category: "Plastic",Subcategory: "LDPE",Quantity: "100Kg",img: img3, key: "18" },
    ]);


    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.list}>
                    <FlatList
                        data={todos}
                        numColumns={2}
                        renderItem={({ item }) => (
                            <ListText item={item} navigate ={()=>navigation.push('Details', {item : item})}  />
                        )}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    content: {
        //padding: 40,
        paddingBottom:10,
        paddingLeft:30,
        paddingRight:30,
        flex: 1,
    },
    list: {
        flex:1,
        marginTop: 20,
    }
});
