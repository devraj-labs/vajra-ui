import React, { useState } from 'react';
import { ScrollView } from 'react-native';

import { Box, Input, Text } from 'vajra-ui';
import type { TInputSize } from 'vajra-ui';

const SIZES: TInputSize[] = ['xs', 'sm', 'md', 'lg'];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Box gap="s-3">
      <Text variant="subheading">{title}</Text>
      {children}
    </Box>
  );
}

function PasswordInput() {
  const [show, setShow] = useState(false);
  return (
    <Input.Outline
      label="Password"
      placeholder="Enter password"
      secureTextEntry={!show}
      endElement={
        <Text variant="label" color="primary" onPress={() => setShow(v => !v)}>
          {show ? 'Hide' : 'Show'}
        </Text>
      }
    />
  );
}

export function InputExample() {
  return (
    <ScrollView>
      <Box flex={1} p="s-4" bg="background" gap="s-6">

        <Section title="Outline">
          <Input.Outline placeholder="Outline input" />
          <Input.Outline label="With label" placeholder="Outline input" />
          <Input.Outline label="Helper text" helperText="Some helpful hint." placeholder="Outline input" />
          <Input.Outline label="Error" isInvalid errorText="This field is required." placeholder="Outline input" />
        </Section>

        <Section title="Filled">
          <Input.Filled placeholder="Filled input" />
          <Input.Filled label="With label" placeholder="Filled input" />
          <Input.Filled label="Error" isInvalid errorText="Invalid value." placeholder="Filled input" />
        </Section>

        <Section title="Flushed">
          <Input.Flushed placeholder="Flushed input" />
          <Input.Flushed label="With label" placeholder="Flushed input" />
          <Input.Flushed label="Error" isInvalid errorText="Invalid value." placeholder="Flushed input" />
        </Section>

        <Section title="Sizes">
          {SIZES.map(s => (
            <Input.Outline key={s} size={s} placeholder={`Size: ${s}`} />
          ))}
        </Section>

        <Section title="Disabled">
          <Input.Outline placeholder="Disabled outline" isDisabled />
          <Input.Filled placeholder="Disabled filled" isDisabled />
          <Input.Flushed placeholder="Disabled flushed" isDisabled />
        </Section>

        <Section title="Read only">
          <Input.Outline value="read-only value" isReadOnly />
        </Section>

        <Section title="Start / End elements">
          <Input.Outline
            label="Search"
            placeholder="Search..."
            startElement={
              <Text variant="label" color="textMuted">🔍</Text>
            }
          />
          <PasswordInput />
        </Section>

        <Section title="Rounded (capsule)">
          <Input.Outline rounded placeholder="Rounded outline" />
          <Input.Filled rounded placeholder="Rounded filled" />
          <Input.Flushed rounded placeholder="Flushed (no effect)" />
        </Section>

        <Section title="Floating label — Outline">
          <Input.Floating label="Email" variant="outline" />
          <Input.Floating label="Error" variant="outline" isInvalid errorText="Required." />
          <Input.Floating label="Rounded" variant="outline" rounded />
        </Section>

        <Section title="Floating label — Filled">
          <Input.Floating label="Username" variant="filled" />
          <Input.Floating label="Rounded filled" variant="filled" rounded />
        </Section>

        <Section title="Floating label — Flushed">
          <Input.Floating label="Search" variant="flushed" />
        </Section>

      </Box>
    </ScrollView>
  );
}
