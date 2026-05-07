'use client';
import { useState } from 'react';
import { SKILL_BUBBLES } from '@/constants/skills';
import Hub from './Hub';
import Bubble from './Bubble';
import Particles from './Particles';

export default function Cluster() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '300px',
        height: '250px',
        margin: '2rem auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Hub active={!!hoveredSkill} />

      {SKILL_BUBBLES.map((skill, index) => (
        <Bubble
          key={skill.name}
          skill={skill}
          index={index}
          isActive={hoveredSkill === skill.name}
          onHoverStart={() => setHoveredSkill(skill.name)}
          onHoverEnd={() => setHoveredSkill(null)}
        />
      ))}

      <Particles />
    </div>
  );
}
