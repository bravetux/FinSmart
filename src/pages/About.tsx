"use client";

import React from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const skills = [
    "Embedded Engineering",
    "Microprocessor/Microcontroller Design",
    "Linux System Programming",
    "Automation (Linux, Solaris, Windows)",
    "Selenium Automation",
    "Device Driver Development",
    "Java",
    "Python",
    "Shell Scripting",
    "Systemd",
    "Cron",
    "LLMs",
    "React",
    "TypeScript",
    "Vite",
    "React Router",
    "Tailwind CSS",
    "shadcn/ui",
    "Supabase",
    "PostgreSQL",
    "Auth Systems",
    "Edge Functions",
    "Generative AI",
    "Agentic AI"
  ];

  const financeWork = [
    "Financial planning for salaried professionals",
    "Wealth diversification strategies for daily wage workers",
    "Personal finance education and counseling",
    "Investment portfolio guidance",
    "Risk assessment and management"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">About the Developer</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Meet the person behind FinSmart - an engineer passionate about technology and financial literacy
          </p>
        </div>

        <Card className="mb-12 border-none shadow-xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <CardContent className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full bg-white/20 flex items-center justify-center text-5xl">
                  👨‍💻
                </div>
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold mb-2">👋 Hey there! I'm @bravetux</h2>
                <p className="text-blue-100 text-lg mb-6">
                  Embedded Engineer by profession — love building things that run close to the metal
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  <Button variant="secondary" className="gap-2">
                    <Mail className="w-4 h-4" />
                    Contact
                  </Button>
                  <Button variant="secondary" className="gap-2">
                    <Github className="w-4 h-4" />
                    GitHub
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <span className="text-2xl">🔧</span> Technical Expertise
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-6">
                As an embedded engineer, I specialize in designing circuits with microprocessors and microcontrollers. 
                My expertise spans automation across multiple platforms and system-level programming.
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <span className="text-2xl">💰</span> Financial Passion
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-6">
                Beyond technology, I'm deeply passionate about finance and have helped thousands of people 
                with their financial planning and diversification strategies.
              </p>
              <ul className="space-y-3">
                {financeWork.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mt-0.5 flex-shrink-0">
                      ✓
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="border-none shadow-lg mb-12">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <span className="text-2xl">🚀</span> Current Focus
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 mb-4">
              I'm currently exploring the world of Generative AI and Agentic AI, bridging automation with intelligence. 
              My daily driver tools include:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {['Java', 'Selenium', 'Python', 'Shell', 'Git', 'Systemd', 'cron', 'LLMs'].map((tool, index) => (
                <div key={index} className="bg-slate-100 p-4 rounded-lg text-center">
                  <span className="font-medium text-slate-800">{tool}</span>
                </div>
              ))}
            </div>
            <p className="text-slate-600 mt-6 mb-4">
              For SPA development, I work with:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {['React', 'TypeScript', 'Vite', 'React Router', 'Tailwind CSS', 'shadcn/ui'].map((tool, index) => (
                <div key={index} className="bg-slate-100 p-4 rounded-lg text-center">
                  <span className="font-medium text-slate-800">{tool}</span>
                </div>
              ))}
            </div>
            <p className="text-slate-600 mt-6">
              Using Supabase for: PostgreSQL • Auth • Edge Functions
            </p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-lg">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Let's Collaborate!</h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Open-source, automation, AI, or anything that runs on a terminal. 
              I'm always excited to work on innovative projects and share knowledge.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="gap-2 bg-slate-900 hover:bg-slate-800">
                <Mail className="w-4 h-4" />
                ic19939@gmail.com
              </Button>
              <div className="flex gap-3">
                <Button variant="outline" size="icon">
                  <Github className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Twitter className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;