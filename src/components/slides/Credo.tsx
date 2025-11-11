import {
  Heart,
  Target,
  BookOpen,
  TrendingUp,
  Smile,
  HandshakeIcon,
  Shield,
  Ear,
  Sparkles,
} from "lucide-react";

export default function CredoPage() {
  const credos = [
    {
      icon: Heart,
      text: "仲間を支えられる自分でいる",
      color: "from-rose-400 to-pink-400",
    },
    {
      icon: Target,
      text: "自走し、仲間が動ける環境をつくる",
      color: "from-emerald-400 to-teal-400",
    },
    {
      icon: BookOpen,
      text: "学び続け、得た知識を形にして発信する",
      color: "from-sky-400 to-blue-400",
    },
    {
      icon: TrendingUp,
      text: "未来への投資と捉えて挑戦する",
      color: "from-violet-400 to-purple-400",
    },
    {
      icon: Smile,
      text: "自分の言葉で周囲を笑顔にする",
      color: "from-amber-400 to-orange-400",
    },
    {
      icon: HandshakeIcon,
      text: "自分・仲間・顧客すべてが良くなる選択をする",
      color: "from-cyan-400 to-sky-400",
    },
    {
      icon: Shield,
      text: "自分と仲間の可能性を信じて、託す勇気を持つ",
      color: "from-indigo-400 to-violet-400",
    },
    {
      icon: Ear,
      text: "心に余白を持ち、相手の想いに耳を傾けるよう努める",
      color: "from-emerald-400 to-green-400",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-white via-sky-50 to-emerald-50 text-center">
      {/* ===== Hero Section ===== */}
      <section className="flex flex-col items-center justify-center py-24 px-8">
        <h1 className="text-slate-800 text-4xl md:text-5xl font-semibold mb-6">
          変わらないのは、変わり続けるという覚悟。
        </h1>
        <p className="text-slate-600 text-lg md:text-xl max-w-2xl leading-relaxed">
          世界も技術も日々進化する中で、
          <br />
          自分も学び、挑戦し、進化し続ける。
          <br />
          それが、私が目指す生き方。
        </p>
      </section>

      {/* ===== Credo Section ===== */}
      <section className="px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-slate-800 mb-3">
              CREDO & VALUES
            </h2>
            <p className="text-slate-600 text-lg">
              自分の行動指針
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {credos.map((credo, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow"
              >
                <div
                  className={`w-12 h-12 mb-4 bg-gradient-to-br ${credo.color} rounded-xl flex items-center justify-center`}
                >
                  <credo.icon
                    className="w-6 h-6 text-white"
                    strokeWidth={2}
                  />
                </div>
                <p className="text-slate-700">{credo.text}</p>
              </div>
            ))}
          </div>

          {/* ===== Philosophy Section ===== */}
          <div className="mt-16 text-center space-y-6">
            <div className="inline-block px-8 py-5 bg-gradient-to-r from-emerald-50 to-sky-50 rounded-3xl border border-emerald-100 shadow-sm">
              <p className="text-slate-700 leading-relaxed text-lg">
                技術を手段に、自分が成長し、仲間や顧客の挑戦を支え続ける。
                <br />
                スペシャリストを目指し、学び続ける姿勢を忘れない。
              </p>
            </div>

            <div className="inline-block px-8 py-5 bg-gradient-to-r from-sky-50 to-violet-50 rounded-3xl border border-slate-100 shadow-sm">
              <p className="text-slate-700 leading-relaxed text-lg">
                変わらないのは、変わり続けるという覚悟。
                <br />
                変化を受け入れ、進化を恐れず、挑戦し続けることが、目指す生き方。
              </p>
            </div>

            <div className="inline-block px-8 py-5 bg-gradient-to-r from-pink-50 to-amber-50 rounded-3xl border border-rose-100 shadow-sm flex items-center justify-center gap-3">
              <Sparkles className="w-5 h-5 text-rose-400" />
              <p className="text-slate-700 leading-relaxed text-lg">
                10年後も誇れる自分であるために、今日の一歩を積み重ねる。
                <br />
                与えることで、自分も育っていく──Giverとして在りたい。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}