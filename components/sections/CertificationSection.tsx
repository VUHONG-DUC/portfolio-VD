'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Calendar } from 'lucide-react';

export function CertificationSection() {
  const certifications = [
    {
      name: '日本語能力試験一級 (N1)',
      date: '2019-12-20',
      organization: 'JLPT',
      description: '日本語の高度な理解力を証明する最上級資格',
      category: '語学',
    },
    {
      name: 'ITパスポート',
      date: '2022-08-17',
      organization: 'IPA',
      description: 'ITに関する基礎的な知識を証明する国家試験',
      category: 'IT',
    },
    {
      name: 'Microsoft Office Specialist Excel 2016/2019 Expert',
      date: '2022-12-10',
      organization: 'Microsoft',
      description: 'Excelの高度な機能を活用できることを証明',
      category: 'Office',
    },
    {
      name: 'Java SE Bronze',
      date: '2024-07-06',
      organization: 'Oracle',
      description: 'Javaプログラミングの基礎知識を証明',
      category: 'プログラミング',
    },
    {
      name: 'AWS Certified Cloud Practitioner',
      date: '2024-08-04',
      organization: 'Amazon Web Services',
      description: 'AWSクラウドの基礎知識を証明する認定資格',
      category: 'クラウド',
    },
    {
      name: 'Java SE Silver',
      date: '2024-09-02',
      organization: 'Oracle',
      description: 'Javaプログラミングの実践的な知識を証明',
      category: 'プログラミング',
    },
    {
      name: '基本情報技術者試験',
      date: '2024-11-22',
      organization: 'IPA',
      description: 'ITエンジニアとしての基本的な知識・技能を証明する国家試験',
      category: 'IT',
    },
  ];

  const categoryColors = {
    '語学': 'bg-green-900/30 text-green-300',
    'IT': 'bg-blue-900/30 text-blue-300',
    'Office': 'bg-orange-900/30 text-orange-300',
    'プログラミング': 'bg-purple-900/30 text-purple-300',
    'クラウド': 'bg-yellow-900/30 text-yellow-300',
  };

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
          <h2 className="text-4xl font-bold text-white mb-4">取得資格</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            継続的な学習により取得した資格・認定の一覧です
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 bg-gray-800/50 border-gray-700 h-full hover:bg-gray-800/70 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Award className="text-white" size={20} />
                  </div>
                  <Badge 
                    variant="secondary" 
                    className={categoryColors[cert.category as keyof typeof categoryColors]}
                  >
                    {cert.category}
                  </Badge>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2">{cert.name}</h3>
                <p className="text-blue-400 text-sm mb-2">{cert.organization}</p>
                <p className="text-gray-300 text-sm mb-4">{cert.description}</p>
                
                <div className="flex items-center text-gray-400 text-sm">
                  <Calendar size={14} className="mr-2" />
                  取得日: {cert.date}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">7</div>
            <div className="text-gray-400">総取得資格数</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">5</div>
            <div className="text-gray-400">カテゴリー数</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">2024</div>
            <div className="text-gray-400">最新取得年</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">N1</div>
            <div className="text-gray-400">日本語レベル</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}