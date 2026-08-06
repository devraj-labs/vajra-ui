import React from 'react';
import { useDocById, findFirstSidebarItemLink } from '@docusaurus/plugin-content-docs/client';
import { useDocCardDescriptionCategoryItemsPlural } from '@docusaurus/theme-common/internal';
import isInternalUrl from '@docusaurus/isInternalUrl';
import Layout from '@theme/DocCard/Layout';
import type { Props } from '@theme/DocCard';
import type { PropSidebarItemCategory, PropSidebarItemLink } from '@docusaurus/plugin-content-docs';

// Card icons live here instead of in each doc's sidebar_label, so the emoji
// only ever shows up on card grids (this page, category listings) and never
// leaks into the left-nav sidebar drawer, which stays plain text.
const DOC_ICONS: Record<string, string> = {
  'components/absolute-center': '🧲',
  'components/absolute-view': '📌',
  'components/accordion': '🪗',
  'components/alert': '🚨',
  'components/app-bar': '🧭',
  'components/avatar': '👤',
  'components/badge': '🔴',
  'components/box': '📦',
  'components/button': '🔘',
  'components/card': '🃏',
  'components/center': '🎯',
  'components/checkbox': '☑️',
  'components/chip': '🏷️',
  'components/col': '📶',
  'components/grid': '▦',
  'components/icon-box': '🖼️',
  'components/icon-button': '🔵',
  'components/icon-switch': '🌗',
  'components/input': '⌨️',
  'components/list': '📋',
  'components/menu': '📜',
  'components/modal': '🪟',
  'components/pressable': '👆',
  'components/progress-bar': '📊',
  'components/radio': '⚪',
  'components/row': '📏',
  'components/select': '🔽',
  'components/separator': '➖',
  'components/sheet': '📄',
  'components/skeleton': '🦴',
  'components/slider': '🎚️',
  'components/spacer': '↔️',
  'components/spinner': '🌀',
  'components/stepper': '🔢',
  'components/switch': '🔀',
  'components/tab-bar': '🗂️',
  'components/tabs': '📑',
  'components/text-input': '✏️',
  'components/text': '🔤',
  'components/toast': '🍞',
  'components/tooltip': '💬',
};

const CATEGORY_ICONS: Record<string, string> = {
  Layout: '📐',
  Typography: '🔤',
  'Forms & Inputs': '⌨️',
  Navigation: '🧭',
  Overlays: '🪟',
  Feedback: '📣',
  'Data Display': '🗃️',
};

function CardCategory({ item }: { item: PropSidebarItemCategory }) {
  const href = findFirstSidebarItemLink(item);
  const categoryItemsPlural = useDocCardDescriptionCategoryItemsPlural();
  if (!href) {
    return null;
  }
  return (
    <Layout
      item={item}
      className={item.className}
      href={href}
      icon={CATEGORY_ICONS[item.label] ?? '🗃'}
      title={item.label}
      description={item.description ?? categoryItemsPlural(item.items.length)}
    />
  );
}

function CardLink({ item }: { item: PropSidebarItemLink }) {
  const doc = useDocById(item.docId ?? undefined);
  const fallbackIcon = isInternalUrl(item.href) ? '📄️' : '🔗';
  const icon = (item.docId && DOC_ICONS[item.docId]) ?? fallbackIcon;
  return (
    <Layout
      item={item}
      className={item.className}
      href={item.href}
      icon={icon}
      title={item.label}
      description={item.description ?? doc?.description}
    />
  );
}

export default function DocCard({ item }: Props): React.ReactElement {
  switch (item.type) {
    case 'link':
      return <CardLink item={item} />;
    case 'category':
      return <CardCategory item={item} />;
    default:
      throw new Error(`unknown item type ${JSON.stringify(item)}`);
  }
}
