import { StarIcon } from 'lucide-react-native';
import React from 'react';
import { ScrollView } from 'react-native';

import type {
  TButtonColorPalette,
  TButtonSize,
  TButtonVariant,
} from 'vajra-ui';
import { Box, IconButton, Text } from 'vajra-ui';

const VARIANTS: TButtonVariant[] = [
  'solid',
  'subtle',
  'surface',
  'outline',
  'ghost',
  'plain',
];
const SIZES: TButtonSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];
const PALETTES: TButtonColorPalette[] = [
  'gray',
  'blue',
  'purple',
  'red',
  'green',
  'yellow',
  'orange',
  'teal',
  'pink',
];
const PALETTE_VARIANTS: TButtonVariant[] = [
  'solid',
  'subtle',
  'outline',
  'ghost',
];

function HScroll({ children }: { children: React.ReactNode }) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <Box direction="row" gap="s-2" py="s-1">
        {children}
      </Box>
    </ScrollView>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Box gap="s-2">
      <Text variant="subheading">{title}</Text>
      {children}
    </Box>
  );
}

export function IconButtonExample() {
  return (
    <ScrollView>
      <Box flex={1} p="s-4" bg="background" gap="s-6">
        <Section title="Variants">
          <HScroll>
            {VARIANTS.map(v => (
              <IconButton key={v} variant={v} icon={StarIcon} />
            ))}
          </HScroll>
        </Section>

        <Section title="Sizes">
          <HScroll>
            {SIZES.map(s => (
              <IconButton key={s} size={s} icon={StarIcon} />
            ))}
          </HScroll>
        </Section>

        {PALETTE_VARIANTS.map(v => (
          <Section key={v} title={`Color Palettes — ${v}`}>
            <HScroll>
              {PALETTES.map(p => (
                <IconButton
                  key={p}
                  variant={v}
                  colorPalette={p}
                  icon={StarIcon}
                />
              ))}
            </HScroll>
          </Section>
        ))}

        <Section title="Disabled">
          <HScroll>
            {VARIANTS.map(v => (
              <IconButton key={v} variant={v} icon={StarIcon} isDisabled />
            ))}
          </HScroll>
        </Section>

        <Section title="Loading">
          <HScroll>
            {VARIANTS.map(v => (
              <IconButton key={v} variant={v} icon={StarIcon} isLoading />
            ))}
          </HScroll>
        </Section>
      </Box>
    </ScrollView>
  );
}
