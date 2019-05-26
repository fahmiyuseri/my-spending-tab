import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Platform,
  View,
  TouchableOpacity,
  DatePickerIOS,
  DatePickerAndroid,
  DatePicker,
  Alert
} from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { DatePickerDialog } from 'react-native-datepicker-dialog'

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Add'
  };


  state = { amount: '', desc: '', date: new Date() }
  render() {
    return (
      <View style={{backgroundColor:'red',flex:1}}>
        <Text>{this.state.amount}</Text>

        <View style={styles.cardRow}>
          <Text>Price</Text>
          <TextInput style={styles.priceInputStyle} keyboardType='numeric' onChangeText={(text) => {
            this.setState({ amount: text })
          }} />
        </View>
        <View style={styles.cardRow}>
          <TextInput

            style={styles.textInputStyle} 
            
            onChangeText={(text) => {
              this.setState({ desc: text })}}
                />
        </View>

        <View style={styles.row}>
          {
            Platform.OS === 'ios' ?
              <DatePickerIOS
                date={this.state.date}
                onDateChange={(date) => this.setState({ date })}
              /> :
              <TouchableOpacity
                onPress={async () => {
                  const { year, month, day } = await DatePickerAndroid.open({
                    date: new Date()
                  });
                  this.setState({ date: new Date(year, month, day) })
                }}>
                <Text>{this.state.date.toString()}</Text>
              </TouchableOpacity>
          }
        </View>
        <TouchableOpacity style={styles.tabBarInfoContainer}
        onPress={() => {
          Alert.alert(JSON.stringify(this.state));
        }}
        >

       
        <Text>Submit</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  cardRow: {
    padding: 10,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  priceInputStyle: {

    flexDirection: 'row',
    padding: 10,
    borderColor: '#d6d7da',
    backgroundColor: '#00fff0',
  },
  textInputStyle: {
    width: '100%',
    flexDirection: 'row',
    padding: 10,
    borderColor: '#d6d7da',
    backgroundColor: '#00fff0',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
  }
});
