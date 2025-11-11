import { Sparkles } from 'lucide-react';

export default function Cover() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-emerald-50 to-sky-50 p-8">
      <div className="text-center max-w-4xl">
        <div className="mb-12 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-sky-400 blur-3xl opacity-20"></div>
            <Sparkles className="w-24 h-24 text-emerald-500 relative" strokeWidth={1.5} />
          </div>
        </div>
        
        <h1 className="mb-6 text-slate-800">
          岡崎 直也｜技術で人と組織の成長を支えるエンジニア
        </h1>
        
        <div className="inline-block px-8 py-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-emerald-100 shadow-lg">
          <p className="text-slate-700 text-xl">
            「技術を手段に、人と組織の課題を解決し、仲間が描くビジョンを支え続ける。」
          </p>
        </div>
        
        <div className="mt-16 flex justify-center gap-8 opacity-40">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-emerald-400 to-sky-400"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-sky-400 rounded"></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-emerald-400 to-sky-400"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-sky-400 rounded"></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-emerald-400 to-sky-400"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-sky-400 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
