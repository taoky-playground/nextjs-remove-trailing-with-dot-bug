/** Add your relevant code here for the issue to reproduce */
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  return <div>
    <h3>Using Link href</h3>
    <Link href="a/">a/</Link>
    <br/>
    <Link href="b.git/">b.git/</Link>
    <h3>Using router.push</h3>
    <button type="button" onClick={() => router.push('a/')}>a/</button>
    <br/>
    <button type="button" onClick={() => router.push('b.git/')}>b.git/</button>
  </div>
}
