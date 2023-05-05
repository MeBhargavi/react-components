import {GoBell,GoCloudDownload,GoDatabase} from 'react-icons/go';
import Button from "../components/Button";

function ButtonPage() {

    
    return( <div>
        <div>
            <Button primary><GoBell /> Click Me!!</Button>
        </div>
        <div>
            
            <Button secondary><GoCloudDownload /> Buy Now!!</Button>
        </div>
        <div>
            
            <Button success rounded><GoDatabase /> Hide Ads!</Button>
        </div>
        <div>
            <Button warning>See Deal!</Button> 
        </div>
        <div>
            <Button danger>See Deal!</Button> 
        </div>
    </div> );  
}

export default ButtonPage;