"use client"
import { styled } from "styled-components"
import { CardProducts } from "../CardProduct/CardProduct"
import { useProducts } from "../hooks/useProducts"

interface containerProps {

}

const Div = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 30px;
`
 
export function ContainerProducts(props: containerProps) {
    const { data } = useProducts();
    return (
        <Div>
            {data?.map((item) => (
                <CardProducts
                    key={item.id}
                    id={item.id}
                    photo={item.photo}
                    name={item.name}
                    price={item.price}
                />
            ))}
        </Div>
    )
}