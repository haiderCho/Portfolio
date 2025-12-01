import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts';
import { SKILLS } from '../constants';

const SkillRadar: React.FC = () => {
  const data = SKILLS.map(s => ({
    subject: s.name,
    A: s.level,
    fullMark: 100
  }));

  return (
    <div className="h-[250px] w-full relative">
      {/* Clean Background */}

      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid stroke="#333" />
          <PolarAngleAxis
            dataKey="subject"
            tick={{ fill: '#a0a0a0', fontSize: 12, fontFamily: '"JetBrains Mono", monospace' }}
          />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
          <Radar
            name="Proficiency"
            dataKey="A"
            stroke="#00f0ff"
            strokeWidth={2}
            fill="#00f0ff"
            fillOpacity={0.2}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#0a0a0a',
              borderColor: '#00f0ff',
              color: '#fff',
              fontFamily: 'monospace'
            }}
            itemStyle={{ color: '#00f0ff' }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SkillRadar;