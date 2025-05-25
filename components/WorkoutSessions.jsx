import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
         "Push your limits. Embrace the grind. Every rep, every drop of sweat—it all adds up. No shortcuts, just strength. Rise stronger."
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          "The grind doesn’t lie. Obstacles? Crush them. Doubt? Erase it. Every setback is fuel for your comeback. Now get after it."
          </p>
          <p>
            "No excuses. Just results."
          </p>
        <div className="bootcamps">
          <div>
            <h4>"Strength starts here. Commit to the grind. Every rep builds discipline, every drop of sweat fuels transformation. Your journey begins now."</h4>
            <p>
              The pain is temporary. The results are permanent. Push through the burn—your stronger self is waiting.
            </p>
          </div>
          <div>
            <h4>"The pain is progress. The sweat is strategy. The grind is greatness in motion."</h4>
            <p>
               The burn is your teacher. The grind is your weapon. Every rep rewrites your limits
            </p>
          </div>
          <div>
            <h4>"The road doesn't care about your excuses. Lace up. Show up."</h4>
            <p>
              The weights don't compromise. Neither should you. Earn every gram
            </p>
          </div>
          <div>
            <h4>"Your mat is your sanctuary. Each breath builds your strength. Grow quietly."</h4>
            <p>
              Your comfort zone is the enemy. Burn it down. Rebuild stronger
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;