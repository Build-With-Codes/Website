import { redirect } from 'next/navigation'

export default async function Home({ searchParams }: { searchParams: { design?: string } }) {
  const params = await searchParams;
  const { design = 'minimalist' } = await params;
  
  // Redirect to the appropriate design
  redirect(`/home/designs/${design}`);
}

