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
      payment
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
