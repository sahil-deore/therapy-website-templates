/** All client-facing content is centralized for fast agency customization. */
export const site = {
  brand: 'Hearth & Harbor',
  descriptor: 'Psychotherapy & Counseling',
  eyebrow: 'A SPACE TO COME BACK TO YOURSELF',
  heroTitle: 'You don’t have to carry it all alone.',
  heroDescription: 'Thoughtful, down-to-earth therapy for people navigating anxiety, change, relationships, and the complicated work of being human.',
  location: 'Brooklyn, NY · Online across New York',
  consultation: 'Complimentary 15-minute consultation',
  email: 'hello@example.com', // Replace before launch.
  therapistName: 'Dr. Avery Morgan', // Fictional placeholder.
  therapistCredentials: 'PhD, Licensed Psychologist', // Fictional placeholder.
  therapistIntro: 'I believe good therapy begins with being met as you are—not as you think you should be. My approach is collaborative, curious, and grounded in the belief that change can happen without rushing it.',
  specialties: [
    { number: '01', title: 'Anxiety & overwhelm', detail: 'For the days when your mind won’t slow down and everything feels like too much.' },
    { number: '02', title: 'Relationships & attachment', detail: 'Understand familiar patterns and make room for more honest connection.' },
    { number: '03', title: 'Life transitions', detail: 'Support for the in-between seasons, when what comes next isn’t clear.' },
    { number: '04', title: 'Self-worth & identity', detail: 'Find a steadier relationship with yourself, beyond expectations and old stories.' },
  ],
  faqs: [
    { q: 'What happens during the first session?', a: 'We’ll talk about what brings you here, what you hope to get from therapy, and what would help you feel comfortable. There is no pressure to tell your whole story at once.' },
    { q: 'Do you offer online sessions?', a: 'Yes. This template includes copy for secure online therapy as well as in-person appointments. Confirm the service area and platform for each client.' },
    { q: 'How much does therapy cost?', a: 'Fees vary by practice. Replace this text with the therapist’s actual session rates, insurance information, and any sliding-scale policies.' },
    { q: 'How do I know if we’re a good fit?', a: 'A short introductory consultation gives you space to ask questions, share what you’re looking for, and decide whether you’d like to move forward.' },
  ],
} as const;
