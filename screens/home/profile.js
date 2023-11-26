import * as React from "react";
import {StyleSheet, View, Text, Image, Pressable} from "react-native";

export function PROFILE ({navigation}) {
  	
  	return (
    		<View style={styles.profile}>
      			<View style={[styles.profileChild, styles.profilePosition]} />
      			<View style={[styles.profileItem, styles.profilePosition]} />
      			<View style={styles.profileInner} />
      			<Text style={styles.eBeatProfile}>#E-BEAT-PROFILE</Text>
      			<Pressable style={styles.vectorWrapper} onPress={()=>{}}>
        				<Image style={styles.vectorIcon1} resizeMode="cover" /*source="Vector.png"*/ />
      			</Pressable>
      			<View style={styles.rectangleView} />
      			<Image style={styles.ellipseIcon} resizeMode="cover" /*source="Ellipse 1.png"*/ />
      			<Text style={[styles.mriniyan, styles.mriniyanTypo]}>MR.INIYAN</Text>
      			<Text style={[styles.inspector, styles.mriniyanTypo]}>Inspector</Text>
      			<Text style={[styles.mudhaliarpetPs, styles.mriniyanTypo]}>Mudhaliarpet PS</Text>
      			<View style={[styles.profileChild1, styles.profileChildLayout]} />
      			<Pressable style={[styles.rectanglePressable, styles.profileChildLayout]} onPress={()=>{}} />
      			<View style={[styles.profileChild2, styles.profileChildLayout]} />
      			<View style={[styles.profileChild3, styles.profileChildLayout]} />
      			<Text style={[styles.aboutOfficer, styles.helpTypo]} onPress={()=>{navigation.navigate("Notifications");}} >About officer</Text>
      			<Text style={[styles.telephoneDirectory, styles.helpTypo]} onPress={()=>{navigation.navigate("Directory");}} >Telephone Directory</Text>
      			<Text style={[styles.settings, styles.helpTypo]}>Settings</Text>
      			<Text style={[styles.help, styles.helpTypo]}>Help</Text>
    		</View>);
};

const styles = StyleSheet.create({
  	profilePosition: {
    		height: 25,
    		backgroundColor: "#d9d9d9",
    		width: 360,
    		left: "50%",
    		marginLeft: -180,
    		position: "absolute"
  	},
  	mriniyanTypo: {
    		color: "#fff",
    		fontFamily: "Roboto",
    		letterSpacing: 0.9,
    		fontSize: 15,
    		left: 195,
    		textAlign: "left",
    		position: "absolute"
  	},
  	profileChildLayout: {
    		height: 50,
    		width: 350,
    		borderWidth: 1,
    		borderColor: "#fff",
    		borderStyle: "solid",
    		marginLeft: -175,
    		backgroundColor: "#bbc7e7",
    		left: "50%",
    		position: "absolute"
  	},
  	helpTypo: {
    		left: 25,
    		color: "#fff",
    		fontFamily: "Roboto",
    		letterSpacing: 0.9,
    		fontSize: 15,
    		textAlign: "left",
    		position: "absolute"
  	},
  	profileChild: {
    		top: 0
  	},
  	profileItem: {
    		bottom: 0
  	},
  	profileInner: {
    		top: 25,
    		backgroundColor: "#8b98d8",
    		height: 75,
    		width: 360,
    		left: "50%",
    		marginLeft: -180,
    		position: "absolute"
  	},
  	eBeatProfile: {
    		marginLeft: -125,
    		top: 50,
    		fontSize: 20,
    		letterSpacing: 1.2,
    		fontFamily: "Roboto",
    		color: "#000",
    		width: 235,
    		textAlign: "left",
    		left: "50%",
    		position: "absolute"
  	},
  	vectorIcon1: {
    		width: 20,
    		height: 20
  	},
  	vectorWrapper: {
    		top: 45,
    		left: 21,
    		flexDirection: "row",
    		padding: 5,
    		position: "absolute"
  	},
  	rectangleView: {
    		top: 100,
    		height: 150,
    		backgroundColor: "#bbc7e7",
    		width: 360,
    		left: "50%",
    		marginLeft: -180,
    		position: "absolute"
  	},
  	ellipseIcon: {
    		top: 125,
    		width: 175,
    		height: 175,
    		marginLeft: -175,
    		left: "50%",
    		position: "absolute"
  	},
  	mriniyan: {
    		top: 147
  	},
  	inspector: {
    		top: 173
  	},
  	mudhaliarpetPs: {
    		top: 199
  	},
  	profileChild1: {
    		top: 300
  	},
  	rectanglePressable: {
    		top: 350
  	},
  	profileChild2: {
    		top: 400
  	},
  	profileChild3: {
    		top: 450
  	},
  	aboutOfficer: {
    		top: 316
  	},
  	telephoneDirectory: {
    		top: 366
  	},
  	settings: {
    		top: 416
  	},
  	help: {
    		top: 466
  	},
  	profile: {
    		backgroundColor: "#fff",
    		flex: 1,
    		width: "100%",
    		height: 800,
    		overflow: "hidden"
  	}
});

export default PROFILE;