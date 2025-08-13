'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, User, Award, Briefcase, Code, FolderOpen, Mail } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: '自己紹介', href: '#hero', icon: <User size={16} /> },
    { name: 'スキル', href: '#skills', icon: <Code size={16} /> },
    { name: '取得資格', href: '#certifications', icon: <Award size={16} /> },
    { name: '業務経験', href: '#work-experience', icon: <Briefcase size={16} /> },
    { name: 'お問い合わせ', href: '#contact', icon: <Mail size={16} /> },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop対応のナビゲーション */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold text-white">
              VU HONG DUC
            </div>
            
            {/*デスクトップのメニュー*/}
            <div className="hidden md:flex space-x-1">
              {navItems.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-white hover:bg-gray-800 flex items-center gap-2"
                >
                  {item.icon}
                  {item.name}
                </Button>
              ))}
            </div>

            {/* モバイルのメニューボタン */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile対応のナビゲーション*/}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ duration: 0.3 }}
          className="fixed top-16 left-0 right-0 bottom-0 z-40 bg-gray-900/98 backdrop-blur-sm md:hidden"
        >
          <div className="flex flex-col p-4 space-y-2">
            {navItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                size="lg"
                onClick={() => scrollToSection(item.href)}
                className="text-gray-300 hover:text-white hover:bg-gray-800 justify-start flex items-center gap-3"
              >
                {item.icon}
                {item.name}
              </Button>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
}