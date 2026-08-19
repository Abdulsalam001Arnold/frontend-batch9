


 const About = () => {
    const year = new Date().getFullYear()
    return(
        <>
        <h1 className="text-red-800 text-4xl text-center">About Page</h1>

      <p className="text-center">
        Copyright &copy; {year}
      </p>
        </>
    )
}

export default About;