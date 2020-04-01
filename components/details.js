import React, {useState} from "react";
import {StyleSheet, View, Image, Text, TouchableOpacity, FlatList} from "react-native";
import {AntDesign, Ionicons} from '@expo/vector-icons';
import StarRating from 'react-native-star-rating';

export default function Details({ navigation }) {
  const [rating, setRating] = useState(3.5);

  function onStarRatingPress(rating) {
    setRating(rating)
  }

  return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.list}>
            <View style={styles.LogoView}>
              <Image
                  source={navigation.state.params.item.img}
                  style={styles.LogoImg}
              />
            </View>
          <View>
            <View style={styles.ListTextCont}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.Heading}>
                  {navigation.state.params.item.Category}
                </Text>
                <StarRating
                    starSize={28}
                    disabled={false}
                    emptyStar={'ios-star-outline'}
                    fullStar={'ios-star'}
                    halfStar={'ios-star-half'}
                    iconSet={'Ionicons'}
                    maxStars={5}
                    rating={rating}
                    selectedStar={(rating) => onStarRatingPress(rating)}
                    fullStarColor={'#5cc2f2'}
                />
              </View>
              <Text style={styles.subHeading}>
                Subcategory : {navigation.state.params.item.Subcategory}
              </Text>
              <Text style={styles.Desc}>
                This is a product of plastic with ldpe for you
              </Text>
              <Text style={styles.Quantity}>
                Quantity : {navigation.state.params.item.Quantity}
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.UserInfo}>
        <View>
          <Text style={{
            fontSize:70,
            fontFamily:'ComicNeuRegBold',
            width:70,
            textAlign:'center',
            backgroundColor:'#5cc2f2',
            borderRadius:100,
            color:'#333'
          }}>
            V
          </Text>
        </View>
        <View style={{flexDirection:'row'}}>
          <Text style={styles.UserVal}>
            Name{"\n"}
            Quoted Price{"\n"}
            Distance{"\n"}
            Date of Arrival{"\n"}
            Date of Arrival
          </Text>
          <Text style={{marginLeft:10}}>
            Vendor{"\n"} 9Kg{"\n"} 0 {"\n"} d2l {"\n"} t2
          </Text>
          </View>
          <TouchableOpacity style={{
            position:'absolute',
            right:25,
            top:'50%'
          }}>
          <Ionicons name='ios-arrow-forward' size={28} />
          </TouchableOpacity>
        </TouchableOpacity>
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
    padding: 10,
    flex: 1,
    alignItems: "center"
  },
  list: {
    width: "100%",
    paddingTop: 20,
    justifyContent: "space-around"
  },
  LogoView: {
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    backgroundColor: "#f7f8fa",
    alignItems: "center",
    width: "100%"
  },
  LogoImg: {
    width: 300,
    height: 300
  },
  ListTextCont: {
    padding: 10
  },
  Heading: {
    fontFamily: "ComicNeuRegBold",
    letterSpacing: 5,
    fontSize: 25,
  },
  subHeading: {
    fontFamily: "ComicNeuReg",
    letterSpacing: 2,
    fontSize: 15
  },
  Desc: {
    width: 300
  },
  Quantity: {
    fontFamily: "ComicNeuReg",
    letterSpacing: 0.5,
    fontSize: 15
  },
  UserInfo: {
    backgroundColor: "#f7f8fa",
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 7,
    width: "100%",
    flexDirection: "row"
  },
  UserVal: {
    fontFamily:'ComicNeuRegBold',
    paddingLeft:25,
  }
});
