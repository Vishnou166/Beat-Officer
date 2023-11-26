import * as React from "react";
import {Image, StyleSheet, View, Text} from "react-native";

export function WELCOME ({navigation}) {
  	
  	return (
    		<View style={styles.welcomePage}>
      			<Image style={styles.welcomePosition} resizeMode="cover" /*source="Rectangle 1.png"*/ />
      			<View style={[styles.welcomePageItem, styles.welcomePosition]} />
      			<Text style={[styles.eBeat, styles.eBeatFlexBox]}>#E-BEAT</Text>
      			<View style={styles.rectangleParent}>
        				<View style={[styles.groupChild, styles.groupPosition]} />
        				<Image style={[styles.groupItem, styles.groupPosition]} resizeMode="cover" /*source="Rectangle 17.png"*/ />
        				<View style={[styles.groupInner, styles.groupPosition]} />
        				<Text style={[styles.puducherryPoliceGovernment1, styles.eBeatFlexBox]} onPress={()=>{navigation.navigate("LoginPage");}} >{`Puducherry Police
          					Government of Puducherry `}</Text>
      			</View>
    		</View>);
};

const styles = StyleSheet.create({
  	welcomePosition: {
    		width: 360,
    		marginLeft: -180,
    		marginTop: -400,
    		position: "absolute",
    		left: "50%",
    		top: "50%",
    		height: 800
  	},
  	eBeatFlexBox: {
    		textAlign: "left",
    		position: "absolute"
  	},
  	groupPosition: {
    		top: 0,
    		height: 61,
    		position: "absolute"
  	},
  	welcomePageItem: {
    		backgroundColor: "#033ba6"
  	},
  	eBeat: {
    		marginTop: -20,
    		marginLeft: -117,
    		fontSize: 40,
    		letterSpacing: 2.4,
    		fontFamily: "Roboto",
    		color: "#fff",
    		width: 233,
    		left: "50%",
    		top: "50%",
    		textAlign: "left"
  	},
  	groupChild: {
    		left: 0,
    		backgroundColor: "#fefefe",
    		width: 150
  	},
  	groupItem: {
    		left: 2,
    		width: 39
  	},
  	groupInner: {
    		left: 43,
    		backgroundColor: "#000",
    		width: 1
  	},
  	puducherryPoliceGovernment1: {
    		top: 6,
    		left: 46,
    		fontSize: 12,
    		letterSpacing: 0.7,
    		lineHeight: 17,
    		fontFamily: "Roboto",
    		color: "#050505",
    		width: 119,
    		height: 52
  	},
  	rectangleParent: {
    		top: 663,
    		left: 97,
    		width: 165,
    		height: 61,
    		position: "absolute"
  	},
  	welcomePage: {
    		backgroundColor: "#fff",
    		flex: 1,
    		width: "100%",
    		overflow: "hidden",
    		height: 800
  	}
});

export default WELCOME;