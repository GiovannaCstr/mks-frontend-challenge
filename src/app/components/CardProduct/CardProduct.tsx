"use client"
import { styled } from "styled-components"

interface CardProductsProps {
    id: number,
    imagem: string,
    title: string,
    price: string
}

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 260px;
    height: 100%;
    border-radius: 8px;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);
    color: var(--text-color);
    img {
        width: 200px;
        height: 200px;
    }
    div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px;
    }
    h3 {
        font-weight: 400;
        font-size: 16px;
    }
    span {
        background-color: var(--text-color);
        color: var(--white);
        font-weight: 700;
        font-size: 15px;
        padding: 6px;
        border-radius: 5px;
    }
    p {
        font-weight: 300;
        font-size: 12px;
        padding: 12px;
    }
    button {
        background-color: var(--primary);
        border: none;
        border-radius: 0 0 8px 8px;
        color: var(--white);
        cursor: pointer;
        font-size: 14px;
        font-weight: 400;
        padding: 7px 30px;
        width: 100%;
    }
`

export function CardProducts(product: CardProductsProps) {
    return (
        <Div>
            <img src={product.imagem}/>
            <div>
                <h3>{product.title}</h3>
                <span>R${product.price}</span>
            </div>
            <p>Redesigned from scratch and completely revised.</p>
            <button>COMPRAR</button>
        </Div>
    )
}