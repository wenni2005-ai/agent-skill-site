"use client";

import { useState, type FormEvent } from "react";
import { Mail, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-blue-500/5 to-violet-500/10 p-8 backdrop-blur dark:border-cyan-400/10 dark:from-cyan-400/5 dark:via-blue-500/5 dark:to-violet-500/5 sm:p-12">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/20 text-cyan-600 dark:text-cyan-300">
            <Mail className="h-6 w-6" />
          </div>
          <h2 className="text-2xl font-semibold text-slate-950 dark:text-white sm:text-3xl">
            订阅 Agent 生态周报
          </h2>
          <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
            每周精选最新 Skill、教程和行业动态，直达你的邮箱。
          </p>

          {submitted ? (
            <div className="mt-6 flex items-center justify-center gap-2 text-cyan-600 dark:text-cyan-300">
              <CheckCircle className="h-5 w-5" />
              <span className="font-medium">感谢订阅！我们会准时送达。</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="h-11 sm:max-w-xs"
              />
              <Button type="submit" className="h-11 gap-2">
                <Send className="h-4 w-4" />
                订阅
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
