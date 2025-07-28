import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
  email: { type: String, },
  firstname: { type: String,  },
  lastname: { type: String,  },
  phone: { type: String,  },
  address: { type: String,  },
  optionalPlace: { type: String },
  city: { type: String,  },
  postalcode: { type: String,  },
  country: { type: String,  },
  qty: { type: Number,default:1 }, 
  engraving: { type: Object, default:"no" }, 
  payment: { type: String,  },
  shipping: { type: Boolean , default: false },
  status: { type: String , default: "pending" },
  pname: { type: String  },
  price: { type: String  },
  category: { type: String  },










}, { timestamps: true });

const OrderForm = mongoose.model("OrderPlaced", formSchema);
export default OrderForm;