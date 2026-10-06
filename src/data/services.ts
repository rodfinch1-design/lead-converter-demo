// One page per service: Google's #1 local organic factor (Whitespark 2026), and the plain facts AI answers quote.
// Prices are SAMPLE ranges for the demo business; a real client's page uses their own numbers from real jobs.
export type Service = {
  slug: string; name: string; short: string; title: string; h1: string; lead: string;
  signs: string[]; steps: [string, string][]; prices: [string, string][]; facts: [string, string][];
  faqs: [string, string][]; related: string[]; need: string;
};

export const services: Service[] = [
  {
    slug: 'ac-repair', name: 'AC repair', short: 'Not cooling, won’t start, leaking or noisy. Same-day.', need: 'AC not cooling',
    title: 'AC Repair in Tampa Bay, FL | Same-Day | Coolside Heating & Air',
    h1: 'AC repair in Tampa Bay, today',
    lead: 'Same-day AC repair across Tampa Bay. A licensed tech finds the problem, shows it to you, and gives you a flat price before any work starts.',
    signs: ['Warm air from the vents, or the house never reaches the set temperature', 'The outdoor fan isn’t spinning, or the unit hums and clicks', 'Water around the indoor unit, or the drain line keeps backing up', 'Ice on the copper lines or the indoor coil', 'Grinding, squealing or a burning smell (turn the system off and call)'],
    steps: [['We diagnose', 'Electrical checks, pressures and temperatures, and the drain. Photos of anything that’s failed.'], ['You get a flat price', 'One number for the repair, before we start. The $79 diagnostic is waived if you go ahead.'], ['We fix it and test it', 'Most repairs are done on the first visit; vans carry the common parts.']],
    prices: [['Run capacitor', '$150–$400'], ['Contactor', '$150–$350'], ['Clogged drain line', '$75–$250'], ['Condenser fan motor', '$300–$700'], ['Refrigerant leak search and repair', '$200–$1,500'], ['Compressor', '$1,800–$3,500']],
    facts: [['Response', 'Same-day for most of Tampa Bay; we text an arrival window within a minute.'], ['Guarantee', 'Every repair: 1 year, parts and labor.'], ['Brands', 'Carrier, Trane, Lennox, Rheem, Goodman, American Standard and most others.']],
    faqs: [['Is it worth repairing an older AC?', 'A common rule of thumb: multiply the system’s age by the repair price. Over about $5,000, start looking at replacement. Under that, repairing usually makes sense. We’ll give you both numbers.'], ['Can you come today?', 'Most calls get a same-day visit. Text or call and we’ll give you an exact window.'], ['Do you charge extra on weekends?', 'No. Same prices 7 days a week, 7am to 9pm.']],
    related: ['ac-replacement', 'maintenance'],
  },
  {
    slug: 'ac-replacement', name: 'AC replacement', short: 'Sized to your house, quoted upfront, financing available.', need: 'Quote for a new system',
    title: 'AC Replacement in Tampa Bay, FL | Upfront Quotes | Coolside Heating & Air',
    h1: 'A new AC, sized for your house',
    lead: 'We measure your house before we quote, so the new system fits it: not too big, not too small. One written price, including the permit.',
    signs: ['The system is 12–15+ years old and repairs keep coming', 'It runs constantly and the house still feels sticky', 'Your electric bill keeps climbing in summer', 'It still uses R-22 refrigerant (most systems from before 2010)'],
    steps: [['We measure', 'A load calculation on your house: square footage, windows, insulation, sun.'], ['You choose', 'Two or three options with the yearly running cost of each, not just the price tag.'], ['We install and pull the permit', 'In Florida a system change-out needs a permit from your city or county. We handle it and the inspection.']],
    prices: [['2–3 ton system, standard efficiency', '$6,500–$9,500'], ['3–4 ton, higher efficiency', '$8,500–$13,000'], ['Heat pump system', '$7,500–$14,000']],
    facts: [['New-system rules', 'New split ACs sold in the Southeast must meet at least 14.3 SEER2 (13.8 for the largest sizes), and new systems now use the newer A2L refrigerants (R-454B or R-32).'], ['Warranty', '10-year parts from the manufacturer when registered, plus our 2-year labor guarantee.'], ['Financing', 'Options for qualified buyers, including 0% offers on some systems.']],
    faqs: [['How long does a replacement take?', 'Most homes are done in one day; the permit inspection is scheduled after.'], ['Bigger is better, right?', 'No. An oversized AC cools fast and shuts off before it pulls the humidity out, so the house feels clammy. That’s why we measure.'], ['Do I need a permit?', 'Yes, in Florida. We pull it and meet the inspector.']],
    related: ['heating', 'indoor-air-quality'],
  },
  {
    slug: 'heating', name: 'Heat pumps & heating', short: 'Heat pumps and furnaces for the few cold nights we get.', need: 'Something else',
    title: 'Heat Pump & Heating Repair in Tampa Bay, FL | Coolside Heating & Air',
    h1: 'Heat pump and heating repair',
    lead: 'Most Tampa Bay homes heat with a heat pump: the same outdoor unit that cools in summer runs in reverse in winter. When it doesn’t, we fix it the same day.',
    signs: ['Cold air on heat mode', 'The outdoor unit is iced over for hours', '“Aux heat” or “emergency heat” stays on and the bill jumps', 'A burning smell the first time the heat runs (normal for a few minutes; not after that)'],
    steps: [['We check both modes', 'Heating and cooling share parts: the reversing valve, defrost board and sensors.'], ['Flat price first', 'You approve the price before we start.'], ['Tested in heat and cool', 'So it’s ready for whichever season is next.']],
    prices: [['Reversing valve', '$600–$1,500'], ['Defrost control board', '$250–$650'], ['Heat strip (backup heat)', '$200–$600']],
    facts: [['Response', 'Same-day.'], ['Guarantee', '1 year, parts and labor.'], ['Fuel', 'Heat pumps and electric furnaces; gas furnaces where installed.']],
    faqs: [['Why is my outdoor unit steaming in winter?', 'That’s the defrost cycle melting frost. A few minutes is normal; ice for hours isn’t.'], ['Is emergency heat bad?', 'It’s backup electric heat. It works, but it costs much more to run, so call if it stays on.']],
    related: ['ac-repair', 'maintenance'],
  },
  {
    slug: 'maintenance', name: 'AC tune-up & maintenance plan', short: 'A 21-point check that catches failures before the hottest week.', need: 'Tune-up / maintenance',
    title: 'AC Tune-Up & Maintenance Plan in Tampa Bay, FL | Coolside Heating & Air',
    h1: 'AC tune-ups that prevent the 9pm breakdown',
    lead: 'In Florida an AC runs most of the year. A tune-up in spring and fall catches the parts that fail on the hottest night: capacitors, drains and dirty coils.',
    signs: ['It’s been more than a year since anyone looked at it', 'The drain line has backed up before', 'The outdoor coil is matted with grass, pollen or salt'],
    steps: [['21-point check', 'Electrical parts, refrigerant pressures, drain, coils, filter, thermostat.'], ['Clean', 'Outdoor coil rinse, drain line flush, indoor coil check.'], ['Report', 'Photos and a plain list: what’s fine, what’s wearing out, what can wait.']],
    prices: [['One tune-up', '$89–$129'], ['Plan: 2 visits a year', '$16/month'], ['Plan members', '15% off repairs, priority scheduling']],
    facts: [['Why twice a year', 'Spring for the cooling season, fall for heat and after the summer’s pollen and storms.'], ['Coastal homes', 'Salt air corrodes outdoor coils faster; plan members on the water get a coil rinse every visit.']],
    faqs: [['Does a tune-up really help?', 'It catches the cheap parts before they take out expensive ones, and a clean coil cools faster.'], ['Can I cancel the plan?', 'Any time. No contract.']],
    related: ['ac-repair', 'indoor-air-quality'],
  },
  {
    slug: 'indoor-air-quality', name: 'Indoor air quality', short: 'Filters, UV lights and humidity control for allergies and mildew.', need: 'Something else',
    title: 'Indoor Air Quality & Humidity Control in Tampa Bay, FL | Coolside Heating & Air',
    h1: 'Cleaner, drier air at home',
    lead: 'Humidity is the Florida problem: above 60% indoors, mold, mildew and dust mites thrive. We measure it first, then fix the cause.',
    signs: ['Musty smell when the AC starts', 'Condensation on windows or vents', 'Allergies that are worse indoors', 'Indoor humidity above 60% on a hygrometer'],
    steps: [['Measure', 'Humidity, airflow and filter fit, with readings you can see.'], ['Fix the cause', 'Often a system that’s too big, a leaky duct or the fan set to “on”.'], ['Add what helps', 'Better filtration, a UV light for the coil, or a whole-home dehumidifier.']],
    prices: [['Air quality check', '$79 (waived with work)'], ['UV coil light', '$350–$700'], ['Whole-home dehumidifier', '$1,800–$3,200']],
    facts: [['Target', 'Indoor humidity below 60%, ideally 30–50% (the EPA’s guidance for preventing mold).'], ['Simple first step', 'Set the thermostat fan to “auto”, not “on”, so water on the coil can drain instead of blowing back in.']],
    faqs: [['Will an air purifier fix mildew?', 'Not on its own. Mildew is a humidity problem, so we start there.'], ['How often should I change filters?', 'Every 1–3 months in Florida, more often with pets.']],
    related: ['maintenance', 'ac-replacement'],
  },
];
export const bySlug = Object.fromEntries(services.map((s) => [s.slug, s]));
