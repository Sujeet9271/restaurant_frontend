import React from "react";
import { Image, Table } from "react-bootstrap";
import axiosInstance, { baseURL2 } from "../axios";

const Orders = ({ item,orders }) => {

    const handleChange=(e)=>{
        e.preventDefault();
        axiosInstance.patch('/orders/'+item.id+'/',{
            status:e.target.value
        }).
        then((res)=>{
            orders();
        })
    }
    
  return (
    <tr id={item.id}>
      <td>{item.customer}</td>
      <td>{item.delivery_address}</td>
      <td>
        <Image style={{ width: "10%" }} src={`${baseURL2}${item.image}`} />
        {item.itemname}
      </td>
      <td>
        {item.quantity} X {item.price / item.quantity}{" "}
      </td>
      <td>{item.price}</td>
      <td>
        <select defaultValue={item.status} onChange={handleChange}>
          <option value="1">Pending</option>
          <option value="2">Received</option>
          <option value="3">In the Kitchen</option>
          <option value="4">Out for Delivery</option>
          <option value="5">Delivered</option>
        </select>
      </td>
      <td>{item.created.slice(0, 10)}</td>
      <td>{item.updated.slice(0, 10)}</td>
    </tr>
  );
}

export default Orders;
