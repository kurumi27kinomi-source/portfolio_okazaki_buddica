import { Brain, Users, Code } from "lucide-react";

export default function AiDriven() {
  const pillars = [
    {
      title: "人",
      icon: Users,
      description: (
        <>
          ビジョンと設計意図を明確にし、
          <br />
          チームの方向性を示す。
        </>
      ),
      accent: {
        gradient: "linear-gradient(135deg, #ecfdf5 0%, #ffffff 100%)",
        borderColor: "#a7f3d0",
        iconBg: "#d1fae5",
        iconColor: "#047857",
        titleColor: "#047857",
      },
    },
    {
      title: "AI",
      icon: Brain,
      description: (
        <>
          人の意図を正確に理解し、
          <br />
          安全かつ迅速に実装する。
        </>
      ),
      accent: {
        gradient: "linear-gradient(135deg, #fff7ed 0%, #ffffff 100%)",
        borderColor: "#fed7aa",
        iconBg: "#ffe8cc",
        iconColor: "#ea580c",
        titleColor: "#ea580c",
      },
    },
    {
      title: "共創",
      icon: Code,
      description: (
        <>
          人とAIの強みを融合し、
          <br />
          継続的に価値を生み出す。
        </>
      ),
      accent: {
        gradient: "linear-gradient(135deg, #f5f3ff 0%, #ffffff 100%)",
        borderColor: "#ddd6fe",
        iconBg: "#ede9fe",
        iconColor: "#7c3aed",
        titleColor: "#6d28d9",
      },
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 via-white to-emerald-50 p-8">
      <div className="max-w-4xl w-full">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-gradient-to-br from-violet-400 to-sky-400 rounded-xl">
            <Brain
              className="w-8 h-8 text-white"
              strokeWidth={2}
            />
          </div>
          <h2 className="text-slate-800 text-2xl font-semibold">
            AI駆動開発の設計思想
          </h2>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-slate-100 space-y-10">
          <div className="space-y-6 text-lg leading-relaxed text-slate-700">
            <p>
              AIを“共に創造するパートナー”と捉え、人の知見とAIの力を掛け合わせて、より深く速く価値を届ける。
            </p>

            <p>
              設計段階で意図を共有し、AIが正確に実装する仕組みを整えることで、効率と品質を両立させる。
              これが、私の考える次世代の「AI駆動開発」の形です。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 pt-8">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="text-center p-6 rounded-2xl border shadow-sm"
                style={{
                  background: pillar.accent.gradient,
                  borderColor: pillar.accent.borderColor,
                }}
              >
                <div
                  className="w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: pillar.accent.iconBg }}
                >
                  <pillar.icon
                    className="w-6 h-6"
                    style={{ color: pillar.accent.iconColor }}
                  />
                </div>
                <div
                  className="font-medium mb-2"
                  style={{ color: pillar.accent.titleColor }}
                >
                  {pillar.title}
                </div>
                <p className="text-sm text-slate-600 leading-snug">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
