import React from 'react';
import { ScrollView } from 'react-native';

import { Box, Button, Text, VajraProvider } from 'vajra-ui';
import type { TButtonColorPalette, TButtonSize, TButtonVariant } from 'vajra-ui';

const VARIANTS: TButtonVariant[] = ['solid', 'subtle', 'surface', 'outline', 'ghost', 'plain'];
const SIZES: TButtonSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];
const PALETTES: TButtonColorPalette[] = ['gray', 'blue', 'purple', 'red', 'green', 'yellow', 'orange', 'teal', 'pink'];
const PALETTE_VARIANTS: TButtonVariant[] = ['solid', 'subtle', 'outline', 'ghost'];

function HScroll({ children }: { children: React.ReactNode }) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <Box direction="row" gap="s-2" py="s-1">
        {children}
      </Box>
    </ScrollView>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Box gap="s-2">
      <Text variant="subheading">{title}</Text>
      {children}
    </Box>
  );
}

function Screen() {
  return (
    <ScrollView>
      <Box flex={1} p="s-4" bg="background" gap="s-6">

        <Section title="Variants">
          <HScroll>
            {VARIANTS.map(v => (
              <Button key={v} variant={v} label={v} />
            ))}
          </HScroll>
        </Section>

        <Section title="Sizes">
          <HScroll>
            {SIZES.map(s => (
              <Button key={s} size={s} label={`Button (${s})`} />
            ))}
          </HScroll>
        </Section>

        {PALETTE_VARIANTS.map(v => (
          <Section key={v} title={`Color Palettes — ${v}`}>
            <HScroll>
              {PALETTES.map(p => (
                <Button key={p} variant={v} colorPalette={p} label={p} />
              ))}
            </HScroll>
          </Section>
        ))}

        <Section title="Disabled">
          <HScroll>
            {VARIANTS.map(v => (
              <Button key={v} variant={v} label={v} isDisabled />
            ))}
          </HScroll>
        </Section>

        <Section title="Loading — start">
          <HScroll>
            {VARIANTS.map(v => (
              <Button key={v} variant={v} label={v} isLoading loading={{ position: 'start' }} />
            ))}
          </HScroll>
        </Section>

        <Section title="Loading — end">
          <HScroll>
            {VARIANTS.map(v => (
              <Button key={v} variant={v} label={v} isLoading loading={{ position: 'end' }} />
            ))}
          </HScroll>
        </Section>

        <Section title="Loading with label">
          <HScroll>
            {PALETTES.map(p => (
              <Button key={p} variant="solid" colorPalette={p} label={p} isLoading loading={{ label: 'Loading...' }} />
            ))}
          </HScroll>
        </Section>

      </Box>
    </ScrollView>
  );
}

function App() {
  return (
    <VajraProvider>
      <Screen />
    </VajraProvider>
  );
}

export default App;
