import {
  AlertCircleIcon,
  AlertTriangleIcon,
  CheckCircleIcon,
  InfoIcon,
} from '@devraj-labs/vajra-ui-icons';

import { TVajraColors } from '../../vajra-theme/colors';
import { TVajraIconComponent } from '../icon-button/icon-button-types';
import { TAlertVariant } from './alert-types';

export const ALERT_VARIANT_COLORS: Record<
  TAlertVariant,
  { bg: TVajraColors; border: TVajraColors; text: TVajraColors }
> = {
  default: { bg: 'surfaceRaised', border: 'border', text: 'text' },
  success: { bg: 'successSubtle', border: 'success', text: 'success' },
  error: { bg: 'errorSubtle', border: 'error', text: 'error' },
  warning: { bg: 'warningSubtle', border: 'warning', text: 'warning' },
  info: { bg: 'infoSubtle', border: 'info', text: 'info' },
};

export const ALERT_VARIANT_ICONS: Record<TAlertVariant, TVajraIconComponent | undefined> = {
  default: undefined,
  success: CheckCircleIcon,
  error: AlertCircleIcon,
  warning: AlertTriangleIcon,
  info: InfoIcon,
};
