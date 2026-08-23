import { Eyebrow, SectionTitle, Section } from './ui';

/**
 * Quotes are reproduced exactly as given. The v2.0 mock had reworded D.C.'s —
 * these are real people's words and are not ours to edit. Only the role label,
 * which is our own descriptor of the engagement, is shortened.
 */
const testimonials = [
  {
    quote:
      'Thank you for holding space, and helping me see where I can make improvements. And thank you for helping me process, and see that I am not acting from a space of love or peace.',
    name: 'Jessie Santos',
    role: 'Relationship Transition',
  },
  {
    quote:
      "I came into this conversation feeling anxious and overwhelmed. After our 1-hour discussion, I feel confident, motivated and relieved. I'm ready to get started on my project!",
    name: 'Charley S.',
    role: 'Confidence & Efficacy',
  },
  {
    quote:
      'Thank you for reminding me to honor myself. I see now that I was giving too much of myself to the event space. Now I understand that setting healthy boundaries around how much I engage—without falling out of honor with myself—helps me maintain a healthy balance between what I give to myself and what I contribute outward.',
    name: 'D. C.',
    role: 'Confidence & Efficacy',
  },
];

export default function Testimonials() {
  return (
    <Section tint>
      <Eyebrow>Client Stories</Eyebrow>
      <SectionTitle>In their words.</SectionTitle>

      <div className="mt-8 space-y-8">
        {testimonials.map((t) => (
          <blockquote key={t.name} className="border-l-2 border-brand-teal pl-6 max-w-[62ch]">
            <p className="text-[18px] leading-relaxed text-brand-paper/85">&ldquo;{t.quote}&rdquo;</p>
            <cite className="block mt-3 not-italic font-sans text-[15px] tracking-wide text-brand-gold">
              {t.name} &middot; {t.role}
            </cite>
          </blockquote>
        ))}
      </div>
    </Section>
  );
}
