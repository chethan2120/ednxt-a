'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  MessageCircle,
  X,
  Send,
  Sparkles,
  Bot,
  User,
  GraduationCap,
  BookOpen,
  ArrowRight,
  RotateCcw,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Clock,
  HelpCircle,
  ExternalLink
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  options?: {
    label: string;
    value: string;
    action?: 'grade' | 'curriculum' | 'stream' | 'redirect' | 'trial' | 'reset';
    payload?: string;
  }[];
  recommendation?: {
    title: string;
    gradeText: string;
    curriculumText: string;
    streamText: string;
    highlights: string[];
    termFocus: string;
    targetUrl: string;
    targetButtonLabel: string;
  };
}

const FAQ_KNOWLEDGE_BASE = [
  {
    keywords: ['price', 'fee', 'cost', 'aed', 'tuition', 'expensive', 'package', 'bundle'],
    answer:
      'Our programmes are structured per 12-week academic term:\n• Core Bundle (Science + Maths): AED 2,999/term\n• Future-Skills Bundle (AI + Public Speaking): AED 2,999/term\n• Full Bundle (All 4 streams): AED 4,999/term.\nAll packages include weekly live classes, homework grading, and doubt clinics.'
  },
  {
    keywords: ['trial', 'free trial', 'demo', 'test class', 'sample'],
    answer:
      'Yes! We offer a 100% complimentary 1-on-1 diagnostic trial class. Your child meets a master mentor for a diagnostic evaluation and parents receive a baseline academic roadmap. No credit card required!'
  },
  {
    keywords: ['time', 'timing', 'schedule', 'when', 'days', 'calendar', 'sessions'],
    answer:
      'We run 3 terms per year (12 weeks each, 36 weeks total), aligned with UAE school terms.\n• Science & Maths: Two 60-min live sessions weekly + 1 doubt clinic.\n• AI & Public Speaking: One 60–75 min studio session weekly.\nBatches are scheduled after school hours and on weekends.'
  },
  {
    keywords: ['ncert', 'disclaimer', 'cbse', 'syllabus', 'textbook', 'revision'],
    answer:
      'Important Note: NCERT has been actively revising textbooks. Our chapter lists are structured at topic level. The actual syllabus is customized and paced based on mutual agreement between the student and mentor.'
  },
  {
    keywords: ['teacher', 'faculty', 'mentor', 'tutor', 'qualifications'],
    answer:
      'All EdNxt mentors are vetted subject-matter specialists with proven experience in CBSE and British KS3 pedagogy. We maintain an honest, high-retention teaching environment without exaggerated marketing claims.'
  },
  {
    keywords: ['online', 'offline', 'zoom', 'in-person', 'platform'],
    answer:
      'All classes are conducted live online in high-definition interactive small cohorts with virtual lab simulations, shared whiteboard canvases, and live debate breakouts.'
  }
];

export default function AcademicAdvisorChatbot() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [selectedGrade, setSelectedGrade] = useState<string | null>(null);
  const [selectedCurriculum, setSelectedCurriculum] = useState<string | null>(null);
  const [selectedStream, setSelectedStream] = useState<string | null>(null);
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const formatTime = () => {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Initialize conversation
  const startConversation = () => {
    setSelectedGrade(null);
    setSelectedCurriculum(null);
    setSelectedStream(null);

    setMessages([
      {
        id: 'msg-init-1',
        sender: 'bot',
        text: "Hello! 👋 I'm the **EdNxt Academic Advisor**.",
        timestamp: formatTime()
      },
      {
        id: 'msg-init-2',
        sender: 'bot',
        text: "Let's find the exact curriculum data, term syllabus, and schedule for your child in 30 seconds. **Which grade/year is your child currently in?**",
        timestamp: formatTime(),
        options: [
          { label: '🎓 Grade 6 (British Year 7)', value: 'grade-6', action: 'grade' },
          { label: '🎓 Grade 7 (British Year 8)', value: 'grade-7', action: 'grade' },
          { label: '🎓 Grade 8 (British Year 9)', value: 'grade-8', action: 'grade' }
        ]
      }
    ]);
  };

  useEffect(() => {
    startConversation();
  }, []);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleOptionClick = (option: { label: string; value: string; action?: string; payload?: string }) => {
    setHasInteracted(true);

    // Add user's choice
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: option.label,
      timestamp: formatTime()
    };

    setMessages((prev) => [...prev, userMsg]);

    setTimeout(() => {
      processNextStep(option.action || '', option.value, option.payload);
    }, 300);
  };

  const processNextStep = (action: string, value: string, payload?: string) => {
    const time = formatTime();

    if (action === 'grade') {
      const gradeMap: Record<string, string> = {
        'grade-6': 'Grade 6 / Year 7 (Ages 11–12)',
        'grade-7': 'Grade 7 / Year 8 (Ages 12–13)',
        'grade-8': 'Grade 8 / Year 9 (Ages 13–14)'
      };

      setSelectedGrade(value);

      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: `Selected: **${gradeMap[value] || value}**.\n\nA crucial middle school transition stage! Which academic curriculum does your child follow at school?`,
          timestamp: time,
          options: [
            { label: '🏛️ CBSE (NCERT Aligned)', value: 'cbse', action: 'curriculum' },
            { label: '🇬🇧 British Curriculum (KS3)', value: 'british', action: 'curriculum' },
            { label: '🌟 Both / Future-Skills Focus', value: 'future-skills', action: 'curriculum' }
          ]
        }
      ]);
    } else if (action === 'curriculum') {
      setSelectedCurriculum(value);

      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: `Got it! Now, **which field or stream are you looking to strengthen most?**`,
          timestamp: time,
          options: [
            { label: '🔬 Science (Physics, Chem, Bio & Labs)', value: 'science', action: 'stream' },
            { label: '📐 Mathematics (Algebra Leap & CRA Logic)', value: 'mathematics', action: 'stream' },
            { label: '🤖 AI for Students (Prompting & Tools)', value: 'ai', action: 'stream' },
            { label: '🎙️ Public Speaking (Poise & AREI Debate)', value: 'speaking', action: 'stream' },
            { label: '✨ All 4 Streams (Full Academy Bundle)', value: 'all', action: 'stream' }
          ]
        }
      ]);
    } else if (action === 'stream') {
      setSelectedStream(value);
      generateRecommendation(selectedGrade || 'grade-7', selectedCurriculum || 'cbse', value);
    } else if (action === 'redirect') {
      if (payload) {
        setIsOpen(false);
        router.push(payload);
      }
    } else if (action === 'reset') {
      startConversation();
    }
  };

  const generateRecommendation = (grade: string, curr: string, stream: string) => {
    const time = formatTime();
    let targetUrl = '/curriculum/cbse';
    let title = 'CBSE Science & Mathematics Programme';
    let targetButtonLabel = 'Redirect to CBSE Curriculum Page →';
    let termFocus = 'Term 1: Foundations & Matter | Term 2: Organisms & Algebra | Term 3: Optics & Geometry';
    let highlights = [
      'Two 60-min interactive live sessions weekly',
      'Virtual lab experiments & error-margin analysis',
      'Diagnostic baseline (Week 0) & Term reports'
    ];

    if (stream === 'science') {
      targetUrl = curr === 'british' ? '/curriculum/british' : '/courses/science';
      title = `${curr === 'british' ? 'British KS3' : 'CBSE'} Science Exploration`;
      targetButtonLabel = 'Redirect to Science Course Page →';
      highlights = [
        'Complete Biology, Chemistry & Physics syllabus',
        'Virtual laboratory experiments for every term',
        'NCERT revised topics & British KS3 mapping'
      ];
      termFocus = 'Empirical inquiry, hypothesis testing, and laboratory safety protocols.';
    } else if (stream === 'mathematics') {
      targetUrl = curr === 'british' ? '/curriculum/british' : '/courses/mathematics';
      title = `${curr === 'british' ? 'British KS3' : 'CBSE'} Mathematics Mastery`;
      targetButtonLabel = 'Redirect to Mathematics Page →';
      highlights = [
        'Concrete-Representational-Abstract (CRA) modeling',
        'Algebraic transition: variables, functions & geometry',
        '1 dedicated 1-on-1 doubt clearing clinic weekly'
      ];
      termFocus = 'Eliminates abstract math anxiety before high school GCSE/CBSE exams.';
    } else if (stream === 'ai') {
      targetUrl = '/courses/ai-for-students';
      title = 'AI for Students: Applied Future Skills';
      targetButtonLabel = 'Redirect to AI for Students Page →';
      highlights = [
        'Prompt architecture, tasks & context engineering',
        'Gemini Notebooks research synthesis',
        'Strict ethical AI verification & hallucination audits'
      ];
      termFocus = 'Week 12 Capstone: Original student research project utilizing ethical AI.';
    } else if (stream === 'speaking') {
      targetUrl = '/courses/public-speaking';
      title = 'Public Speaking & Leadership Rhetoric';
      targetButtonLabel = 'Redirect to Public Speaking Page →';
      highlights = [
        'Level 1: Confident Voice & Vocal Projection',
        'Level 2: Persuasive Speaker & AREI Debate Framework',
        'Level 3: Leader & Orator (3-Minute TED Capstone)'
      ];
      termFocus = 'Vocal poise forged before adolescent teenage self-consciousness sets in.';
    } else if (stream === 'all') {
      targetUrl = '/packages';
      title = 'EdNxt Full Academic & Future-Skills Bundle';
      targetButtonLabel = 'Redirect to Course Packages →';
      highlights = [
        'All 4 Streams: Science + Maths + AI + Public Speaking',
        'Core + Future-Ready bundle with full academic calendar',
        'Structured parent report cards after every 12-week term'
      ];
      termFocus = 'Complete holistic development: academic excellence plus 21st-century voice.';
    }

    // Build the bot recommendation response
    const recMsg: ChatMessage = {
      id: `bot-rec-${Date.now()}`,
      sender: 'bot',
      text: `🎯 **Here is the perfect learning pathway for your child:**`,
      timestamp: time,
      recommendation: {
        title,
        gradeText: grade.replace('grade-', 'Grade ').toUpperCase(),
        curriculumText: curr.toUpperCase(),
        streamText: stream.toUpperCase(),
        highlights,
        termFocus,
        targetUrl,
        targetButtonLabel
      },
      options: [
        {
          label: `🚀 ${targetButtonLabel}`,
          value: targetUrl,
          action: 'redirect',
          payload: targetUrl
        },
        {
          label: '📅 Book 1-on-1 Free Trial Class →',
          value: '/free-trial',
          action: 'redirect',
          payload: `/free-trial?grade=${grade}&curriculum=${curr}&stream=${stream}`
        },
        {
          label: '🔄 Search for Another Child / Stream',
          value: 'restart',
          action: 'reset'
        }
      ]
    };

    setMessages((prev) => [...prev, recMsg]);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const query = inputText.trim();
    setInputText('');

    // Append user message
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: formatTime()
    };

    setMessages((prev) => [...prev, userMsg]);

    // Match FAQ knowledge base or general fallback
    setTimeout(() => {
      const lowerQuery = query.toLowerCase();
      let matchedAnswer: string | null = null;

      for (const faq of FAQ_KNOWLEDGE_BASE) {
        if (faq.keywords.some((k) => lowerQuery.includes(k))) {
          matchedAnswer = faq.answer;
          break;
        }
      }

      if (matchedAnswer) {
        setMessages((prev) => [
          ...prev,
          {
            id: `bot-faq-${Date.now()}`,
            sender: 'bot',
            text: matchedAnswer,
            timestamp: formatTime(),
            options: [
              { label: '📚 Explore Curriculum Syllabi', value: '/curriculum', action: 'redirect', payload: '/curriculum' },
              { label: '🎓 Start Programme Finder', value: 'finder', action: 'reset' },
              { label: '✍️ Book Free Trial Class', value: '/free-trial', action: 'redirect', payload: '/free-trial' }
            ]
          }
        ]);
      } else {
        // Fallback with helpful direction
        setMessages((prev) => [
          ...prev,
          {
            id: `bot-fallback-${Date.now()}`,
            sender: 'bot',
            text: `Thank you for your question! EdNxt provides transparent, honest educational programmes for Grades 6–8 across **Science, Mathematics, AI for Students, and Public Speaking**.\n\nWould you like me to guide you to the specific syllabus or would you prefer booking a free 1-on-1 trial class?`,
            timestamp: formatTime(),
            options: [
              { label: '🧭 Guide Me By Child’s Grade', value: 'start', action: 'reset' },
              { label: '📑 View CBSE Curriculum', value: '/curriculum/cbse', action: 'redirect', payload: '/curriculum/cbse' },
              { label: '🇬🇧 View British Curriculum', value: '/curriculum/british', action: 'redirect', payload: '/curriculum/british' },
              { label: '📞 Contact an Academic Counselor', value: '/contact', action: 'redirect', payload: '/contact' }
            ]
          }
        ]);
      }
    }, 400);
  };

  return (
    <>
      {/* ============================================================
          FLOATING LAUNCHER BUTTON (Bottom Right)
         ============================================================ */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        {!isOpen && (
          <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white border border-slate-200 shadow-card-hover text-xs font-bold text-navy animate-bounce">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Need advice? Find your child’s programme!</span>
          </div>
        )}

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close Academic Advisor' : 'Open EdNxt Academic Advisor'}
          className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 ${
            isOpen ? 'bg-navy rotate-90' : 'bg-brand-blue hover:bg-navy'
          }`}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <div className="relative">
              <MessageCircle className="w-7 h-7 text-white" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-brand-lime rounded-full border-2 border-brand-blue" />
            </div>
          )}
        </button>
      </div>

      {/* ============================================================
          CHATBOT MODAL WINDOW
         ============================================================ */}
      {isOpen && (
        <div className="fixed inset-x-4 bottom-24 sm:inset-auto sm:right-6 sm:bottom-24 sm:w-[420px] max-h-[85vh] h-[600px] z-50 bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-navy px-5 py-4 text-white flex items-center justify-between border-b border-navy-light shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-brand-lime text-navy flex items-center justify-center font-black shadow-xs">
                <Bot className="w-5 h-5 text-navy" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-black tracking-tight text-white">EdNxt Advisor</h3>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-400/30">
                    Live
                  </span>
                </div>
                <p className="text-[11px] text-slate-300">Intelligent Programme & Syllabus Finder</p>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={startConversation}
                title="Restart Conversation"
                className="p-1.5 rounded-xl hover:bg-white/10 text-slate-300 hover:text-brand-lime transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-xl hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50/70">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div className="flex items-start gap-2 max-w-[90%]">
                  {msg.sender === 'bot' && (
                    <div className="w-7 h-7 rounded-full bg-navy text-brand-lime flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                  )}

                  <div
                    className={`p-3.5 rounded-2xl text-xs sm:text-[13px] leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-brand-blue text-white rounded-tr-xs shadow-xs'
                        : 'bg-white text-slate-800 rounded-tl-xs shadow-xs border border-slate-200/80'
                    }`}
                  >
                    <div className="whitespace-pre-wrap">{msg.text}</div>

                    {/* Recommendation Card */}
                    {msg.recommendation && (
                      <div className="mt-3 p-3.5 rounded-xl bg-edbg border border-blue-200/80 space-y-2.5">
                        <div className="flex items-center justify-between pb-2 border-b border-blue-100">
                          <span className="text-[10px] font-bold text-brand-blue uppercase tracking-wider">
                            {msg.recommendation.curriculumText} • {msg.recommendation.gradeText}
                          </span>
                          <span className="text-[10px] font-bold text-emerald-700 bg-soft-green px-2 py-0.5 rounded">
                            Recommended
                          </span>
                        </div>

                        <h4 className="text-xs font-black text-navy">{msg.recommendation.title}</h4>

                        <div className="space-y-1.5 text-[11px] text-slate-600">
                          {msg.recommendation.highlights.map((h, i) => (
                            <div key={i} className="flex items-start gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue shrink-0 mt-0.5" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>

                        <div className="p-2 rounded-lg bg-white border border-slate-200/60 text-[10px] text-slate-500">
                          <strong className="text-navy font-bold">Focus:</strong> {msg.recommendation.termFocus}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Interactive Choice Buttons */}
                {msg.options && msg.options.length > 0 && (
                  <div className="mt-2.5 space-y-1.5 w-full pl-9">
                    {msg.options.map((opt, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => handleOptionClick(opt)}
                        className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-between gap-2 border ${
                          opt.action === 'redirect'
                            ? 'bg-navy text-white hover:bg-brand-blue border-navy shadow-soft'
                            : opt.action === 'reset'
                            ? 'bg-slate-100 hover:bg-slate-200 text-slate-600 border-slate-200'
                            : 'bg-white hover:bg-soft-blue text-navy hover:text-brand-blue border-slate-200 hover:border-blue-200 shadow-xs'
                        }`}
                      >
                        <span>{opt.label}</span>
                        {opt.action === 'redirect' ? (
                          <ExternalLink className="w-3.5 h-3.5 shrink-0 text-brand-lime" />
                        ) : (
                          <ArrowRight className="w-3.5 h-3.5 shrink-0 opacity-60" />
                        )}
                      </button>
                    ))}
                  </div>
                )}

                <span className="text-[10px] text-slate-400 mt-1 px-1">{msg.timestamp}</span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask anything (e.g. fees, schedule, trial)..."
              className="flex-1 px-3.5 py-2 rounded-full border border-slate-200 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-brand-blue"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="w-9 h-9 rounded-full bg-brand-blue disabled:opacity-40 text-white flex items-center justify-center shrink-0 hover:bg-navy transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
