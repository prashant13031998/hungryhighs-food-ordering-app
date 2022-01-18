import React, { useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItems/MealItem";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isHttpError, setIsHttpError] = useState();
  useEffect(() => {
    const fetchMeal = async function () {
      const response = await fetch(
        "https://hungry-highs-pt-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const loadedData = await response.json();
      const loadedDataArray = [];

      for (let key in loadedData) {
        loadedDataArray.push({
          id: key,
          name: loadedData[key].name,
          description: loadedData[key].description,
          price: loadedData[key].price,
        });
      }
      setMeals(loadedDataArray);
      setIsLoading(false);
    };

    fetchMeal().catch((error) => {
      setIsHttpError(error.message);
      console.log(error.message);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.mealsloading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (isHttpError) {
    return (
      <section className={classes.errorHandling}>
        <p>{isHttpError}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
