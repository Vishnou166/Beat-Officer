import * as React from "react";
import {Pressable, Image, StyleSheet, View, Text, SafeAreaView} from "react-native";
import {TextInput} from "react-native";
import { ImageBackground } from "react-native";


const LOGINPAGE = ({navigation}) => {
  	
  	return (
    		<SafeAreaView style={styles.logInPage}>
      			<ImageBackground style={styles.logInPageChild} resizeMode="cover" source={require("./Polics.png")}/>
      			<TextInput 
				    style={[styles.rectangleTextinput]}
				    placeholder="Username" 
					textAlign="center"
					mode= "outlined"
					theme={{"colors":{"background":"#8b98d8"}}} />
      			<TextInput 
					style={[styles.logInPageInner, styles.logLayout]}
				 	placeholder="Password" 
				 	mode="outlined" 
					textAlign="center"
					theme={{"colors":{"background":"#8b98d8"}}} />
      			<Pressable style={[styles.rectanglePressable, styles.logLayout]} onPress={()=>{navigation.navigate("DashBoard");}} />
				<Text style={[styles.username, styles.logInTypo]}></Text>
      			<Text style={[styles.password, styles.logInTypo]}></Text>
				<Text style={[styles.logIn, styles.logInTypo]}>LOG IN</Text>
      			<View style={[styles.rectangleView, styles.rectangleViewPosition]} />
      			<View style={[styles.logInPageChild1, styles.rectangleViewPosition]} />
    		</SafeAreaView>);
};

const styles = StyleSheet.create({
  	logLayout: {
    		height: 50,
    		borderStyle: "solid",
    		borderRadius: 50,
    		left: "50%",
    		position: "absolute",
			flex: 1,
  	},
  	logInTypo: {
    		textAlign: "left",
    		color: "#fff",
    		fontFamily: "Roboto",
    		lineHeight: 17,
    		letterSpacing: 0.9,
    		fontSize: 15,
    		position: "absolute"
  	},
  	rectangleViewPosition: {
    		height: 25,
    		backgroundColor: "#d9d9d9",
    		width: 360,
    		left: "50%",
    		marginLeft: -180,
    		position: "absolute"
  	},
  	logInPageChild: {
    		marginTop: -400,
    		top: "50%",
    		width: 360,
    		marginLeft: -180,
    		position: "absolute",
    		left: "50%",
    		height: 800
  	},
  	rectangleTextinput: {
		borderRadius: 50,
		borderStyle: "solid",
		flex: 1,
		width: "100%",
		height: 50
		},
  	logInPageInner: {
    		top: 441,
    		width: 250,
    		marginLeft: -125,
    		height: 50,
    		borderStyle: "solid",
    		borderRadius: 50
  	},
  	rectanglePressable: {
    		marginLeft: -50,
    		top: 600,
    		backgroundColor: "rgba(199, 86, 86, 0.5)",
    		borderColor: "#fff",
    		borderWidth: 1,
    		width: 100,
    		height: 50,
    		borderStyle: "solid",
    		borderRadius: 50
  	},
  	username: {
    		top: 380,
    		left: 142
  	},
  	password: {
    		top: 457,
    		left: 143
  	},
  	logIn: {
    		marginLeft: -25,
    		top: 617,
    		left: "50%",
    		color: "#fff",
    		fontFamily: "Roboto",
    		lineHeight: 17,
    		letterSpacing: 0.9,
    		fontSize: 15
  	},
  	rectangleView: {
    		top: 0
  	},
  	logInPageChild1: {
    		bottom: 0
  	},
  	logInPage: {
    		backgroundColor: "#3a62ae",
    		flex: 1,
    		width: "100%",
    		overflow: "hidden",
    		height: 800
  	}
});

export default LOGINPAGE;