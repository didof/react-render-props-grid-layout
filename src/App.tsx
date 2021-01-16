import React from 'react'
import GridLayout from './components/GridLayout/GridLayout'
import { configItems } from './components/GridLayout/GridLayout.types'

const colors = ['green', 'yellow', 'red', 'blue', 'orange']

const elements: configItems[] = colors.map((color, index) => ({
  component: <div>{index}</div>,
  style: {
    width: index % 2 == 0 ? 100 * index : undefined,
    height: 20 * Math.pow(index, 2) + 30,
    backgroundColor: color
  }
}))

const App = () => (
  <div>
    <h1>React Render Props Grid Layout - The Return</h1>
    <GridLayout
      columnsAmount={3}
      items={elements}
      builder={(item) => (
        <div>{item}</div>
      )}
    />
  </div>
)

export default App;