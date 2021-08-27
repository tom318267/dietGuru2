import React from "react";
import Navbar from "../components/Navbar";
import PlanCard from "../components/PlanCard";

const DietPlans = () => {
  const standardPlan = () => (
    <div>
      <li>Choose meals from our chef inspired menu</li>

      <li>Specific workouts fit for your body type</li>

      <li>Free shipping for every order</li>

      <li>Free admission to our online fitness class</li>
    </div>
  );

  const basicPlan = () => (
    <div>
      <li>Choose meals from our chef inspired menu and 1 free meal a month</li>

      <li>Specific workouts fit for your body type</li>

      <li>Free shipping for every order</li>

      <li>Free admission to our online fitness class</li>
    </div>
  );

  const goldPlan = () => (
    <div>
      <li>Choose meals from our chef inspired menu and 2 free meals a month</li>

      <li>
        Specific workouts fit for your body type and free one on one coaching
        from our fitness staff
      </li>

      <li>Free shipping for every order</li>

      <li>Free admission to our online fitness class</li>
    </div>
  );

  return (
    <>
      <Navbar />
      <div className="DietPlans">
        <div className="flex flex-col items-center justify-center">
          <h1 className="uppercase text-green font-semibold text-3xl sm:text-4xl md:text-5xl mt-20 mb-2">
            Diet Plans
          </h1>
          <p className="md:text-2xl text-sm sm:text-xl text-center mb-14 px-6">
            Choose a plan to get started on your weight loss journey!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 px-20 justify-items-center lg:grid-cols-3 pb-40">
          <PlanCard
            color="#1C3CAA"
            price="$10"
            plan="Standard"
            planList={standardPlan()}
          />
          <PlanCard
            color="#E72F2F"
            price="$30"
            plan="Basic"
            planList={basicPlan()}
          />
          <PlanCard
            color="#EABA12"
            price="$50"
            plan="Gold"
            planList={goldPlan()}
          />
        </div>
      </div>
    </>
  );
};

export default DietPlans;
