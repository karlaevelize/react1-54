// when using props, we have to pass it to the components
export default function Title(props) {

  return(
    <div>
       {/* defining our props, when rendering: title="My title" */}
      <h1>{props.text}</h1>
    </div>
  )
}