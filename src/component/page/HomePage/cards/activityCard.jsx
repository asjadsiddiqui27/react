import "./activityCard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SingleCard from "./singleCard";

function Cards() {

  let imgStyle = {
    width: "150px",
    height: "200px",
    marginTop: "1px",
  };

return (
    <>

      <div className="container">
        <div className="row">
          
         <SingleCard para="HTML to build on the card title and make up
                  the bulk of the card's content."  src="html-icon-png-4.jpg" link="https://www.w3schools.com/html/"/>
         <SingleCard para="JavaScript to build on the card title and make up
                  the bulk of the card's content." src="javascript_logo.png" link="https://www.javascript.com/"/>
         <SingleCard para="Css to build on the card title and make up
                  the bulk of the card's content." styles={imgStyle} src="CSS.png" link="https://www.w3schools.com/css/"/>
         <SingleCard para="BootStrap to build on the card title and make up
                  the bulk of the card's content." src="bootstrap-stack.png" link="https://getbootstrap.com/"/>
                  
        </div>
      </div>
    </>
  );
}


export default Cards;
