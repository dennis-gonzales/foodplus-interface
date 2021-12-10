import { Alert } from 'react-native';
import { logout } from '../../store/slices/userSlice';
import MenuItem from '../interfaces/ui/MenuItem';

const menuItem: MenuItem[] = [
  {
    name: 'My Orders',
    header: 'MY -',
    icon: {
      backgroundColor: 'dodgerblue',
      size: 40,
      src: 'food',
    },
    action: 'MyOrders',
  },
  {
    name: 'My Favourites',
    icon: {
      backgroundColor: 'pink',
      size: 35,
      src: 'heart-outline',
    },
    action: 'MyFavourites',
  },
  {
    header: 'Other',
    name: 'Terms of Service',
    icon: {
      backgroundColor: 'green',
      size: 35,
      src: 'file-document-outline',
    },
  },
  {
    name: 'Privacy Policy',
    icon: {
      backgroundColor: 'indigo',
      size: 35,
      src: 'shield-check-outline',
    },
  },
  {
    name: 'Logout',
    icon: {
      backgroundColor: 'red',
      size: 35,
      src: 'logout',
    },
    action: dispatcher => {
      Alert.alert(
        'Logout',
        'Are you sure you want to logout?',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => dispatcher(logout()),
          },
        ],
        { cancelable: false }
      );
    },
  },
];

export default menuItem;
