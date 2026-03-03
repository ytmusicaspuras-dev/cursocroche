import { useState, useRef } from 'react'
import { Scissors, ChevronLeft, ChevronRight, Download, ExternalLink, Play } from 'lucide-react'

// ============================================================
// DADOS DOS MÓDULOS
// ============================================================
const modules = [
  {
    id: 1,
    title: '🎓 Aprendendo Crochê em 30 Dias',
    subtitle: 'Iniciante',
    gradient: 'from-pink-50 to-rose-50',
    accent: 'text-rose-500',
    border: 'border-rose-200',
    videos: [
      { title: 'AULA 1 - Lista de Matérias', url: 'https://www.youtube.com/watch?v=acufR1Y6Vv4' },
      { title: 'AULA 2 - Pontos Básicos', url: 'https://www.youtube.com/watch?v=kUfrScSHJCc' },
      { title: 'AULA 3 - Diminuição e Aumento', url: 'https://www.youtube.com/watch?v=mAn6VqsKJTg' },
      { title: 'AULA 4 - Ponto Alto Relevo, Picô e X', url: 'https://www.youtube.com/watch?v=KBpE21MNpLo' },
      { title: 'AULA 5 - Ponto V, Leque, Quadradinhos', url: 'https://www.youtube.com/watch?v=o2FlB0cKICQ' },
      { title: 'AULA 6', url: 'https://www.youtube.com/watch?v=lDo0CyQSfRU' },
      { title: 'Ponto Segredo - Aprendendo Crochê', url: 'https://www.youtube.com/watch?v=gcckZCuz4kw' },
      { title: 'Ponto Torcido em Crochê - Passo a Passo', url: 'https://www.youtube.com/watch?v=crnealWmQM0' },
      { title: 'Como Lavar Peça em Crochê - Dica', url: 'https://www.youtube.com/watch?v=piPy8pqwtOU' },
      { title: 'Square em Crochê para Aplicação', url: 'https://www.youtube.com/watch?v=xwfXbDRqcFM' },
      { title: 'Ponto com Flor em Crochê', url: 'https://www.youtube.com/watch?v=J3p45hoE_oI' },
      { title: 'Como Fazer Tassel e Cordão em Crochê', url: 'https://www.youtube.com/watch?v=IBx052I_Qp0' },
      { title: 'União de Square Invisível - Modelo 1', url: 'https://www.youtube.com/watch?v=EWeAuohWp6g' },
      { title: '(Canhoto) Bojo em Crochê para Iniciantes', url: 'https://www.youtube.com/watch?v=molm9DkWPCA' },
      { title: 'Aprenda a Colocar Elástico na Peça', url: 'https://www.youtube.com/watch?v=JVWYvRzaaXY' },
      { title: '(Destro) Bojo em Crochê para Iniciantes', url: 'https://www.youtube.com/watch?v=KZq1zTk-gbc' },
    ],
  },
  {
    id: 2,
    title: '👙 Moda Praia Biquínis',
    subtitle: 'Intermediário',
    gradient: 'from-sky-50 to-blue-50',
    accent: 'text-sky-500',
    border: 'border-sky-200',
    videos: [
      { title: 'Biquíni de Crochê Brasil - Parte 1 (Sutiã)', url: 'https://www.youtube.com/watch?v=subXBmVEx0M' },
      { title: 'Biquíni de Crochê Brasil - Parte 2 (Calcinha)', url: 'https://www.youtube.com/watch?v=S6g5r_bVONA' },
      { title: 'Biquíni BRASIL Fio Dental', url: 'https://www.youtube.com/watch?v=rA8hscuefpE' },
      { title: 'TOP Biquíni de Crochê Brasil Copa 2026', url: 'https://www.youtube.com/watch?v=llkI-Zzi2PY' },
      { title: 'Bandeirinha do Brasil - Receita Bônus', url: 'https://www.youtube.com/watch?v=aXWj3u66VoI' },
      { title: 'Biquíni CORTININHA Brasil em Crochê', url: 'https://www.youtube.com/watch?v=0OcV0ptqqek' },
      { title: 'Biquíni de Crochê Búzios', url: 'https://www.youtube.com/watch?v=3YbqjR9cpH8' },
      { title: 'Biquíni de Crochê Plus Size', url: 'https://www.youtube.com/watch?v=uBlMtSIH1g4' },
      { title: 'Biquíni Calcinha com Elástico', url: 'https://www.youtube.com/watch?v=c8cYP61HVrg' },
      { title: 'Como Forrar Calcinha em Crochê', url: 'https://www.youtube.com/watch?v=hXpCOq4rc3I' },
      { title: 'Biquíni Fio Dental de Crochê', url: 'https://www.youtube.com/watch?v=KWhhZsONniA' },
      { title: 'TOP Biquini Crochê', url: 'https://www.youtube.com/watch?v=SLM2JKBZbdk' },
      { title: 'Biquíni Empina Bumbum', url: 'https://www.youtube.com/watch?v=kHsbYwCLaSY' },
      { title: 'Sutiã Bojo em Crochê Biquini', url: 'https://www.youtube.com/watch?v=jdjUN9Zet0o' },
      { title: 'Como Fazer Biquíni de Crochê com Lycra', url: 'https://www.youtube.com/watch?v=k2L1ixNGbhk' },
      { title: 'Biquíni Dupla Face Kini Neon - Parte 1', url: 'https://www.youtube.com/watch?v=mcDt2SZ-lJ4' },
      { title: 'Biquíni Dupla Face Kini Neon - Parte 2', url: 'https://www.youtube.com/watch?v=is53DWKC9zw' },
      { title: 'Biquíni Mar de Pérolas', url: 'https://www.youtube.com/watch?v=2rSi5Va34dg' },
      { title: 'Calcinha Fio Dental Slim', url: 'https://www.youtube.com/watch?v=PgaoOtNaqAE' },
      { title: 'Lenço / Canga de Crochê / Saída de Praia', url: 'https://www.youtube.com/watch?v=pfwIjRLyf4I' },
      { title: 'Top/Biquíni Flor do Campo', url: 'https://www.youtube.com/watch?v=ueB6JuUMz8s' },
      { title: 'Top de Crochê Copa do Mundo', url: 'https://www.youtube.com/watch?v=A_gK2iB65ZQ' },
      { title: 'Biquíni Rosa Gigante - Sutiã', url: 'https://www.youtube.com/watch?v=rPg7Fv5Cb0o' },
      { title: 'Biquíni / Top Rosa Gigante Tamanho M', url: 'https://www.youtube.com/watch?v=rMGH5VutcBc' },
      { title: 'Biquíni Simples no Crochê', url: 'https://www.youtube.com/watch?v=km8-fDbh5vk' },
      { title: 'Biquíni Harmonia Tropical', url: 'https://www.youtube.com/watch?v=99HiITSZJD0' },
      { title: 'Biquíni Inspiração Virgínia', url: 'https://www.youtube.com/watch?v=OZWRu9BeOWA' },
      { title: 'Biquíni Sereia / Afrodite Tamanho M', url: 'https://www.youtube.com/watch?v=4htVDSlWXSI' },
    ],
  },
  {
    id: 3,
    title: '🏆 Cropped Copa do Mundo',
    subtitle: 'Intermediário',
    gradient: 'from-amber-50 to-yellow-50',
    accent: 'text-amber-500',
    border: 'border-amber-200',
    videos: [
      { title: 'Cropped de Crochê COPA DO MUNDO 2026 - Modelo 1', url: 'https://www.youtube.com/watch?v=FnM2MfxbEJE' },
      { title: 'Cropped Brasil de Crochê', url: 'https://www.youtube.com/watch?v=AtIOS9xGvE4' },
      { title: 'Top/Cropped de Crochê Brasil PP-GG', url: 'https://www.youtube.com/watch?v=6zcvUPE6bAQ' },
      { title: 'Passo a Passo - Cropped Frente Única', url: 'https://www.youtube.com/watch?v=0Kt5seKElpM' },
      { title: 'Top Frente Única Brasil - Super Econômico', url: 'https://www.youtube.com/watch?v=P2ShSEo4AM8' },
      { title: 'CROPPED BANDEIRA DO BRASIL', url: 'https://www.youtube.com/watch?v=KvC-OxMCNPs' },
      { title: 'TOP FAIXA COM NOME BRASIL', url: 'https://www.youtube.com/watch?v=pZcukl0Z0cs' },
      { title: 'Customização de Short em Crochê Copa', url: 'https://www.youtube.com/watch?v=UaXOLA63W9Q' },
      { title: 'Cropped Crochê Asa Borboleta Brasil', url: 'https://www.youtube.com/watch?v=MtWvESgHwPo' },
      { title: 'TOP DE CROCHÊ COPA DO MUNDO', url: 'https://www.youtube.com/watch?v=ZfKA6GL-M1M' },
      { title: 'Cropped Brasil 🇧🇷 Muito Fácil', url: 'https://www.youtube.com/watch?v=6LZIw470TJI' },
      { title: 'Sobretop Strass do Brasil', url: 'https://www.youtube.com/watch?v=UUijlc74wP4' },
      { title: 'Cropped de Crochê COPA DO MUNDO 2026', url: 'https://www.youtube.com/watch?v=H99pwm2Pk-U' },
      { title: 'CROPPED TOMARA QUE CAIA 2026', url: 'https://www.youtube.com/watch?v=V51l9DTZSRI' },
      { title: 'Top Copa do Mundo! Tendência', url: 'https://www.youtube.com/watch?v=E79EJU-ktNI' },
    ],
  },
]

const pdfs = [
  { title: 'Biquíni Premium Areia', url: 'https://crochedalana.lovable.app/pdfs/Biquini_Premium_Areia.pdf' },
  { title: 'Biquíni Flor 2', url: 'https://crochedalana.lovable.app/pdfs/Biquini_Flor_2.pdf' },
  { title: 'Biquíni Flor', url: 'https://crochedalana.lovable.app/pdfs/Biquini_Flor.pdf' },
  { title: 'Biquíni Jardim', url: 'https://crochedalana.lovable.app/pdfs/Biquini_Jardim.pdf' },
  { title: 'Biquíni Lagoa', url: 'https://crochedalana.lovable.app/pdfs/Biquini_Lagoa.pdf' },
  { title: 'Biquíni Mar e Sol', url: 'https://crochedalana.lovable.app/pdfs/Biquini_Mar_e_Sol.pdf' },
  { title: 'Biquíni Mik', url: 'https://crochedalana.lovable.app/pdfs/Biquini_Mik.pdf' },
  { title: 'Biquíni Quartzo 2', url: 'https://crochedalana.lovable.app/pdfs/Biquini_Quartzo_2.pdf' },
  { title: 'Biquíni Quartzo', url: 'https://crochedalana.lovable.app/pdfs/Biquini_Quartzo.pdf' },
  { title: 'Biquíni Reforçado Anne', url: 'https://crochedalana.lovable.app/pdfs/Biquini_Reforcado_Anne.pdf' },
]

const driveLinks = [
  { title: '📁 Mais Receitas 1', url: 'https://drive.google.com/drive/folders/1ETQ23oEuRnM35cfWqvuqTLyZIPIepizx' },
  { title: '📁 Mais Receitas 2', url: 'https://drive.google.com/drive/folders/1T2jpeekcER3xtEG3P-QkOSNaedZISbpl' },
  { title: '📁 +2000 Receitas Variadas', url: 'https://drive.google.com/drive/folders/1KfInA9XDh1hu-MJN5bfxKKQYA2mSJSa1' },
]

// ============================================================
// COMPONENTE DE THUMBNAIL DO YOUTUBE
// ============================================================
function getYouTubeId(url) {
  const match = url.match(/[?&]v=([^&]+)/)
  return match ? match[1] : null
}

function VideoCard({ video }) {
  const videoId = getYouTubeId(video.url)
  const thumb = videoId
    ? `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`
    : null

  return (
    <a
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-shrink-0 w-52 group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-xl shadow-sm border border-gray-100 group-hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
        {thumb ? (
          <img
            src={thumb}
            alt={video.title}
            className="w-full h-32 object-cover"
          />
        ) : (
          <div className="w-full h-32 bg-gradient-to-br from-rose-100 to-pink-200 flex items-center justify-center">
            <Play className="w-8 h-8 text-rose-400" />
          </div>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
          <div className="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
            <Play className="w-4 h-4 text-white ml-0.5" fill="white" />
          </div>
        </div>
      </div>
      <p className="mt-2 text-xs font-600 text-gray-700 line-clamp-2 group-hover:text-rose-500 transition-colors duration-200">
        {video.title}
      </p>
    </a>
  )
}

// ============================================================
// COMPONENTE DE SEÇÃO DE VÍDEOS (CARROSSEL)
// ============================================================
function VideoSection({ module }) {
  const scrollRef = useRef(null)

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({ left: dir * 220, behavior: 'smooth' })
  }

  return (
    <section className={`py-8 px-4 md:px-8 bg-gradient-to-r ${module.gradient} rounded-2xl mx-4 md:mx-8 mb-6`}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className={`text-xl font-800 ${module.accent}`}>{module.title}</h2>
          <span className={`text-xs font-600 px-2 py-0.5 rounded-full border ${module.border} ${module.accent} bg-white/60`}>
            {module.subtitle} · {module.videos.length} aulas
          </span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => scroll(-1)}
            className="w-8 h-8 rounded-full bg-white shadow border border-gray-200 flex items-center justify-center hover:bg-rose-50 transition-colors"
          >
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          </button>
          <button
            onClick={() => scroll(1)}
            className="w-8 h-8 rounded-full bg-white shadow border border-gray-200 flex items-center justify-center hover:bg-rose-50 transition-colors"
          >
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-2"
        style={{ scrollbarWidth: 'thin' }}
      >
        {module.videos.map((video, i) => (
          <VideoCard key={i} video={video} />
        ))}
      </div>
    </section>
  )
}

// ============================================================
// COMPONENTE PRINCIPAL
// ============================================================
export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-rose-500 rounded-xl flex items-center justify-center shadow">
              <Scissors className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-800 text-gray-800 leading-tight">Crochê da Simone</h1>
              <p className="text-xs text-gray-400 leading-tight">por Simone Rocha</p>
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <div className="bg-gradient-to-r from-rose-500 to-pink-600 text-white py-10 px-4 md:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-800 mb-2">🧶 Crochê da Simone</h2>
          <p className="text-rose-100 text-base font-400">
            Aprenda crochê do zero com aulas práticas e carinhosas
          </p>
          <p className="mt-1 text-rose-200 text-sm font-300">por <strong className="text-white">Simone Rocha</strong></p>
        </div>
      </div>

      {/* MÓDULOS DE VÍDEO */}
      <main className="max-w-7xl mx-auto py-6">
        {modules.map((mod) => (
          <VideoSection key={mod.id} module={mod} />
        ))}

        {/* SEÇÃO DE PDFs */}
        <section className="mx-4 md:mx-8 mb-6 py-8 px-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl">
          <h2 className="text-xl font-800 text-emerald-600 mb-1">📄 Receitas e Moldes Premium</h2>
          <p className="text-xs text-emerald-500 mb-5 font-600">PDFs exclusivos para download</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {pdfs.map((pdf, i) => (
              <a
                key={i}
                href={pdf.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 p-4 bg-white rounded-xl border border-emerald-100 hover:border-emerald-300 hover:shadow-md transition-all duration-200 text-center"
              >
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-500 transition-colors">
                  <Download className="w-5 h-5 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <span className="text-xs font-600 text-gray-700 group-hover:text-emerald-600 transition-colors leading-tight">
                  {pdf.title}
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* SEÇÃO DRIVE */}
        <section className="mx-4 md:mx-8 mb-8 py-8 px-6 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl">
          <h2 className="text-xl font-800 text-purple-600 mb-1">📁 Gráficos e Receitas</h2>
          <p className="text-xs text-purple-400 mb-5 font-600">Material complementar no Google Drive</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {driveLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-4 bg-white rounded-xl border border-purple-100 hover:border-purple-300 hover:shadow-md transition-all duration-200"
              >
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-500 transition-colors flex-shrink-0">
                  <ExternalLink className="w-5 h-5 text-purple-600 group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm font-700 text-gray-700 group-hover:text-purple-600 transition-colors">
                  {link.title}
                </span>
              </a>
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-gray-100 py-6 text-center text-xs text-gray-400">
        © 2025 <strong className="text-gray-500">Simone Rocha</strong> — Crochê da Simone. Todos os direitos reservados.
      </footer>
    </div>
  )
}
