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
      gradient: ["#fb7185", "#f472b6"],
    },
    {
      icon: Target,
      text: "自走し、仲間が動ける環境をつくる",
      gradient: ["#34d399", "#0ea5e9"],
    },
    {
      icon: BookOpen,
      text: "学び続け、得た知識を形にして発信する",
      gradient: ["#38bdf8", "#2563eb"],
    },
    {
      icon: TrendingUp,
      text: "未来への投資と捉えて挑戦する",
      gradient: ["#c084fc", "#a855f7"],
    },
    {
      icon: Smile,
      text: "自分の言葉で周囲を笑顔にする",
      gradient: ["#fbbf24", "#f97316"],
    },
    {
      icon: HandshakeIcon,
      text: "自分・仲間・顧客すべてが良くなる選択をする",
      gradient: ["#22d3ee", "#38bdf8"],
    },
    {
      icon: Shield,
      text: "自分と仲間の可能性を信じて、託す勇気を持つ",
      gradient: ["#818cf8", "#a855f7"],
    },
    {
      icon: Ear,
      text: "心に余白を持ち、相手の想いに耳を傾けるよう努める",
      gradient: ["#4ade80", "#84cc16"],
    },
  ];

  const highlightCards = [
    {
      content: (
        <>
          技術を手段に、自分が成長し、仲間や顧客の挑戦を支え続ける。
          <br />
          スペシャリストを目指し、学び続ける姿勢を忘れない。
        </>
      ),
      gradient: ["#fff0d9", "#ffe5bf"],
      border: "#fed7aa",
    },
    {
      content: (
        <>
          変わらないのは、変わり続けるという覚悟。
          <br />
          変化を受け入れ、進化を恐れず、挑戦し続けることが、目指す生き方。
        </>
      ),
      gradient: ["#e7f0ff", "#ede9ff"],
      border: "#c7d2fe",
    },
    {
      content: (
        <>
          10年後も誇れる自分であるために、今日の一歩を積み重ねる。
          <br />
          与えることで、自分も育っていく──Giverとして在りたい。
        </>
      ),
      gradient: ["#ffe3f4", "#ffe7d6"],
      border: "#fbcfe8",
      iconColor: "#ec4899",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-white via-sky-50 to-emerald-50 text-center">
      {/* ===== Hero Section ===== */}
      <section className="flex flex-col items-center justify-center py-24 px-8">
        <h1 className="text-slate-800 text-4xl md:text-5xl font-semibold mb-6">
          変わらないのは、変わり続けること。
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
                  className="w-12 h-12 mb-4 rounded-xl flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${credo.gradient[0]}, ${credo.gradient[1]})`,
                  }}
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
            {highlightCards.map((card, idx) => (
              <div
                key={idx}
                className={`inline-block px-8 py-5 rounded-3xl border shadow-md ${
                  card.iconColor ? "flex items-center justify-center gap-3" : ""
                }`}
                style={{
                  background: `linear-gradient(135deg, ${card.gradient[0]}, ${card.gradient[1]})`,
                  borderColor: card.border,
                }}
              >
                {card.iconColor && (
                  <Sparkles className="w-5 h-5" style={{ color: card.iconColor }} />
                )}
                <p className="text-slate-700 leading-relaxed text-lg">{card.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
