"use client"
import { styled } from "styled-components"


interface CardAsideBarProps {
    imagem: string,
    title: string,
    quantity: number,
    price: string
}

const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px;
    padding: 20px;
    border-radius: 8px;
    background-color: var(--white);
    color: var(--black);
    img {
        width: 80px;
        height: 80px;
    }
    h3 {
        font-size: 15px;
        font-weight: 400;
        margin: 0 15px;
    }
    p {
        font-size: 14px;
        font-weight: 700;
    }
`

const TagQuantity = styled.span`
    display: flex;
    gap: 15px;
    padding: 5px 8px;
    margin-right: 10px;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    p {
        border-left: 1px solid var(--border-color);
        border-right: 1px solid var(--border-color);
        padding: 0 10px;
    }
    button {
        border: none;
        background: none;
    }
`

export function CardAsideBar(product: CardAsideBarProps) {
    return (
        <Div>
            <img src={product.imagem}/>
            <h3>{product.title}</h3>
            <TagQuantity>
                <button>-</button>
                <p>{product.quantity}</p>
                <button>+</button>
            </TagQuantity>
            <p>R${product.price}</p>
        </Div>
    )
}