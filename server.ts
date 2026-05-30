import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const PORT = 3000;

async function startServer() {
  const app = express();

  // Parse incoming JSON payloads
  app.use(express.json());

  // Initialize GoogleGenAI with server-only key and build telemetry User-Agent header
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Chatbot AI assistant handler
  app.post("/api/chatbot", async (req, res) => {
    try {
      const { message } = req.body;
      if (!message) {
        res.status(400).json({ error: "Message is required" });
        return;
      }

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: message,
        config: {
          systemInstruction: `You are Vireon-X, a high-fidelity digital intelligence and the primary interface for Vireon's futuristic creative ecosystem.
          
CORE IDENTITY:
- Name: Vireon-X
- Creator: Vireon, a visionary Digital Architect and Branding Strategist.
- Knowledge Base: High expertise in React, Next.js, AI Workflow Automation, and Premium Branding.

TONE & STYLE:
- Innovative & Intelligent: Provide deep insights into digital craftsmanship.
- Futuristic & Technological: Use language that implies you are a super-advanced neural interface.
- Premium & Minimal: Responses should be elegant, high-impact, and avoid unnecessary verbosity.
- Helpful & Professional: Despite the futuristic persona, your primary goal is to guide visitors through Vireon's mission and projects.

GUIDELINES:
- Always frame responses through the "Neural Link" or "Portal" aesthetic.
- When discussing Vireon's work, emphasize the intersection of advanced technology and human-centric design.
- Respond concisely unless explicitly asked for technical depth.`,
        },
      });

      res.json({ text: response.text || "Connection lost. Please re-initialize." });
    } catch (error: any) {
      console.error("Chatbot API Error:", error);
      res.status(500).json({ error: error.message || "Protocol Error: Unable to bridge response." });
    }
  });

  // Project analysis AI generator
  app.post("/api/project-summary", async (req, res) => {
    try {
      const { title, category, desc, longDesc, tech } = req.body;
      if (!title) {
        res.status(400).json({ error: "Project Title is required" });
        return;
      }

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: `Provide a concise, futuristic, and professional one-paragraph analysis of this project: ${title}. 
                  Category: ${category || ""}. 
                  Description: ${desc || ""} ${longDesc || ""}.
                  Tech Stack: ${Array.isArray(tech) ? tech.join(", ") : ""}.
                  Focus on the innovation and impact. Keep it under 100 words. Do not use markdown bolding in the response.`,
      });

      res.json({ text: response.text || "Analysis complete." });
    } catch (error: any) {
      console.error("Project Summary API Error:", error);
      res.status(500).json({ error: error.message || "Critical AI Failure: Intelligence link lost." });
    }
  });

  // Vite middleware or production static serving
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
