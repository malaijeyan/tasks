import React,{useState,useEffect} from 'react';
const userColor=[{name:"red"},{name:"blue"},{name:"pink"},{name:"black"}];
function Colors() {
    
    
    const [users, setUsers] = useState([userColor]);
    useEffect(()=>{
        setUsers(userColor);
    },[]);
    const handleChange = (e) => {
        const { name, checked } = e.target;
        if(name === "selectall"){
           let tempUser = users.map((user) => {return {...user , isChecked:checked };
        })
           setUsers(tempUser);
        }
        else{
            let tempUser = users.map((user)=>user.name === name ? {...user, isChecked:checked } : user);
        
        setUsers(tempUser);
        }
    };
  return (
    <div className='clr'>
        <form className='form'>
            <h4>Select the colours</h4>
            <div>
            <input type="checkbox"  name="selectall"
            checked={!users.some((user)=> user?.isChecked !== true )} 
            onChange={handleChange}></input>
            <label>select all</label>
            </div>
            
               { users.map((user,index)=>(
                <div key={index} >
             
                <input type="checkbox"  name={user.name} checked={user?.isChecked || false} onChange={handleChange}></input>
                <label>{user.name}</label>
                </div>
               )
            )}
        </form>
    </div>
  );
}

export default Colors;