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
  {
    slug: 'movrec',
    number: '03',
    title: 'MovRec',
    summary:
      'A conversational movie recommender: a user asks for recommendations in plain language, FastAPI retrieves relevant movies from a Postgres database via pgvector similarity search, and Gemini turns the retrieved results into a grounded, helpful reply. Runs end to end in Docker.',
    description:
      'MovRec is a small conversational movie recommender built with FastAPI, Postgres, and pgvector, grounded by Google\'s Gemini API. A user message is saved and handed to Gemini along with the conversation history and a single tool the model can call: a semantic search over the movie catalog. When a recommendation is called for, Gemini decides on its own to call that tool with a natural-language query plus any genre or year filters it inferred; the tool embeds the query with Gemini\'s embedding API and runs a cosine-distance nearest-neighbor search against a pgvector column holding a pre-computed embedding for every movie, so retrieval is a real vector search over plot, genre, and title representations rather than a keyword match. Gemini then writes a final reply grounded only in the retrieved movies, which the system prompt explicitly forbids it from inventing. The catalog is a 250-movie subset of the MovieLens ml-latest-small dataset, enriched with real plot summaries pulled from the TMDb API. The whole app — FastAPI, Postgres/pgvector, and the service itself — runs as two containers via Docker Compose.',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'pgvector', 'Gemini', 'RAG', 'Docker'],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/fedjabogataj/MovRec',
        external: true,
      },
    ],
  },
  {
    slug: 'process-logic-transformer',
    number: '04',
    title: 'Small Transformers for Semiconductor Process Logic',
    summary:
      'A hackathon project (Zero One Hack 2026, Industrial AI track, with Infineon) training a family-conditioned GPT-style transformer to learn semiconductor fab process-sequence logic from synthetic data. Token embeddings were initialised from a BGE sentence encoder, and the final model was selected via a 9-run L9 Taguchi sweep over learning rate, depth, and regularisation, scored against the organizers\' own evaluation harness.',
    description:
      'Built with teammate Luka Premuš for the Industrial AI track of the Zero One Hack 2026 hackathon, mentored by Infineon. Semiconductor fab lots follow a strict recipe of ~110-150 ordered steps drawn from a vocabulary of about 120 step types, under hard ordering rules and three product families (MOSFET, IGBT, IC) that share a backbone but differ in prep blocks and cycle counts. The track asked whether a model can genuinely learn that ordering grammar rather than just local token frequencies, and whether it generalises to a held-out fourth product family. The approach treats one process step as one token and models sequences autoregressively with a GPT-style decoder conditioned on product family, with token embeddings initialised from BAAI/bge-base-en-v1.5 by encoding each step\'s name, description, and parameters — so an unseen step from the OOD family lands in the same semantic space. The final model was chosen from a balanced 9-run L9 Taguchi sweep over learning rate, depth, dropout, and weight decay, re-ranked using the organizers\' own official scorer rather than an internal metric, and was the Pareto winner on next-step prediction and sequence completion while tying on anomaly detection F1.',
    tags: ['Python', 'PyTorch', 'Transformers', 'NLP', 'Hackathon'],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/fedjabogataj/Zero-one-hack-2026',
        external: true,
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
