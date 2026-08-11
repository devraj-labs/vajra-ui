export const notificationTokens = {
  toast: { maxVisible: 3 },
  alert: { maxVisible: 3 },
} as const;

export type TNotificationTokens = typeof notificationTokens;
