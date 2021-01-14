import styled from 'styled-components'

import { ExpandedRelative } from 'src/styles/expand'

type GridProps = {
    columnsAmount: number;
    rowHeight?: number;
}

export const Grid = styled(ExpandedRelative) <GridProps>`
    display: grid;
    
    justify-content: center;
    align-items: center;
    
    grid-template-columns: ${({ columnsAmount }) => `repeat(${columnsAmount}, 1fr)`};
    grid-auto-rows: ${({ rowHeight }) => rowHeight ? `${rowHeight}px` : 'auto'};

`