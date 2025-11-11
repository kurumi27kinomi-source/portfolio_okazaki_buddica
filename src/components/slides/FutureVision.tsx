import { Compass, Sparkles } from "lucide-react";

export default function FutureVision() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-sky-50 p-8">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-gradient-to-br from-emerald-400 to-sky-400 rounded-xl">
            <Compass
              className="w-8 h-8 text-white"
              strokeWidth={2}
            />
          </div>
          <h2 className="text-slate-800">
            Future Vision｜目指すべき生き方
          </h2>
        </div>

        {/* Main Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-slate-100 space-y-10">
          <div className="space-y-6">
            <p className="text-slate-700 text-xl leading-relaxed">
              技術は目的ではなく<strong>手段</strong>
              。顧客の本質的な課題を解き、事業価値を生み出すことに軸を置く。
              <br />
            </p>

            <p className="text-slate-700 text-xl leading-relaxed">
              AIは<strong>最適な手段の一つ</strong>
              。状況に応じて使い分け、品質とスピードを両立する。
              <br />
            </p>

            <p className="text-slate-700 text-xl leading-relaxed">
              <strong>
                変わらないのは、変わり続けるという覚悟。
              </strong>
              <br />
              学び続け、与え続けるエンジニアとして、誇れる自分であり、家族に誇ってもらえる存在でありたい。
            </p>
          </div>

          {/* Center Icon */}
          <div className="pt-4 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-sky-400 blur-2xl opacity-20" />
              <Sparkles
                className="w-16 h-16 text-emerald-500 relative"
                strokeWidth={1.5}
              />
            </div>
          </div>

          {/* Three Pillars */}
          <div className="grid md:grid-cols-3 gap-6 pt-6">
            {/* Business */}
            <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-white rounded-2xl border border-emerald-100">
              <div className="text-emerald-700 mb-2 font-medium">
                事業（ビジネス）
              </div>
              <p className="text-sm text-slate-600 leading-snug">
                目の前の課題を超えて、本当に解決すべきことを探る。
                <br />
                ビジネスの成長に貢献できる形で、価値を届ける。
              </p>
            </div>

            {/* Technology */}
            <div className="text-center p-6 bg-gradient-to-br from-sky-50 to-white rounded-2xl border border-sky-100">
              <div className="text-sky-700 mb-2 font-medium">
                技術（手段）
              </div>
              <p className="text-sm text-slate-600 leading-snug">
                HLD/LLDで設計意図を明確にし、再現性ある開発を進める。
                <br />
                AIを含む最適手段で、品質とスピードを両立。
              </p>
            </div>

            {/* Team */}
            <div className="text-center p-6 bg-gradient-to-br from-violet-50 to-white rounded-2xl border border-violet-100">
              <div className="text-violet-700 mb-2 font-medium">
                チーム（仲間）
              </div>
              <p className="text-sm text-slate-600 leading-snug">
                自走できる仕組みを整え、権限を委ねて成長を促す。
                <br />
                学びを共有し、挑戦を支え続ける。
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-slate-500 text-sm">
            岡崎 直也｜Portfolio 2025
          </p>
        </div>
      </div>
    </div>
  );
}