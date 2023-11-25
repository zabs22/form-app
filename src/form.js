import React, {useState} from 'react';
import Axios from 'axios'

import { useForm } from 'react-hook-form';
import "./styles.css";

export default function FormApp() {

  const [Name,setName] = useState("");
  const [Sector,setSector] = useState("");
  const [Agreement,setAgreement] = useState("");

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  const submitForm = () => {
    Axios.post('http://localhost:3000/api/create', {Name: Name, Sector: Sector, Agreement:Agreement})
    }
  
  return (
    <div style={{ marginBottom: 10 }}>
      <h1 className="h1">
        Please enter your Name and pick the Sectors you are currently involved in.
      </h1>

    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Name" {...register("Name", {required: true})} 
        onChange={(e)=> {
          setName(e.target.value)
        }}
      />
      <br></br><br></br>

      <select multi {...register("Sectors", { required: true })} 
        onChange={(e)=> {
        setSector(e.target.value)
      }}
      >
        <option value="Advertising">Advertising</option>
        <option value="Air">Air transport</option>
        <option value="Aluminium and steel workboats">Aluminium and steel workboats</option>
        <option value="Bathroom/sauna">Bathroom/sauna </option>
        <option value="Bakery and confectionery products">Bakery and confectionery products</option>
        <option value="Bedroom">Bedroom</option>
        <option value="Beverages">Beverages</option>
        <option value="Blowing">Blowing</option>
        <option value="Boat/Yacht building">Boat/Yacht building</option>
        <option value="Book/Periodicals printing">Book/Periodicals printing</option>
        <option value="Business services">Business services</option>
        <option value="Children’s room">Children’s room </option>
        <option value="Clothing">Clothing</option>
        <option value="CNC-machining">CNC-machining</option>
        <option value="Construction materials"> Construction materials</option>
        <option value="Construction of metal structures">Construction of metal structures</option>
        <option value="Creative industries">Creative industries</option>
        <option value="Data Processing">Data processing, Web portals, E-marketing</option>
        <option value="Electronics and Optics"> Electronics and Optics</option>
        <option value="Energy technology">Energy technology</option>
        <option value="Engineering">Engineering</option>
        <option value="Environment">Environment</option>
        <option value="Manufacturing">Manufacturing</option>
        <option value="Fish and fish products">Fish and fish products </option>
        <option value="Food and Beverage"> Food and Beverage</option>
        <option value="Forgings, Fasteners">Forgings, Fasteners</option>
        <option value="Furniture">Furniture</option>
        <option value="Gas, Plasma, Laser cutting">Gas, Plasma, Laser cutting</option>
        <option value="Houses and buildings">Houses and buildings</option>
        <option value="IT">Information Technology and Telecommunications</option>
        <option value="Kitchen">Kitchen </option>
        <option value="Labelling">Labelling and packaging printing</option>
        <option value="Living room">Living room </option>
        <option value="Machinery">Machinery</option>
        <option value="Machinery components">Machinery components</option>
        <option value="Machinery equipment/tools">Machinery equipment/tools</option>
        <option value="Manufacture of machinery">Manufacture of machinery </option>
        <option value="Maritime">Maritime</option>
        <option value="Metal products">Metal products</option>
        <option value="Metal structures">Metal structures</option>
        <option value="Metal works">Metal works</option>
        <option value="Meat and meat products">Meat and meat products</option>
        <option value="MIG, TIG, Aluminum welding">MIG, TIG, Aluminum welding</option>
        <option value="Milk and dairy products">Milk and dairy products </option>
        <option value="Moulding">Moulding</option>
        <option value="Office">Office</option>
        <option value="Outdoor">Outdoor </option>
        <option value="Packaging">Packaging</option>
        <option value="Plastic and Rubber">Plastic and Rubber</option>
        <option value="Plastic goods">Plastic goods</option>
        <option value="Plastic processing technology">Plastic processing technology</option>
        <option value="Plastic profiles">Plastic profiles</option>
        <option value="Printing">Printing</option>
        <option value="Programming">Programming, Consultancy</option>
        <option value="Project furniture">Project furniture</option>
        <option value="Rail">Rail transport</option>
        <option value="Repair and maintenance service">Repair and maintenance service</option>
        <option value="Road">Road transport</option> 
        <option value="Service">Service</option>
        <option value="Ship repair and conversion">Ship repair and conversion</option>
        <option value="Software">Software, Hardware</option>
        <option value="Sweets and snack food">Sweets and snack food</option>
        <option value="Telecom">Telecommunications</option>
        <option value="Textile and Clothing">Textile and Clothing</option>
        <option value="Tourism">Tourism</option>
        <option value="Translation services">Translation services</option>
        <option value="Transport and Logistics">Transport and Logistics</option>
        <option value="Water">Water transport</option>
        <option value="Wood">Wood</option>
        <option value="Wood building materials">Wooden building materials</option>
        <option value="Wooden houses">Wooden houses</option>
        <option value="Other">Other</option>
            
      </select>
      <br></br><br></br>
      
      <div class="agreement">
        <input type="checkbox" placeholder="Agreement" {...register("Agreement", {required: true, maxLength: 77})} 
          onChange={(e)=> {
            setAgreement(e.target.value)
        }}/>
          I Agree to terms of conditions and privacy policy
      </div>
      <br></br><br></br>

      <input type="submit" onClick={submitForm} />
    </form>
    </div>
  );
}