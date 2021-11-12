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
    targetScreen: 'MyOrders',
  },
  {
    name: 'My Favourites',
    icon: {
      backgroundColor: 'pink',
      size: 35,
      src: 'heart-outline',
    },
    targetScreen: 'MyFavourites',
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
  },
];

export default menuItem;
