import { useEffect, useState } from "react";
import { Input } from "../components/Input/Input";
import { ContainerCards, PageWrapper } from "./styles";
import { fetchUsers } from "../api/api";
import { useDispatch, useSelector } from "react-redux";
import { infoBannerActions, usersActions } from "../store/store";
import SlideShow from "../components/SlideShow/SlideShow";
import { useDebounce } from "../hooks/useDebounce";
import { Banner } from "../components/Banner/Banner";
import { Loader } from "../components/Loader/Loader";

export const Home = () => {
  const dispatch = useDispatch();

  const users = useSelector((state: any) => state.users.users);
  const loading = useSelector((state: any) => state.users.loading);
  const searchQuery = useSelector((state: any) => state.users.searchQuery);

  const infoMessage = useSelector((state: any) => state.banner.info);

  const debouncedSearchTerm = useDebounce(searchQuery || 0, 600);

  const [inputError, setInputError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(usersActions.fetchUsersStart());
        const data = await fetchUsers(debouncedSearchTerm);
        dispatch(usersActions.saveUserData(data));
      } catch (error: any) {
        const errorMessage = error.message
        dispatch(infoBannerActions.setInfo(errorMessage));
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
      dispatch(infoBannerActions.clearInfo());
    } else {
      setInputError(true);
      dispatch(infoBannerActions.setInfo("Enter valid number please."));
    }
  };

  return (
    <PageWrapper>
      <p>Provide a number: </p>
      <Input onChange={handleInputChange} error={inputError.toString()} />
      {loading && <Loader />}
      {infoMessage && <Banner errorMessage={infoMessage} />}
      <ContainerCards>
        {users.length > 0 && <SlideShow users={users} />}
      </ContainerCards>
    </PageWrapper>
  );
};
