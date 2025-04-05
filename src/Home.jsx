import {
	CheckIcon,
	ChevronsRightIcon,
	CircleHelpIcon,
	CircleUserIcon,
	InfoIcon,
} from "lucide-react";
import { Link } from "react-router";
import { v4 as uuidv4 } from "uuid";
import PieCharts from "./components/PieCharts.jsx";

export default function Home() {
	return (
		<>
			<div className="container w-full flex flex-col items-center justify-center mx-auto p-2">
				<section className="w-full max-w-5xl p-4 font-m-plus-rounded text-neutral-900">
					<div className="flex justify-start items-center w-full text-3xl font-bold bg-indigo-500 text-white py-2 px-4 rounded-lg mb-4 shadow-md shadow-indigo-300">
						<InfoIcon className="inline mr-2" size={32} />
						お知らせ
					</div>
					<div className="w-full flex flex-col gap-4 bg-white px-6 py-8 rounded-lg shadow-md shadow-indigo-200 border border-gray-200">
						<p className="text-xl font-bold">入部希望の方へ</p>
						<p>2025-04-04</p>
						<div className="text-lg">
							<p>
								コンピュータ倶楽部では、入部を希望する方をいつでも募集しています！
							</p>
							<ul className="list-disc list-inside mb-4">
								<li>入部したいけど方法が分からない</li>
								<li>入部を検討しているけど、詳しく話を聞いておきたい</li>
								<li>プログラミングを体験したい</li>
							</ul>
							<p>
								など、詳細について聞きたい方は下記フォームにて問い合わせください。
							</p>
							<a href="https://forms.office.com/r/j1djfrbbiN">
								<button
									type="button"
									className="flex items-center justify-center bg-rose-400 text-white font-bold py-2 px-4 rounded-lg shadow-md shadow-rose-300 hover:bg-rose-600 duration-200 my-4 mx-auto"
								>
									<ChevronsRightIcon className="inline mr-2" size={24} />
									<span>お問い合わせフォームはこちら</span>
								</button>
							</a>
							<p className="text-xl font-bold text-rose-400">
								例年4月のクラブ登録前の期間は体験講座やります!
							</p>
							<p>体験講座は申し込み不要なので、ぜひ遊びに来てください!</p>
						</div>
					</div>
				</section>
				<section className="w-full max-w-5xl p-4 font-m-plus-rounded text-neutral-900">
					<div className="flex justify-start items-center w-full text-3xl font-bold bg-indigo-500 text-white py-2 px-4 rounded-lg mb-4 shadow-md shadow-indigo-300">
						<CircleHelpIcon className="inline mr-2" size={32} />
						どんな部活?
					</div>
					<div className="w-full flex flex-col gap-4 bg-white px-6 py-8 rounded-lg shadow-md shadow-indigo-200 border border-gray-200">
						<div className="text-lg">
							{[
								<p key={uuidv4()}>
									<span className="text-rose-400 text-xl font-bold">
										プログラミング
									</span>
									をして様々なことに取り組む部活です
								</p>,
								<p key={uuidv4()}>
									活動は
									<span className="text-rose-400 text-xl font-bold">
										月・水
									</span>
									の放課後で週2回です
									<span className="text-rose-400 text-xl font-bold">
										{"(兼部も可能です)"}
									</span>
								</p>,
								<p key={uuidv4()}>
									<span className="text-rose-400 text-xl font-bold">
										情報処理センター2F
									</span>
									(図書館棟2階)で活動しています
								</p>,
								<p key={uuidv4()}>
									プログラミングについて
									<span className="text-rose-400 text-xl font-bold">
										何も分からなくても大丈夫！部員が丁寧に教えます
									</span>
								</p>,
								<p key={uuidv4()}>
									<span className="text-rose-400 text-xl font-bold">
										プログラミング以外の創作活動
									</span>
									も行っています
								</p>,
							].map((item) => (
								<span key={uuidv4()} className="flex items-center">
									<CheckIcon
										className="inline mr-2 bg-rose-400 text-white rounded p-0.5"
										size={16}
										strokeWidth={3}
									/>
									{item}
								</span>
							))}
							<Link to="/about">
								<button
									type="button"
									className="flex items-center justify-center bg-rose-400 text-white font-bold py-2 px-4 rounded-lg shadow-md shadow-rose-300 hover:bg-rose-600 duration-200 my-4 mx-auto"
								>
									<ChevronsRightIcon className="inline mr-2" size={24} />
									<span>詳細を見る</span>
								</button>
							</Link>
						</div>
					</div>
				</section>
				<section className="w-full max-w-5xl p-4 font-m-plus-rounded text-neutral-900">
					<div className="flex justify-start items-center w-full text-3xl font-bold bg-indigo-500 text-white py-2 px-4 rounded-lg mb-4 shadow-md shadow-indigo-300">
						<CircleUserIcon className="inline mr-2" size={32} />
						部員と顧問
					</div>
					<div className="w-full flex flex-col gap-4 bg-white px-6 py-8 rounded-lg shadow-md shadow-indigo-200 border border-gray-200 overflow-x-auto">
						<p>2024年度時点</p>
						<p>
							<span className="font-bold">部員数</span>:38人
						</p>
						<div className="w-full flex justify-center items-center flex-row flex-wrap gap-4">
							<PieCharts />
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
