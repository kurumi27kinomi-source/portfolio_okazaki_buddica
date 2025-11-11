import { Heart, Lightbulb, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Philosophy() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* soft background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-emerald-200/30 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-sky-200/30 blur-3xl" />
      </div>

      <div className="relative max-w-5xl w-full px-6 py-16">
        {/* header */}
        <div className="mb-10 flex items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/70 px-3 py-1 text-xs text-emerald-700 shadow-sm backdrop-blur">
            <Heart className="h-4 w-4" />
            BUDDICA DIRECTに惹かれて
          </span>
        </div>

        {/* main card */}
        <div className="rounded-3xl border border-slate-100 bg-white/80 p-10 shadow-xl backdrop-blur-sm">
          {/* lead */}
          <div className="mb-8 flex items-start gap-4">
            <div className="shrink-0 rounded-xl bg-gradient-to-br from-sky-400 to-emerald-400 p-3 text-white shadow-md">
              <Sparkles className="h-7 w-7" />
            </div>
            <p className="text-lg leading-relaxed text-slate-700">
              「ドライブを、人生最高のエンタメに。」――  
              この言葉に出会って、心が動きました。<br />
              一度は仕事で疲れ、そこそこに生きようと思った時期もありましたが、  
              中野社長の理念に触れ、“もう一度挑戦する人生を選びたい”と強く思いました。<br />
              技術で、その世界観を支える仲間になりたいと感じています。
            </p>
          </div>

          {/* body copy */}
          <div className="space-y-6 text-slate-700">
            <p className="text-lg leading-relaxed">
              <strong>「愛車を通じて人生を豊かにする」</strong>という想いに、深く共感しています。<br />
              クルマの販売という“表の体験”を支える“裏の技術”にも、同じ情熱が必要です。<br />
              システムやデータ、体験設計――どの領域も、すべては人の感情を動かすための手段。<br />
              私はその裏側を整え、BUDDICAの挑戦をテクノロジーで後押ししたいと考えています。
            </p>
            <p className="text-lg leading-relaxed">
              成功体験は多くはありませんが、AWSの利用最適化など、仕組みを変えてチームに貢献してきました。<br />
              仲間がメンタル的に疲れていた時期もありましたが、理念を共有し、目的を再定義することで再び前向きに働けるようになった――  
              その経験が、今の自分の原点です。<br />
              技術を磨く理由は、“人の可能性を支えるため”。  
              BUDDICAの理念と共に、その差分を広げていきたいです。
            </p>
          </div>

          {/* quote */}
          <div className="my-10 rounded-2xl border border-emerald-100 bg-gradient-to-r from-emerald-50/80 to-sky-50/80 p-6 text-center shadow-sm">
            <div className="mx-auto mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100">
              <Lightbulb className="h-4 w-4 text-emerald-700" />
            </div>
            <p className="text-base leading-relaxed text-slate-800">
              「理念を形にするエンジニアでありたい。」<br />
              クルマを通じて、人の心を動かす仕組みを創りたい。
            </p>
          </div>

          {/* two columns */}
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: 'BUDDICAに共感する理由',
                bullets: [
                  '理念と行動が一致している会社であること',
                  '人の想いを中心に、事業が構築されていること',
                  '挑戦と成長を肯定する文化があること',
                ],
                accent: {
                  border: '#a7f3d0',
                  background: 'linear-gradient(135deg, #ecfdf5 0%, #ffffff 100%)',
                  title: '#047857',
                  icon: '#059669',
                },
              },
              {
                title: 'エンジニアとしての使命',
                bullets: [
                  '技術で理念を支え、体験を豊かにする',
                  '挑戦を恐れず、新しい仕組みを提案する',
                  'BUDDICAの想いをシステムに宿す',
                ],
                accent: {
                  border: '#bfdbfe',
                  background: 'linear-gradient(135deg, #eff6ff 0%, #ffffff 100%)',
                  title: '#1d4ed8',
                  icon: '#2563eb',
                },
              },
            ].map((card) => (
              <div
                key={card.title}
                className="group rounded-2xl p-6 shadow-md transition hover:shadow-lg border"
                style={{ borderColor: card.accent.border, background: card.accent.background }}
              >
                <div className="mb-3 text-sm" style={{ color: card.accent.title }}>
                  {card.title}
                </div>
                <ul className="space-y-2 text-sm text-slate-600">
                  {card.bullets.map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4"
                        style={{ color: card.accent.icon }}
                      />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* footer note */}
          <div className="mt-10 text-center text-slate-700">
            技術は手段。目的は、人の心を動かすこと。<br className="hidden sm:block" />
            BUDDICAの理念と共に、人生を走り抜けていきたい。
          </div>
        </div>
      </div>
    </section>
  );
}
