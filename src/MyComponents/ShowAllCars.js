import {Table,Dropdown,DropdownButton} from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { GoThreeBars } from "react-icons/go";
import { LinkContainer } from "react-router-bootstrap";
import { useEffect ,useState} from "react";

const ShowAllCars = () =>{

    const cars1 =[
        // {
        //     reg_no: 'AMD-136',
        //     make: 'Honda',
        //     model: 'Civic',
        //     year: '2020', 
        //     engine_size: '1300', 
        //     chasis_no: "1GDJFEFJ8S8SAJ282",
        //     engine_no: "1GDJFEFJ8S8SAJ282",
        //     colour: "White",
        //     ownership: "Rehan Gull"
        // },
        // {
        //     reg_no: 'UR-420',
        //     make: 'Toyota',
        //     model: 'Revo',
        //     year: '2019', 
        //     engine_size: '2700', 
        //     chasis_no: "1GDJFEFJ8S8SAJ282",
        //     engine_no: "1GDJFEFJ8S8SAJ282",
        //     colour: "Black",
        //     ownership: "Rehan Gull"
        // },
        // {
        //     reg_no: 'AP-136',
        //     make: 'Toyota',
        //     model: 'Corolla',
        //     year: '2018', 
        //     engine_size: '1300', 
        //     chasis_no: "1GDJFEFJ8S8SAJ282",
        //     engine_no: "1GDJFEFJ8S8SAJ282",
        //     colour: "Black",
        //     ownership: "Zain"
        // }
    
    
    ]
    
    const [cars,setCars] = useState(cars1);
    
    useEffect(() => {
      
        const reqoptions = {
            method : "GET"
            // headers : {"Content-Type" : "application/JSON",
            //           //  "Authorization" : 'Bearer ' + localStorage.getItem('t')
            // },
            // body : JSON.stringify(values)
        };

        const url = "http://localhost:3001/car/all";
        fetch(url,reqoptions)
        .then((response) => response.json())
        .then((json) => {
            if (json["Status"]["Message"] === "Success")
            {
                setCars(json["data"]);
            }
            else
            {
                alert(json["Status"]["Message"])
            }
            // //setisLoadingData(false);
            // setShowData(true);
            // setReturnCredentials(json["CheckIn_Details"]);
        })
        .catch((error) => console.log(error));
        
      }, []);


    return(
        <div>
            <br/>
            <br/>
            
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center',paddingBottom:"2%"}}>
                {/* <Button variant="primary" size="lg">
                    <Link> Register New Car</Link>
                    
                </Button> */}
                
                <Link to="/addcar" className="btn btn-primary"><AiOutlinePlusCircle />Register New Car</Link> 
            </div>
            <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th style={{textAlign:"center"}}>Registration No</th>
                                <th style={{textAlign:"center"}}>Car</th>
                                <th style={{textAlign:"center"}}>Year</th>
                                <th style={{textAlign:"center"}}>Engine Size</th>
                                <th style={{textAlign:"center"}}>Colour</th>
                                <th style={{textAlign:"center"}}>Buttons</th>
                                

                            </tr>
                        </thead>
                        <tbody>
                            {
                                
                                cars.map((car) =>
                                    <tr>
                                        <td>{car.reg_no}</td>
                                        <td>{car.make+"-"+car.model}</td>
                                        <td>{car.year}</td>
                                        <td>{car.engine_size}</td>
                                        <td>{car.colour}</td>   
                                        <td>
                                        <DropdownButton id="dropdown-basic-button" title = {<GoThreeBars style={{ color: "blue",alignItems:"center"}} />} >
                                            <LinkContainer to="/booking">
                                                <Dropdown.Item> Booking </Dropdown.Item>
                                            </LinkContainer>

                                            <LinkContainer to="/maintenance">
                                                <Dropdown.Item> Maintenance </Dropdown.Item>
                                            </LinkContainer>

                                            <LinkContainer to="/carDetails">
                                                <Dropdown.Item> Details </Dropdown.Item>
                                            </LinkContainer>
                                        </DropdownButton>
                                        </td>         
                                    </tr>  
                                )
                            } 
                        </tbody>
                        </Table>
        </div>
    )

}

export default ShowAllCars;