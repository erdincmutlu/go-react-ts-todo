import { MantineProvider } from '@mantine/core';
import useSWR from 'swr';
import './App.css'

export const ENDPOINT = 'http://localhost:4000'

const fetcher = (url: string) =>
  fetch(`${ENDPOINT}/${url}`).then((r) => r.json());

function App() {
  const {data, mutate} = useSWR('api/todos', fetcher)
  return <MantineProvider>{JSON.stringify(data)}</MantineProvider>;
}

export default App
