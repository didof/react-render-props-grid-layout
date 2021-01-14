import React from 'react'

import GridLayout from './components/GridLayout/GridLayout'

const itemList = ['red', 'blue', 'yellow', 'green', 'pink', 'black']

const App = () => (
  <div>
    <h1>React Render Props Grid Layout</h1>
    <GridLayout
      columnsAmount={3}
      rowHeight={100}
    >
      {(itemWidth) => React.Children.map(itemList, color => (
        <div
          style={{
            width: itemWidth,
            height: 50,
            backgroundColor: color
          }} />
      ))}
    </GridLayout>
  </div>
)

export default App;
