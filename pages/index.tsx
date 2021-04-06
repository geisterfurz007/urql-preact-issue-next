import Link from 'next/link'
import {useExampleQuery} from "../src/example.generated";

export default function Home() {
  const [query] = useExampleQuery();
  const { data, fetching, error } = query;

  if (fetching) return <div>Loading...</div>;
  if (error) return <div>Error :c</div>;
  console.log(data);

  return (
    <div>
      Hello World.{' '}
      <ul>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/ssr">
            <a>SSR</a>
          </Link>
        </li>
        <li>
          <Link href="/ssg">
            <a>SSG</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}
