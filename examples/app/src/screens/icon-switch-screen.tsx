import {
  ArrowLeft,
  Bell,
  BellOff,
  Eye,
  EyeOff,
  Grid2x2,
  List,
  Lock,
  LockOpen,
  Moon,
  Sun,
  Wifi,
  WifiOff,
} from 'lucide-react-native';
import React, { useState } from 'react';
import { ScrollView } from 'react-native';

import { AppBar, Box, Card, IconSwitch, ScreenWrapper, Text } from 'vajra-ui';

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Box gap="s-2">
      <Text variant="subheading">{title}</Text>
      {children}
    </Box>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <Card>
      <Box direction="row" align="center" justify="space-between">
        <Text variant="body">{label}</Text>
        {children}
      </Box>
    </Card>
  );
}

export function IconSwitchScreen() {
  const [wifi, setWifi] = useState(false);
  const [notify, setNotify] = useState(true);
  const [visible, setVisible] = useState(false);
  const [locked, setLocked] = useState(true);
  const [dark, setDark] = useState(false);
  const [layout, setLayout] = useState(true);

  return (
    <ScreenWrapper>
      <AppBar.Header>
        <AppBar.BackAction icon={ArrowLeft} />
        <AppBar.Title>Icon Switch</AppBar.Title>
      </AppBar.Header>
      <ScrollView>
        <Box flex={1} p="s-4" bg="background" gap="s-6">
          <Section title="Default">
            <Row label="Wi-Fi">
              <IconSwitch value={wifi} onChange={setWifi} offIcon={WifiOff} onIcon={Wifi} />
            </Row>
            <Row label="Notifications">
              <IconSwitch value={notify} onChange={setNotify} offIcon={BellOff} onIcon={Bell} />
            </Row>
            <Row label="Visibility">
              <IconSwitch value={visible} onChange={setVisible} offIcon={EyeOff} onIcon={Eye} />
            </Row>
            <Row label="Lock">
              <IconSwitch value={locked} onChange={setLocked} offIcon={LockOpen} onIcon={Lock} />
            </Row>
          </Section>

          <Section title="Custom colors">
            <Row label="Dark mode">
              <IconSwitch
                value={dark}
                onChange={setDark}
                offIcon={Sun}
                onIcon={Moon}
                trackBg="surfaceSunken"
                selectorBg="primary"
                activeIconColor="textInverse"
                inactiveIconColor="textMuted"
              />
            </Row>
            <Row label="Layout">
              <IconSwitch
                value={layout}
                onChange={setLayout}
                offIcon={List}
                onIcon={Grid2x2}
                trackBg="primarySubtle"
                selectorBg="primary"
                activeIconColor="textInverse"
                inactiveIconColor="primary"
              />
            </Row>
          </Section>

          <Section title="Rounded variants">
            <Row label="r-full (pill)">
              <IconSwitch
                value={wifi}
                onChange={setWifi}
                offIcon={WifiOff}
                onIcon={Wifi}
                trackRounded="r-full"
                selectorRounded="r-full"
              />
            </Row>
            <Row label="r-1 (sharp)">
              <IconSwitch
                value={wifi}
                onChange={setWifi}
                offIcon={WifiOff}
                onIcon={Wifi}
                trackRounded="r-1"
                selectorRounded="r-0"
              />
            </Row>
          </Section>

          <Section title="Sizes">
            <Row label="Small (cellSize=32)">
              <IconSwitch
                value={notify}
                onChange={setNotify}
                offIcon={BellOff}
                onIcon={Bell}
                cellSize={32}
                iconSize={14}
              />
            </Row>
            <Row label="Default (cellSize=40)">
              <IconSwitch value={notify} onChange={setNotify} offIcon={BellOff} onIcon={Bell} />
            </Row>
            <Row label="Large (cellSize=52)">
              <IconSwitch
                value={notify}
                onChange={setNotify}
                offIcon={BellOff}
                onIcon={Bell}
                cellSize={52}
                iconSize={24}
              />
            </Row>
          </Section>

          <Section title="Disabled">
            <Row label="Disabled (on)">
              <IconSwitch value={true} onChange={() => {}} offIcon={LockOpen} onIcon={Lock} isDisabled />
            </Row>
            <Row label="Disabled (off)">
              <IconSwitch value={false} onChange={() => {}} offIcon={LockOpen} onIcon={Lock} isDisabled />
            </Row>
          </Section>
        </Box>
      </ScrollView>
    </ScreenWrapper>
  );
}
