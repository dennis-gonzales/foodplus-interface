type ScreenParamList = {
  Welcome: undefined;
  Listings: undefined;
  ListingDetails: { productId: number };
  Checkout: undefined;
};

type NavigatorParamList = {
  MainNavigator: undefined;
}


export { ScreenParamList, NavigatorParamList };