// The community's intended principles. Today the site is static: there are no
// accounts, discussions or moderation yet. When a community platform is added,
// its moderation rules should be written from these, and can cite them by `id`.

export interface Principle {
  id: string;
  title: string;
  urdu: string;
  body: string;
  inPractice: string[];
}

export const principles: Principle[] = [
  {
    id: 'no-proof',
    title: "You don't have to prove you belong",
    urdu: 'یہاں ہونے کے لیے کسی ثبوت کی ضرورت نہیں',
    body: "Diagnosed, self-identifying, still questioning, or never assessed: you're welcome in the same way. Nobody here will ask for paperwork, a test result, or a convincing enough story.",
    inPractice: [
      "We don't ask anyone how they know.",
      "We don't rank people by how 'officially' neurodivergent they are.",
    ],
  },
  {
    id: 'listen-first',
    title: 'Listen before you try to fix',
    urdu: 'حل بتانے سے پہلے سنیے',
    body: "Sometimes a person wants ideas. Often they just want to be heard. We ask before giving advice, and we never offer cures, miracle diets or promises that someone can be made 'normal'.",
    inPractice: [
      "Try asking: 'Do you want suggestions, or do you want me to just listen?'",
      'No selling products, treatments or cures.',
    ],
  },
  {
    id: 'self-definition',
    title: 'Let people define themselves',
    urdu: 'ہر کوئی اپنی پہچان خود بیان کرے',
    body: "Some people say 'autistic', some say 'person with autism', some use no label at all. We use the words a person chooses for themselves, respect their boundaries, and never diagnose anyone else.",
    inPractice: [
      "Follow the other person's words for their own identity.",
      "Don't tell someone what they 'really' have.",
    ],
  },
  {
    id: 'privacy',
    title: "Protect each other's privacy",
    urdu: 'ایک دوسرے کی رازداری کا خیال رکھیے',
    body: "What someone shares here is theirs. We don't repeat others' stories, screenshot them, or share details that could identify them. We're also honest: no online space can promise complete anonymity or confidentiality, so share only what feels safe.",
    inPractice: [
      "Keep names, schools, workplaces and family details out of other people's stories.",
      'Think before sharing anything you would not want traced back to you.',
    ],
  },
  {
    id: 'ways-of-being',
    title: 'Make room for different ways of being',
    urdu: 'ہر انداز کے لیے جگہ بنائیے',
    body: "Some people write long messages, some write three words, some only read. Some reply in minutes, others in weeks. Different languages, processing speeds and access needs are all part of what this place is.",
    inPractice: [
      'Short replies, slow replies and no replies are all fine.',
      'Write in English, Urdu, Roman Urdu or your own language.',
    ],
  },
  {
    id: 'disagree-kindly',
    title: 'Disagree without demeaning',
    urdu: 'اختلاف کیجیے، تذلیل نہیں',
    body: "People here will come from different cities, families, faiths, classes and beliefs, and won't always agree. That's allowed. Harassment, bullying, ableism, racism, sectarian or any other discrimination isn't.",
    inPractice: [
      'Disagree with the idea, not the person.',
      'Nobody is asked to share, or give up, their beliefs to belong.',
    ],
  },
  {
    id: 'experience-not-medicine',
    title: 'Share experiences, not medical instructions',
    urdu: 'تجربہ بانٹیے، علاج نہیں',
    body: "'This helped me' is welcome. 'You should take this' or 'stop your medicine' isn't. We point each other to reliable resources and qualified people, and we never pressure anyone to start, change or stop professional care.",
    inPractice: [
      "Speak from your own experience: 'what worked for me was…'",
      'Leave diagnosis and prescriptions to qualified professionals.',
    ],
  },
  {
    id: 'no-pressure',
    title: 'Support without judgment or pressure',
    urdu: 'ساتھ دیجیے، بغیر پرکھے، بغیر دباؤ کے',
    body: 'Nobody owes this community their story, their diagnosis, an explanation or constant participation. You can arrive, read quietly, disappear for a while and come back. Your place stays yours.',
    inPractice: [
      "Don't push anyone to share more than they offer.",
      'Coming back after a long time away needs no explanation.',
    ],
  },
];
