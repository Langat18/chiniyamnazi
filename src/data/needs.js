export const priorityNeeds = {
  intro: 'Consultations with community members, leaders and the DCC identified the following priority needs:',
  primary: {
    title: 'Capacity Building (Primary Focus)',
    items: [
      'Village Elders need orientation on their new NGAO roles and mandate',
      'Youth need entrepreneurship, e-GP and AGPO skills',
      'Women need economic empowerment and access to government procurement',
      'Persons with disabilities need inclusion, rights awareness and enterprise support',
    ],
  },
  groups: [
    { title: 'Economic Empowerment', items: ['Youth unemployment and limited income opportunities', 'Need for entrepreneurship and enterprise development support', 'Access to government procurement opportunities — AGPO, e-GP'] },
    { title: 'Health and Social Wellbeing', items: ['HIV awareness and prevention', 'Maternal and child health support', 'Community health education', 'Social protection registration — SHA, NSSF, Inua Jamii'] },
    { title: 'Environment', items: ['Low tree cover — target 100,000 trees planted by Year 3', 'Climate change effects and water conservation needs', 'Food security and sustainable agriculture'] },
    { title: 'Education', items: ['Infrastructure improvement at Malomani Primary School', 'Learning resources and materials', 'Mentorship and career guidance'] },
  ],
};

export const fromPrioritiesToAction =
  'The priorities identified through the consultations point to specific areas where practical support can make a meaningful difference. While capacity building remains at the heart of the initiative, two sites in interior Ganze Sub-County stood out as important points of community need and opportunity: Malomani Primary School and Dungicha Community Dispensary.';

export const sites = [
  {
    id: 'malomani',
    name: 'Malomani',
    kind: 'Mixed Day Primary School',
    stat: 'School Population: Approximately 393 learners',
    challenges: ['Dilapidated classroom floors', 'Inadequate desks', 'Leaking roofs and damaged gutters', 'Inadequate sanitation facilities', 'Lack of perimeter fencing', 'Limited ICT infrastructure', 'Inadequate water harvesting facilities', 'Poor kitchen infrastructure'],
    interventions: ['Classroom rehabilitation', 'Provision of desks', 'Roofing improvements', 'Water harvesting systems', 'School fencing', 'Learning materials support', 'Solar lighting installation', 'Computer lab setup'],
    images: ['malomani-1', 'malomani-2', 'malomani-3'],
  },
  {
    id: 'dungicha',
    name: 'Dungicha Dispensary',
    kind: 'Community health facility',
    challenges: ['Inconsistent access to essential medical supplies', 'Need for improved health infrastructure', 'Water storage challenges', 'Community health outreach requirements', 'Lack of solar power for refrigeration and lighting'],
    interventions: ['Medical supplies and equipment', 'Solar power installation', 'Water and sanitation improvements', 'Medical outreach support', 'Community health education', 'Infrastructure improvements'],
    appeal: 'Dungicha Dispensary serves thousands of residents in interior Ganze. We are urgently appealing for support to equip this facility with essential supplies, solar power, and water storage. Every contribution makes a direct difference.',
    images: ['dungicha-1', 'dungicha-2', 'dungicha-3'],
  },
];
