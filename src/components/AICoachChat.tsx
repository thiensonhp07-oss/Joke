import React, { useState } from 'react';
import { Bot, Send, User, Sparkles, Dumbbell, ShieldCheck, RefreshCw } from 'lucide-react';

interface AICoachChatProps {
  viewRole: 'student' | 'parent';
}

export const AICoachChat: React.FC<AICoachChatProps> = ({ viewRole }) => {
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'ai'; text: string }>>([
    {
      sender: 'ai',
      text: `### 🤖 Chào Hoàng Phi Hùng & Phụ Huynh!

Tôi là **Coach AI Thể Thao & Tăng Trưởng Dậy Thì** dành riêng cho Hùng (Lớp 7 - 1m57 - 60kg).

Tôi có thể tư vấn chi tiết về:
1. 🏀 **Bài tập bật nhảy & bóng rổ** rèn luyện tại nhà để kéo dài sụn xương.
2. 🥗 **Thực đơn giảm mỡ thừa** giúp Hùng săn chắc từ 60kg về 52kg mà vẫn đủ dinh dưỡng.
3. 📱 **Mẹo cai bẫy lướt TikTok / cày Roblox** mà không cảm thấy căng thẳng hay nhàm chán.
4. 🌙 **Giờ giấc ngủ HGH** tối ưu hóa tăng chiều cao.

Hãy nhấn các câu hỏi mẫu dưới đây hoặc nhập câu hỏi bất kỳ nhé!`,
    },
  ]);

  const [inputQuery, setInputQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const presetQuestions = [
    '🏀 Cho Hùng bài tập bật nhảy bóng rổ 15 phút tại nhà để tăng chiều cao?',
    '🥗 Hùng nặng 60kg cao 1m57 nên ăn sáng & ăn tối như thế nào để giảm mỡ?',
    '📱 Làm sao để bớt xem TikTok & chơi Roblox đêm mà không bị bứt rứt?',
    '📏 Liệu Hùng có thể đạt mốc 1m78 tuổi 18 nếu tập bóng rổ 4 buổi/tuần?',
  ];

  const handleSend = async (queryText?: string) => {
    const textToSend = queryText || inputQuery;
    if (!textToSend.trim() || loading) return;

    const newMessages = [...messages, { sender: 'user' as const, text: textToSend }];
    setMessages(newMessages);
    if (!queryText) setInputQuery('');
    setLoading(true);

    try {
      const res = await fetch('/api/ai-coach', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: textToSend,
          userStats: { name: 'Hoàng Phi Hùng', age: 13, height: 157, weight: 60 },
        }),
      });

      const data = await res.json();
      if (data.success && data.answer) {
        setMessages([...newMessages, { sender: 'ai', text: data.answer }]);
      } else {
        setMessages([
          ...newMessages,
          {
            sender: 'ai',
            text: 'Rất tiếc, đã có sự cố kết nối. Hãy thử lại hoặc chọn một câu hỏi mẫu phía dưới nhé!',
          },
        ]);
      }
    } catch (err) {
      console.error('Error fetching AI response:', err);
      setMessages([
        ...newMessages,
        {
          sender: 'ai',
          text: 'Rất tiếc, đã có sự cố kết nối mạng. Bạn hãy kiểm tra lại đường truyền nhé.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Banner Analysis */}
      <div className="rounded-2xl bg-gradient-to-r from-cyan-950/60 via-slate-900 to-slate-900 p-6 border border-cyan-800/40 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              <Bot className="w-4 h-4 text-cyan-400" />
              AI Health &amp; Basketball Coach 24/7
            </span>
            <h2 className="text-2xl font-extrabold text-white font-['Space_Grotesk']">
              Trợ Lý AI Trực Tuyến Dành Cho Hoàng Phi Hùng
            </h2>
            <p className="text-xs text-slate-300">
              Hỏi đáp trực tiếp bằng trí tuệ nhân tạo Gemini được tối ưu hóa theo đúng dữ liệu thể hình (1m57 - 60kg, Lớp 7).
            </p>
          </div>
        </div>
      </div>

      {/* Chat Container Box */}
      <div className="bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl overflow-hidden flex flex-col h-[520px]">
        {/* Message Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'ai' && (
                <div className="w-8 h-8 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 flex items-center justify-center shrink-0">
                  <Bot className="w-5 h-5" />
                </div>
              )}

              <div
                className={`max-w-[85%] rounded-2xl p-4 text-xs leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-cyan-500 text-slate-950 font-medium rounded-tr-none shadow-md'
                    : 'bg-slate-950 text-slate-200 border border-slate-800 rounded-tl-none whitespace-pre-wrap'
                }`}
              >
                {msg.text}
              </div>

              {msg.sender === 'user' && (
                <div className="w-8 h-8 rounded-xl bg-purple-500/20 border border-purple-500/40 text-purple-300 flex items-center justify-center shrink-0 font-bold text-xs font-['Space_Grotesk']">
                  PH
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-3 text-xs text-slate-400">
              <div className="w-8 h-8 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 flex items-center justify-center">
                <RefreshCw className="w-4 h-4 animate-spin" />
              </div>
              <span>Coach AI đang xây dựng lời khuyên chuyên sâu...</span>
            </div>
          )}
        </div>

        {/* Preset Prompt Chips */}
        <div className="p-3 bg-slate-950/80 border-t border-slate-800 flex items-center gap-2 overflow-x-auto scrollbar-none">
          <span className="text-[11px] font-bold text-slate-400 shrink-0 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Gợi ý:
          </span>
          {presetQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(q)}
              className="px-3 py-1 rounded-full text-[11px] font-medium bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 whitespace-nowrap transition-all"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input Form Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="p-3 bg-slate-950 border-t border-slate-800 flex items-center gap-2"
        >
          <input
            type="text"
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            placeholder="Nhập thắc mắc của Hùng hoặc Phụ huynh về bóng rổ, dinh dưỡng, giảm mỡ..."
            className="flex-1 bg-slate-900 border border-slate-800 text-xs rounded-xl px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
          />
          <button
            type="submit"
            disabled={loading || !inputQuery.trim()}
            className="px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all shadow-md shadow-cyan-500/20"
          >
            <span>Gửi</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
};
