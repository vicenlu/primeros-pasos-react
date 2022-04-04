function Child(props) {

  /* NO LÓGICA, NI ESTADO!!! */

  return(
    <>
      <h1>{props.name}</h1>
      <h1>{props.name2}</h1>
      <button value="cambiado por el hijo" onClick={props.cambiarContador}>Cambiar estado con botón en JSX del padre</button>

    </>
  )
}
export default Child;