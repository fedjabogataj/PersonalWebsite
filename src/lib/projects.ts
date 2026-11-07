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
    slug: 'forecast-combination',
    number: '04',
    title: 'Combining 15 stock-return forecasts',
    summary:
      'A quant challenge: combine 15 anonymised models that forecast 10-day stock returns into one daily long-only allocation. Walk-forward diagnostics found two hidden signals — the difference of two near-identical models and an interaction where one model\'s skill flips sign with another — which lifted an IC-weighted combination from 0.039 to 0.087 out of sample, roughly doubling the excess return of the best single model.',
    description:
      'Given daily forecasts from 15 anonymised models for a universe of around 500 stocks, the task was to combine them into one long-only daily allocation for an unseen test period, using only information available at the time.\n\nI first judged each model on its own with a cross-sectional rank IC and an honest t-statistic computed on non-overlapping days. Some models carried a stable signal, one was reliably wrong (useful with a negative weight), several were noise, and one had no stock-picking skill but predicted the direction of the market. Every combination method was then compared walk-forward, refitting every 63 days with an 11-day purge so no future returns leaked into a fit.\n\nGradient boosting beat every linear method, and permutation importance showed why: it relied on four inputs that look useless individually. Two of them were near-copies (correlation 0.98) whose difference cancels a shared noise term and leaves a strong signal (IC 0.054, t ≈ 12). The other two formed an interaction: one model forecasts well where the other is high and equally badly where it is low, so their product is a strong signal (IC 0.057, t ≈ 13). With both made explicit inputs, a simple IC-weighted linear combination matched Ridge and beat gradient boosting while staying easy to explain.\n\nThe final portfolio holds the top 30 stocks, weighted by the combined score, and moves to 50% cash when the market-timing model predicts a negative market. In validation it earned more than twice the excess return of the best single model, with a Sharpe ratio of 2.47 against 1.53 and a smaller drawdown.',
    tags: ['Python', 'Quant Finance', 'Forecast Combination', 'Walk-Forward Validation', 'pandas'],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/fedjabogataj/ErsteChallenge',
        external: true,
      },
    ],
  },
  {
    slug: 'earnings-volatility',
    number: '05',
    title: 'Erste Group earnings volatility',
    summary:
      'An event study of how Erste Group\'s share-price volatility behaves around its quarterly results, benchmarked against the ATX. On the publication day volatility is about 2.8 times its normal level, and none of 1,000 random placebo date sets came close, which is a case for market makers widening spreads ahead of known results dates.',
    description:
      'Results dates are announced in advance, so if volatility reliably spikes around them, a market maker should widen quotes and spreads ahead of the event. This project tests whether that is true for Erste Group (EBS.VI), how quickly volatility returns to normal, and whether the effect is specific to Erste or shared by the Austrian ATX index.\n\nEvent dates are scraped from Erste\'s investor-relations financial calendar and snapped to the nearest trading day. For each of the 11 results dates since 2023, the study takes a window of 10 trading days either side, measures the root-mean-square of daily log returns across events for each relative day, and divides it by the same measure over all days outside any event window.\n\nOn the publication day Erste\'s volatility is about 2.8 times its baseline, while the ATX stays at its normal level on the same dates, so the effect is specific to the stock. A placebo test that drew 1,000 random sets of non-event days never produced a ratio that high. Volatility stays somewhat elevated for a few days afterwards and is back to normal within about five trading days.',
    tags: ['Python', 'Event Study', 'Volatility', 'pandas', 'yfinance'],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/fedjabogataj/Erste-Earning-Volatility',
        external: true,
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
