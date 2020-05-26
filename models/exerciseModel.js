// // -- CREATE AN EXERCISE MODEL DEFINITION -- //

// // -- DO WE WANT TO GIVE THEM AN EXAMPLE OR CREATE IT FROM SCRATCH ?? -- //
module.exports = function (sequelize, DataTypes) {
  const Exercise = sequelize.define("Exercise", [
    exercise_type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    exercise_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    reps: {
      type: NUMBER
    },
    sets: {
      type: NUMBER
    },
    weight: {
      type: NUMBER
    },
    distance: {
      type: NUMBER
    },
    duration: {
      type: NUMBER
    }
  ]);
  return Exercise;
};



// // -- DO WE WANT TO GIVE THEM AN EXAMPLE OR CREATE IT FROM SCRATCH ?? -- //
// module.exports = function (sequelize, DataTypes) {
//   // -- DEFINE SEQUELIZE MODEL -- //


//   // -- DONT FORGET TO RETURN YOUR MODEL (NEW OBJECT) -- //
//   return // (???);
// };

