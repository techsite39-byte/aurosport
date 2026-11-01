/**
 * Tennis Club Membership Plans Configuration
 * 
 * Note: Pricing content is fully configurable.
 * You can adjust monthly/annual pricing, benefits, and routes here.
 */

export const membershipConfig = {
  currency: '$',
  billingCycle: 'Month',
  isVerified: false, // Flag indicating whether prices are verified or configurable defaults
  
  // Featured Pro Membership (highlighted in the left hero card)
  proMembership: {
    id: 'pro-membership',
    name: 'Pro Membership',
    label: 'PREMIUM MEMBERSHIP',
    price: 120, // Reference design example price: $120 / Month (configurable)
    priceDisplay: '$120 / Month',
    supportingText: 'Elevate your game. Experience more.',
    description: 'The definitive membership for dedicated players seeking unrestricted court access, tour-grade mentorship, and club prestige.',
    benefits: [
      'Full Court Access',
      'Priority Court Booking',
      'Professional Coaching',
      'Exclusive Club Events',
    ],
    featuresExtended: [
      'Unlimited booking across Grass, Clay & Indoor courts',
      '48-hour priority court reservation window',
      '2 monthly 1-on-1 sessions with ATP/ITF certified mentors',
      'Complimentary access to Grand Slam viewing galas',
      'Locker room suite & private wellness lounge privileges'
    ],
    ctaText: 'JOIN NOW',
  },

  // Compact Plan Rows (displayed on the right / bottom)
  plans: [
    {
      id: 'basic-plan',
      name: 'Basic Plan',
      badge: 'Casual Matchplay',
      tagline: 'Essential court access.',
      description: 'Suitable for casual players looking for weekend singles and doubles.',
      price: 45,
      priceDisplay: '$45 / Month',
      isPopular: false,
      benefits: [
        'Weekday court access (6 AM – 4 PM)',
        'Online reservation up to 3 days in advance',
        'Access to clubhouse amenities & ball machine rental'
      ],
      ctaText: 'Explore Plan',
    },
    {
      id: 'elite-plan',
      name: 'Elite Plan',
      badge: 'High Performance',
      tagline: 'Premium coaching benefits.',
      description: 'Priority booking and structured training for competitive league players.',
      price: 85,
      priceDisplay: '$85 / Month',
      isPopular: false,
      benefits: [
        'Full weekday & weekend prime court access',
        '7-day priority booking reservation window',
        '1 monthly technical masterclass clinic',
        'Club tournament & handicap ladder eligibility'
      ],
      ctaText: 'Explore Plan',
    },
    {
      id: 'pro-plan',
      name: 'Pro Membership',
      badge: 'Most Popular',
      tagline: 'Complete premium experience.',
      description: 'Exclusive club benefits, master coaching, and VIP court privileges.',
      price: 120,
      priceDisplay: '$120 / Month',
      isPopular: true,
      benefits: [
        'Unrestricted 24/7 court booking across all surfaces',
        '14-day advance priority reservation guarantee',
        'Full coaching privileges & video stroke diagnostics',
        'VIP access to sanctioned tournaments & clubhouse lounge'
      ],
      ctaText: 'Join Now',
    },
  ],
};
