
import React, { useState, useEffect, useRef } from 'react';
import { 
  BookOpen, BrainCircuit, Layout, Network, Cpu, Search, 
  CheckCircle2, HelpCircle, Menu, X, Sparkles, Send, Loader2, MessageSquare
} from 'lucide-react';
import { CategoryType, Question } from './types';
import { QUESTIONS } from './constants';
import { askTutor } from './geminiService';

// --- AI Chat Drawer ---
const AIChatDrawer = ({ isOpen, onClose, initialQuery = "" }: { isOpen: boolean, onClose: () => void, initialQuery?: string }) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialQuery && isOpen) {
      handleSend(initialQuery);
    }
  }, [initialQuery, isOpen]);

  useEffect(() => {
    scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight);
  }, [messages]);

  const handleSend = async (text: string) => {
    const query = text || input;
    if (!query.trim()) return;

    setMessages(prev => [...prev, { role: 'user', text: query }]);
    setInput("");
    setLoading(true);

    const response = await askTutor(query);
    setMessages(prev => [...prev, { role: 'ai', text: response }]);
    setLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-y-0 left-0 w-full sm:w-96 bg-white shadow-2xl z-[60] flex flex-col border-r animate-in slide-in-from-left duration-300">
      <div className="p-6 border-b bg-indigo-600 text-white flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Sparkles size={20} />
          <h2 className="font-bold">المعلم الذكي AI</h2>
        </div>
        <button onClick={onClose} className="hover:bg-indigo-700 p-1 rounded-lg transition-colors"><X size={20} /></button>
      </div>
      
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
        {messages.length === 0 && (
          <div className="text-center py-10 px-6">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="text-indigo-600" />
            </div>
            <p className="text-sm text-slate-500 font-medium">مرحباً! أنا معلمك الذكي. كيف يمكنني مساعدتك في التحضير لماجستير علوم الويب اليوم؟</p>
          </div>
        )}
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${m.role === 'user' ? 'bg-indigo-600 text-white rounded-br-none' : 'bg-white border text-slate-700 rounded-bl-none shadow-sm'}`}>
              {m.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-white border p-4 rounded-2xl flex items-center gap-2">
              <Loader2 size={16} className="animate-spin text-indigo-600" />
              <span className="text-xs text-slate-500">جاري التفكير...</span>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 border-t bg-white">
        <div className="relative">
          <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend("")}
            placeholder="اسأل المعلم عن أي مفهوم..."
            className="w-full pl-12 pr-4 py-3 bg-slate-100 rounded-xl border-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm"
          />
          <button 
            onClick={() => handleSend("")}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Question Card with AI Helper ---
const QuestionCard = ({ question, onAskAI }: { question: Question, onAskAI: (q: string) => void }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden group hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-50/50 transition-all duration-300 flex flex-col">
      <div className="p-7 flex-1">
        <div className="flex justify-between items-start mb-6">
          <span className="text-[10px] font-black px-3 py-1 bg-slate-100 text-slate-500 rounded-full uppercase tracking-tighter">
            {question.category}
          </span>
          {showAnswer && (
            <button 
              onClick={() => onAskAI(`اشرح لي بتبسيط هذا السؤال وجوابه: السؤال: ${question.question} | الجواب: ${question.answer}`)}
              className="flex items-center gap-1.5 text-[10px] font-bold text-indigo-600 hover:bg-indigo-50 px-2 py-1 rounded-lg transition-colors"
            >
              <Sparkles size={12} />
              شرح بالذكاء الاصطناعي
            </button>
          )}
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
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    // Pick 10 random questions
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    setQuizQuestions(shuffled.slice(0, 10));
  }, [questions]);

  const handleAnswer = (correct: boolean) => {
    if (correct) setScore(s => s + 1);
    if (currentIdx < quizQuestions.length - 1) {
      setCurrentIdx(i => i + 1);
      setShowResult(false);
    } else {
      setFinished(true);
    }
  };

  if (quizQuestions.length === 0) return null;
  if (finished) {
    const percentage = Math.round((score / quizQuestions.length) * 100);
    return (
      <div className="max-w-xl mx-auto py-12 px-4">
        <div className="bg-white p-12 rounded-[40px] shadow-2xl shadow-indigo-100 border border-slate-100 text-center">
          <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-8 ${percentage >= 60 ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-100 text-rose-600'}`}>
            <CheckCircle2 size={40} />
          </div>
          <h2 className="text-3xl font-black text-slate-900 mb-2">اكتمل الاختبار!</h2>
          <p className="text-slate-500 mb-10">استعد لمفاضلة MWS بكل ثقة.</p>
          <div className="text-4xl font-black text-indigo-600 mb-10">{percentage}%</div>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-slate-50 p-4 rounded-2xl">
              <p className="text-[10px] font-bold text-slate-400 uppercase">صحيحة</p>
              <p className="text-xl font-bold text-emerald-600">{score}</p>
            </div>
             <div className="bg-slate-50 p-4 rounded-2xl">
              <p className="text-[10px] font-bold text-slate-400 uppercase">خاطئة</p>
              <p className="text-xl font-bold text-rose-600">{quizQuestions.length - score}</p>
            </div>
          </div>
          <button 
            onClick={() => window.location.reload()}
            className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black hover:bg-indigo-700 transition-all shadow-xl"
          >
            إعادة اختبار جديد
          </button>
        </div>
      </div>
    );
  }

  const q = quizQuestions[currentIdx];
  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <div className="mb-8 flex justify-between items-center">
        <h2 className="text-xl font-black text-slate-900">سؤال {currentIdx + 1} من {quizQuestions.length}</h2>
        <div className="h-2 w-32 bg-slate-100 rounded-full"><div className="h-full bg-indigo-600 rounded-full" style={{width: `${((currentIdx+1)/quizQuestions.length)*100}%`}}></div></div>
      </div>
      <div className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-200 mb-8 min-h-[350px] flex flex-col justify-between">
        <p className="text-2xl font-bold text-center text-slate-800 leading-relaxed">{q.question}</p>
        {!showResult ? (
          <button onClick={() => setShowResult(true)} className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black hover:bg-black transition-all">كشف الإجابة</button>
        ) : (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
            <div className="p-6 bg-indigo-600 text-white rounded-3xl text-center font-bold">{q.answer}</div>
            <div className="grid grid-cols-2 gap-4">
              <button onClick={() => handleAnswer(true)} className="py-4 bg-emerald-500 text-white rounded-2xl font-bold shadow-lg shadow-emerald-50">صح</button>
              <button onClick={() => handleAnswer(false)} className="py-4 bg-rose-500 text-white rounded-2xl font-bold shadow-lg shadow-rose-50">خطأ</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [aiDrawerOpen, setAiDrawerOpen] = useState(false);
  const [aiInitialQuery, setAiInitialQuery] = useState("");
  const [category, setCategory] = useState<CategoryType | 'all' | 'quiz'>('all');
  const [mode, setMode] = useState<'study' | 'quiz'>('study');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredQuestions = QUESTIONS.filter(q => {
    const matchesCat = category === 'all' || q.category === category;
    const matchesSearch = q.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          q.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const openAIWithQuery = (q: string) => {
    setAiInitialQuery(q);
    setAiDrawerOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 lg:pr-72 font-['Tajawal']">
      <AIChatDrawer 
        isOpen={aiDrawerOpen} 
        onClose={() => { setAiDrawerOpen(false); setAiInitialQuery(""); }} 
        initialQuery={aiInitialQuery} 
      />
      
      <Sidebar 
        isOpen={sidebarOpen} 
        setIsOpen={setSidebarOpen} 
        activeCategory={category} 
        setActiveCategory={setCategory}
        setMode={setMode}
      />
      
      <div className="flex flex-col min-h-screen">
        <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-xl border-b px-6 py-4 flex justify-between items-center lg:pr-80">
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2"><Menu /></button>
          <div className="flex items-center gap-3">
             <div className="text-left hidden sm:block">
               <p className="text-xs font-bold text-slate-900">MWS MASTER AI</p>
             </div>
             <button 
              onClick={() => setAiDrawerOpen(true)}
              className="bg-indigo-600 text-white px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-bold shadow-lg shadow-indigo-100 hover:scale-105 transition-all"
             >
               <Sparkles size={16} />
               اسأل المعلم
             </button>
          </div>
        </header>
        
        <main className="flex-1 p-6 lg:p-12 max-w-7xl mx-auto w-full">
          {mode === 'study' ? (
            <>
              <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-2">
                  <h1 className="text-4xl font-black text-slate-900">
                    {category === 'all' ? 'دليل الدراسة' : category}
                  </h1>
                  <p className="text-slate-500">تم دمج 400 سؤال وجواب مع دعم كامل من الذكاء الاصطناعي.</p>
                </div>
                <div className="relative w-full max-w-sm">
                  <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input 
                    type="text" 
                    placeholder="ابحث عن سؤال..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pr-12 pl-5 py-4 rounded-2xl bg-white border border-slate-200 focus:ring-4 focus:ring-indigo-50 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredQuestions.map(q => (
                  <QuestionCard key={q.id} question={q} onAskAI={openAIWithQuery} />
                ))}
              </div>
            </>
          ) : (
            <QuizMode questions={category === 'quiz' || category === 'all' ? QUESTIONS : filteredQuestions} />
          )}
        </main>
      </div>

      {/* Floating AI Action */}
      <button 
        onClick={() => setAiDrawerOpen(true)}
        className="fixed bottom-6 right-6 lg:right-auto lg:left-6 w-14 h-14 bg-indigo-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-40 group"
      >
        <Sparkles size={24} className="group-hover:rotate-12 transition-transform" />
      </button>
    </div>
  );
}

const Sidebar = ({ isOpen, setIsOpen, activeCategory, setActiveCategory, setMode }: any) => (
  <>
    <div className={`fixed inset-0 bg-slate-900/60 z-40 lg:hidden ${isOpen ? 'block' : 'hidden'}`} onClick={() => setIsOpen(false)} />
    <aside className={`fixed top-0 bottom-0 right-0 w-72 bg-white border-l z-50 transition-transform lg:translate-x-0 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="p-8 border-b font-black text-xl text-indigo-600">MWS MASTER</div>
      <nav className="p-4 space-y-1">
        {[
          { id: 'all', label: 'الكل', icon: BookOpen, type: 'study' },
          { id: CategoryType.WEB, label: 'الويب', icon: Layout, type: 'study' },
          { id: CategoryType.ALGO, label: 'الخوارزميات', icon: BrainCircuit, type: 'study' },
          { id: CategoryType.NETWORK, label: 'الشبكات', icon: Network, type: 'study' },
          { id: CategoryType.COMPILER, label: 'المترجمات', icon: Cpu, type: 'study' },
          { id: 'quiz', label: 'اختبار تجريبي', icon: CheckCircle2, type: 'quiz' },
        ].map(item => (
          <button
            key={item.id}
            onClick={() => { setActiveCategory(item.id); setMode(item.type); setIsOpen(false); }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeCategory === item.id ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-600 hover:bg-slate-50'}`}
          >
            <item.icon size={18} />
            <span className="text-sm font-bold">{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  </>
);
