import { useRoute } from '@react-navigation/native';
import { ArrowLeft, MoreHorizontal } from 'lucide-react-native';
import React from 'react';
import { ActionSheetIOS, Alert, Platform, ScrollView } from 'react-native';

import { AppBar, Box, IconButton, ScreenWrapper } from 'vajra-ui';

import { TAppStackParamList } from '../../../../../navigation/navigation-types';
import { useAppNavigation } from '../../../../../navigation/use-app-navigation';
import { ProfileHeader } from './comps/profile-header';
import { ProfileGridSection } from './sections/profile-grid-section';

const showProfileActions = () => {
  const options = ['Block', 'Report', 'Copy profile URL', 'Cancel'];
  if (Platform.OS === 'ios') {
    ActionSheetIOS.showActionSheetWithOptions(
      { options, cancelButtonIndex: 3, destructiveButtonIndex: 0 },
      () => {},
    );
  } else {
    Alert.alert('Profile options', undefined, [
      { text: 'Block', style: 'destructive', onPress: () => {} },
      { text: 'Report', onPress: () => {} },
      { text: 'Copy profile URL', onPress: () => {} },
      { text: 'Cancel', style: 'cancel' },
    ]);
  }
};

export const SocialProfileScreen: React.FC = () => {
  const navigation = useAppNavigation();
  const route = useRoute<{ key: string; name: 'ExSocialProfile'; params: TAppStackParamList['ExSocialProfile'] }>();
  const { username, avatarUrl } = route.params;

  return (
    <ScreenWrapper>
      <AppBar.Header>
        <AppBar.BackAction icon={ArrowLeft} onPress={() => navigation.goBack()} />
        <AppBar.Title centered>{username}</AppBar.Title>
        <IconButton icon={MoreHorizontal} variant="ghost" size="sm" onPress={showProfileActions} />
      </AppBar.Header>
      <ScrollView>
        <Box p="s-4" gap="s-4">
          <ProfileHeader
            username={username}
            handle="@rishav"
            avatarUrl={avatarUrl}
            bio="Building Vajra UI · React Native · Design Systems · Open Source"
            posts={42}
            followers="12.4k"
            following={318}
          />
          <ProfileGridSection />
        </Box>
      </ScrollView>
    </ScreenWrapper>
  );
};
