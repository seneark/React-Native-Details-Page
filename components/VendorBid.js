import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Picker,
  Image,
  TouchableOpacity
} from "react-native";
import img from "../assets/marshmallow.png";

export default class Bid extends Component {
  state = {
    Date: null,
    Time: null
  };
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            fontFamily: "ComicNeuRegBold"
          }}
        >
          Item Details
        </Text>
        <View>
          <View style={styles.list}>
            <View style={styles.LogoView}>
              <Image source={img} style={styles.LogoImg} />
            </View>
            <View style={{ justifyContent: "center", width: "90%" }}>
              <View style={styles.ListTextCont}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "flex-start"
                  }}
                >
                  <Text style={styles.Heading}>Paper</Text>
                </View>
                <Text style={styles.subHeading}>Subcategory : Newspaper</Text>
                <Text style={styles.Desc}>
                  This is a product of plastic with ldpe
                </Text>
                <Text style={styles.Quantity}>Quantity : 11kg</Text>
              </View>
              <Picker
                style={{ width: "90%" }}
                selectedValue={this.state.Date}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ Date: itemValue })
                }
              >
                <Picker.Item
                  label="Select a Date"
                  value="0"
                  color="#4c5f7a"
                ></Picker.Item>
                <Picker.Item
                  label="Today"
                  value="1"
                  color="#5cc2f2"
                ></Picker.Item>
                <Picker.Item
                  label="Yesterday"
                  value="2"
                  color="#5cc2f2"
                ></Picker.Item>
                <Picker.Item
                  label="Day before yesterday"
                  value="3"
                  color="#5cc2f2"
                ></Picker.Item>
              </Picker>
              <Picker
                style={{ width: "90%" }}
                selectedValue={this.state.Time}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ Time: itemValue })
                }
              >
                <Picker.Item
                  label="Select a Time"
                  value="0"
                  color="#4c5f7a"
                ></Picker.Item>
                <Picker.Item
                  label="12 noon"
                  value="1"
                  color="#5cc2f2"
                ></Picker.Item>
                <Picker.Item
                  label="6 evening"
                  value="2"
                  color="#5cc2f2"
                ></Picker.Item>
                <Picker.Item
                  label="12 mid night"
                  value="3"
                  color="#5cc2f2"
                ></Picker.Item>
                <Picker.Item
                  label="9 morning"
                  value="4"
                  color="#5cc2f2"
                ></Picker.Item>
              </Picker>
              <View style={{ marginTop: 20 }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    width: "80%",
                    justifyContent: "space-between"
                  }}
                >
                  <TouchableOpacity>
                    <Text style={styles.BidForIt}>Bid For It</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text style={styles.RejectIt}>Reject It</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  list: {
    width: "100%",
    paddingTop: 20,
    alignItems: "center"
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
    fontSize: 25
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
  BidForIt: {
    marginLeft: 10,
    padding: 12,
    paddingLeft: 25,
    paddingRight: 25,
    backgroundColor: "#5cc2f2",
    borderRadius: 15
  },
  RejectIt: {
    marginRight: -30,
    padding: 12,
    paddingLeft: 25,
    paddingRight: 25,
    backgroundColor: "#5cc2f2",
    borderRadius: 15
  }
});
