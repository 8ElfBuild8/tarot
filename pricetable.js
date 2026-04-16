import { Clerk } from '@clerk/clerk-js'

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

const clerk = new Clerk(clerkPubKey)
await clerk.load()

document.getElementById('app').innerHTML = `
  <div id="pricing-table"></div>
`

const pricingTableDiv = document.getElementById('pricing-table')

clerk.mountPricingTable(pricingTableDiv)