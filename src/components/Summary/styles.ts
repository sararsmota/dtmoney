import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -10rem;

    div{
        background: var(--shape-secondary);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--shape);

        header{
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        p{
            color: var(--text-title);
        }

        strong{
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;

        }

        &.highlight-background{
            background-color: var(--green);
            color: #fff;
        }
    }

`