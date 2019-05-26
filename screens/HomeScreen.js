import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Platform
} from 'react-native';

class Row extends React.Component{
  render() {
    const {desc,price,onPress} = this.props;
    
    return (
    <View style={styles.cardRow}>
                  <Text>{desc}</Text>
                  <Text>RM {price}</Text>
                </View>
    )
}
}

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Spending',
  };


  render() {
    const date = new Date()
    const data = [{desc:"food",price: 2},{desc:"food",price: 3},{desc:"food",price: 19},{desc:"food",price: 1}]
    let sum = 0
    data.forEach(i => {
      sum += i.price
    })
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
<Text style={padding=30}>Spending</Text>
        <View style={styles.card}>
          <View style={styles.card}>
            <Text>{date.toLocaleDateString()}</Text>
          </View>
          {data.map((item,index) => {
            return (<Row key={index} desc={item.desc} price={item.price}/>)
          })}
        
        </View>

        </ScrollView>
        <View style={styles.tabBarInfoContainer}>
	          <Text style={{fontWeight: 'bold'}}>Total</Text>
	          <Text style={{fontWeight: 'bold'}}>RM {sum}</Text>
	        </View>
          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  card: {
    borderWidth: 0.5,
    borderColor: '#d6d7da'
  },
  cardDate: {
    padding: 10,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    backgroundColor: '#f5f5f5'
  },
  cardRow: {
    padding: 10,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
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
    justifyContent: 'space-between',
    padding: 10,
  }
});