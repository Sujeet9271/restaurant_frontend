import React, { useEffect, useState } from "react";
import { Container, Card, Table, Image, Spinner } from "react-bootstrap";
import axiosInstance, { baseURL } from "../axios";
import Orders from "../cards/orders";

const TodayOrders = () => {
  useEffect(() => {
    getOrders();
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

  if (loading === false) {
    return (
      <>
        <Container style={{padding:'25%'}}>
          <Spinner animation="grow" variant="primary" />
          <Spinner animation="grow" variant="secondary" />
          <Spinner animation="grow" variant="success" />
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="warning" />
          <Spinner animation="grow" variant="info" />
        </Container>
      </>
    );
  } else {
    return (
      <div>
        <Container className="mt-5">
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Card style={{ background: "#f6f5f7" }}>
              <Card.Body>
                <Card.Title>Revenue:</Card.Title>
                <Card.Text>
                  <h5>Rs.{revenue}</h5>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ background: "#f6f5f7" }}>
              <Card.Body>
                <Card.Title>Today's Orders:</Card.Title>
                <Card.Text>
                  <h5>{total}</h5>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <Container className="mt-3" style={{ background: "#f6f5f7" }}>
            <Table hover bordered responsive variant="secondary">
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
                      <Orders item={item} orders={getOrders} key={item.id} />
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
  }
};

export default TodayOrders;
