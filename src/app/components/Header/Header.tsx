"use client"
import { styled } from "styled-components"
import { ShoppingCart } from "../ShoppingCart/ShoppingCart"

const TagHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:  28px 65px;
    background-color: var(--primary);
`

const Logo = styled.span`
    color: var(--white);
    display: flex;
    align-items: baseline;
    gap: 8px;
    h1 {
        font-weight: 600;
        font-size: 40px;
    }
    span {
        font-size: 20px;
        font-weight: 300;
        line-height: 19px;
    }
`

export function Header() {
    return (
        <TagHeader>
            <Logo>
                <h1>MKS</h1>
                <span>Sistemas</span>
            </Logo>
            <ShoppingCart/>
        </TagHeader>
    )
}