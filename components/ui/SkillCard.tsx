'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface SkillCardProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
  delay?: number;
}

export function SkillCard({ title, skills, icon, delay = 0 }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <Card className="p-6 bg-gray-800/50 border-gray-700 neon-glow h-full">
        <div className="flex items-center mb-4">
          <div className="mr-3 text-blue-400">{icon}</div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-blue-900/30 text-blue-300 hover:bg-blue-900/50"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}