type ScreenParamList = {
  Welcome: undefined;
  Listings: undefined;
  ListingDetails: { productId: number };
};

type NavigatorParamList = {
  MainNavigator: undefined;
}


export { ScreenParamList, NavigatorParamList };