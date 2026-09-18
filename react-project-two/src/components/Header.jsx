function Header(props) {

  return (
    <>
      <style>
        {`h1 {text-align: center; margin-top: 20px; color: white}`}
      </style>

      <h1>{props.title}</h1>
    </>
  )
}

export default Header