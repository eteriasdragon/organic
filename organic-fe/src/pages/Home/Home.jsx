export default function Home () {
  fetch(`http://localhost:3001/products`).then(res => res.json()).then(data => console.log(data));
  return <div>Hello</div>
}