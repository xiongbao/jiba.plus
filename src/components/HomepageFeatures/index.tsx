import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '科学有效',
    Svg: require('@site/static/img/lab.svg').default,
    description: (
      <>
        本文档以科学为基础，提供了一份旨在提高性能力的教程，包括身体、心理和饮食方面的综合总结。
      </>
    ),
  },
  {
    title: '增大增长',
    Svg: require('@site/static/img/rule.svg').default,
    description: (
      <>
        增大增长是本教程的核心，以拉伸、挤奶等手法改善阴茎的血液循环、肌肉活力，从而改变它的尺寸。
      </>
    ),
  },
  {
    title: '延迟射精',
    Svg: require('@site/static/img/time.svg').default,
    description: (
      <>
        该章节通过挤压法和“停与动”法来抑制射精，从而提升性行为的时长与性生活质量，增强性自信心。
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureImg}>
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h2 style={{fontSize: '2rem'}}>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
