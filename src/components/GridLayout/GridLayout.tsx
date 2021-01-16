import React, { useState, useEffect, createRef, ReactElement } from 'react'
import { GridLayoutProps } from './GridLayout.types'
import { Grid } from './GridLayout.styles'
import GridElement from '../GridElement/GridElement'

const GridLayout = ({ children, columnsAmount, rowHeight, builder, items }: GridLayoutProps): ReactElement => {
    if (typeof children === 'undefined' && typeof builder === 'undefined') {
        throw new Error('Either children or builder is required')
    }
    if (typeof builder !== 'undefined' && (typeof items === 'undefined' || items.length < 0)) {
        throw new Error('When using builder your should provide also items')
    }

    const gridRef = createRef<HTMLDivElement>()
    const [elementWidth, setElementWidth] = useState<number>(0);

    useEffect(() => {
        const { current } = gridRef
        let gridWidth = current!.getBoundingClientRect().width
        setElementWidth(Math.round(gridWidth / columnsAmount));
    }, [columnsAmount, rowHeight, gridRef])

    return (
        <Grid
            columnsAmount={columnsAmount}
            rowHeight={rowHeight}
            ref={gridRef}
        >
            {Boolean(children) && children!(elementWidth)}
            {Boolean(builder) && items!.map(({ component, style }, index) => {
                const { width, height, backgroundColor } = style
                return (
                    <GridElement
                        key={index}
                        style={{
                            width: width || elementWidth,
                            height,
                            backgroundColor,
                        }}
                        content={builder!(component)}
                    />
                )
            })}
        </Grid>
    )
}

export default GridLayout