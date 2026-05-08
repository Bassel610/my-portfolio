'use client';
import { Reveal } from '@/atoms';
import { MetaCard } from '@/components/shared';
import { ABOUT } from '@/constants/about';

export default function Spec() {
  return (
    <Reveal delay={0.08}>
      <MetaCard items={ABOUT.spec} columns={1} />
    </Reveal>
  );
}
