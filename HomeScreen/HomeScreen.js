import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <Container>
            <Header>
                <Left>
                    <Button transparent>
                        <Icon name='menu'/>
                    </Button>
                </Left>
                <Body>
                    <Title>Adry's Store</Title>
                </Body>
                <Right />
            </Header>
        </Container>
    );
  }
}
