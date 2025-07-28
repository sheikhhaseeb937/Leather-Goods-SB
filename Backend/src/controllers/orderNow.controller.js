import OrderForm from "../model/OrderNow.model.js";

export const orderCompelet = async (req, res) => {
  try {
    const {
      email,
      firstname,
      lastname,
      phone,
      address,
      optionalPlace,
      city,
      postalcode,
      country,
      qty,
      engraving,
      payment,
      shipping,
      status,
      pname,
      price,
      category
    
    } = req.body;

    console.log("Received form data:", req.body);

    const order = new OrderForm({
      email,
      firstname,
      lastname,
      phone,
      address,
      optionalPlace,
      city,
      postalcode,
      country,
      qty,
      engraving,
      shipping,
      payment,
      status,
      pname,
      price,
      category
    });

    await order.save(); //  save to DB

    console.log("Order saved:", order);

    res.status(200).json({
      message: "Order Placed Successfully!",
      data: order,
    });
  } catch (error) {
    console.error("Order error:", error);
    res.status(500).json({
      message: "Order Not Placed. Try Again.",
      error: error.message,
    });
  }
};


export const getOrders = async (req, res) => {
  try {
    const orders = await OrderForm.find().sort({ createdAt: -1 });
    res.status(200).json({
      message: "Orders Retrieved Successfully!",
      data: orders,
      });
      } catch (error) {
        console.error("Error retrieving orders:", error);
        res.status(500).json({
          message: "Error Retrieving Orders. Try Again.",
          error: error.message,
          });
          }
          };
          
export const statusUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({ message: "Status is required." });
    }

    const updatedOrder = await OrderForm.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found." });
    }

    console.log("Updated order:", updatedOrder);

    res.status(200).json({ message: "Order status updated", data: updatedOrder });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update order",
      error: error.message,
    });
  }
};
