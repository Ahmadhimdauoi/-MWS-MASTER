
import React, { useState } from 'react';
import { 
  BookOpen, 
  BrainCircuit, 
  Layout, 
  Network, 
  Cpu, 
  Search, 
  CheckCircle2, 
  HelpCircle,
  Menu,
  X
} from 'lucide-react';
import { CategoryType, Question } from './types';
import { QUESTIONS } from './constants';

// --- Components ---

const Sidebar = ({ 
  isOpen, 
  setIsOpen, 
  activeCategory, 
  setActiveCategory,
  setMode 
}: { 
  isOpen: boolean, 
  setIsOpen: (o: boolean) => void, 
  activeCategory: CategoryType | 'all' | 'quiz', 
  setActiveCategory: (c: any) => void,
  setMode: (m: 'study' | 'quiz') => void
}) => {
  const items = [
    { id: 'all', label: 'دليل الدراسة الكامل', icon: BookOpen, type: 'study' },
    { id: CategoryType.WEB, label: 'برمجة وتصميم الويب', icon: Layout, type: 'study' },
    { id: CategoryType.ALGO, label: 'البرمجة والخوارزميات', icon: BrainCircuit, type: 'study' },
    { id: CategoryType.NETWORK, label: 'أساسيات الشبكات', icon: Network, type: 'study' },
    { id: CategoryType.COMPILER, label: 'المترجمات واللغات', icon: Cpu, type: 'study' },
    { id: 'quiz', label: 'اختبار تجريبي (Sim)', icon: CheckCircle2, type: 'quiz' },
  ];

  return (
    <>
      <div 
        className={`fixed inset-0 bg-slate-900/60 z-40 transition-opacity lg:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />
      <aside className={`fixed top-0 bottom-0 right-0 w-72 bg-white border-l z-50 transition-transform lg:translate-x-0 ${isOpen ? 'translate-x-0' : 'translate-x-full'} shadow-2xl lg:shadow-none`}>
        <div className="p-8 border-b flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">M</div>
            <h1 className="text-xl font-black text-slate-800 tracking-tight">MWS MASTER</h1>
          </div>
          <button onClick={() => setIsOpen(false)} className="lg:hidden p-2 text-slate-400"><X size={20} /></button>
        </div>
        <nav className="p-4 space-y-1.5 overflow-y-auto max-h-[calc(100vh-100px)]">
          <div className="text-[10px] font-bold text-slate-400 px-4 mb-2 uppercase tracking-widest">المحتوى الأكاديمي</div>
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveCategory(item.id);
                setMode(item.type as any);
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 group ${activeCategory === item.id ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200 font-bold scale-[1.02]' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <item.icon size={18} className={activeCategory === item.id ? 'text-white' : 'text-slate-400 group-hover:text-indigo-500'} />
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </nav>
        <div className="absolute bottom-6 left-6 right-6 p-4 bg-slate-50 rounded-2xl border border-slate-100">
           <p className="text-[11px] text-slate-500 leading-relaxed">بنيت لمساعدة طلاب SVU في تجاوز اختبار القبول بتفوق.</p>
        </div>
      </aside>
    </>
  );
};

const Header = ({ onOpenMenu }: { onOpenMenu: () => void }) => (
  <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-xl border-b px-6 py-4 flex justify-between items-center lg:pr-80">
    <div className="flex items-center gap-4">
      <button onClick={onOpenMenu} className="lg:hidden p-2 hover:bg-slate-100 rounded-xl transition-colors">
        <Menu size={22} className="text-slate-700" />
      </button>
    </div>
    <div className="flex items-center gap-4">
       <div className="text-left hidden sm:block">
         <p className="text-xs font-bold text-slate-900">مفاضلة MWS 2024/25</p>
         <p className="text-[10px] text-slate-500">الجامعة الافتراضية السورية</p>
       </div>
    </div>
  </header>
);

const QuestionCard: React.FC<{ question: Question }> = ({ question }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden group hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-50/50 transition-all duration-300 flex flex-col">
      <div className="p-7 flex-1">
        <div className="flex justify-between items-start mb-6">
          <span className="text-[10px] font-black px-3 py-1 bg-slate-100 text-slate-500 rounded-full uppercase tracking-tighter">
            {question.category}
          </span>
        </div>
        <h3 className="text-lg font-bold text-slate-800 leading-relaxed mb-6 group-hover:text-indigo-900 transition-colors">
          {question.question}
        </h3>
        
        {showAnswer ? (
          <div className="p-5 bg-indigo-50 rounded-2xl border border-indigo-100 text-indigo-900 animate-in fade-in zoom-in-95 duration-300">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 size={16} className="text-indigo-600" />
              <span className="text-xs font-black uppercase tracking-widest opacity-50">الإجابة النموذجية</span>
            </div>
            <p className="font-medium text-[15px] leading-relaxed">{question.answer}</p>
          </div>
        ) : (
          <button 
            onClick={() => setShowAnswer(true)}
            className="w-full py-4 bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl text-slate-400 hover:border-indigo-400 hover:text-indigo-600 hover:bg-white transition-all font-bold text-sm"
          >
            انقر لرؤية الإجابة
          </button>
        )}
      </div>
    </div>
  );
};

const QuizMode = ({ questions }: { questions: Question[] }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (correct: boolean) => {
    if (correct) setScore(s => s + 1);
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(i => i + 1);
      setShowResult(false);
    } else {
      setFinished(true);
    }
  };

  if (finished) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="max-w-xl mx-auto py-12 px-4">
        <div className="bg-white p-12 rounded-[40px] shadow-2xl shadow-indigo-100 border border-slate-100 text-center">
          <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-8 ${percentage >= 60 ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-100 text-rose-600'}`}>
            <CheckCircle2 size={40} />
          </div>
          <h2 className="text-3xl font-black text-slate-900 mb-2">اكتمل الاختبار!</h2>
          <p className="text-slate-500 mb-10">استعد لمفاضلة MWS بكل ثقة.</p>
          
          <div className="relative inline-block mb-10">
             <svg className="w-32 h-32 transform -rotate-90">
                <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-slate-100" />
                <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray={364.4} strokeDashoffset={364.4 - (364.4 * percentage) / 100} className="text-indigo-600 transition-all duration-1000 ease-out" />
             </svg>
             <div className="absolute inset-0 flex items-center justify-center text-3xl font-black text-slate-800">
               {percentage}%
             </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-slate-50 p-4 rounded-2xl">
              <p className="text-[10px] font-bold text-slate-400 uppercase">صحيحة</p>
              <p className="text-xl font-bold text-emerald-600">{score}</p>
            </div>
             <div className="bg-slate-50 p-4 rounded-2xl">
              <p className="text-[10px] font-bold text-slate-400 uppercase">خاطئة</p>
              <p className="text-xl font-bold text-rose-600">{questions.length - score}</p>
            </div>
          </div>

          <button 
            onClick={() => { setCurrentIdx(0); setScore(0); setFinished(false); }}
            className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 active:scale-95"
          >
            إعادة اختبار الفئة
          </button>
        </div>
      </div>
    );
  }

  const q = questions[currentIdx];

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <div className="mb-10 flex justify-between items-center">
        <div>
          <span className="text-[11px] font-black text-indigo-600 uppercase tracking-widest bg-indigo-50 px-3 py-1 rounded-full">المستوى الحالي</span>
          <h2 className="text-2xl font-black mt-2 text-slate-900">سؤال {currentIdx + 1} <span className="text-slate-300 text-lg">/ {questions.length}</span></h2>
        </div>
        <div className="text-left">
           <p className="text-xs font-bold text-slate-400 mb-2">معدل الإنجاز</p>
           <div className="h-2.5 w-32 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
             <div 
               className="h-full bg-indigo-600 transition-all duration-700 ease-out" 
               style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
             />
           </div>
        </div>
      </div>

      <div className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-200 mb-8 min-h-[400px] flex flex-col justify-between">
        <div className="flex-1 flex items-center justify-center py-10">
          <p className="text-2xl font-bold leading-relaxed text-slate-800 text-center">{q.question}</p>
        </div>
        
        {!showResult ? (
          <button 
            onClick={() => setShowResult(true)}
            className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black hover:bg-black transition-all shadow-xl active:scale-95"
          >
            كشف الإجابة الصحيحة
          </button>
        ) : (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-500">
            <div className="p-8 bg-indigo-600 text-white rounded-3xl shadow-xl shadow-indigo-100 text-center font-bold text-lg leading-relaxed">
              {q.answer}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={() => handleAnswer(true)}
                className="py-5 bg-emerald-500 text-white rounded-2xl font-black hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-100 active:scale-95"
              >
                كانت إجابتي صحيحة
              </button>
              <button 
                onClick={() => handleAnswer(false)}
                className="py-5 bg-rose-500 text-white rounded-2xl font-black hover:bg-rose-600 transition-all shadow-lg shadow-rose-100 active:scale-95"
              >
                أخطأت، سأراجعها
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [category, setCategory] = useState<CategoryType | 'all' | 'quiz'>('all');
  const [mode, setMode] = useState<'study' | 'quiz'>('study');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredQuestions = QUESTIONS.filter(q => {
    const matchesCat = category === 'all' || q.category === category;
    const matchesSearch = q.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          q.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 lg:pr-72 font-['Tajawal']">
      <Sidebar 
        isOpen={sidebarOpen} 
        setIsOpen={setSidebarOpen} 
        activeCategory={category} 
        setActiveCategory={setCategory}
        setMode={setMode}
      />
      
      <div className="flex flex-col min-h-screen">
        <Header onOpenMenu={() => setSidebarOpen(true)} />
        
        <main className="flex-1 p-6 lg:p-12 max-w-7xl mx-auto w-full">
          {mode === 'study' ? (
            <>
              <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-8 h-1 bg-indigo-600 rounded-full"></span>
                    <span className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.2em]">Learning Path</span>
                  </div>
                  <h1 className="text-4xl font-black text-slate-900 tracking-tight">
                    {category === 'all' ? 'دليل الدراسة الشامل' : category}
                  </h1>
                  <p className="text-slate-500 max-w-xl">استعرض الأسئلة الأكثر تكراراً في مفاضلة الماجستير وراجع إجاباتها بدقة.</p>
                </div>
                <div className="relative w-full max-w-sm">
                  <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input 
                    type="text" 
                    placeholder="ابحث عن سؤال أو تقنية..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pr-12 pl-5 py-4.5 rounded-2xl bg-white border border-slate-200 focus:ring-4 focus:ring-indigo-50 focus:border-indigo-400 outline-none transition-all shadow-sm font-medium"
                  />
                </div>
              </div>

              {filteredQuestions.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {filteredQuestions.map(q => (
                    <QuestionCard key={q.id} question={q} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-32 bg-white rounded-[40px] border border-dashed border-slate-300">
                  <HelpCircle size={64} className="mx-auto text-slate-200 mb-6" />
                  <h3 className="text-xl font-bold text-slate-400">لم نجد أي أسئلة تطابق بحثك</h3>
                  <p className="text-slate-300 mt-2">حاول البحث باستخدام كلمات مفتاحية أخرى</p>
                </div>
              )}
            </>
          ) : (
            <QuizMode questions={category === 'quiz' || category === 'all' ? QUESTIONS : filteredQuestions} />
          )}
        </main>
      </div>
    </div>
  );
}
