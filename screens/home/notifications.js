import * as React from "react";
import {StyleSheet, View, Text, Image, Pressable} from "react-native";

export function NOTIFICATIONS ({navigation}) {
  	
  	return (
    		<View style={styles.notifications}>
      			<View style={[styles.notificationsChild, styles.notificationsPosition1]} />
      			<View style={[styles.notificationsItem, styles.notificationsPosition1]} />
      			<View style={[styles.notificationsInner, styles.notificationsPosition]} />
      			<Text style={styles.eBeatNotifications}>#E-BEAT-NOTIFICATIONS</Text>
      			<Pressable style={[styles.vectorWrapper, styles.vectorSpaceBlock]} onPress={()=>{}}>
        				<Image style={styles.vectorIcon3} resizeMode="cover" /*source="Vector.png"*/ />
      			</Pressable>
      			<View style={[styles.rectangleView, styles.notificationsPosition]} />
      			<Text style={[styles.sirYouHaveContainer, styles.alertTypo]}>
        				<Text style={styles.text}>{`    `}</Text>
        				<Text style={styles.sirYouHave1}> Sir, you have been assigned the duty of patrol....</Text>
      			</Text>
      			<Text style={[styles.headOfficer, styles.alertTypo]}>{`HEAD OFFICER `}</Text>
      			<View style={[styles.notificationsChild1, styles.notificationsPosition]} />
      			<Text style={[styles.alert, styles.alertTypo]}>ALERT</Text>
      			<View style={[styles.vectorParent, styles.vectorSpaceBlock]}>
        				<Image style={styles.vectorIcon4} resizeMode="cover" /*source="Vector.png"*/ />
        				<Image style={styles.vectorIcon5} resizeMode="cover" /*source="Vector.png"*/ />
      			</View>
    		</View>);
};

const styles = StyleSheet.create({
  	notificationsPosition1: {
    		height: 25,
    		backgroundColor: "#d9d9d9",
    		left: "50%",
    		width: 360,
    		marginLeft: -180,
    		position: "absolute"
  	},
  	notificationsPosition: {
    		height: 75,
    		left: "50%",
    		position: "absolute"
  	},
  	vectorSpaceBlock: {
    		padding: 5,
    		position: "absolute"
  	},
  	alertTypo: {
    		fontFamily: "Roboto",
    		textAlign: "left",
    		position: "absolute"
  	},
  	notificationsChild: {
    		top: 0
  	},
  	notificationsItem: {
    		bottom: 0
  	},
  	notificationsInner: {
    		top: 25,
    		backgroundColor: "#8b98d8",
    		width: 360,
    		marginLeft: -180,
    		height: 75
  	},
  	eBeatNotifications: {
    		marginLeft: -125,
    		top: 50,
    		fontFamily: "Roboto",
    		color: "#000",
    		width: 235,
    		textAlign: "left",
    		letterSpacing: 1.2,
    		fontSize: 20,
    		left: "50%",
    		position: "absolute"
  	},
  	vectorIcon3: {
    		width: 20,
    		height: 20
  	},
  	vectorWrapper: {
    		top: 45,
    		left: 21,
    		flexDirection: "row"
  	},
  	rectangleView: {
    		marginLeft: -175,
    		top: 122,
    		backgroundColor: "#bbc7e7",
    		borderStyle: "solid",
    		borderColor: "#fff",
    		borderWidth: 1,
    		width: 350
  	},
  	text: {
    		color: "#002ed0"
  	},
  	sirYouHave1: {
    		color: "#fff"
  	},
  	sirYouHaveContainer: {
    		top: 151,
    		width: 320,
    		letterSpacing: 0.9,
    		fontSize: 15,
    		left: 20,
    		fontFamily: "Roboto"
  	},
  	headOfficer: {
    		top: 133,
    		color: "#002ed0",
    		letterSpacing: 0.9,
    		fontSize: 15,
    		left: 20,
    		fontFamily: "Roboto"
  	},
  	notificationsChild1: {
    		marginLeft: -100,
    		top: 617,
    		borderRadius: 100,
    		backgroundColor: "#f98484",
    		width: 200
  	},
  	alert: {
    		top: 642,
    		left: 105,
    		color: "#fff",
    		fontFamily: "Roboto",
    		letterSpacing: 1.2,
    		fontSize: 20
  	},
  	vectorIcon4: {
    		width: 25,
    		height: 22,
    		zIndex: 0
  	},
  	vectorIcon5: {
    		height: "40.83%",
    		width: "36.41%",
    		top: "32.5%",
    		right: "31.79%",
    		bottom: "26.67%",
    		left: "31.79%",
    		maxWidth: "100%",
    		maxHeight: "100%",
    		zIndex: 1,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	vectorParent: {
    		top: 639,
    		left: 217
  	},
  	notifications: {
    		backgroundColor: "#fff",
    		flex: 1,
    		width: "100%",
    		height: 800,
    		overflow: "hidden"
  	}
});

export default NOTIFICATIONS;