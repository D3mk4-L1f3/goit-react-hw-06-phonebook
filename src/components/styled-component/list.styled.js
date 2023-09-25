import styled from '@emotion/styled';

export const ListStyle = styled.ul`
    display: flex;
    gap: 20px;
    flex-direction: column-reverse
`;

export const ItemStyle = styled.li`
    display: flex;
    align-items: center;
    border-radius: 10px;
    padding: 0 15px;
    height: 45px;
    justify-content: space-between;
    background-color: rgba(223, 227, 230, 0.3);
    `  
;

export const DatedCreate = styled.p`
    font-size: 7px;
    font-weight: 600;
    
    &:hover{
        scale: 1.7;
    }
`;