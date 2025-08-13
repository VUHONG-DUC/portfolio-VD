// 'use client';

// import { motion } from 'framer-motion';
// import { cn } from '@/lib/utils';

// interface ProgressBarProps {
//   skill: string;
//   // level: number;
//   months: number;
//   className?: string;
// }

// export function ProgressBar({ skill, months, className }: ProgressBarProps) {
//   return (
//     <div className={cn("mb-6", className)}>
//       <div className="flex justify-between items-center mb-2">
//         <span className="text-sm font-medium text-white">{skill}</span>
//         <span className="text-xs text-gray-400">{months}ヶ月</span>
//       </div>
//       <div className="w-full bg-gray-700 rounded-full h-2 relative overflow-hidden">
//         <motion.div
//           className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full skill-progress"
//           initial={{ width: 0 }}
//           animate={{ width: `${level}%` }}
//           transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
//         />
//       </div>
//       <div className="text-xs text-gray-500 mt-1">{level}%</div>
//     </div>
//   );
// }