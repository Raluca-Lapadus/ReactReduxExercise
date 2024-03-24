import React, { useState, useEffect, FC } from "react";
import { User } from "../../pages/types";
import { UserCard } from "../UserCard/UserCard";
import { Controller, SlideShowControllers } from "./styles";

interface Props {
  users: User[];
}

const SlideShow: FC<Props> = ({ users }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined;

    if (isRunning) {
      intervalId = setInterval(() => {
        //checking if we get to the last element in the array, in order to reset the slideshow
        setCurrentIndex((prevIndex) =>
          prevIndex === users.length - 1 ? 0 : prevIndex + 1
        );
      }, 2000);
    } else {
      clearInterval(intervalId);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isRunning, users]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  return (
    <div>
      <div>
        {users.length > 0 && (
          <UserCard
            imageUrl={users[currentIndex].picture.medium}
            firstName={users[currentIndex].name.first}
            lastName={users[currentIndex].name.last}
          />
        )}
      </div>
      <SlideShowControllers>
        <Controller onClick={handleStart} disabled={isRunning}>
          Start
        </Controller>
        <Controller onClick={handleStop} disabled={!isRunning}>
          Stop
        </Controller>
      </SlideShowControllers>
    </div>
  );
};

export default SlideShow;