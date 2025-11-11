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
            GMOコネクトの理念に共感して
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
              GMOコネクトの「価値あるつながりを提供する」「楽しく働く」に強く共感しています。<br />
              この2つは、私自身が大切にしてきた「人との信頼」「学び合う文化」と深く通じています。
            </p>
          </div>

          {/* body copy */}
          <div className="space-y-6 text-slate-700">
            <p className="text-lg leading-relaxed">
              <strong>「価値あるつながり」</strong>とは、信頼と成長を土台に挑戦を支え合い、新しい価値を共に生み出す関係性です。
              顧客・仲間・組織がつながることで、利益だけでなく“人の成長”が循環する——その仕組みを広げていくことが、私のエンジニアとしての使命です。
            </p>
            <p className="text-lg leading-relaxed">
              <strong>「楽しく働くこと」</strong>とは、挑戦と学びを仲間と共有し、安心して意見を交わせる環境をつくること。
              失敗を責めずに次へつなげることで、真の“働く喜び”が生まれると考えています。
            </p>
          </div>

          {/* quote */}
          <div className="my-10 rounded-2xl border border-emerald-100 bg-gradient-to-r from-emerald-50/80 to-sky-50/80 p-6 text-center shadow-sm">
            <div className="mx-auto mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100">
              <Lightbulb className="h-4 w-4 text-emerald-700" />
            </div>
            <p className="text-base leading-relaxed text-slate-800">
              「信頼でつながり、共に成長できる職場をつくりたい。」<br />
              その積み重ねが、価値ある未来を形にすると信じています。
            </p>
          </div>

          {/* two columns */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* left card */}
            <div className="group rounded-2xl border border-emerald-100 bg-white/70 p-6 shadow-md transition hover:shadow-lg">
              <div className="mb-3 text-sm text-emerald-700">価値あるつながり</div>
              <ul className="space-y-2 text-sm text-slate-600">
                {[
                  '信頼と成長を土台に、挑戦を支え合う',
                  '顧客・仲間・組織が共に価値を生み出す',
                  '成果と学びが循環する仕組みをつくる',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* right card */}
            <div className="group rounded-2xl border border-sky-100 bg-white/70 p-6 shadow-md transition hover:shadow-lg">
              <div className="mb-3 text-sm text-sky-700">楽しく働く</div>
              <ul className="space-y-2 text-sm text-slate-600">
                {[
                  '心理的安全性のある環境で挑戦を楽しむ',
                  '個々の強みを尊重し、学びを共有する',
                  '挑戦と笑顔が共に循環するチームを育てる',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-sky-500" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* footer note */}
          <div className="mt-10 text-center text-slate-700">
            仕事を通じて、人と人、思いと価値がつながっていく。<br className="hidden sm:block" />
            その"つながりの輪"の中で、変わり続けながら貢献していきたい。
          </div>
        </div>
      </div>
    </section>
  );
}
