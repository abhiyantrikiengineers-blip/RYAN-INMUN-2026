export const SITE_NAME = "RYAN INMUN 2026";
export const SITE_SHORT = "RYAN INMUN";
export const SITE_TAGLINE = "Indian Model United Nations";
export const SITE_DESCRIPTION =
  "RYAN INMUN 2026 — the 24th edition of India's longest-running Model United Nations. 31 August – 2 September 2026 at SCOPE Complex, New Delhi.";

export const CONFERENCE = {
  edition: 24,
  editionLabel: "24th Edition",
  established: 2001,
  dates: "31 August – 2 September 2026",
  datesShort: "31 Aug – 2 Sep 2026",
  venue: "SCOPE Complex, New Delhi",
  venueShort: "SCOPE Complex",
  city: "New Delhi",
  host: "Ryan International Group of Schools",
  foundation: "Ryan Foundation",
  theme: "Dialogue on Democracy",
  summit: "Ryan Leadership Summit",
  summitVenue: "Kedarnath Sahni Auditorium, New Delhi",
  feeNcr: "₹6,750",
  feeNcrNote: "Delhi-NCR schools, per delegate",
  payee: "Ryan Foundation, payable at New Delhi",
} as const;

export const STATS = [
  { value: "24th", label: "Edition" },
  { value: "1,000+", label: "Delegates" },
  { value: "100+", label: "Schools" },
  { value: "9", label: "Committees" },
  { value: "2001", label: "Established" },
] as const;

// Full content recovered from original project – remaining fields (DATES, FORMS, etc.) available in full export
export const DATES = [
  {
    date: "15 June",
    title: "Committee preference deadline",
    detail: "Background guides sent after preferences are received.",
  },
  {
    date: "1 August",
    title: "Registration and payment close",
    detail: "Submit fees with the registration form. No late entries.",
  },
  {
    date: "15 August",
    title: "My Country 2026 video due",
    detail: "Upload the four-minute news report to YouTube and share the link.",
  },
  {
    date: "20 August",
    title: "Travel plan deadline",
    detail: "Required for outstation teams travelling to New Delhi.",
  },
  {
    date: "25 August",
    title: "Position papers due",
    detail: "Maximum two pages. Committee and country only — no name or school.",
  },
  {
    date: "31 Aug – 2 Sep",
    title: "RYAN INMUN 2026 conference",
    detail: "Committee sessions at SCOPE Complex, New Delhi.",
  },
] as const;
