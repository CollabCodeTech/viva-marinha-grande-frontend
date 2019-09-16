import styled from 'styled-components'

export const List = styled.ol``

export const Item = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: var(--gap-min);
  transition: transform 80ms linear;
  color: ${({active}) => active ? 'var(--color-strawberry)' : 'var(--color-sasame)'};
  font-weight: ${({active}) => active ? 'bold' : 'normal'};

  :hover {
    transform: translateX(calc(var(--gap-min) / 2));
  }

  &::before {
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    border: 1px solid ${({active}) => active ? 'var(--color-strawberry)' : 'var(--color-tamarind)'};
    margin-right: var(--gap-max);
    background-color: ${({active}) => active ? 'var(--color-strawberry)' : 'var(--color-coconut)'};
    transition: background-color 100ms linear;
  }
`

export const Amount = styled.strong`
  margin-left: auto;
`
