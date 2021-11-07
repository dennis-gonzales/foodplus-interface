import MenuItem from '../interfaces/ui/MenuItem';

const menuItem: MenuItem[] = [
  {
    name: 'My Orders',
    header: 'MY -',
    icon: {
      backgroundColor: 'dodgerblue',
      size: 40,
      src: 'email-outline',
    },
  },
  {
    name: 'My Favourites',
    icon: {
      backgroundColor: 'pink',
      size: 35,
      src: 'heart-outline',
    },
  },
  {
    header: 'Other',
    name: 'EULA',
    icon: {
      backgroundColor: 'green',
      size: 35,
      src: 'file-document-outline',
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
