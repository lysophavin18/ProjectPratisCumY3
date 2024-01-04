// AllProduct.js
import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import useGetData from "../custom-hooks/useGetData";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";

const AllProduct = () => {
  const { data: productData, isLoading, error } = useGetData("products");
  const [deletingProductId, setDeletingProductId] = useState(null);

  const deleteProduct = async (id) => {
    try {
      console.log("Deleting product with ID:", id);
      setDeletingProductId(id);
      await deleteDoc(doc(db, "products", id));
      console.log("Product deleted successfully!");
      toast.success("Deleted!");
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error("Deletion failed!");
    } finally {
      setDeletingProductId(null);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading products: {error.message}</p>;
  }

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <table className="table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {productData.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img src={item.imgURL} alt="" style={{ width: "50px" }} />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.category}</td>
                    <td>${item.price}</td>
                    <td>
                      <button
                        onClick={() => deleteProduct(item.id)}
                        className="btn btn-danger"
                        disabled={deletingProductId === item.id}
                      >
                        {deletingProductId === item.id
                          ? "Deleting..."
                          : "Delete"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AllProduct;
