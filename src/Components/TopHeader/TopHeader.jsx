
import "./TopHeader.css";

const TopHeader = (props) => {
  return (
    <>
      <div className='container-fluid topheader'>
      <div className='row'>
    <div className='col-12'><h4>{props.title}</h4></div>
    <div className='col-12'><p>{props.subtitle}</p></div>
   </div>
   </div> 
    </>
  );
}

export default TopHeader;
