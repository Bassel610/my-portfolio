export const CONTACT_SECTION = {
  eyebrow: 'Contact',
  title: "Looking for a frontend engineer? Let's talk.",
  right:
    'Open to frontend roles, contract-to-hire, and embedded engagements. Tell me a bit about your team, your stack, and the seat you\'re hiring for.',
  reply: 'Usually reply within 24h. Cairo time.',
};

export const CONTACT = {
  channels: [
    {
      kind: 'email',
      label: 'Baselsherif9@gmail.com',
      href: 'mailto:Baselsherif9@gmail.com',
      copyValue: 'Baselsherif9@gmail.com',
    },
    {
      kind: 'whatsapp',
      label: '+20 101 183 0985',
      href: 'https://wa.me/201011830985',
      copyValue: '+201011830985',
    },
    {
      kind: 'linkedin',
      label: 'linkedin / basel-sherif',
      href: 'https://www.linkedin.com/in/basel-sherif-68330a217',
    },
    {
      kind: 'github',
      label: 'github / Bassel610',
      href: 'https://github.com/Bassel610',
    },
  ],
  form: {
    fields: [
      { name: 'name', label: 'Name', type: 'text', required: true },
      { name: 'company', label: 'Company', type: 'text', required: false },
      { name: 'email', label: 'Email', type: 'email', required: true },
      { name: 'message', label: 'Message', type: 'textarea', required: true },
    ],
    submitLabel: 'Send message',
  },
};
