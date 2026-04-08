import { ArrowLeft } from 'lucide-react-native';
import React, { useState } from 'react';
import { ScrollView } from 'react-native';

import { AppBar, Box, ScreenWrapper, TabBar, Text } from 'vajra-ui';

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Box gap="s-2">
      <Text variant="subheading">{title}</Text>
      {children}
    </Box>
  );
}

const TABS_3 = [
  { value: 'all', label: 'All' },
  { value: 'active', label: 'Active' },
  { value: 'done', label: 'Done' },
];

const TABS_4 = [
  { value: 'day', label: 'Day' },
  { value: 'week', label: 'Week' },
  { value: 'month', label: 'Month' },
  { value: 'year', label: 'Year' },
];

const TABS_MANY = [
  { value: 'home', label: 'Home' },
  { value: 'trending', label: 'Trending' },
  { value: 'saved', label: 'Saved' },
  { value: 'following', label: 'Following' },
  { value: 'discover', label: 'Discover' },
  { value: 'explore', label: 'Explore' },
];

export function TabBarScreen() {
  const [tab1, setTab1] = useState('all');
  const [tab2, setTab2] = useState('week');
  const [tab3, setTab3] = useState('active');
  const [tab4, setTab4] = useState('day');
  const [tab5, setTab5] = useState('home');
  const [tab6, setTab6] = useState('all');
  const [tab7, setTab7] = useState('all');

  return (
    <ScreenWrapper>
      <AppBar.Header>
        <AppBar.BackAction icon={ArrowLeft} />
        <AppBar.Title>Tab Bar</AppBar.Title>
      </AppBar.Header>
      <ScrollView>
        <Box flex={1} p="s-4" bg="background" gap="s-6">
          <Section title="Default (pill track)">
            <TabBar tabs={TABS_3} value={tab1} onChange={setTab1} />
          </Section>

          <Section title="4 tabs">
            <TabBar tabs={TABS_4} value={tab2} onChange={setTab2} />
          </Section>

          <Section title="Scrollable (many tabs)">
            <TabBar tabs={TABS_MANY} value={tab5} onChange={setTab5} scrollable />
          </Section>

          <Section title="Custom track & indicator colors">
            <TabBar
              tabs={TABS_3}
              value={tab3}
              onChange={setTab3}
              trackBg="primarySubtle"
              indicatorBg="primary"
              activeColor="textInverse"
              inactiveColor="primary"
            />
          </Section>

          <Section title="Square rounded">
            <TabBar
              tabs={TABS_4}
              value={tab4}
              onChange={setTab4}
              trackRounded="r-2"
              indicatorRounded="r-1"
              trackBg="surfaceRaised"
            />
          </Section>

          <Section title="Feedback colors">
            <TabBar
              tabs={TABS_3}
              value={tab6}
              onChange={setTab6}
              trackBg="successSubtle"
              indicatorBg="success"
              activeColor="textInverse"
              inactiveColor="success"
            />
          </Section>

          <Section title="Sunken track">
            <TabBar
              tabs={TABS_3}
              value={tab7}
              onChange={setTab7}
              trackBg="surfaceSunken"
              indicatorBg="surface"
              trackRounded="r-3"
              indicatorRounded="r-2"
            />
          </Section>
        </Box>
      </ScrollView>
    </ScreenWrapper>
  );
}
