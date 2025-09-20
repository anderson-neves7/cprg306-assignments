import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <nav>
        <Link href="/week-2">Go to Week 2 Page</Link>
      </nav>
      <p>Welcome to my assignment hub. Click above to view Week 2.</p>
    </main>
  );
}
