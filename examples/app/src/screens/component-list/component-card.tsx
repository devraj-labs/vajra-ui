import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Box, Card, Text } from 'vajra-ui';

import { TComponentEntry } from './component-registry';

type TComponentCardProps = {
  item: TComponentEntry;
  fullWidth?: boolean;
  onPress: () => void;
};

const styles = StyleSheet.create({
  touchable: { flex: 1 },
  card: { overflow: 'hidden' },
  previewArea: { height: 110, overflow: 'hidden', width: '100%' },
  previewContent: { alignSelf: 'stretch' },
});

export function ComponentCard({ item, onPress }: TComponentCardProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.75}
      style={styles.touchable}
    >
      <Card
        p="s-0"
        rounded="r-3"
        borderWidth={1}
        borderColor="border"
        style={styles.card}
      >
        <Box
          bg="background"
          p="s-4"
          align="center"
          justify="center"
          style={styles.previewArea}
        >
          <Box style={styles.previewContent}>{item.preview}</Box>
        </Box>
        <Box px="s-3" py="s-2" bg="surface" gap="s-1">
          <Text variant="labelMedium">{item.label}</Text>
          <Text variant="caption" color="textMuted" numberOfLines={2}>
            {item.description}
          </Text>
        </Box>
      </Card>
    </TouchableOpacity>
  );
}
