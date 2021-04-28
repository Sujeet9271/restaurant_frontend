import React, { useEffect, useState } from "react";
import { Container, Card, Table, Image } from "react-bootstrap";
import axiosInstance, { baseURL } from "../axios";
import Orders from "../cards/orders";

const TodayOrders = () => {
  useEffect(() => {
      setInterval(() => {
          getOrders()
      }, 10000);
    // getOrders();
  }, []);

  const [orders, setOrders] = useState([]);
  const [revenue, setRevenue] = useState(0);
  const [total, setTotal] = useState(0);

  const [loading, setLoading] = useState(false);

  const getOrders = async () => {
    try {
      const res = await axiosInstance.get("/orders/today/");
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
                    <Orders item={item} orders={getOrders} />
                  </>
                ))}
            </tbody>
          </Table>
        </Container>
        {loading &&
          orders.map((order) => {
            <Orders order={order} />;
          })}
      </Container>
    </div>
  );
};

export default TodayOrders;
