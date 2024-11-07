import Button from '../component/button'

export default function Home() {
  return (
    <div>
      <h1>ㅋㅋ</h1>
      <h2>ㅋㅋ</h2>
      <h3>ㅋㅋ</h3>

      <Button variant="primary">primary</Button>
      <Button variant="secondary">secondary</Button>
      <Button variant="outline">outline</Button>
      <Button loading={true}>loading</Button>
      <Button disabled>disabled</Button>
    </div>
  )
}
