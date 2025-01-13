import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
}

export default function MetricCard({ icon: Icon, value, label }: MetricCardProps) {
  return (
    <div className="p-6 rounded-xl bg-gradient-to-br from-blue-900/20 to-black border border-blue-500/20 text-center group hover:border-blue-500/50 transition-all duration-300">
      <Icon className="w-8 h-8 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
      <div className="text-3xl font-bold text-white mb-1">{value}</div>
      <div className="text-gray-400">{label}</div>
    </div>
  );
}