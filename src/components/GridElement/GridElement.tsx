import { GridElementProps } from './GridElement.types'
import { GridElementWrapper } from './GridElement.styles'


const GridElement = ({ style, content }: GridElementProps): JSX.Element => {
    return (
        <GridElementWrapper
            {...style}
        >
            {content}
        </GridElementWrapper>
    )
}

export default GridElement