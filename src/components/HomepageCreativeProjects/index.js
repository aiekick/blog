import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const CreativeList = [
  {
    title: 'NoodlesPlate',
    png: require('@site/static/img/projects/creative/noodlesplate.png').default,
    description: (
      <>
        <b>Offline Shader Editor with many cool features</b> widgets, 
		timeline, vr, tesselation, multipass, 
		web imports, profiler, gamepad, midi
      </>
    ),
  },
  {
    title: 'SdfFontDesigner',
    png: require('@site/static/img/projects/creative/sdffontdesigner.png').default,
    description: (
      <>
        <b>Offline Shader based Bitmap font generator</b> shader writing, 
		sdf generation, widgets, web imports, fnt file export
      </>
    ),
  }
];

function Creative({png, title, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <img className={styles.creativePng} src={png} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageCreativeProjects() {
  return (
    <section className={styles.features}>
		<div className="text--center">
			<h1>Creative Projects</h1>
		</div>
		<div className="container">
			<div className="row">
			{
				CreativeList.map((props, idx) =>
				(
					<Creative key={idx} {...props} />
				))
			}
			</div>
		</div>
    </section>
  );
}
