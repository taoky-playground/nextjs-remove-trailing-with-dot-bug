/** Add your relevant code here for the issue to reproduce */
// import Link from 'next/link';
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return <div>
    {/* <Link href="a/">a/</Link>
    <br/>
    <Link href="b.git/">b.git/</Link> */}
    <button type="button" onClick={() => router.push('a/')}>a/</button>
    <br/>
    <button type="button" onClick={() => router.push('b.git/')}>b.git/</button>
  </div>
}
