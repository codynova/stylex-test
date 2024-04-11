import React from 'react'
import { createRoot } from 'react-dom/client'
import { Button } from 'cds-stylex'
import { Button2 } from './Button2.tsx'

const node = document.createElement('div') as Element

document.body.appendChild(node)

const root = createRoot(node)

root.render(
  <>
    <Button background="primary">Hello world</Button>
    <Button2 background="secondary">Hello world</Button2>
  </>
)
