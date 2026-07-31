import React from 'react';
import { IPhoneMockup } from 'react-device-mockup';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { VajraProvider } from 'vajra-ui';
import styles from './styles.module.css';

const SCREEN_WIDTH = 300;
// Matches react-device-mockup's internal topInset for screenType="island":
// Math.floor((screenWidth * 59) / 390)
const STATUS_BAR_HEIGHT = Math.floor((SCREEN_WIDTH * 59) / 390);

export default function ComponentPreview({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.mockupOuter}>
        <div className={styles.statusBarOverlay} style={{ height: STATUS_BAR_HEIGHT }}>
          <span>9:41</span>
          <span className={styles.statusIcons}>●●●</span>
        </div>
        <IPhoneMockup
          screenWidth={SCREEN_WIDTH}
          screenType="island"
          frameColor="#3a3a3c"
          hideStatusBar
          hideNavBar
        >
          <div
            className={styles.screen}
            style={{ paddingTop: STATUS_BAR_HEIGHT + 12, paddingBottom: 28 }}
          >
            <SafeAreaProvider
              initialMetrics={{
                frame: { x: 0, y: 0, width: SCREEN_WIDTH, height: 650 },
                insets: { top: STATUS_BAR_HEIGHT, left: 0, right: 0, bottom: 18 },
              }}
            >
              <VajraProvider>{children}</VajraProvider>
            </SafeAreaProvider>
          </div>
        </IPhoneMockup>
        <div className={styles.homeIndicator} />
      </div>
    </div>
  );
}
