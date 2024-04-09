async function getStrapiData(url:string) {
  const baseUrl = 'https://glowing-sniffle-q49g7vxqjrwhxr59-1337.app.github.dev'

  try {
    const response = await fetch(baseUrl + url)
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}

export default async function Home() {
  const strapiData = await getStrapiData('/api/home-page')
  console.log(strapiData)
  // const {title, description} = strapiData.data.attributes;

  return (
    <main className="container mx-auto py-6">
      <h1 className="text-5xl font-bold">title</h1>
      <p className="text-xl mt-4">description</p>
    </main>
  );
}
