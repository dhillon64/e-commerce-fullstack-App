import React, { useEffect } from "react";
import { Table, Alert, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { getUserOrders } from "../actions";
import Loader from "../components/Loader";

const UserOrdersScreen = ({ history }) => {
  const userInfo = useSelector((state) => state.userLogin.userInfo);
  const dispatch = useDispatch();
  const userOrders = useSelector((state) => state.orderList);
  const { orders, loading, error } = userOrders;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      dispatch(getUserOrders());
    }
  }, [userInfo, dispatch, history]);
  return (
    <>
      <h2>My Orders</h2>
      {loading && <Loader />}
      {error ? (
        <Alert variant="danger">{error}</Alert>
      ) : (
        <Table striped boarded hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>PAID</th>
              <th>DELIVERED</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>{order.totalPrice}</td>
                <td>
                  {order.isPaid ? (
                    order.paidAt.substring(0, 10)
                  ) : (
                    <i className="fas fa-times" style={{ color: "red" }}></i>
                  )}
                </td>
                <td>
                  {order.isDelivered ? (
                    order.deliveredAt.substring(0, 10)
                  ) : (
                    <i className="fas fa-times" style={{ color: "red" }}></i>
                  )}
                </td>
                <td>
                  <LinkContainer to={`/order/${order._id}`}>
                    <Button variant="primary">Details</Button>
                  </LinkContainer>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default UserOrdersScreen;
