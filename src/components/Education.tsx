import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { EDUCATION } from '../constants';

const Education = () => {
    return (
        <div className="space-y-8">
            <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="w-8 h-8 text-cyber-primary" />
                <h2 className="text-3xl font-bold text-white">Education_History</h2>
            </div>

            <div className="grid gap-6">
                {EDUCATION.map((edu, index) => (
                    <div
                        key={edu.id}
                        className="relative p-6 bg-cyber-panel border border-cyber-dim rounded-lg hover:border-cyber-primary/50 active:border-cyber-primary/50 transition-all group card-shine"
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        {/* Decorative line */}
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyber-dim group-hover:bg-cyber-primary group-active:bg-cyber-primary transition-colors rounded-l-lg" />

                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-white group-hover:text-cyber-primary group-active:text-cyber-primary transition-colors">
                                    {edu.degree}
                                </h3>
                                <div className="flex items-center gap-2 text-cyber-muted mt-1">
                                    <MapPin className="w-4 h-4" />
                                    <span className="font-mono text-sm">{edu.institution}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-cyber-primary font-mono text-sm bg-cyber-dark px-3 py-1 rounded border border-cyber-dim">
                                <Calendar className="w-4 h-4" />
                                {edu.period}
                            </div>
                        </div>

                        <p className="text-cyber-text/80 leading-relaxed">
                            {edu.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Education;
