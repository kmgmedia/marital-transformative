// Two explicit copy lengths, matching the old index.njk (short) vs about.njk (full) bios.

export const teamFull = [
  {
    photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&h=200&q=80",
    name: "Dr. Adebola Williams",
    role: "Lead Counsellor",
    credentials: "M.Sc. Family Therapy, NMCN",
    bio: "Over 12 years helping couples navigate life's toughest moments with grace, professionalism and God's wisdom."
  },
  {
    photo: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=200&h=200&q=80",
    name: "Pastor Grace Okafor",
    role: "Faith & Marriage Coach",
    credentials: "B.Div, Certified Life Coach",
    bio: "Passionate about helping couples build Christ-centred marriages that stand the test of time."
  },
  {
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&h=200&q=80",
    name: "Mr. Emmanuel Nwosu",
    role: "Trauma-Informed Therapist",
    credentials: "PGDip Psychology, CAPT",
    bio: "Specialises in helping couples heal from infidelity, grief, and deep relational wounds through evidence-based methods."
  },
  {
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200&q=80",
    name: "Mrs. Blessing Adeyemi",
    role: "Premarital Specialist",
    credentials: "M.Sc. Counselling Psychology",
    bio: "Guides engaged couples in building a strong, intentional foundation for lifelong marriage."
  }
];

export const teamShort = [
  { ...teamFull[0], bio: "Over 12 years helping couples navigate life's toughest moments with grace and God's wisdom." },
  { ...teamFull[1] },
  { ...teamFull[2], bio: "Specialises in helping couples heal from infidelity, grief, and deep relational wounds." },
  { ...teamFull[3] }
];
