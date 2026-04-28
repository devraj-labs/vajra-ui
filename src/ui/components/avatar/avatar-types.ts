import { ImageProps } from 'react-native';

export type TAvatarProps = {
  /** URI of the network image to display */
  src?: string;
  /** Initials to display when image fails to load */
  initials: string;
  /** Width of the avatar in pixels (default: 40) */
  width?: number;
  /** Height of the avatar in pixels (default: 40) */
  height?: number;
  /** Additional props forwarded to the underlying Image */
  imageProps?: Omit<ImageProps, 'source' | 'style'>;
};
