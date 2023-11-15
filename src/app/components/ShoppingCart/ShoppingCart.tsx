"use client"
import { styled } from "styled-components"
import { CartShoppingIcon } from "../Icons/cartShoppingIcon"

const Div = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    background-color: var(--white);
    border-radius: 8px;
    padding: 15px 27px;
    span {
        font-weight: 700;
    }
`

export function ShoppingCart() {    
    return (
        <Div>
            <CartShoppingIcon/>
            <span>0</span>
        </Div>
    )
}