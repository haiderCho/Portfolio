import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts';
import { SKILLS } from '@/constants';

const SkillRadar: React.FC = () => {
  const data = SKILLS.map(s => ({
    subject: s.name,
    A: s.level,
    fullMark: 100
  }));

  return (
    <div className="h-[250px] min-h-[250px] w-full relative">
      {/* Clean Background */}

      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid stroke="var(--color-cyber-dim)" />
          <PolarAngleAxis
            dataKey="subject"
            tick={{ fill: 'var(--color-cyber-muted)', fontSize: 12, fontFamily: 'var(--font-mono)' }}
          />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
          <Radar
            name="Proficiency"
            dataKey="A"
            stroke="var(--color-cyber-primary)"
            strokeWidth={2}
            fill="var(--color-cyber-primary)"
            fillOpacity={0.2}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'var(--color-cyber-panel)',
              borderColor: 'var(--color-cyber-primary)',
              color: 'var(--color-cyber-text)',
              fontFamily: 'var(--font-mono)'
            }}
            itemStyle={{ color: 'var(--color-cyber-primary)' }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SkillRadar;