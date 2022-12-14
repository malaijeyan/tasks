import React, { useEffect } from 'react';
import {useState} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import filterFactory,{textFilter} from 'react-bootstrap-table2-filter';
function Data() {
    const [userList,setUserList] = useState([]);
    const columns  = [
        {dataField:'id', text: 'Id'},
        {dataField:'name', text: 'Name', sort:true,filter:textFilter()},
        {dataField:'age', text: 'Age', sort:true},
        {dataField:'email', text: 'Email',  sort:true}
    ]
    
    const pagination = paginationFactory({
        page:1,
        sizePerPage:5,
        // lastPageText:'>>',
        // firstPageText:'<<',
        nextPageText:'next',
        prePageText:'previous',
        showTotal:true,
        // alwaysShowAllBtns:true,
        // onPageChange:function(page,sizePerPage){
        //     console.log('page',page);
        //     console.log('sizePerPage',sizePerPage);

        // },
        // onSizePerPageChange:function(page,sizePerPage){
        //     console.log('page',page);
        //     console.log('sizePerPage',sizePerPage);

        // }
    })

    useEffect(()=>{
        fetch('http://localhost:4000/values')
        .then(response => response.json())
        .then(result => setUserList(result));
        // .catch(error => console.log(error));
    },[]);
  return (
    <div className='one'>
    <BootstrapTable 
    bootstrap4 keyField='id' columns={columns} data={userList} pagination={pagination} filter={filterFactory()} 
     ></BootstrapTable>
    {/* <input type='text' placeholder='search here' onChange={handleChange} value={searchData}>Search</input> */}
    {/* <button onClick={prePage}>Previous</button>
    <button onClick={nextpage}>Next</button> */}
    

    
   
        {/* <table>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
            </tr>
            {
                userList && userList.length>0 ?
                userList.map(usr => 
                <tr>
                    <td>{usr.id}</td>
                    <td>{usr.name}</td>
                    <td>{usr.age}</td>
                    <td>{usr.email}</td>
                </tr> ) : 'Loading'
            }
        </table> */}
    </div>
  )
}

export default Data;


 // lastPageText:'>>',
        // firstPageText:'<<',
        // nextPageText:'>',
        // prePageText:'<',