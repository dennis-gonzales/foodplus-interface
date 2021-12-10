import { useEffect } from 'react';
import { BackHandler } from 'react-native';

const useBackHandler = (handler: () => boolean | null | undefined) => {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handler,
    );

    return () => backHandler.remove();
  }, []);
};

export default useBackHandler;