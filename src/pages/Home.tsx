import { useEffect, useState } from "react";
import { Input } from "../components/Input/Input";
import { ContainerCards, PageWrapper } from "./styles";
import { fetchUsers } from "../api/api";
import { useDispatch, useSelector } from "react-redux";
import { usersActions } from "../store/store";
import SlideShow from "../components/SlideShow/SlideShow";
import { useDebounce } from "../hooks/useDebounce";
import { Banner } from "../components/Banner/Banner";
import { Loader } from "../components/Loader/Loader";

export const Home = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: any) => state.users);
  const loading = useSelector((state: any) => state.loading);
  const error = useSelector((state: any) => state.error);
  const searchQuery = useSelector((state: any) => state.searchQuery);
  const [inputError, setInputError] = useState<boolean>(false);
  const debouncedSearchTerm = useDebounce(searchQuery || 0, 600);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(usersActions.fetchUsersStart());
        const data = await fetchUsers(debouncedSearchTerm);
        dispatch(usersActions.saveUserData(data));
      } catch (error: any) {
        dispatch(usersActions.fetchUsersFailure(error.message));
      }
    };

    if (debouncedSearchTerm !== null) {
      fetchData();
    }
  }, [debouncedSearchTerm, dispatch]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    if (!isNaN(value)) {
      dispatch(usersActions.setSearchQuery(value));
      setInputError(false);
    } else {
      setInputError(true);
    }
  };

  return (
    <PageWrapper>
      <p>Provide a number: </p><Input onChange={handleInputChange} error={inputError.toString()} />
      {inputError && <Banner errorMessage={'Enter valid number please.'} />}
      {loading && <Loader />}
      {error && <Banner errorMessage={error} />}

      <ContainerCards>
          {users.length > 0 && <SlideShow users={users} />}
      </ContainerCards>
    </PageWrapper>
  );
};
