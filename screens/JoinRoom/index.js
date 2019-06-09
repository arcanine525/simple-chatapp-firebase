import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import firebase from "firebase";
class JoinRoom extends React.Component {
  static navigationOptions = {
    title: "Welcome to Chat Group"
  };
  state = {
    name: "Hello"
  };

  componentWillMount() {
    var config = {
      apiKey: "AIzaSyBAVOedzSNimhiP--HwFz-Sa5VlJ_avF8E",
      authDomain: "demochatapp-7d516.firebaseapp.com",
      databaseURL: "https://demochatapp-7d516.firebaseio.com",
      projectId: "demochatapp-7d516",
      storageBucket: "demochatapp-7d516.appspot.com",
      messagingSenderId: "97396643390",
      appId: "1:97396643390:web:4294ae4d07658c79"
    };
    firebase.initializeApp(config);
  }
  _onChangeName = text => {
    this.setState({
      name: text
    });
  };

  _toChatRoom = () => {
    firebase
      .auth()
      .signInAnonymously()
      .then(user => {
        AsyncStorage.setItem("name", this.state.name);
        this.props.navigation.navigate("ChatRoom");
      })
      .catch(err => alert(err));
  };

  render() {
    return (
      <View
        style={{
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          padding: 10,
          paddingBottom: 15
        }}
      >
        <Text>ENTER YOUR NAME :</Text>
        <TextInput
          placeholder=""
          style={{
            borderColor: "#A5A5A5",
            borderWidth: 0.5,
            padding: 8,
            width: "100%",
            marginBottom: 15,
            marginTop: 15
          }}
          onChangeText={text => this._onChangeName(text)}
        />
        <TouchableOpacity onPress={() => this._toChatRoom()}>
          <Text style={{ fontWeight: "bold" }}>Join Now</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default JoinRoom;
