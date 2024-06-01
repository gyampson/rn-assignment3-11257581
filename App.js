import { StatusBar } from "expo-status-bar";
import {
  PixelRatio,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.TSize}>
        Hello, Devs {" " + " " + " " + " " + " " + " " + " " + " "}
        <Image source={require("./profile.png")} />
      </Text>
      <Text style={styles.size}>14 tasks today</Text>
      <TextInput style={styles.searchBox} placeholder="Search" />

      <Text style={styles.Cat}> Categories</Text>
      <ScrollView>
        <ScrollView horizontal={true} style={styles.horizontalScroll}>
          <View style={styles.scrollItem}>
            <Text style={styles.Item}>Exercise</Text>
            <Text style={styles.Item1}>12 Tasks</Text>
            <Image source={require("./woman.png")} />
          </View>
          <View style={styles.scrollItem}>
            <Text style={styles.Item}>Study</Text>
            <Text style={styles.Item1}>12 Tasks</Text>
            <Image source={require("./lady.png")} />
          </View>
          <View style={styles.scrollItem}>
            <Text style={styles.Item}>Item 3</Text>
            <Text style={styles.Item1}>Item 3</Text>
          </View>
          <View style={styles.scrollItem}>
            <Text style={styles.Item}>Item 4</Text>
            <Text style={styles.Item1}>Item 4</Text>
          </View>
          <ScrollView horizontal={true} style={styles.horizontalScroll}>
            <View style={styles.scrollItem}>
              <Text style={styles.Item}>Item 5</Text>
              <Text style={styles.Item1}> item 5</Text>
            </View>
            <View style={styles.scrollItem}>
              <Text style={styles.Item}>Item 6</Text>
              <Text style={styles.Item1}> item 6</Text>
            </View>
            <View style={styles.scrollItem}>
              <Text style={styles.Item}>Item 7</Text>
              <Text style={styles.Item1}> item 7</Text>
            </View>
            <View style={styles.scrollItem}>
              <Text style={styles.Item}>Item 8</Text>
              <Text style={styles.Item1}> item 8</Text>
            </View>
          </ScrollView>
        </ScrollView>
        <View style={styles.Task1}>
          <Text style={styles.Task}>Ongoing Task</Text>
        </View>
        <ScrollView style={styles.Text1}>
          <View>
            <Text style={styles.Text}> Mobile App Development</Text>
            <Text style={styles.Text}>Web Development </Text>
            <Text style={styles.Text}> Push Ups</Text>
            <Text style={styles.Text}> list 4</Text>
            <Text style={styles.Text}> list 5</Text>
            <Text style={styles.Text}> list 6</Text>
            <Text style={styles.Text}> list 7</Text>
            <Text style={styles.Text}> list 8</Text>
            <Text style={styles.Text}> list 9</Text>
            <Text style={styles.Text}> list 10</Text>
            <Text style={styles.Text}> list 11</Text>
            <Text style={styles.Text}> list 12</Text>
            <Text style={styles.Text}> list 13</Text>
            <Text style={styles.Text}> list 14</Text>
            <Text style={styles.Text}> list 15</Text>
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8D1BA",
    paddingLeft: 20,
  },
  TSize: {
    fontSize: 40,
    paddingTop: 40,
  },
  searchBox: {
    height: 40,
    borderColor: "gray",
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    marginTop: 20,
    width: "80%",
    marginBottom: 20,
  },

  Cat: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginTop: 0,
  },
  scrollItem: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    backgroundColor: "white",
    marginRight: 10,
    borderRadius: 15,
    width: 200,
    height: 200,
    marginTop: 5,
    marginBottom: 10,

    paddingLeft: 10,
    paddingTop: 10,
  },
  Text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    backgroundColor: "white",
    paddingRight: 24,
    paddingLeft: 24,
    borderRadius: 15,
    width: 320,
    height: 120,
    marginTop: 10,
    marginBottom: 0,
    paddingTop: 40,

    paddingLeft: 20,
  },
  Task: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginTop: 0,
  },
  Task1: {},

  Item: {
    fontSize: 15,
    alignItems: "flex-end",
    fontWeight: "bold",
    color: "black",
  },
  Item1: {
    fontSize: 10,
  },
  Text1: {
    paddingTop: 0,
  },
});
