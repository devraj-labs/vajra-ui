import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { TAppStackParamList } from './navigation-types';

type TAppNavigationProp = NativeStackNavigationProp<TAppStackParamList>;

export const useAppNavigation = () => useNavigation<TAppNavigationProp>();
