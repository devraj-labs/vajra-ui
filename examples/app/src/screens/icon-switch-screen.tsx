import {
  ArrowLeft,
  Bell,
  BellOff,
  Eye,
  EyeOff,
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
  const [wifi, setWifi] = useState(true);
  const [notify, setNotify] = useState(false);
  const [visible, setVisible] = useState(true);
  const [locked, setLocked] = useState(false);
  const [dark, setDark] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [big, setBig] = useState(false);
  const [small, setSmall] = useState(true);
  const [custom, setCustom] = useState(true);

  return (
    <ScreenWrapper>
      <AppBar.Header>
        <AppBar.BackAction icon={ArrowLeft} />
        <AppBar.Title>Icon Switch</AppBar.Title>
      </AppBar.Header>
      <ScrollView>
        <Box flex={1} p="s-4" bg="background" gap="s-6">
          <Section title="Default (with icons)">
            <Row label="Wi-Fi">
              <IconSwitch value={wifi} onChange={setWifi} onIcon={Wifi} offIcon={WifiOff} />
            </Row>
            <Row label="Notifications">
              <IconSwitch value={notify} onChange={setNotify} onIcon={Bell} offIcon={BellOff} />
            </Row>
            <Row label="Visibility">
              <IconSwitch value={visible} onChange={setVisible} onIcon={Eye} offIcon={EyeOff} />
            </Row>
            <Row label="Lock">
              <IconSwitch value={locked} onChange={setLocked} onIcon={Lock} offIcon={LockOpen} />
            </Row>
          </Section>

          <Section title="Custom track colors">
            <Row label="Dark mode">
              <IconSwitch
                value={dark}
                onChange={setDark}
                onIcon={Moon}
                offIcon={Sun}
                trackOnColor="secondary"
                trackOffColor="warningSubtle"
                iconOnColor="textInverse"
                iconOffColor="warning"
              />
            </Row>
            <Row label="Custom color">
              <IconSwitch
                value={custom}
                onChange={setCustom}
                onIcon={Bell}
                offIcon={BellOff}
                trackOnColor="success"
                trackOffColor="errorSubtle"
                iconOnColor="textInverse"
                iconOffColor="error"
              />
            </Row>
          </Section>

          <Section title="Sizes">
            <Row label="Small (trackWidth=44, trackHeight=24)">
              <IconSwitch
                value={small}
                onChange={setSmall}
                onIcon={Wifi}
                offIcon={WifiOff}
                trackWidth={44}
                trackHeight={24}
              />
            </Row>
            <Row label="Default (56 × 30)">
              <IconSwitch value={wifi} onChange={setWifi} onIcon={Wifi} offIcon={WifiOff} />
            </Row>
            <Row label="Large (72 × 38)">
              <IconSwitch
                value={big}
                onChange={setBig}
                onIcon={Wifi}
                offIcon={WifiOff}
                trackWidth={72}
                trackHeight={38}
              />
            </Row>
          </Section>

          <Section title="No icons">
            <Row label="Plain (no icons)">
              <IconSwitch value={notify} onChange={setNotify} />
            </Row>
          </Section>

          <Section title="Disabled">
            <Row label="Disabled (on)">
              <IconSwitch value={disabled} onChange={setDisabled} onIcon={Lock} offIcon={LockOpen} isDisabled />
            </Row>
            <Row label="Disabled (off)">
              <IconSwitch value={false} onChange={() => {}} onIcon={Lock} offIcon={LockOpen} isDisabled />
            </Row>
          </Section>
        </Box>
      </ScrollView>
    </ScreenWrapper>
  );
}
