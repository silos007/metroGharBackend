import React from 'react'
import { Link } from 'react-router-dom'

function PropertyApproval() {

  const [submittedProperties, setSubmittedProperties] = useState([])
  const [submittedProperty, setsubmittedProperty] = useState(second)

    const ViewProperty=()=>{}
    const DeleteProperty=()=>{}
    const EditProperty = ()=>{}
    const ApproveProperty=()=>{}

  return (
    <>
    <div>
        all
        <Link to ="/addProperty"><div>addProperty</div></Link>
    </div>
    <div>
        <div>for filters</div>
        <div>table
        <table>
            <tr>
    
             <th>Property Name</th>
             <th>Position</th>
             <th>Type</th>
             <th>Owner</th>
             <th>Status</th>
             <th>Actions</th>
            </tr>
  <tr>
    <td>Property1</td>
    <td>ready to move</td>
    <td>flat</td>
    <td>Owner 1</td>
    <td>Pending</td>
    <td>
      <button onClick={ViewProperty}>View</button>
      <button onClick={ApproveProperty}>Approve</button>
      <button onClick={EditProperty}>Edit</button>
      <button onClick={DeleteProperty}>Delete</button>

    </td>
    
  </tr>

</table>
        </div>
        
    </div>
    
    </>
  )
}

export default PropertyApproval