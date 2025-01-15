import { redirect } from 'next/navigation'

export default async function Home({ searchParams }: { searchParams: { design?: string } }) {
  const { design = 'minimalist' } =searchParams;
  
  // Redirect to the appropriate design
  redirect(`/home/designs/${design}`);
}

