import { AwardIcon, Code2Icon, Gamepad2Icon, LaptopIcon } from "lucide-react";

import { v4 as uuidv4 } from "uuid";

import gamePlayImg from "./assets/game-play.jpg";
import p5jsImg from "./assets/p5js.jpg";
import proconImg from "./assets/procon.jpg";

export default function About() {
	return (
		<>
			<div className="container w-full flex flex-col items-center justify-center mx-auto p-2">
				<section className="w-full max-w-5xl p-4 font-m-plus-rounded text-neutral-900 flex flex-col gap-8">
					<div className="flex justify-start items-center w-full text-3xl font-bold bg-indigo-500 text-white py-2 px-4 rounded-lg mb-4 shadow-md shadow-indigo-300">
						<LaptopIcon className="inline mr-2" size={32} />
						活動内容
					</div>
					<div className="flex flex-row gap-2 flex-wrap justify-center items-center">
						<img
							src={p5jsImg}
							alt="p5js"
							srcset=""
							className="rounded shadow-md shadow-indigo-100 w-full max-w-md"
						/>
						<div className="flex flex-col gap-2 w-full max-w-md">
							<p className="text-2xl font-bold mx-auto">
								<Code2Icon className="inline mr-2" size={24} />
								プログラミング講座
							</p>
							<div className="flex flex-col items-start justify-start w-full max-w-lg text-lg bg-white rounded-lg shadow-md shadow-indigo-100 p-4">
								<p>
									4月から9月にかけて、新たに入った人を対象にプログラミング講座を行っています。
									この講座で、プログラミングを基礎の基礎から分かりやすく、
									丁寧に説明し、全員がある程度プログラミングスキルを習得できることを目指しています。
									講座ではp5.jsというJavaScriptのライブラリを使用して、簡単なゲームを作成やAtCoderというWebサイトを使用して競技プログラミングを行います。
								</p>
							</div>
						</div>
					</div>
					<div className="flex flex-row gap-2 flex-wrap justify-center items-center">
						<img
							src={gamePlayImg}
							alt="game create"
							srcset=""
							className="rounded shadow-md shadow-indigo-100 w-full max-w-md block lg:hidden"
						/>
						<div className="flex flex-col gap-2 w-full max-w-md">
							<p className="text-2xl font-bold mx-auto">
								<Gamepad2Icon className="inline mr-2" size={24} />
								ゲーム制作
							</p>
							<div className="flex flex-col items-start justify-start w-full max-w-lg text-lg bg-white rounded-lg shadow-md shadow-indigo-100 p-4">
								<p>
									プログラミング講座が終わると、得た知識を生かして各々でゲームの制作を行い始めます。ゲームのジャンルや制作環境などに制約はなく、それぞれ作りたいものを作ります。その作品を来年度の高専祭にて展示し、
									学内の学生や来場される一般の方々に試遊していただいています。
								</p>
							</div>
						</div>
						<img
							src={gamePlayImg}
							alt="game create"
							srcset=""
							className="rounded shadow-md shadow-indigo-100 w-full max-w-md hidden lg:block"
						/>
					</div>
					<div className="flex flex-row gap-2 flex-wrap justify-center items-center">
						<img
							src={proconImg}
							alt="procon"
							srcset=""
							className="rounded shadow-md shadow-indigo-100 w-full max-w-md"
						/>
						<div className="flex flex-col gap-2 w-full max-w-md">
							<p className="text-2xl font-bold mx-auto">
								<AwardIcon className="inline mr-2" size={24} />
								コンテストへの参加
							</p>
							<div className="flex flex-col items-start justify-start w-full max-w-lg text-lg bg-white rounded-lg shadow-md shadow-indigo-100 p-4">
								<p>
									全国の高専規模で行われる大会はロボコンだけではありません。プログラミングの技術、発想を競う「全国高専プログラミングコンテスト」というものも毎年開催されています。
									プログラミングコンテスト(プロコン)では、プログラミングの技術を競う競技部門に加え、テーマについて新しいプロダクトを提案する課題部門、自由な発想で新しいプロダクトを提案する自由部門の3部門あり、
									岐阜高専コンピュータ倶楽部は2024年度競技部門で参加しました。
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className="w-full max-w-5xl p-4 font-m-plus-rounded text-neutral-900 flex flex-col gap-8">
					<div className="flex justify-start items-center w-full text-3xl font-bold bg-indigo-500 text-white py-2 px-4 rounded-lg mb-4 shadow-md shadow-indigo-300">
						<AwardIcon className="inline mr-2" size={32} />
						コンテスト参加・受賞歴
					</div>
					<div className="w-full flex flex-col gap-4 bg-white px-6 py-8 rounded-lg shadow-md shadow-indigo-200 border border-gray-200 overflow-x-auto">
						<p>
							第35回 全国高等専門学校 プログラミングコンテスト
							競技部門「シン・よみがえれ世界遺産」 決勝
						</p>
						<table className="w-full">
							<thead>
								<tr>
									<th className="px-4 py-2">順位</th>
									<th className="px-4 py-2">不一致度</th>
									<th className="px-4 py-2">手数</th>
									<th className="px-4 py-2">回答時間</th>
								</tr>
							</thead>
							<tbody>
								{[
									["松江", 0, 12180, 270556],
									["徳山", 0, 14042, 258073],
									["仙台（広瀬）", 0, 16459, 299479],
									["豊田", 0, 17569, 267452],
									["熊本（八代）", 0, 24515, 297975],
									["岐阜", 0, 26847, 131503],
									["群馬", 0, 30111, 39542],
									["宇部", 0, 48615, 2639],
								].map((item, index) => (
									<tr
										key={uuidv4()}
										className={item[0] === "岐阜" ? "bg-indigo-100" : ""}
									>
										<td className="border px-4 py-2">
											{index + 1} {item[0]}
										</td>
										<td className="border px-4 py-2">
											{item[1].toLocaleString()}
										</td>
										<td className="border px-4 py-2">
											{item[2].toLocaleString()}
										</td>
										<td className="border px-4 py-2">
											{item[3].toLocaleString()}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</section>
			</div>
		</>
	);
}
