import { Sparkles, Zap, Bell } from 'lucide-react';

export default function Groppy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-emerald-50 to-sky-50 p-8 overflow-y-auto flex items-center justify-center">
      <div className="max-w-5xl w-full py-8">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-gradient-to-br from-emerald-500 to-emerald-400 rounded-xl">
            <Sparkles className="w-8 h-8 text-white" strokeWidth={2} />
          </div>
          <div>
            <h2 className="text-slate-800">Groppy</h2>
            <p className="text-slate-600 text-lg">AI情報収集・要約プラットフォーム</p>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-slate-100 space-y-6">
          <p className="text-slate-700 leading-relaxed">
            AIを活用して、インターネット上の情報を収集・要約・通知する個人開発プロジェクト。<br />
            ユーザーがSlackやLINEで『今欲しい情報』を受け取れる仕組みを構想中。
          </p>

          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              UI Mock
            </div>
            <div className="flex flex-col gap-4 lg:flex-row">
              <figure className="flex-1 rounded-2xl border border-slate-200 bg-white shadow-md p-4">
                <figcaption className="mb-3">
                  <p className="text-sm font-semibold text-slate-800">PCダッシュボード</p>
                  <p className="text-xs text-emerald-600">トレンドやキーワードを横断可視化</p>
                </figcaption>
                <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-3">
                  <img
                    src="/images/groppy_image1.png"
                    alt="Groppy PCダッシュボード"
                    className="w-full max-h-48 object-contain"
                    loading="lazy"
                  />
                </div>
              </figure>

              <figure className="flex-1 rounded-2xl border border-slate-200 bg-white shadow-md p-4">
                <figcaption className="mb-3">
                  <p className="text-sm font-semibold text-slate-800">要約ニュースボード</p>
                  <p className="text-xs text-slate-500">Slack / LINEでサクッと読める要約カード</p>
                </figcaption>
                <div className="mx-auto max-w-xs rounded-[28px] border border-slate-100 bg-slate-50/70 p-3">
                  <div className="rounded-2xl border border-white overflow-hidden">
                    <img
                      src="/images/groppy_image2.png"
                      alt="Groppyモバイルカード"
                      className="w-full max-h-64 object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
              </figure>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="text-slate-800 text-lg">段階的構成</div>
            
            <div className="grid gap-3">
              <div className="p-4 bg-gradient-to-br from-emerald-50 to-white rounded-2xl border border-emerald-100">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center flex-shrink-0">1</div>
                  <div>
                    <div className="text-emerald-700 mb-1">MVP段階</div>
                    <p className="text-sm text-slate-600">DynamoDBのみで運用し低コストで試行</p>
                  </div>
                </div>
              </div>
              
              <div
                className="p-4 rounded-2xl border border-brand-blue-100"
                style={{
                  background: "linear-gradient(135deg, #eff6ff 0%, #ffffff 100%)",
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-blue-500 text-white flex items-center justify-center flex-shrink-0">2</div>
                  <div>
                    <div className="text-brand-blue-700 mb-1">発展段階</div>
                    <p className="text-sm text-slate-600">OpenAI Embeddingsによる検索精度向上（ベクトル化）</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-gradient-to-br from-violet-50 to-white rounded-2xl border border-violet-100">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-violet-500 text-white flex items-center justify-center flex-shrink-0">3</div>
                  <div>
                    <div className="text-violet-700 mb-1">拡張段階</div>
                    <p className="text-sm text-slate-600">ベクトルDB導入による意味検索・個人最適化</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-emerald-600" />
                <div className="text-slate-700">リアルタイム検索</div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Web/Slack → API Gateway → Lambda（Grok API） → DynamoDB
              </p>
            </div>
            
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <div className="flex items-center gap-2 mb-3">
                <Bell className="w-5 h-5 text-brand-blue-600" />
                <div className="text-slate-700">スケジュール通知</div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                EventBridge → Lambda（Grok要約） → Web/Slack/LINE通知
              </p>
            </div>
          </div>
          
          <div className="pt-4 border-t border-slate-200">
            <p className="text-sm text-slate-600 italic">
              まずはDynamoDBを軸に低コスト構成でMVPを構築し、将来的にはIaC化やベクトル検索拡張も視野に入れています。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
