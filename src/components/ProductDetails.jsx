import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [equipments, setEquipments] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEquipment = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_WEB_HOST_LINK}/product/${id}`);
        const data = await response.json();
        setEquipments(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching equipment:", error);
        setLoading(false);
      }
    };

    fetchEquipment();
  }, [id]);

  console.log(equipments)

  if(loading) return <h2> Loading... </h2>
  if(!equipments) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading product details...</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-10 flex justify-between items-center gap-5">
      <div className="w-1/2">
        <img className="w-full" src={equipments.image} alt="" />
      </div>
      <div className="w-1/2">
        <h1 className="text-3xl font-semibold"> {equipments.name} </h1>
        <p className=""> {equipments.description} </p>
      </div>
    </div>
  );
};

export default ProductDetails;

// customization
// description
// image
// name
// price
// processingTime
// rating
// stockStatus