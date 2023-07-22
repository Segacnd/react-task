import styles from './TechStack.module.css';
import { useState } from 'react';

import { techStack, frameworksSelectorButtons } from './data';



const TechStack = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleSelectorsButton = (event, index) => {
		event.preventDefault();
		setCurrentIndex(index);
	};

	return (
		<>
			<div
				className={styles.technologiesContainer}
			>
				<div className={styles['industries-selector__wrapper']}>
					{frameworksSelectorButtons.map((item, index) => (
						<button
							className={
								index === currentIndex
									? styles['active-selector-button']
									: styles['industries-selector-button']
							}
							key={index}
							onClick={(event) => handleSelectorsButton(event, index)}
						>
							{item}
						</button>
					))}
				</div>
			</div>

			<div
				className={styles['techstack-items__wrapper']}
			>
				{techStack[currentIndex].map((item, index) => (
					<div key={index} className={styles['techstack-item']}>
						<img src={item.techIcon} alt='pynest' />
						<p className={styles['techstack-item__name']}>{item.name}</p>
					</div>
				))}
			</div>
		</>
	);
};

export default TechStack;