import { useState, useEffect, createRef } from 'react'
import { GridLayoutProps } from './GridLayout.types'

import { Grid } from './GridLayout.styles'

const GridLayout = ({ children, columnsAmount, rowHeight }: GridLayoutProps): JSX.Element => {

    const gridRef = createRef<HTMLDivElement>()
    const [elementWidth, setElementWidth] = useState<number>(0);

    useEffect(() => {
        const { current } = gridRef
        let gridWidth = current!.getBoundingClientRect().width
        setElementWidth(Math.round(gridWidth / columnsAmount));
    }, [])

    return (
        <Grid
            columnsAmount={columnsAmount}
            rowHeight={rowHeight}
            ref={gridRef}
        >
            {children(elementWidth)}
        </Grid>
    )
}

export default GridLayout
