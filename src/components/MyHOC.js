const MyHOC = (component, name) => {
  return (
    // Wraps the component inside a div with class of wrapper.
    <div class="wrapper"> 
       {component({...name})}
    </div>
  )
}

export default MyHOC
