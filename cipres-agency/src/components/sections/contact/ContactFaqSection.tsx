import { useId, useMemo, useState } from 'react';
import { type FaqItem, faqItems } from '@/config/faq.json';
import { Minus, Plus } from 'lucide-react';
import { t } from '@/lib/utils';

export default function ContactFaqSection() {
  const baseId = useId();
  const items = useMemo<FaqItem[]>(() => faqItems, []);
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id="faq" className="bg-primary-foreground text-accent relative overflow-hidden">
      <div className="container mx-auto px-4 py-24 lg:py-32 relative">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.45fr] lg:gap-20">
          <div className="space-y-4">
            <h2 className="font-anton-sc text-accent text-[88px] leading-[0.9] tracking-tight sm:text-[110px] lg:text-[140px]">
              {t('faq.title')}
            </h2>
            <p className="text-muted font-space-grotesk text-lg leading-relaxed">
              {t('faq.description')}{' '}
              <a href="#contact" className="text-secondary hover:text-accent transition-colors">
                {t('faq.contact')}
              </a>
            </p>
          </div>

          <div className="space-y-4">
            {items.map((item, idx) => {
              const isOpen = idx === openIndex;
              const contentId = `${baseId}-faq-content-${idx}`;
              const buttonId = `${baseId}-faq-button-${idx}`;

              return (
                <div
                  key={item.question}
                  className="border-muted/20 bg-primary/30 rounded-2xl border backdrop-blur-md"
                >
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() => setOpenIndex((current) => (current === idx ? -1 : idx))}
                    className="w-full flex items-center justify-between gap-6 px-6 py-5 text-left cursor-pointer"
                  >
                    <span className="font-space-grotesk text-accent text-lg font-medium sm:text-xl">
                      {item.question}
                    </span>
                    <span className="text-secondary flex h-10 w-10 items-center justify-center">
                      {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                    </span>
                  </button>

                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`grid px-6 transition-[grid-template-rows,opacity] duration-300 ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-70 pb-0'
                      }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-muted font-space-grotesk text-sm leading-relaxed sm:text-base">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

