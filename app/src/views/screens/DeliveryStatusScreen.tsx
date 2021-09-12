import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Avatar, Text, Title } from 'react-native-paper';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import StepIndicator from 'react-native-step-indicator';

import { ScreenParamList } from '../../core/configs/routes';

import FatAppbarLayout from '../layouts/FatAppbarLayout';

const stepIndicatorStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 5,
  stepStrokeCurrentColor: '#fe7013',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#aaaaaa',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 15,
  currentStepIndicatorLabelFontSize: 15,
  stepIndicatorLabelCurrentColor: '#000000',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: 'rgba(255,255,255,0.5)',
  labelColor: '#666666',
  labelSize: 15,
  currentStepLabelColor: '#fe7013',
};

const sampleStatus = [
  {
    title: 'Order Taken',
    icon: 'file',
    completed: true,
  },
  {
    title: 'Order is being processed',
    icon: 'truck',
    completed: true,
  },
  {
    title: 'Order is being delivered',
    icon: 'truck-delivery',
    completed: false,
  },
  {
    title: 'Order is received',
    icon: 'truck-check',
    completed: false,
  },
];

interface CheckoutProps {
  route: RouteProp<ScreenParamList, 'DeliveryStatus'>;
  navigation: NavigationProp<ScreenParamList, 'DeliveryStatus'>;
}

const DeliveryStatusScreen: React.FC<CheckoutProps> = () => {

  const [currentPage, setCurrentPage] = React.useState<number>(2);

  const renderPage = (rowData: any) => {
    const item = rowData.item;
    return (
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.rowItem}>
          <Title style={styles.title}>{item.title}</Title>
          <Text style={styles.body}>{item.body}</Text>
        </View>
        <Avatar.Icon
          style={styles.statusIcon}
          size={40}
          icon={item.completed ? 'check' : 'progress-clock'}
        />
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <FatAppbarLayout title="Delivery Status" />

      <View style={styles.container}>
        <View style={styles.stepIndicator}>
          <StepIndicator
            customStyles={stepIndicatorStyles}
            stepCount={sampleStatus.length}
            direction="vertical"
            currentPosition={currentPage}
            renderStepIndicator={({ position, stepStatus }) => (
              <MaterialCommunityIcons
                size={24}
                name={sampleStatus[position].icon as any}
                color={stepStatus === 'current' ? 'orange' : 'white'}
              />
            )}
          />
        </View>
        <FlatList
          keyExtractor={item => item.title}
          contentContainerStyle={styles.list}
          data={sampleStatus}
          renderItem={renderPage}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
  },
  screen: {
    flex: 1,
  },
  list: {
    flex: 1,
    justifyContent: 'space-around',
  },
  statusIcon: {
    alignSelf: 'center',
    margin: 20,
  },
  stepIndicator: {
    paddingHorizontal: 25,
  },
  rowItem: {
    flex: 3,
    paddingVertical: 20,
  },
  title: {
    paddingVertical: 10,
  },
  body: {
    lineHeight: 24,
    marginRight: 8,
  },
});

export default DeliveryStatusScreen;
