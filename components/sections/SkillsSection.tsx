'use client';

import { motion } from 'framer-motion';
import { SkillCard } from '@/components/ui/SkillCard';
import { Code, Database, Wrench } from 'lucide-react';

export function SkillsSection() {
  const programmingSkills = [
    { skill: 'Java', years: 0.5 },
    { skill: 'HTML/CSS', years: 0.3 },
    { skill: 'JavaScript', years: 0.3 },
    { skill: 'SQL', years: 0.3 },
    { skill: 'Spring Framework', years: 0.3 },
  ];

  const skillCategories = [
    {
      title: 'フロントエンド',
      icon: <Code size={24} />,
      skills: ['HTML/CSS', 'JavaScript', 'Windows', 'MacOS'],
    },
    {
      title: 'バックエンド',
      icon: <Database size={24} />,
      skills: ['Java', 'Spring Framework', 'Tomcat'],
    },
    {
      title: 'データベース',
      icon: <Database size={24} />,
      skills: ['Oracle', 'MySQL', 'PostgreSQL'],
    },
    {
      title: 'インフラ・ツール',
      icon: <Wrench size={24} />,
      skills: ['AWS', 'Eclipse', 'Visual Studio', 'Git', 'Slack', 'Zoom'],
    },
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">技術スキル</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* プログラミング言語経験*/}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Code className="mr-3 text-blue-400" size={28} />
              プログラミング言語経験
            </h3>
            <div className="space-y-6">
              {programmingSkills.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span className="text-white">{item.skill}</span>
                  <span className="text-blue-400 font-bold">{item.years >= 1 ? `${item.years}年` : `${Math.round(item.years * 12)}ヶ月`}</span>
                </div>

              ))}
            </div>
          </motion.div>

          {/* 経験年数 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-8">経験年数サマリー</h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center py-3 border-b border-gray-700">
                <span className="text-white">総開発経験</span>
                <span className="text-blue-400 font-bold">3年+</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-700">
                <span className="text-white">フロントエンド開発</span>
                <span className="text-blue-400 font-bold">6ヶ月</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-700">
                <span className="text-white">バックエンド開発</span>
                <span className="text-blue-400 font-bold">6ヶ月</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-700">
                <span className="text-white">テスター</span>
                <span className="text-blue-400 font-bold">1年</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-white">インフラ構築・保守</span>
                <span className="text-blue-400 font-bold">1年</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* スキルカテゴリー */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}