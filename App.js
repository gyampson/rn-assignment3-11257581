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
        Hello, devs {" " + " " + " " + " " + " " + " " + " " + " "}
      </Text>

      <Text style={styles.size}>14 tasks today</Text>

      <TextInput style={styles.searchBox} placeholder="Search" />
      <Text style={styles.Cat}> Categories</Text>
      <ScrollView>
        <ScrollView horizontal={true} style={styles.horizontalScroll}>
          <View style={styles.scrollItem}>
            <Text>Item 1</Text>
            <Text>Item 1</Text>
          </View>
          <View style={styles.scrollItem}>
            <Text>Item 2</Text>
            <Text>Item 2</Text>
          </View>
          <View style={styles.scrollItem}>
            <Text>Item 3</Text>
            <Text>Item 3</Text>
          </View>
          <View style={styles.scrollItem}>
            <Text>Item 4</Text>
            <Text>Item 4</Text>
          </View>
          <ScrollView horizontal={true} style={styles.horizontalScroll}>
            <View style={styles.scrollItem}>
              <Text>Item 5</Text>
              <Text> item 5</Text>
            </View>
            <View style={styles.scrollItem}>
              <Text>Item 6</Text>
              <Text> item 6</Text>
            </View>
            <View style={styles.scrollItem}>
              <Text>Item 7</Text>
              <Text> item 7</Text>
            </View>
            <View style={styles.scrollItem}>
              <Text>Item 8</Text>
              <Text> item 8</Text>
            </View>
          </ScrollView>
        </ScrollView>
        <Text style={styles.Task}>Ongoing Task</Text>
        <ScrollView style={styles.Text1}>
          <Text style={styles.Text}> list 1</Text>
          <Text style={styles.Text}> list 2</Text>
          <Text style={styles.Text}> list 3</Text>
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
    width: "60%",
    marginBottom: 30,
  },

  Cat: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  scrollItem: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    backgroundColor: "white",
    marginRight: 10,
    borderRadius: 50,
    width: 300,
    height: 300,
    marginTop: 20,
    marginBottom: 30,
    alignItems: " left",
    justifyContent: " left",
    paddingLeft: 40,
    paddingTop: 10,
  },
  Text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    backgroundColor: "white",
    marginRight: 50,
    borderRadius: 15,
    width: 300,
    height: 100,
    marginTop: 20,
    marginBottom: 30,
    alignItems: " ",
    justifyContent: " center",
    paddingLeft: 40,
  },
  Text1: {},
});
