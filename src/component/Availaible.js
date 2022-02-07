import CreateIcon from "./CreateIcon";
import './Availaible.css'
import Safe from "./Safe";
function Availaible(props) {

const data=props.data;
const listItems = data.map((data1,index) =><li  key={data1.safeId}>
    <Safe value={data1} selected={props.selected}/>
</li>
);
return (  
    
    <div className="availaibleMainTab">

<div className="safeList">
    <ul  style={{listStyle: "none" ,padding:"0px"}}>
        {listItems}
    </ul>
</div>

    <div className="iconBox"><CreateIcon  handleAdd={props.handleAdd} safeId={props.safeId} /></div>
    </div>);
}

export default Availaible;