"use client"
import { styled } from "styled-components"
import { CartShoppingIcon } from "../Icons/CartShoppingIcon"
import { useLocalStorage } from "../hooks/useLocalStorage"

const Button = styled.button`
    display: flex;
    align-items: center;
    gap: 15px;
    background-color: var(--white);
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 700;
    padding: 15px 27px;
`

export function ShoppingCart() {  
    const { value } = useLocalStorage('cart-items', [])
    return (
        <Button>
            <CartShoppingIcon/>
            <span>{value.length}</span>
        </Button>
    )
}