import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import Details from "../components/details";
import ListReusable from "../components/ListReusable";
import NewComponent from "../components/NewComponent";
import Bid from '../components/VendorBid'

const screens = {
    List: {
        screen: ListReusable,
        navigationOptions: {
            title: "Here are all the items for sale"
        }
    },
    Details: {
        screen: NewComponent,
        navigationOptions: {
            title: "Item Details"
        }
    },
    Bid : {
        screen: Bid,
        navigationOptions: {
            title: "Bid on Item"
        }
    }

};

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStatusBarHeight:30,
        headerTitleAlign: "center",
        //headerTransparent: "true",
        headerStyle: {
            backgroundColor: "rgba(177,  220, 235, 255)"
        },
    }
});

export default createAppContainer(HomeStack);
