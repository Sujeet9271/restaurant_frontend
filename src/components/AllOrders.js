import React, { useEffect, useState } from "react";
import { Container, Card, Table, Image } from "react-bootstrap";
import axiosInstance, { baseURL2 } from "../axios";
import Orders from "../cards/orders";

const AllOrders = () => {
  useEffect(() => {
    getOrders();
  }, []);

  const [orders, setOrders] = useState([]);
  const [revenue, setRevenue] = useState(0);
  const [total, setTotal] = useState(0);

  const [loading, setLoading] = useState(false);

  const getOrders = async () => {
    try {
      const res = await axiosInstance.get("/orders/all/");
      console.log(res.data);
      setOrders(res.data.orders);
      setRevenue(res.data.revenue);
      setTotal(res.data.total_orders);
      setLoading(true);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      <Container className="mt-5">
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Card>
            <Card.Body>
              <Card.Title>Revenue:</Card.Title>
              <Card.Text>
                <h5>Rs.{revenue}</h5>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Today's Orders:</Card.Title>
              <Card.Text>
                <h5>{total}</h5>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <Container className="mt-3">
          <Table bordered>
            <thead>
              <th>Customer</th>
              <th>Address</th>
              <th>Itemname</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Status</th>
              <th>Created</th>
              <th>Updated</th>
            </thead>
            <tbody>
              {loading &&
                orders.map((item) => (
                  <>
                    <tr id={item.id}>
                      {console.log(item)}
                      <td>{item.customer}</td>
                      <td>{item.delivery_address}</td>
                      <td>
                        <Image
                          style={{ width: "10%" }}
                          src={`${baseURL2}${item.image}`}
                        />
                        {item.itemname}
                      </td>
                      <td>
                        {item.quantity} X {item.price / item.quantity}{" "}
                      </td>
                      <td>{item.price}</td>
                      <td>{item.status}</td>
                      <td>{item.created.slice(0, 10)}</td>
                      <td>{item.updated.slice(0, 10)}</td>
                    </tr>
                  </>
                ))}
            </tbody>
          </Table>
        </Container>
      </Container>
    </div>
  );
};

export default AllOrders;
