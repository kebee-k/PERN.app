import React  ,{Fragment,useState}from 'react'

const  Todo=()=>{
    const [description,setDescription] = useState(" ")
    
    const onSubmitForm  = async(e) =>{
        e.preventDefault();
        try {
            const body = {description}
            const response = await fetch("http://localhost:5001/post",{
                method:"POST",
                header:{"Content-Type":"application/json"},
                body:JSON.stringify(body)
            })
            console.log(response)
        } catch (err) {
            console.error(e.message)
        }
    }
    return (
        <Fragment>
 <h1 className="text-center mt-5">inport todo </h1>
 <form className="d-flex mt-5" onSubmit={onSubmitForm} >
     <input type= "text" className="form-control " 
     value={description}
     onChange={e => setDescription(e.target.value)}/>
     <button className="btn btn-success">add</button>
 </form>

        </Fragment>
    )
}
export default  Todo;