const Policy = require("../model/policy.model");

exports.getAllPolicy = async (req, res, next) => {
  try {
    const [policy, _] = await Policy.findAll();

    res.status(200).json({ count: policy.length, policy });
  } catch (error) {
    next(error);
  }
};

exports.getAllCustomer = async (req, res, next) => {
  try {
    let Customer_id = req.params.id
    const [policy, _] = await Policy.findCAll(Customer_id);

    res.status(200).json({ count: policy.length, policy });
  } catch (error) {
    next(error);
  }
};

exports.addNewPolicy = async (req, res, next) => {
  try {
    let { Policy_id,
       Date_of_Purchase,
       Customer_id,
       Fuel,
       VEHICLE_SEGMENT,
       Premium,
       bodily_injury_liability,
       personal_injury_protection,
       property_damage_liability,
       collision,comprehensive,
       Customer_Gender,
       Customer_Income_group,
       Customer_Region,
       Customer_Marital_status } = req.body;

      let policy = new Policy(
       Policy_id,
       Date_of_Purchase,
       Customer_id,
       Fuel,
       VEHICLE_SEGMENT,
       Premium,
       bodily_injury_liability,
       personal_injury_protection,
       property_damage_liability,
       collision,comprehensive,
       Customer_Gender,
       Customer_Income_group,
       Customer_Region,
       Customer_Marital_status);

    policy = await policy.save();

    res.status(201).json({ message: "Policy created" });
  } catch (error) {
    next(error);
  }
};

exports.getPolicyById = async (req, res, next) => {
  try {
    let Policy_id = req.params.id;

    let [policy, _] = await Policy.findById(Policy_id);

    res.status(200).json({ policy: policy[0] });
  } catch (error) {
    next(error);
  }
};

exports.getPolicyByCId = async (req, res, next) => {
  try {
    let Customer_id = req.params.id;

    let [policy, _] = await Policy.findByCId(Customer_id);

    res.status(200).json({ policy: policy[0] });
  } catch (error) {
    next(error);
  }
};


exports.getPolicyByIdAndUpdate = async (req, res, next) => {
  try {
    let Policy_id = req.params.id;

    // let Customer_Gender  = req.body;
    // let policyC = new Policy(Policy_id)
    // console.log(policyC);
    

    let [policy, _] = await Policy.findByIdAndUpdate(Policy_id);

    res.status(200).json({ policy: policy[0] });
  } catch (error) {
    next(error);
  }
};