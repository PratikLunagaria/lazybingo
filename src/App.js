import Card from './components/Card';
import { mockData } from './data/mockData';

function App() {
	return (
		<div className="flex items-center justify-center bg-black">
			<div className="grid grid-cols-5 grid-rows-5 h-screen square gap-4">
				{mockData.map((d, idx) => <Card key={idx} {...d} />)}
			</div>
		</div>
	);
}

export default App;
