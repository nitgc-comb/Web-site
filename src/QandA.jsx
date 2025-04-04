import { Code2Icon, LaptopIcon } from "lucide-react";
import { Link } from "react-router";

export default function QandA() {
	return (
		<>
			<div className="container w-full flex flex-col items-center justify-center mx-auto p-2">
				<section className="w-full max-w-5xl p-4 font-m-plus-rounded text-neutral-900 flex flex-col gap-8">
					<div className="flex justify-start items-center w-full text-3xl font-bold bg-indigo-500 text-white py-2 px-4 rounded-lg mb-4 shadow-md shadow-indigo-300">
						<LaptopIcon className="inline mr-2" size={32} />
						Q&A
					</div>
					<div className="flex flex-col items-start justify-start w-full text-lg bg-white rounded-lg shadow-md shadow-indigo-100 p-4">
						<p>
							Q: どんな活動をしているの？
							<br />
							A: プログラミング講座やゲーム制作を行っています。
							<br />
							詳しくは
							<Link to="/about" className="text-sky-600 underline">
								こちら
							</Link>
							をご覧ください。
						</p>
					</div>
					<div className="flex flex-col items-start justify-start w-full text-lg bg-white rounded-lg shadow-md shadow-indigo-100 p-4">
						<p>
							Q: 部費はいくら？
							<br />
							A: 部費は年間1,000円で徴収させていただいています。
							<br />
							高専祭の備品の購入に使うことが多いですが、部員の希望があればその都度備品を購入することもあります。
						</p>
					</div>
					<div className="flex flex-col items-start justify-start w-full text-lg bg-white rounded-lg shadow-md shadow-indigo-100 p-4">
						<p>
							Q: 学科の比率などはどうなっているの？
							<br />
							A:
							学科の割合に関しては基本E学科が半数から8割程度を占めており、残りはM学科やD学科の部員が在籍しています。
						</p>
					</div>
					<div className="flex flex-col items-start justify-start w-full text-lg bg-white rounded-lg shadow-md shadow-indigo-100 p-4">
						<p>
							Q: 必要なものとかはありますか？
							<br />
							A:
							基本的に必要なものはありませんが、ノートPCを持っていると便利です。
							<br />
							持っていない場合は情報処理センターにあるPCを使用できますが性能面であったり権限面であったりと不便な点が多いです。
						</p>
					</div>
				</section>
			</div>
		</>
	);
}
