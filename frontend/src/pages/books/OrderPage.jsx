import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useGetOrdersByEmailQuery } from "../../redux/features/orders/ordersApi";
import { getImgUrl } from "../../utils/getImgUrl";

const OrderPage = () => {
  const { currentUser } = useAuth();
  const { data: orders = [],refetch } = useGetOrdersByEmailQuery(currentUser?.email);
  console.log(orders);
  // if(isLoading)return <div>Loading...</div>
  return (
    <div className="container mx-auto p-6">
      <h2>Your orders: {orders.length}</h2> <br />
      {orders.length === 0 ? (
        <div>No orders found!</div>
      ) : (
        <div className="mx-4">
          {orders.map((order, index) => (
            <div key={index}>
              <h3 className="font-bold my-4 p-2 bg-secondary text-white w-1/6 rounded">OrderNumber : #{index+1}</h3>
              <p className="text-gray-600">Name: {order.name}</p>
              <p className="text-gray-600">Email: {order.email}</p>
              <p className="text-gray-600">Phone: {order.phone}</p>
              <p className="text-gray-600">Total Price: ${order.totalPrice}</p>
              <h3 className="font-semibold mt-2">Address:</h3>
              <p>
                {order.address.city}, {order.address.state},
                {order.address.country},{order.address.street}{" "}
                {order.address.zipcode}{" "}
              </p>
              <h3 className="font-semibold mt-2">Products:  </h3>
              <ul>
                {order.productIds.map((product,index) => (
                //   <li key={productId}>{productId}</li>
                <li key={product._id} className="mb-2 mx-8">
                    <div>
                      <p className="text-gray-800 font-semibold my-4">{product.title}</p>
                      <p className="text-gray-600 my-2"> <b>Description:</b> {product.description}</p>
                      <p className="text-gray-600 my-2"> <b>Category:</b> {product.category}</p>
                      <p className="text-gray-600 my-2"><b>Price:</b> ${product.newPrice}</p>
                      <img
                        src={getImgUrl(product.coverImage)}
                        alt={product.title}
                        className="w-32 h-32 object-cover mt-2"
                      />
                    </div>
                  </li>
                ))}
              </ul>
              <br />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderPage;
