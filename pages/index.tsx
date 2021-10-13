import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import FavoriteUserList from "../components/user/FavoriteUserList";
import SearchUser from "../components/user/searchUser";
import UserDetail from "../components/user/UserDetail";
import useUserInfo from "../hooks/query/useUserInfo";

interface Props {}

const Index = (props: Props) => {
  const [userName, setUserName] = useState("");
  const { refetch } = useUserInfo(userName);

  const onSearch = () => {
    refetch();
  };

  return (
    <Container>
      <SearchUserContainer>
        <UserDetail />
        <SearchUser userName={userName} setUserName={setUserName} onSearch={onSearch} />
      </SearchUserContainer>
      <FavoriteUserContainer>
        <FavoriteUserList />
      </FavoriteUserContainer>
    </Container>
  );
};

// 이는 서버 사이드 코드이므로, useEffect 등의 훅을 사용할 수 없다.
// const getStaticProps = async () => {
//   const data = await getUser("c17an");
//   return {
//     props: {},
//   };
// };

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const SearchUserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 8;
`;

const FavoriteUserContainer = styled.div`
  flex: 2;
  height: 100%;
`;

export default Index;
