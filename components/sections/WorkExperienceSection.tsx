'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Briefcase, Users } from 'lucide-react';

export function WorkExperienceSection() {
  const workExperiences = [
    {
      period: '2024年7月 - 2025年7月',
      title: 'AWS',
      company: 'AWS開発システムの開発・保守・運用',
      teamSize : '12名',
      description: 'AWS保守・運用案件',
      responsibilities: [
        '開発から依頼書をベースに作業を行う（月次メンテナンス対応、リリース対応、サービスサイト更新）',
        '月次報告書、リリース計画書の作成、レビュー',
        '運用手順書の見直し、改善',
        'エスカレーション対応',
      ],
      technologies: ['Windows', 'AWS'],
      projectType: '保守・運用',
    },
    {
      period: '2024年4月 - 2024年7月',
      title: '開発',
      company: '受託案件',
      teamSize : '7名',
      description: '教育系Web基幹システム改修',
      responsibilities: [
        '外部設計書（レイアウト、API）',
        '製造（フロント・バック）',
        '試験（テスト仕様書作成、テストコード作成）',
      ],
      technologies: ['Java','javaScript','Spring', 'HTML/CSS', 'Eclipse','Git', 'Oracle'],
      projectType: '受託開発',
    },
    {
      period: '2024年2月 - 2024年3月',
      title: '開発',
      company: 'SpringBoot',
      teamSize : '',
      description: 'IT新人社員研修',
      responsibilities: [
        '基礎研修（ビジネスマナー、情報セキュリティ）',
        'プログラム研修（HTML/CSS、Oracle、Java）',
        '個人開発（書籍管理システム）',
        'ログイン・ログアウト・一覧表示・各種検索・入力チェック',
      ],
      technologies: ['Windows', 'Java', 'HTML/CSS', 'Eclipse', 'Oracle'],
      projectType: '新人研修',
    },
    {
      period: '2022年11月 - 2023年12月',
      title: 'システム評価・検証',
      company: '大手プリンターメーカー',
      teamSize : '13名',
      description: 'テスター',
      responsibilities: [
        'iOS向けの既存アプリ評価',
        '新規製品・アプリの評価仕様書作成',
        '評価仕様書の見直し、改善',
      ],
      technologies: ['Windows','iOS','MacOS', 'Java', 'Swift', 'Objective-C', 'Android Studio'],
      projectType: 'システム評価・検証',
    }
  ];

  const processExperience = [
    { process: 'プログラミング', experience: '○', years: 0.6 },
    { process: '保守・運用', experience: '○', years: 1 },
    { process: 'テスター', experience: '○', years: 1 },
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
          <h2 className="text-4xl font-bold text-white mb-4">業務経験</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            これまでの業務経験と担当した工程について
          </p>
        </motion.div>

        {/* プロジェクト経験 */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-12 text-center">プロジェクト経験</h3>
          <div className="space-y-8">
            {workExperiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 bg-gray-900/50 border-gray-600 neon-glow">
                  <div className="grid lg:grid-cols-3 gap-6">
                    <div>
                      <div className="flex items-center text-blue-400 mb-2">
                        <Calendar size={16} className="mr-2" />
                        {exp.period}
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">{exp.title}</h4>
                      <Badge 
                        variant="secondary" 
                        className="bg-green-900/30 text-green-300 mb-4"
                      >
                        {exp.projectType}
                      </Badge>
                    </div>
                    
                    <div className="lg:col-span-2">
                      <p className="text-gray-300 mb-4">{exp.description}</p>
                      
                      <div className="mb-4">
                        <h5 className="text-white font-semibold mb-2">チーム規模:<span className="list-disc list-inside text-gray-300 space-y-1">{exp.teamSize}</span> </h5>
                        
                        <h5 className="text-white font-semibold mb-2">担当業務:</h5>
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
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 担当工程経験 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-effect rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">担当工程経験</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            {processExperience.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 rounded-lg p-6 text-center"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="text-white" size={24} />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{process.process}</h4>
                <div className="text-2xl font-bold text-green-400 mb-2">{process.experience}</div>
                <div className="text-sm text-gray-400">
                  経験年数: {process.years >= 1 ? `${process.years}年` : `${Math.round(process.years * 12)}ヶ月`}
                  </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}