import { Briefcase, Rocket, Code2 } from 'lucide-react';

export default function TechStack() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-sky-50 p-8">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-gradient-to-br from-emerald-400 to-sky-400 rounded-xl">
            <Code2 className="w-8 h-8 text-white" strokeWidth={2} />
          </div>
          <h2 className="text-slate-800">技術構成（業務 × 自主研鑽）</h2>
        </div>

        {/* Grid layout for two cards */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* --- 業務経験 --- */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-slate-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-brand-green-100 rounded-lg">
                <Briefcase className="w-6 h-6 text-brand-green-600" />
              </div>
              <h3 className="text-slate-800">業務経験・担当領域</h3>
            </div>

            <div className="space-y-6">
              {/* 規模・役割 */}
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 bg-brand-green-50 text-brand-green-700 rounded-md text-xs border border-brand-green-100">
                  プレイングリーダー／技術フォロー
                </span>
                <span className="px-2.5 py-1 bg-brand-green-50 text-brand-green-700 rounded-md text-xs border border-brand-green-100">
                  見積もり作成・工数調整
                </span>
                <span className="px-2.5 py-1 bg-brand-green-50 text-brand-green-700 rounded-md text-xs border border-brand-green-100">
                  技術検証
                </span>
                <span className="px-2.5 py-1 bg-brand-green-50 text-brand-green-700 rounded-md text-xs border border-brand-green-100">
                  品質・セキュリティ重視
                </span>
              </div>

              {/* 担当工程 */}
              <div>
                <div className="text-sm text-brand-green-600 mb-2">担当工程</div>
                <div className="flex flex-wrap gap-2">
                  {['要件確認', '設計', '実装', '試験', 'ストアリリース', '保守改修'].map((label) => (
                    <span
                      key={label}
                      className="px-3 py-1 bg-brand-green-50 text-brand-green-700 rounded-lg text-sm border border-brand-green-100"
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>

              {/* 主な開発領域 */}
              <div>
                <div className="text-sm text-brand-green-600 mb-2">主な開発領域</div>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-green-500 mt-1">•</span>
                    <span>銀行・金融系スマホアプリの追加改修／OS対応（審査・セキュリティ対応含む）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-green-500 mt-1">•</span>
                    <span>カメラ・OCR・マイナンバー読取SDK等の連携開発</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-green-500 mt-1">•</span>
                    <span>Android／iOS の動作検証・審査対応・ストアリリース</span>
                  </li>
                </ul>
              </div>

              {/* 成果・役割 */}
              <div>
                <div className="text-sm text-brand-green-600 mb-2">成果・役割</div>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-green-500 mt-1">•</span>
                    <span>見積もり作成とスケジュール策定で、負荷と納期のバランスを最適化</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-green-500 mt-1">•</span>
                    <span>試験項目の見直しやリカバリデータ生成の自動化支援により、検証効率と品質を向上</span>
                  </li>
                </ul>
              </div>

              {/* 使用技術 */}
              <div className="pt-4 border-t border-brand-green-100">
                <div className="text-sm text-brand-green-600 mb-2">使用技術</div>
                <div className="flex flex-wrap gap-2">
                  {[
                    'C# / .NET Framework',
                    'WPF',
                    'Android Java',
                    'Objective-C',
                    'iOS',
                    'IIS / Windows Server',
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-brand-green-50 text-brand-green-700 rounded-lg text-sm border border-brand-green-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* --- 自主研鑽・個人開発 --- */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-slate-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-brand-blue-100 rounded-lg">
                <Rocket className="w-6 h-6 text-brand-blue-600" />
              </div>
              <h3 className="text-slate-800">自主研鑽・個人開発</h3>
            </div>

            <div className="space-y-5">
              {/* フロントエンド */}
              <div>
                <div className="text-sm text-brand-blue-600 mb-2">フロントエンド</div>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'TypeScript', 'Flutter'].map((t) => (
                    <span key={t} className="px-3 py-1 bg-brand-blue-50 text-brand-blue-700 rounded-lg text-sm border border-brand-blue-100">{t}</span>
                  ))}
                </div>
              </div>

              {/* バックエンド */}
              <div>
                <div className="text-sm text-brand-blue-600 mb-2">バックエンド</div>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Python'].map((t) => (
                    <span key={t} className="px-3 py-1 bg-brand-blue-50 text-brand-blue-700 rounded-lg text-sm border border-brand-blue-100">{t}</span>
                  ))}
                </div>
              </div>

              {/* 生成AI開発支援 */}
              <div>
                <div className="text-sm text-brand-blue-600 mb-2">生成AI開発支援</div>
                <div className="flex flex-wrap gap-2">
                  {['Claude Code', 'Codex CLI', 'Copilot', 'Q Developer', 'Bolt.new', 'leap.new', 'Manus'].map((t) => (
                    <span key={t} className="px-3 py-1 bg-brand-blue-50 text-brand-blue-700 rounded-lg text-sm border border-brand-blue-100">{t}</span>
                  ))}
                </div>
              </div>

              {/* AI・API連携 */}
              <div>
                <div className="text-sm text-brand-blue-600 mb-2">AI・API連携</div>
                <div className="flex flex-wrap gap-2">
                  {['OpenAI API', 'Grok API', 'LINE Messaging API', 'Slack Bot / API'].map((t) => (
                    <span key={t} className="px-3 py-1 bg-brand-blue-50 text-brand-blue-700 rounded-lg text-sm border border-brand-blue-100">{t}</span>
                  ))}
                </div>
              </div>

              {/* クラウド・データストア */}
              <div>
                <div className="text-sm text-brand-blue-600 mb-2">クラウド・データストア</div>
                <div className="flex flex-wrap gap-2">
                  {['Lambda', 'API Gateway', 'DynamoDB', 'S3', 'Cognito', 'CloudFront', 'IAM', 'Amplify'].map((t) => (
                    <span key={t} className="px-3 py-1 bg-brand-blue-50 text-brand-blue-700 rounded-lg text-sm border border-brand-blue-100">{t}</span>
                  ))}
                </div>
              </div>

              {/* 運用・コスト最適化 */}
              <div>
                <div className="text-sm text-brand-blue-600 mb-2">運用・コスト最適化</div>
                <div className="flex flex-wrap gap-2">
                  {['Athena', 'CUR（Cost & Usage Report）', 'Cost Explorer', 'S3', 'CloudWatch Logs', 'Slack通知連携'].map((t) => (
                    <span key={t} className="px-3 py-1 bg-brand-blue-50 text-brand-blue-700 rounded-lg text-sm border border-brand-blue-100">{t}</span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-brand-blue-100">
                <p className="text-sm text-slate-600 italic">
                  業務で培った設計・実装力を土台に、個人開発ではAI・クラウドを活用した次世代アプリ開発を探求中。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}