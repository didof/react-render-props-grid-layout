import React from 'react'

import GridLayout from './components/GridLayout/GridLayout'

const colors = ['black', 'brown']

const itemList = (amount: number, shift: number): string[] => {
  let i = amount;
  let output = [];
  let toggle = 0;
  while (i > 0) {
    if(i % shift !== 0) toggle = Boolean(toggle) ? 0 : 1
    output.push(colors[toggle])
    i--;
  }
  return output;
}

const App = () => (
  <div>
    <h1>React Render Props Grid Layout</h1>
    <GridLayout
      columnsAmount={8}
    >
      {(itemWidth) => React.Children.map(itemList(64, 8), color => (
        <div
          style={{
            width: itemWidth,
            height: itemWidth,
            backgroundColor: color
          }} />
      ))}
    </GridLayout>
  </div>
)

export default App;
