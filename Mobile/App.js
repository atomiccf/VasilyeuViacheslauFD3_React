import React from 'react';
import ReactDOM from 'react-dom';

import MobileCompany from './components/MobileCompany';


let clientsArr=[ 
  {id:101, sureName:"Иванов", name:"Иван", lastName:"Иванович", balance:200, status:"active"},
  {id:105, sureName:"Сидоров ",name:"Сидор", lastName:"Сидорович", balance:250, status:"active"},
  {id:110, sureName:"Петров",name:"Петр", lastName:"Петрович", balance:180, status:"active"},
  {id:120, sureName:"Григорьев", name:"Григорий", lastName:"Григорьевич", balance:220,status:"blocked"},
];

ReactDOM.render(
  <MobileCompany 
       clients={clientsArr}
  />
  , document.getElementById('container') 
);

