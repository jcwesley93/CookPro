import React from 'react';
import styles from '../stylesheet'
import AddPantryItem from '../components/AddPantryItem'
import { ScrollView, Text, View, Button} from 'react-native';


export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemName: 'HI',
      check: false
    }
    this.togglePriority = this.togglePriority.bind(this);
    this.updateItemName = this.updateItemName.bind(this);
  }

  updateItemName = (text) => {
    this.state({ itemName: text})
  }

  togglePriority = () => {
    this.setState({
      check: !this.state.check
    })
  }

  // addItem = (item) => {

  // }

  static navigationOptions = {
    title: 'PantryDJ',
    headerStyle: {
      backgroundColor: 'white',
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#8fBA21'
    },
  };

  render() {
    const {navigate} = this.props.navigation;

    return (
      <View styles={styles.container}>

      <ScrollView style={styles.viewPadding}>

        <View style={[styles.displayChildrenInline, styles.greyBackground]}>
          <Text style={styles.alignLeft}>Add an item</Text>
          <Text>Prioritize</Text>
          <Button
            color="#8FBA21"
            title="Add"
            onPress={() => navigate('Home')}>
          </Button>
        </View>

        <AddPantryItem update={this.updateItemName} toggle={this.togglePriority} check={this.state.check}/>

        {/* <View>
          <FlatList
            data={[{key: 'a'}, {key: 'b'}]}
            renderItem={({item}) => <Text>{item.key}</Text>}/>
        </View> */}

        <View style={styles.navBar}>
          <Button 
            color="#8fBA21"
            title="Home"
            onPress={() => navigate('Home')}>
          </Button>
          <Button 
            color="#8fBA21"
            title="Recipes"
            onPress={() => navigate('Recipes')}>
          </Button>
          <Button 
            color="#8fBA21"
            title="Favorites"
            onPress={() => navigate('Favorites')}>
          </Button>
          </View> 
        </ScrollView>
      </View>
    );
  }
}

