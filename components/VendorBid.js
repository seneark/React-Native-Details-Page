import React, {Component} from "react";
import {
  StyleSheet,
  Text,
  View,
  Picker,
  Image,
  TouchableOpacity
} from "react-native";
import img from "../assets/marshmallow.png";
import DatePicker from "react-native-datepicker";
import {Ionicons, AntDesign} from '@expo/vector-icons';

export default class Bid extends Component {
  constructor(props) {
    console.ignoredYellowBox = ['Warning:'];
    super(props);
    const today = new Date();
    const date =
        today.getDate() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getFullYear();
    //set value in state for initial date
    this.state = {date: "", time: ""};
  }

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
              <View style={{flexDirection: 'row'}}>
                <AntDesign name='calendar' size={30} style={{position: 'absolute', top: 4, left: 10}}/>
                <DatePicker
                    style={{width: '90%'}}
                    date={this.state.date} //initial date from state
                    mode="date" //The enum of date, datetime and time
                    placeholder="Select a Date for Bidding"
                    format="DD-MM-YYYY"
                    minDate="01-01-2016"
                    maxDate="01-01-2025"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                      dateIcon: {
                        display: 'none'
                      },
                      dateInput: {
                        marginLeft: 0,
                        borderRadius: 20,
                        borderColor: '#5cc2f2',
                        borderWidth: 0.5,
                        alignItems: 'flex-start',
                        paddingLeft: 60,

                      }
                    }}
                    onDateChange={date => {
                      this.setState({date: date});
                    }}
                />
              </View>
              <View style={{flexDirection: 'row'}}>
                <Ionicons name='md-time' size={30} style={{position: 'absolute', top: 10, left: 12}}/>
                <DatePicker
                    style={{width: '90%', marginTop: 6}}
                    date={this.state.time} //initial date from state
                    mode="time" //The enum of date, datetime and time
                    placeholder="Select a Time for Bidding"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    is24Hour={false}
                    customStyles={{
                      dateIcon: {
                        display: 'none'
                      },
                      dateInput: {
                        marginLeft: 0,
                        borderRadius: 20,
                        borderColor: '#5cc2f2',
                        borderWidth: 0.5,
                        alignItems: 'flex-start',
                        paddingLeft: 60,

                      }
                    }}
                    onDateChange={time => {
                      this.setState({time: time});
                    }}
                />
              </View>
              <View style={{marginTop: 20}}>
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
