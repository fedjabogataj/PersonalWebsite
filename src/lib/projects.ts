export type ProjectLink = {
  label: string;
  href: string;
  external?: boolean;
  note?: string;
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  summary: string;
  description: string;
  tags: string[];
  links: ProjectLink[];
};

export const PROJECTS: Project[] = [
  {
    slug: 'trading-agent',
    number: '01',
    title: '	Predicting the value of financial flows with reinforcement and deep learning',
    summary:
      'My bachelor thesis explored deep reinforcement learning for financial market prediction, comparing feedforward, LSTM, and GRU agent architectures. Each agent learned to buy, hold, or sell directly from historical price data across multiple financial instruments over the 2019–2024 period. Results showed the feedforward agent performed best on most instruments, while the GRU agent had an edge on those with sharp, sudden price movements.',
    description: 'Predicting the value of financial flows is one of the most challenging machine learning problems, as historical data on value movements contain a lot of noise and are unstable. Current approaches focus on using reinforcement learning and using neural networks to predict the next action. In this thesis, we will explore the use of recurrent neural networks to perform these functions and compare them to each other. We will compare the performance of a neural network with LSTM layers, which have already proven to be very promising both in the field of predicting financial flows and playing games, and a neural network with GRU layers, the use of which has not yet been well explored. By using recurrent neural networks, we want to better capture temporal dependencies and patterns in the data, and it will also allow us to use a larger amount of data (from past time intervals) to predict the next action to achieve greater accuracy. The results of our experiments show that, in the period between 2019 and 2024, the agent with a feedforward neural network performs best on most financial instruments, while the agent with GRU layers performs best on financial instruments with large and sudden price changes.',
    tags: ['Python', 'Reinforcement Learning', 'Deep Learning', 'Time-Series'],
    links: [
      {
        label: 'University Repository',
        href: 'https://repozitorij.uni-lj.si/IzpisGradiva.php?id=162599&lang=eng',
        external: true,
      },
      {
        label: 'Bachelor Thesis (Slovenian)',
        href: 'https://repozitorij.uni-lj.si/Dokument.php?id=191993&lang=eng',
        external: true,
      },
      {
        label: 'GitHub',
        href: 'https://github.com/fedjabogataj/Market-Prediction-DRQN',
        external: true,
      },
    ],
  },
  {
    slug: 'notepilot',
    number: '02',
    title: 'Notepilot',
    summary:
      'Notepilot is an AI-powered notetaking app that lets users capture notes and retrieve them by querying in natural language using Retrieval-Augmented Generation. An LLM-based summarisation layer distills longer notes into concise insights on demand. Built with Next.js and a vector database backend for fast semantic search.',
    description:       'Notepilot is an AI-powered notetaking app that lets users capture notes and retrieve them by querying in natural language using Retrieval-Augmented Generation. An LLM-based summarisation layer distills longer notes into concise insights on demand. Built with Next.js and a vector database backend for fast semantic search.',
    tags: ['Next.js', 'TypeScript', 'RAG', 'ChromaDB', 'LLM'],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/fedjabogataj/Notepilot',
        external: true,
      },
      {
        label: 'Live Site',
        href: '#TODO_NOTEPILOT_SITE',
        external: true,
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
