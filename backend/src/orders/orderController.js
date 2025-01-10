const Order = require("./orderModel");

module.exports.createOrder = async (req, res) => {
  try {
    // const newOrder = await Order(req.body);
    // const savedOrder = await newOrder.save();
    const newOrder  = new Order(req.body);
    await newOrder.save();
    res.status(200).send(newOrder);
    // res
    //   .status(200)
    //   .json(savedOrder);
    // res.send(savedOrder);
  } catch (err) {
    res.status(500).json({ message: "Order not added" });
    console.log(err);
  }
};


module.exports.getOrderByEmail = async(req,res) =>{
  try{
    const {email} = req.params;
    const orders = await Order.find({email}).populate("productIds").sort({createdAt:-1});
    if(!orders.length){
      return res.status(404).json({message : "Order not found"});
    }
    res.status(200).send(orders);
  }catch(err){
    console.log("Error in getting the orders",err);
    res.status(500).send({message : "Error in getting orders"});
  }
}