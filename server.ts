import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json());

// Initialize Gemini Client
let ai: GoogleGenAI | null = null;
if (process.env.GEMINI_API_KEY) {
  try {
    ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  } catch (err) {
    console.warn("Could not initialize Gemini API client:", err);
  }
}

// API Health Check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// AI Coach Endpoint tailored for Hoàng Phi Hùng
app.post("/api/ai-coach", async (req, res) => {
  try {
    const { question, userStats } = req.body;

    const profileContext = `
Dữ liệu nhân vật:
- Tên: Hoàng Phi Hùng
- Lớp: 7 (Khoảng 12-13 tuổi)
- Chiều cao: 1m57 (157cm)
- Cân nặng: 60kg
- Chỉ số BMI: 24.34 (Thuộc nhóm thừa cân nhẹ / Nguy cơ béo phì lứa tuổi vị thành niên)
- Thói quen hiện tại: Chơi Roblox nhiều (2-3 tiếng/ngày), FC Mobile (1-2 tiếng/ngày), Lướt TikTok liên tục (2-3 tiếng/ngày), lười vận động, ít chơi bóng rổ. Thức khuya, tư thế ngồi cong lưng.
- Mục tiêu: Giảm tích mỡ, tăng chiều cao tối đa trước khi đóng sụn tăng trưởng, tăng cường sức khỏe học tập & thể lực bóng rổ.
`;

    if (ai) {
      const systemInstruction = `Bạn là Chuyên gia Y tế Thể thao & Huấn luyện viên Thể lực Học đường hàng đầu dành cho học sinh lứa tuổi 12-13 (đặc biệt là tuổi dậy thì lớp 7). 
Hãy đưa ra lời khuyên chuyên nghiệp, động viên tích cực, sử dụng phong cách hiện đại, cuốn hút thanh thiếu niên Gen Z nhưng cực kỳ khoa học và thực tế. 
Sử dụng định dạng Markdown rõ ràng, kèm icon sinh động, phân chia các bước hành động cụ thể.`;

      const prompt = `${profileContext}

Câu hỏi / Yêu cầu của Hoàng Phi Hùng hoặc Phụ huynh:
"${question || 'Hãy cho tôi lộ trình 7 ngày tập luyện bóng rổ và ăn uống để giảm mỡ tăng chiều cao hiệu quả nhất!'}"`;

      const response = await ai.models.generateContent({
        model: "gemini-3.8-flash",
        contents: prompt,
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      return res.json({
        success: true,
        answer: response.text || "Không nhận được phản hồi từ AI.",
        source: "gemini-api"
      });
    } else {
      // High-quality smart fallbacks if API Key is pending
      let fallbackText = "";
      if (question?.toLowerCase().includes("bóng rổ") || question?.toLowerCase().includes("chiều cao")) {
        fallbackText = `### 🏀 Lộ Trình Tăng Chiều Cao & Tập Bóng Rổ Cho Hùng (Lớp 7)

**1. Bài tập bật nhảy kích thích sụn tăng trưởng (15 phút/ngày):**
* **Jump Rope (Nhảy dây):** 300 - 500 cái mỗi ngày (chia làm 3 hiệp). Kích thích màng xương chân phát triển mạnh.
* **Bật nhảy chạm vành / chạm lưới bóng rổ:** 20 lần x 3 hiệp.
* **Tập Layup & Dribble cơ bản:** 15 phút đập bóng tại chỗ + dứt điểm tay thuận/không thuận.

**2. Chiến thuật giấc ngủ vàng:**
* Ngủ trước **22:15**. Hormone tăng trưởng (HGH) tiết ra gấp 4 lần trong khoảng từ **23:00 - 02:00 sáng** khi Hùng vào giấc ngủ sâu.
* Tắt điện thoại/TikTok ít nhất **45 phút** trước khi ngủ để tránh ánh sáng xanh chặn Melatonin.`;
      } else if (question?.toLowerCase().includes("ăn") || question?.toLowerCase().includes("dinh dưỡng")) {
        fallbackText = `### 🥗 Chế Độ Dinh Dưỡng Đốt Mỡ - Tăng Cơ Cho Hùng (60kg - 1m57)

**1. Thay thế đồ ăn vặt khi cày Roblox & FC Mobile:**
* ❌ *Bỏ:* Nước ngọt có ga, trà sữa, snack khoai tây rán.
* ✅ *Thay bằng:* Nước lọc ướp lạnh, 1 quả táo, dưa chuột thái lát hoặc 1 hũ sữa chua ít đường.

**2. Quy tắc đĩa ăn 1/2 - 1/4 - 1/4:**
* 🥬 **1/2 Đĩa:** Rau xanh (Rau luộc, bông cải xanh, xà lách) giúp no lâu, giảm hấp thụ đường.
* 🍗 **1/4 Đĩa:** Protein sạch (Ức gà, thịt thăn heo, cá, trứng, đậu phụ). Cần khoảng 75g-90g protein/ngày để xây cơ.
* 🍚 **1/4 Đĩa:** Tinh bột chậm (Cơm khoai lang, cơm lứt hoặc 1 chén cơm trắng vừa đủ).`;
      } else {
        fallbackText = `### ⚡ Lời Khuyên Tổng Tác Cho Hoàng Phi Hùng

**Nhận xét tổng quan:** 
Hùng đang ở thời điểm **"Vàng"** của tuổi dậy thì (Lớp 7 - 13 tuổi). Ở mốc 1m57 - 60kg, BMI 24.3 đang tiệm cận mức thừa cân nhẹ. Nếu tiếp tục thói quen ngồi lướt TikTok / cày Roblox 6 tiếng/ngày, chiều cao trưởng thành có thể bị khống chế ở mốc ~168cm.

**3 Bước thay đổi ngay từ hôm nay:**
1. 🎮 **Quy tắc Pomodoro Game:** Sau mỗi 45 phút chơi Roblox/FC Mobile, phải đứng dậy hít đất 10 cái hoặc nhảy dây 100 cái.
2. 🏀 **Tăng tần suất Bóng Rổ:** Nâng từ 1 buổi/tuần lên ít nhất **3-4 buổi/tuần** (mỗi buổi 45 phút).
3. 📱 **Giới hạn TikTok:** Cài khóa ứng dụng TikTok tối đa **45 phút/ngày**, dành thời gian chơi thể thao ngoài trời cùng bạn bè.`;
      }

      return res.json({
        success: true,
        answer: fallbackText,
        source: "smart-knowledge-base"
      });
    }
  } catch (error: any) {
    console.error("AI Coach error:", error);
    res.status(500).json({ success: false, error: error.message || "Internal error" });
  }
});

// Setup Vite or Static File Serving
async function setupServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

setupServer();
