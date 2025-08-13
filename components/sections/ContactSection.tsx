'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, Github, Facebook } from 'lucide-react';

export function ContactSection() {
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
          <h2 className="text-4xl font-bold text-white mb-4">お問い合わせ</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            ご質問やお仕事のご相談がございましたら、お気軽にお声がけください
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-gray-900/50 border-gray-700 neon-glow">
              <h3 className="text-2xl font-bold text-white mb-6">メッセージを送る</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-white text-sm font-medium mb-2 block">お名前</label>
                    <Input 
                      className="bg-gray-800 border-gray-600 text-white"
                      placeholder="山田太郎"
                    />
                  </div>
                  <div>
                    <label className="text-white text-sm font-medium mb-2 block">会社名</label>
                    <Input 
                      className="bg-gray-800 border-gray-600 text-white"
                      placeholder="株式会社サンプル"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-white text-sm font-medium mb-2 block">メールアドレス</label>
                  <Input 
                    type="email"
                    className="bg-gray-800 border-gray-600 text-white"
                    placeholder="example@company.com"
                  />
                </div>
                
                <div>
                  <label className="text-white text-sm font-medium mb-2 block">件名</label>
                  <Input 
                    className="bg-gray-800 border-gray-600 text-white"
                    placeholder="お仕事のご相談について"
                  />
                </div>
                
                <div>
                  <label className="text-white text-sm font-medium mb-2 block">メッセージ</label>
                  <Textarea 
                    className="bg-gray-800 border-gray-600 text-white min-h-[120px]"
                    placeholder="ご相談内容をお聞かせください"
                  />
                </div>
                
                <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                  <Send className="mr-2 h-4 w-4" />
                  メッセージを送信
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card className="p-8 bg-gray-900/50 border-gray-700 glass-effect">
              <h3 className="text-2xl font-bold text-white mb-6">連絡先情報</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">メールアドレス</div>
                    <div className="text-white font-medium">d-vuhong@3sss.co.jp</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">電話番号</div>
                    <div className="text-white font-medium">090-2159-9996</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">所在地</div>
                    <div className="text-white font-medium">東京都江戸川区</div>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-700 pt-6 mt-8">
                <div className="text-white font-semibold mb-4">SNS・リンク</div>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                    <Github size={16} className="text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                    <Facebook size={16} className="text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                    <Mail size={16} className="text-white" />
                  </a>
                </div>
              </div>
            </Card>

            {/* Availability */}
            <Card className="p-8 bg-white/10 backdrop-blur-md border border-blue-500/30 shadow-lg">
              <h4 className="text-xl font-bold text-white mb-4">対応可能時間</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>平日</span>
                  <span>9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>土日</span>
                  <span>応相談</span>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}