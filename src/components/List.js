import React from "react";
import ListItems from "./ListItems";
//code here
const List = ({ listx }) => {
  return (<>
  {
    listx.map((ele,i)=>  <ListItems valuex={ele} key={i}/>
    )
  }
  </>)
};

export default List;
