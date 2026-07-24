// Two explicit copy lengths, matching the old index.njk (short) vs about.njk (full) bios.

export const teamFull = [
  {
    photo:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1784902101/maritaltransformative/Rev_d_Dr._Tunji_Bangbose_bwocbo.png",
    name: "Rev'd Dr. Tunji Bangbose",
    role: "Senior Pastor & Marriage Counsellor",
    credentials: "Ph.D. Guidance & Counselling Psychology",
    bio: "A pastor and counsellor with over three decades of experience in marriage, family life and leadership training.",
  },
  {
    photo:
      "https://images.unsplash.com/photo-1620424037570-15137a4a562d?auto=format&fit=crop&w=200&h=200&q=80",
    name: "Pastor Grace Okafor",
    role: "Faith & Marriage Coach",
    credentials: "B.Div, Certified Life Coach",
    bio: "Passionate about helping couples build Christ-centred marriages that stand the test of time.",
    photoPending: true,
  },
  {
    photo:
      "https://images.unsplash.com/photo-1783012039560-5690190a9b9b?auto=format&fit=crop&w=200&h=200&q=80",
    name: "Mr. Emmanuel Nwosu",
    role: "Trauma-Informed Therapist",
    credentials: "PGDip Psychology, CAPT",
    bio: "Specialises in helping couples heal from infidelity, grief, and deep relational wounds through evidence-based methods.",
    photoPending: true,
  },
  {
    photo:
      "https://images.unsplash.com/photo-1591634616938-1dfa7ee2e617?auto=format&fit=crop&w=200&h=200&q=80",
    name: "Mrs. Blessing Adeyemi",
    role: "Premarital Specialist",
    credentials: "M.Sc. Counselling Psychology",
    bio: "Guides engaged couples in building a strong, intentional foundation for lifelong marriage.",
    photoPending: true,
  },
];

export const teamShort = [
  { ...teamFull[0] },
  { ...teamFull[1] },
  { ...teamFull[2], bio: "Specialises in helping couples heal from infidelity, grief, and deep relational wounds." },
  { ...teamFull[3] }
];
