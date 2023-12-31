"use client"
import style from './page.module.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ContainerProducts } from "./components/ContainerProducts/ContainerProducts";
import { AsideBar } from './components/AsideBar/AsideBar';

const queryClient = new QueryClient();

export default function Home() {
  return (
    <main className={style.main}>
      <QueryClientProvider client={queryClient}>
        <ContainerProducts/>
        <AsideBar/>
      </QueryClientProvider>
    </main>
  )
}
