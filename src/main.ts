import './style.css'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/`
  <nav>
  </nav>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
