
import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  View,
  Image,
  FlatList,
} from 'react-native';

import {
  Content,
  Text,
  Button,
} from 'native-base';

import {
  routeNames,
} from 'src/Navigation';

import SafeAreaView from 'src/Components/SafeAreaView';
import BackButton from 'src/Components/BackButton';

import {
  sg,
} from 'src/Styles';

import buildYourImpact from './images/buildYourImpact.png';

import styles from './styles';

class BuildYourImpact extends Component {
  // eslint-disable-next-line class-methods-use-this
  renderFarms() {
    return (
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={[
          Brigalow,
          Chinchilla,
          SwanHill,
          SwanHill2,
        ]}
        renderItem={({ item }) => (
          <Image source={item} style={[sg.farmImage, sg.mR15, { height: 240 * 0.8, width: 316 * 0.8 }]} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={[sg.flexGrowNull, sg.mT20]}
      />
    );
  }

  render() {
    const { screenProps } = this.props;

    return (
      <Content contentContainerStyle={[sg.flexGrow]} bounces={false}>
        <Image
          source={buildYourImpact}
          style={[sg.postitionAbsolute, sg.aSCenter]}
        />

        <SafeAreaView forceInset={{ bottom: 'never' }}>
          <BackButton
            signup
            header={false}
            {...this.props}
          />

          <View style={[sg.spaceBetween, sg.pH20]}>
            <Text style={[styles.header, sg.mB10, sg.mT70]}>
              Build your
              {'\n'}
              impact
            </Text>

            <Text style={sg.textCenter}>
              Put your savings to work building &
              {'\n'}
              supporting real solar farms, like these
            </Text>

            {this.renderFarms()}

            <Button
              style={[sg.mH0, sg.mB20, sg.mT20]}
              block
              onPress={() => {
                screenProps.navigateTo(routeNames.BUILD_MOVEMENT);
              }}
            >
              <Text>Next</Text>
            </Button>
          </View>

        </SafeAreaView>
      </Content>
    );
  }
}

export default connect()(BuildYourImpact);
