import styled from 'styled-components'

type WrapperProps = {
    width: number;
    height?: number;
    backgroundColor?: string;
}

export const GridElementWrapper = styled.div<WrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ width }) => `${width}px`};
  ${({ height }) => height && `height: ${height}px`};
  ${({ backgroundColor }) => backgroundColor && `background-color: ${backgroundColor}`};
`