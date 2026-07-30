import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Token-first',
    description: (
      <>
        Every prop (<code>bg</code>, <code>p</code>, <code>rounded</code>,{' '}
        <code>color</code>) maps to a design token, never a raw value — no magic
        hex codes or pixel values scattered through your app.
      </>
    ),
  },
  {
    title: 'Themeable',
    description: (
      <>
        Override colors, spacing, and border radii via{' '}
        <code>createVajraTheme</code>, add your own tokens through TypeScript
        module augmentation, and switch themes at runtime.
      </>
    ),
  },
  {
    title: 'Headless core',
    description: (
      <>
        Opinionated components are built on top of unstyled, headless
        primitives in <code>@devraj-labs/vajra-ui-core</code> — use the
        styled layer, or drop down for full control.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
