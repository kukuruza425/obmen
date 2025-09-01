'use client';

import { Hero } from '@/components/sections/hero';
import { RatesWidget } from '@/components/widgets/rates-widget';
import { QuickCalculator } from '@/components/calculators/quick-calculator';
import { HowItWorks } from '@/components/sections/how-it-works';
import { LocationsPreview } from '@/components/sections/locations-preview';
import { YandexMap } from '@/components/maps/yandex-map';
import { FAQ } from '@/components/sections/faq';
import { FinalCTA } from '@/components/sections/final-cta';
import { StickyActions } from '@/components/ui/sticky-actions';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Hero />
      <RatesWidget />
      <QuickCalculator />
      <HowItWorks />
      <LocationsPreview />
      <YandexMap />
      <FAQ />
      <FinalCTA />
      <StickyActions />
    </div>
  );
}