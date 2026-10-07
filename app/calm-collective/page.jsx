import Deck from './Deck';

// Unlisted page: not linked from the site nav, and kept out of search engines.
export const metadata = {
  title: 'Rising above the line · UM × Calm Collective',
  description: 'Introductory research collaboration deck for Calm Collective.',
  robots: { index: false, follow: false, nocache: true },
};

export default function CalmCollectivePage() {
  return <Deck />;
}
