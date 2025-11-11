import { User } from "lucide-react";

export default function AboutMe() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 via-white to-emerald-50 p-8">
      <div className="max-w-4xl w-full">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-gradient-to-br from-emerald-400 to-sky-400 rounded-xl">
            <User
              className="w-8 h-8 text-white"
              strokeWidth={2}
            />
          </div>
          <h2 className="text-slate-800">About Me</h2>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-slate-100 space-y-8">
          <div className="space-y-6">
            <p className="text-slate-700 text-lg leading-relaxed">
              設計から試験まで一貫して携わり、課題解決とチーム全体の生産性向上に取り組んできました。<br/>
              今後は、技術を“手段”としてビジネス価値を生み出すエンジニアへ。<br/>
              目の前の課題を超えて、<span className="text-slate-800 font-medium">本当に解決すべき本質</span>を探り、
              技術だけでなくビジネスの成長に貢献できる形で価値を届けたいと考えています。
              <br />
              企画段階から課題の本質を見極め、最適な解決策を導く力を磨き続けています。
            </p>

            <p className="text-slate-700 text-lg leading-relaxed">
              顧客・仲間・家族の幸せが循環する開発環境を築きながら、共に成長できるチームづくりを目指しています。
            </p>
          </div>

          <div className="pt-6 border-t border-emerald-100">
            <div className="flex items-center gap-3">
              <div className="flex-1 h-1 bg-gradient-to-r from-emerald-400 to-sky-400 rounded"></div>
              <div className="text-sm text-slate-500">
                価値を生み出すエンジニアへ
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}