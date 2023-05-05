import { useState } from "react";
import DropDown from "../components/DropDown";

function DropdownPage() {

    const [selection,setSelection] = useState(null);

    const handleSelect = (option) => {
        setSelection(option);
    };
    const options = [
        {label : 'Red' , value: 'red'},
        {label : 'Green' , value: 'green'},
        {label : 'Blue' , value: 'blue'},
    ]

    return(
        <div className="flex">
    <DropDown options={options} value={selection} onChange={handleSelect} />
    
    </div>);
   
}

export default DropdownPage;