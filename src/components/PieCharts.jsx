/* 部員の学年や学科別の割合を表示する円グラフ */
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";
import { v4 as uuidv4 } from "uuid";

const gradeData = [
	{ name: "1年", value: 11 },
	{ name: "2年", value: 13 },
	{ name: "3年", value: 10 },
	{ name: "4年", value: 4 },
];

const departmentData = [
	{ name: "電気情報", value: 28 },
	{ name: "電子制御", value: 9 },
	{ name: "機械工学", value: 1 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF669B"];

export default function PieCharts() {
	return (
		<>
			<PieChart width={400} height={400}>
				<Pie
					data={gradeData}
					cx="50%" // 中心X
					cy="50%" // 中心Y
					outerRadius={120}
					startAngle={90}
					endAngle={-270}
					fill="#8884d8"
					dataKey="value"
					label
				>
					{gradeData.map((_, index) => (
						<Cell key={uuidv4()} fill={COLORS[index % COLORS.length]} />
					))}
				</Pie>
				<Tooltip />
				<Legend />
			</PieChart>
			<PieChart width={400} height={400}>
				<Pie
					data={departmentData}
					cx="50%" // 中心X
					cy="50%" // 中心Y
					outerRadius={120}
					startAngle={90}
					endAngle={-270}
					fill="#8884d8"
					dataKey="value"
					label
				>
					{departmentData.map((_, index) => (
						<Cell key={uuidv4()} fill={COLORS[index % COLORS.length]} />
					))}
				</Pie>
				<Tooltip />
				<Legend />
			</PieChart>
		</>
	);
}
