
 const Home = () => {
    const year = new Date().getFullYear()
    return(
        <>
        <h1 className="text-red-800 text-4xl text-center">Hello World</h1>

      <p className="text-center">
        Copyright &copy; {year}
      </p>
        </>
    )
}

export default Home;