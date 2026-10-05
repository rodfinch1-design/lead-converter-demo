// Everything about the business lives here. Swap this file to reuse the site for a real client.
export const biz = {
  demo: true,                                   // demo mode: banner, "sample" labels, noindex
  name: 'Coolside Heating & Air',
  short: 'Coolside',
  city: 'Tampa Bay',
  areas: ['Tampa', 'St. Petersburg', 'Clearwater', 'Brandon', 'Riverview', 'Wesley Chapel', 'Largo', 'Plant City'],
  phone: '(813) 555-0142',                      // 555-01xx numbers are reserved for fiction
  phoneHref: 'tel:+18135550142',
  smsHref: 'sms:+18135550142',
  hours: 'Open 7 days, 7am–9pm',
  license: 'State license #CAC1800000 (sample)',
  rating: 4.9,
  reviewCount: 312,
  diagnostic: 79,
  responseSeconds: 60,
};

// Lead delivery. PUBLIC_LEAD_WEBHOOK = the CRM's inbound webhook (e.g. a GHL workflow trigger).
// Empty = demo mode: the lead is shown on the thank-you page instead of being sent.
export const leadWebhook = import.meta.env.PUBLIC_LEAD_WEBHOOK ?? '';
export const ga4Id = import.meta.env.PUBLIC_GA4_ID ?? '';
export const clarityId = import.meta.env.PUBLIC_CLARITY_ID ?? '';
