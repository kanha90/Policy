const db = require("../config/db");

class Policy {
  constructor(
    Policy_id,
    Date_of_Purchase,
    Customer_id,
    Fuel,
    VEHICLE_SEGMENT,
    Premium,
    bodily_injury_liability,
    personal_injury_protection,
    property_damage_liability,
    collision,
    comprehensive,
    Customer_Gender,
    Customer_Income_group,
    Customer_Region,
    Customer_Marital_status
  ) {
    this.Policy_id = Policy_id;
    this.Date_of_Purchase = Date_of_Purchase;
    this.Customer_id = Customer_id;
    this.Fuel = Fuel;
    this.VEHICLE_SEGMENT = VEHICLE_SEGMENT;
    this.Premium = Premium;
    this.bodily_injury_liability = bodily_injury_liability;
    this.personal_injury_protection = personal_injury_protection;
    this.property_damage_liability = property_damage_liability;
    this.collision = collision;
    this.comprehensive = comprehensive;
    this.Customer_Gender = Customer_Gender;
    this.Customer_Income_group = Customer_Income_group;
    this.Customer_Region = Customer_Region;
    this.Customer_Marital_status = Customer_Marital_status;
  }

  save() {
    let sql = `
    INSERT INTO data_set(
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
       Customer_Marital_status
    )
    VALUES(
      '${this.Policy_id}',
      '${this.Date_of_Purchase}',
      '${this.Customer_id}',
      '${this.Fuel}',
      '${this.VEHICLE_SEGMENT}',
      '${this.Premium}',
      '${this.bodily_injury_liability}',
      '${this.personal_injury_protection}',
      '${this.property_damage_liability}',
      '${this.collision}',
      '${this.comprehensive}',
      '${this.Customer_Gender}',
      '${this.Customer_Income_group}',
      '${this.Customer_Region}',
      '${this.Customer_Marital_status}',
    )
    `;

    return db.execute(sql);
  }

  static findAll() {
    let sql = "SELECT * FROM data_set;";

    return db.execute(sql);
  }

  static findCAll(id) {
    let sql = `SELECT * FROM data_set WHERE Customer_id = ${id} ;`;

    return db.execute(sql);
  }

  static findById(id) {
    let sql = `SELECT * FROM data_set WHERE Policy_id = ${id};`;

    return db.execute(sql);
  }

  static findByCId(id) {
    let sql = `SELECT * FROM data_set WHERE Customer_id = ${id};`;

    return db.execute(sql);
  }

  static findByIdAndUpdate(policy_data) {
    let sql = `update data_set set Fuel='${policy_data.Fuel}', 
    VEHICLE_SEGMENT='${policy_data.VEHICLE_SEGMENT}',
     Premium='${policy_data.Premium}',
      bodily_injury_liability='${policy_data.bodily_injury_liability}',
       personal_injury_protection='${policy_data.personal_injury_protection}',
        property_damage_liability = '${policy_data.property_damage_liability}',
         collision = '${policy_data.collision}',
          comprehensive = '${policy_data.comprehensive}',
           Customer_Gender = '${policy_data.Customer_Gender}',
            Customer_Income_group = '${policy_data.Customer_Income_group}',
            Customer_Region = '${policy_data.Customer_Region}',
             Customer_Marital_status = '${policy_data.Customer_Marital_status}'
              WHERE Policy_id = ${policy_data.Policy_id};`;

    return db.execute(sql);
  }
}

module.exports = Policy;
