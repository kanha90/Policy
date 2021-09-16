const db = require("../config/db");

class Policy {
  constructor(Policy_id, Date_of_Purchase,Customer_id,Fuel,VEHICLE_SEGMENT,Premium,bodily_injury_liability,personal_injury_protection,property_damage_liability,collision,comprehensive,Customer_Gender,Customer_Income_group,Customer_Region,Customer_Marital_status,) {
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
    // let d = new Date();
    // let yyyy = d.getFullYear();
    // let mm = d.getMonth() + 1;
    // let dd = d.getDate();

    // let createdAtDate = `${yyyy}-${mm}-${dd}`;

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

  static findByIdAndUpdate(id) {
    console.log(id);
    let sql = `update data_set set  Customer_Gender = '${Policy.Customer_Gender}'  WHERE Policy_id = ${id};`;

    return db.execute(sql);
  }
}

module.exports = Policy;