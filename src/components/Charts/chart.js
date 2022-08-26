import React from 'react';
import {
	LineChart,
	ResponsiveContainer,
	Legend, Tooltip,
	Line,
	XAxis,
	YAxis,
	CartesianGrid
} from 'recharts';
import "./chart.css"
// Sample chart data
const pdata = [
	{
		name: 'MongoDb',
		student: 11,
		fees: 120
	},
	{
		name: 'Javascript',
		student: 15,
		fees: 12
	},
	{
		name: 'PHP',
		student: 5,
		fees: 80
	},
	{
		name: 'Java',
		student: 10,
		fees: 40
	},
	{
		name: 'C#',
		student: 9,
		fees: 20
	},
	{
		name: 'C++',
		student: 10,
		fees: 0
	},
];

function App() {
	return (
		<div className='card' style={{width:"85%"}}>
            <div className='card-body cardchart'>
			<h4 className="text-heading" style={{padding:"2rem"}}>
				Data Analysis
			</h4>
			<ResponsiveContainer width="100%" aspect={3}>
				<LineChart data={pdata} margin={{ right: 300 }}>
					<CartesianGrid />
					<XAxis dataKey="name"
						interval={'preserveStartEnd'} />
					<YAxis></YAxis>
					<Legend />
					<Tooltip />
					<Line dataKey="student"
						stroke="black" activeDot={{ r: 8 }} />
					<Line dataKey="fees"
						stroke="red" activeDot={{ r: 8 }} />
				</LineChart>
			</ResponsiveContainer>
            </div> 
		</div>
	);
}

export default App;
