import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
      <h1>Hi! My name is Carson Heo (허윤석). My hobby is playing basketball, cycling, playing the piano, and playing online games. The game I enjoy the most is Overwatch. I hope we get along well soon! ^^</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}