import { styled } from "styled-components"
import { useLocalStorage } from "../hooks/useLocalStorage"
import { ProductsInCart } from "../Types/products"
import { CardAsideBar } from "../CardAsideBar/CardAsideBar"

const TagAsideBar = styled.section`
    background-color: var(--primary);
    box-shadow: -5px 0px 6px 0px rgba(0, 0, 0, 0.13);
    color: var(--white);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 450px;
`

const TagTitle = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 40px;
    button {
        color: var(--white);
        background-color: var(--black);
        border: none;
        padding: 4px 10px;
        border-radius: 50%;
        cursor: pointer;
    }
`

const TagPrice = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 40px;
    font-size: 18px;
    font-weight: 700;
`

const Button = styled.button`
    background-color: var(--black);
    border: none;
    color: var(--white);
    cursor: pointer;
    font-size: 28px;
    font-weight: 700;
    width: 450px;
    height: 60px;
`

export function AsideBar() {
    const { value, updateLocalStorage } = useLocalStorage<ProductsInCart[]>('cart-items', [])
    
    const calculateTotal = (value: ProductsInCart[]) => {
        return value.reduce((sum, item) => sum += (Number(item.price) * Number(item.quantity)), 0)
    }

    const cartTotal = calculateTotal(value)

    const handleUpdateQuantity = (id: number, quantity: number) => {
        const newValue = value.map(item => {
            if(item.id !== id) return item
            return {...item, quantity: quantity}
        })
        updateLocalStorage(newValue)
    }

    return (
        <TagAsideBar>
            <div>
                <TagTitle>
                    <h2>Carrinho de compras</h2>
                    <button>X</button>
                </TagTitle>
                {value.map(item => (
                    <CardAsideBar
                        key={item.id}
                        imagem={item.photo}
                        title={item.name}
                        quantity={item.quantity}
                        price={item.price}
                    />
                ))}
            </div>
            <div>
                <TagPrice>
                    <p>Total:</p>
                    <p>R${cartTotal}</p>
                </TagPrice>
                <Button>Finalizar Compra</Button>
            </div>
        </TagAsideBar>
    )
}