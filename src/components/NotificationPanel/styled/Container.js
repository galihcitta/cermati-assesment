import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 720px;

    @media screen and (max-width: 480px) {
        flex-direction: column;
        justify-content: flex-start;
        padding: 0.5rem 0.5rem;
    }
`
export default Container