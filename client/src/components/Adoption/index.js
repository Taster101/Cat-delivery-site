import { VIEW_KITTIES } from "../../utils/queries";
import { useQuery } from '@apollo/client';



//Component
const Adoption = () => {
    
    const { loading, data } = useQuery(VIEW_KITTIES)
    const kitties = data?.viewKitties || [];
    console.log(loading)
    console.log(kitties)
    
    
    
    return (

        <div>
            {loading ?
            <div> data has not been fecth yet </div> 
         :  <div>
            {kitties.map((kitty, i ) => {
                return  (
                <div key={i}>
                    {kitty.name}
                </div>
                
                )
            })}
          </div>
            }
        </div>

    )
}

export default Adoption;