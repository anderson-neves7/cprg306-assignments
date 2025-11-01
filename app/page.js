import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <nav>
        <Link href="/week-2">Go to Week 2 Page</Link>
        <br />
        <Link href="/week-3">Go to Week 3 Page</Link>
        <br />
        <Link href="/week-4">Go to Week 4 Page</Link>
        <br />
        <Link href="/week-4">Go to Week 5 Page</Link>
        <br />
        <Link href="/week-6">Go to Week 6 Page</Link>
        <br />
        <Link href="/week-7">Go to Week 7 Page</Link>
      </nav>
      <p>Welcome to my assignment hub. Click above to view Week 2.</p>
    </main>
  );
}
