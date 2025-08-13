'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

export function ExperienceSection() {
  const experiences = [
    {
      title: 'シニアフルスタックエンジニア',
      company: '株式会社テックイノベーション',
      period: '2022年4月 - 現在',
      location: '東京',
      description: 'SaaSプロダクトの新機能開発をリード。React/Next.jsによるフロントエンド開発とNode.js/NestJSによるAPI開発を担当。',
      responsibilities: [
        '新機能の要件定義〜リリースまでの全工程を担当',
        'チームメンバー3名のテクニカルリード',
        'CI/CDパイプラインの改善による開発効率30%向上',
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
    },
    {
      title: 'フルスタックエンジニア',
      company: 'スタートアップABC',
      period: '2020年6月 - 2022年3月',
      location: '東京',
      description: 'ECプラットフォームの開発。フロントエンドからバックエンド、インフラまで幅広く担当。',
      responsibilities: [
        'Vue.js/Nuxt.jsによるSPA開発',
        'Django REST Frameworkを使ったAPI開発',
        'AWS ECSを使ったコンテナ化とデプロイ自動化',
      ],
      technologies: ['Vue.js', 'Nuxt.js', 'Python', 'Django', 'MySQL', 'Docker', 'AWS'],
    },
    {
      title: 'Webエンジニア',
      company: '株式会社ウェブソリューションズ',
      period: '2019年4月 - 2020年5月',
      location: '大阪',
      description: '受託開発会社でのWebアプリケーション開発。主にPHP/Laravelを使った業務システム開発。',
      responsibilities: [
        'Laravel + Vue.jsによる業務システム開発',
        '要件ヒアリングから保守まで一気通貫で担当',
        '5件のプロジェクトを同時進行で管理',
      ],
      technologies: ['PHP', 'Laravel', 'Vue.js', 'MySQL', 'jQuery'],
    },
  ];

  const processes = [
    { name: '要件定義', years: 3, level: 85 },
    { name: '基本設計', years: 4, level: 90 },
    { name: '詳細設計', years: 5, level: 95 },
    { name: '実装', years: 5, level: 95 },
    { name: 'テスト', years: 5, level: 90 },
    { name: '保守運用', years: 4, level: 80 },
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">職歴・担当工程</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            これまでの経験とプロジェクトで担当した開発工程について
          </p>
        </motion.div>

        {/* Work Experience */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-12 text-center">職歴</h3>
          <div className="relative timeline-line">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="mb-12 flex items-center"
              >
                <div className="timeline-dot mr-8"></div>
                <Card className="flex-1 p-8 bg-gray-900/50 border-gray-600 neon-glow">
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{exp.title}</h4>
                      <div className="flex items-center text-blue-400 mb-2">
                        <Briefcase size={16} className="mr-2" />
                        {exp.company}
                      </div>
                    </div>
                    <div className="text-sm text-gray-400">
                      <div className="flex items-center mb-1">
                        <Calendar size={16} className="mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  
                  <div className="mb-4">
                    <h5 className="text-white font-semibold mb-2">主な担当業務:</h5>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-blue-900/30 text-blue-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-effect rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">担当工程経験</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processes.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 rounded-lg p-6 text-center"
              >
                <h4 className="text-lg font-bold text-white mb-2">{process.name}</h4>
                <div className="text-3xl font-bold text-blue-400 mb-2">{process.years}年</div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${process.level}%` }}
                    transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
                <div className="text-xs text-gray-500 mt-1">経験レベル: {process.level}%</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}