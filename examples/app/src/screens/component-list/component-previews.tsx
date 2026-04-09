import {
  ChevronRight,
  Grid2x2,
  List,
  Search,
  Shield,
  Star,
  Zap,
} from 'lucide-react-native';
import React, { useState } from 'react';

import {
  Badge,
  Box,
  Button,
  Card,
  Checkbox,
  IconBox,
  IconButton,
  IconSwitch,
  Input,
  Radio,
  Spinner,
  Switch,
  TabBar,
  Text,
} from 'vajra-ui';

export function PreviewAppBar() {
  return (
    <Box
      bg="surface"
      rounded="r-2"
      px="s-3"
      py="s-2"
      direction="row"
      align="center"
      gap="s-2"
    >
      <Box
        w={20}
        h={20}
        rounded="r-full"
        bg="surfaceRaised"
        align="center"
        justify="center"
      >
        <ChevronRight size={10} color="#999" />
      </Box>
      <Box flex={1} h={8} rounded="r-full" bg="surfaceRaised" />
      <Box
        w={20}
        h={20}
        rounded="r-full"
        bg="surfaceRaised"
        align="center"
        justify="center"
      >
        <Search size={10} color="#999" />
      </Box>
    </Box>
  );
}

export function PreviewBadge() {
  return (
    <Box direction="row" gap="s-2" wrap="wrap" justify="center">
      <Badge label="New" bg="primary" />
      <Badge label="Hot" bg="error" />
      <Badge label="Beta" bg="successSubtle" textProps={{ color: 'success' }} />
    </Box>
  );
}

export function PreviewButton() {
  return (
    <Box gap="s-2" align="center">
      <Button variant="solid" size="sm" label="Solid" />
      <Button variant="outline" size="sm" label="Outline" />
    </Box>
  );
}

export function PreviewCard() {
  return (
    <Card gap='s-2' p="s-4" bg="surface" borderWidth={1} borderColor="border" w={240}>
      <Text variant="body">Card Title</Text>
      <Text variant="bodySmall">Card description</Text>
    </Card>
  );
}

export function PreviewCheckbox() {
  const [val, setVal] = useState<string[]>(['a']);

  return (
    <Checkbox.Root values={val} onChange={setVal}>
      <Checkbox.Item value="a" label="Option A" />
      <Checkbox.Item value="b" label="Option B" />
    </Checkbox.Root>
  );
}

export function PreviewIconButton() {
  return (
    <Box direction="row" gap="s-2" justify="center">
      <IconButton icon={Star} variant="solid" size="sm" />
      <IconButton icon={Zap} variant="outline" size="sm" />
      <IconButton icon={Shield} variant="subtle" size="sm" />
    </Box>
  );
}

export function PreviewIconBox() {
  return (
    <Box direction="row" gap="s-2" justify="center">
      <IconBox icon={Star} iconColor="primary" bg="primarySubtle" />
      <IconBox icon={Zap} iconColor="warning" bg="warningSubtle" />
      <IconBox icon={Shield} iconColor="success" bg="successSubtle" />
    </Box>
  );
}

export function PreviewIconSwitch() {
  const [val, setVal] = useState(false);

  return (
    <IconSwitch value={val} onChange={setVal} offIcon={List} onIcon={Grid2x2} />
  );
}

export function PreviewInput() {
  return (
    <Input.Outline size="sm" label="Email" placeholder="you@example.com" />
  );
}

export function PreviewRadio() {
  const [val, setVal] = useState('a');

  return (
    <Radio.Root value={val} onChange={setVal}>
      <Radio.Item value="a" label="Option A" />
      <Radio.Item value="b" label="Option B" />
    </Radio.Root>
  );
}

export function PreviewSpinner() {
  return (
    <Box direction="row" gap="s-4" justify="center" align="center">
      <Spinner size="sm" color="primary" />
      <Spinner size="md" color="secondary" />
      <Spinner size="lg" color="success" />
    </Box>
  );
}

export function PreviewSwitch() {
  const [val, setVal] = useState('on');

  return (
    <Switch.Root value={val} onChange={setVal}>
      <Switch.Item value="on" label="Enabled" />
      <Switch.Item value="off" label="Disabled" />
    </Switch.Root>
  );
}

export function PreviewTabBar() {
  const [val, setVal] = useState('all');

  return (
    <TabBar
      tabs={[
        { value: 'all', label: 'All' },
        { value: 'active', label: 'Active' },
        { value: 'done', label: 'Done' },
      ]}
      value={val}
      onChange={setVal}
    />
  );
}

export function PreviewText() {
  return (
    <Box gap="s-1">
      <Text variant="h3">Heading</Text>
      <Text variant="body" color="textMuted">
        Body text goes here
      </Text>
      <Text variant="caption" color="textMuted">
        Caption
      </Text>
    </Box>
  );
}
