import React from 'react';
import { useAppSelector } from '../../core/hooks/storeApi';
import { selectIsLoggedIn } from '../../store/slices/userSlice';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

const NavigatorsMediator: React.FC = () => {

  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return isLoggedIn ? <MainNavigator /> : <AuthNavigator />;
};

export default NavigatorsMediator;
