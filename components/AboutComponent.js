import React, { Component } from 'react';
import { ScrollView } from 'react-native';
// import { ScrollView } from 'react-native-elements';
// import { CAMPSITES } from '../shared/campsites';

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
          
        };
    }

    static navigationOptions = {
        title: 'About'
    }

    render() 
    {
        return (
            <ScrollView>
                
            </ScrollView>
        );
    }
}

export default About;