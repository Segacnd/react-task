import { useState } from 'react';
import './App.css';
import TechStack from './tech-stack/TechStack';
import { SecondTask } from './secondTask/SecondTask';

function App() {
	const [currentTask, setCurrentTask] = useState(1);

	
	return (
		<section className='wrapper'>
			{currentTask === 1 ? <TechStack /> : <SecondTask />}

			<button onClick={() => setCurrentTask(prev => prev + 1)}>Go to the next task</button>
			<button onClick={() => setCurrentTask(prev => prev-1)}>Go to the prev task</button>
		</section>
	);
}

export default App;
