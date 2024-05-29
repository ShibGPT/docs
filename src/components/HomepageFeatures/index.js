import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'LLM Open Source',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        We are developing open-source, flexible Large Language Models (LLMs) designed to empower and enhance a wide range of natural language processing applications.
      </>
    ),
  },
  {
    title: 'SHIBGPT Enterprise',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Tailored for business needs, SHIBGPT Enterprise offers robust and scalable Large Language Models (LLMs) designed to enhance enterprise-level applications, streamline workflows, and drive innovation through advanced natural language processing capabilities.
      </>
    ),
  },
  {
    title: 'SHIBGPT Research',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Dedicated to the academic and scientific community, SHIBGPT Research provides state-of-the-art Large Language Models (LLMs) to support cutting-edge research, facilitate innovative studies, and accelerate breakthroughs in natural language processing.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
