-- Drops the todolist if it exists currently --
DROP DATABASE IF EXISTS sequelize_fitness;
-- Creates the "todolist" database --
CREATE DATABASE sequelize_fitness;

USE sequelize_fitness;

CREATE TABLE workouts (
  workout_name VARCHAR(40) NOT NULL,
  weight INTEGER(10),
  sets INTEGER(10),
  reps INTEGER(10),
  distance INTEGER(10),
  PRIMARY KEY(workout_name)
);
