"use client";

import '../styles/resultsPage.css';
import { useRouter } from 'next/navigation';

export default function ResultsPage() {
  const router = useRouter();

  const handleRetry = () => {
    router.push('/');
  };

  return (
    <div className="resultspage">
      <h1>Sınav tamamlandı!</h1>
      <h2>Sonuçlarınız:</h2>
      <p>Doğru cevap sayısı: ...</p>
      <button onClick={handleRetry}>Tekrar Dene</button>
    </div>
  );
}
