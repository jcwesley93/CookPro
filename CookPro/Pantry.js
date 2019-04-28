import React from 'react';
import {View, Text} from 'react-native';

class PantryData extends React.Component{
    render(){
    const pantry = [
        {
            name: "Apple",
            priority: true
        },
        {
            name: "Spinach",
            priority: true
        },
        {
            name: "Olive Oil",
            priority: false
        },
        {
            name: "Beans",
            priority: false
        },
        {
            name: "Bread",
            priority: true
        },
        {
            name: "Bananas",
            priority: true
        },
        {
            name:"Tomatoes",
            priority: true
        },
        {
            name:"Chicken Broth",
            priority: false
        },
        {
            name:"Peppers",
            priority: true
        },
        {
            name:"Parmesan",
            priority: true
        },
        {
            name:"Mozzarella",
            priority: true
        },
        {
            name:"Chicken",
            priority: true
        },
        {
            name:"Tomatoes",
            priority: true
        },
    
    ]; 
        return(
            <View>
                <Text>
                    {pantry.map(item => {
                      return item.name
                    })}
                </Text>
            </View>
        )
    }

}

export default PantryData;