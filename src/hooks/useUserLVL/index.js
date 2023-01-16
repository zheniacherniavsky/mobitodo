import {
  getUserCompletedTodosCountApi,
  getUserLVLApi,
  getUserXPApi,
} from 'api/user/getUserStats';
import {
  setUserCompletedTodosCountApi,
  setUserLVLApi,
  setUserXPApi,
} from 'api/user/saveUserStats';
import { MAX_LVL_XP } from 'constants';
import { useEffect, useState } from 'react';

export const useUserLVL = () => {
  const [userLVL, setUserLVL] = useState(0);
  const [userXP, setUserXP] = useState(0);
  const [userCompletedTodos, setUserCompletedTodos] = useState(0);
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    const init = async () => {
      const userLvlValue = await getUserLVLApi();
      const userXpValue = await getUserXPApi();
      const usetCompletedTodosValue = await getUserCompletedTodosCountApi();

      setUserLVL(userLvlValue);
      setUserXP(userXpValue);
      setUserCompletedTodos(usetCompletedTodosValue);

      setIsFetched(true);
    };

    init();
  }, []);

  const addUserXP = async (amount) => {
    let updatedXP = userXP + amount;
    let updatedLVL = userLVL;

    if (updatedXP >= MAX_LVL_XP) {
      updatedXP -= MAX_LVL_XP;
      updatedLVL += 1;
    }

    setUserXP(updatedXP);
    setUserXPApi(updatedXP);

    if (updatedLVL !== userLVL) {
      setUserLVL(updatedLVL);
      setUserLVLApi(updatedLVL);
    }
  };

  const increaseUserCompletedTodosCount = async () => {
    await setUserCompletedTodosCountApi(userCompletedTodos + 1);
    setUserCompletedTodos((prev) => prev + 1);
  };

  return {
    userLVL,
    userXP,
    addUserXP,
    isFetched,
    userCompletedTodos,
    increaseUserCompletedTodosCount,
  };
};
